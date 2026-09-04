/**
 * IndexNow Fast Indexing Protocol for 4kiptvfr.com
 * 
 * Submits new and updated URLs to search engines supporting the IndexNow protocol
 * (Microsoft Bing, Yandex, Seznam.cz, Naver, Yep, etc.).
 * 
 * Note on IndexNow protocol:
 * Any submission to api.indexnow.org or bing.com automatically distributes across
 * all participating search engines. Redundant parallel submissions to every engine
 * are unnecessary and risk rate-limiting (HTTP 429). This script uses api.indexnow.org
 * as primary with automatic fallback to bing.com.
 *
 * Usage:
 *   node index-now.js                       # Submits all URLs from sitemap
 *   node index-now.js --dry-run             # Tests sitemap parsing & payload without sending
 *   node index-now.js https://4kiptvfr.com/url1 https://4kiptvfr.com/url2
 *   node index-now.js --sitemap <path_or_url>
 */

const fs = require('fs');
const path = require('path');

// CONFIGURATION
const HOST = process.env.INDEXNOW_HOST || '4kiptvfr.com';
const SITE_URL = process.env.INDEXNOW_SITE_URL || `https://${HOST}`;
const SITEMAP_URL = process.env.INDEXNOW_SITEMAP_URL || `${SITE_URL}/sitemap.xml`;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '6e5c8d29852bee18955e6bae8613f2bd';
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const BATCH_SIZE = 1000; // IndexNow allows up to 10,000 URLs per request

// ENDPOINTS
// Submitting to api.indexnow.org distributes to Bing, Yandex, Seznam, Naver, etc.
const PRIMARY_ENDPOINT = 'https://api.indexnow.org/indexnow';
const FALLBACK_ENDPOINT = 'https://www.bing.com/indexnow';

/**
 * Validates the local verification file in /public/
 */
function verifyLocalKeyFile() {
    const keyFilePath = path.join(__dirname, 'public', `${INDEXNOW_KEY}.txt`);
    if (!fs.existsSync(keyFilePath)) {
        console.warn(`⚠️ Warning: Key file not found at ${keyFilePath}`);
        console.warn(`   Make sure ${INDEXNOW_KEY}.txt exists in your Next.js public/ directory.`);
        return false;
    }

    const content = fs.readFileSync(keyFilePath, 'utf8').trim();
    if (content !== INDEXNOW_KEY) {
        console.warn(`⚠️ Warning: Content inside ${keyFilePath} does not match INDEXNOW_KEY!`);
        console.warn(`   Expected: ${INDEXNOW_KEY}`);
        console.warn(`   Found:    ${content}`);
        return false;
    }

    console.log(`🔑 Verification file verified: public/${INDEXNOW_KEY}.txt (matches key)`);
    return true;
}

/**
 * Parses XML sitemap text and extracts <loc> tags using regex (dependency-free)
 */
function extractLocUrlsFromXml(xmlText) {
    const locRegex = /<loc>(.*?)<\/loc>/gi;
    const urls = [];
    let match;

    while ((match = locRegex.exec(xmlText)) !== null) {
        let url = match[1].trim();
        // Decode basic XML entities
        url = url.replace(/&amp;/g, '&')
                 .replace(/&lt;/g, '<')
                 .replace(/&gt;/g, '>')
                 .replace(/&apos;/g, "'")
                 .replace(/&quot;/g, '"');
        urls.push(url);
    }

    return urls;
}

/**
 * Fetches and parses URLs from the remote sitemap or local build fallback
 */
async function getSitemapUrls(customSitemapPathOrUrl) {
    const targetSource = customSitemapPathOrUrl || SITEMAP_URL;

    // Check if it's a local file path
    if (fs.existsSync(targetSource)) {
        console.log(`📁 Reading local sitemap file: ${targetSource}`);
        const data = fs.readFileSync(targetSource, 'utf8');
        const urls = extractLocUrlsFromXml(data);
        if (urls.length === 0) {
            throw new Error(`No <loc> URLs found in local sitemap file: ${targetSource}`);
        }
        return urls;
    }

    // Otherwise fetch over HTTP/HTTPS
    console.log(`📡 Fetching sitemap from: ${targetSource}`);
    try {
        const response = await fetch(targetSource, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; IndexNowBot/1.0; +https://www.indexnow.org/)',
                'Accept': 'application/xml, text/xml, */*'
            },
            signal: AbortSignal.timeout(10000)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} (${response.statusText})`);
        }

        const data = await response.text();
        const urls = extractLocUrlsFromXml(data);

        if (urls.length === 0) {
            throw new Error('No <loc> tags found in sitemap XML response');
        }

        return urls;
    } catch (error) {
        // If remote fetch fails (e.g. domain not yet pointed or offline), check for local Next.js build sitemap
        const localNextSitemap = path.join(__dirname, '.next', 'server', 'app', 'sitemap.xml.body');
        if (!customSitemapPathOrUrl && fs.existsSync(localNextSitemap)) {
            console.warn(`⚠️ Remote sitemap fetch failed (${error.message}).`);
            console.log(`🔄 Falling back to local Next.js build sitemap: ${localNextSitemap}`);
            const data = fs.readFileSync(localNextSitemap, 'utf8');
            const urls = extractLocUrlsFromXml(data);
            if (urls.length > 0) {
                return urls;
            }
        }
        throw new Error(`Failed to fetch sitemap from ${targetSource}: ${error.message}`);
    }
}

/**
 * Normalizes and validates URLs against the target host
 */
function normalizeAndFilterUrls(rawUrls) {
    const uniqueUrls = new Set();
    const rejectedUrls = [];

    for (const raw of rawUrls) {
        if (!raw || typeof raw !== 'string') continue;
        let urlStr = raw.trim();

        // Support passing pathnames (e.g. /abonnement)
        if (urlStr.startsWith('/')) {
            urlStr = `${SITE_URL}${urlStr}`;
        }

        try {
            const parsed = new URL(urlStr);
            if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
                rejectedUrls.push({ url: urlStr, reason: 'Invalid protocol' });
                continue;
            }

            // Verify hostname matches (with or without www normalization)
            const parsedHost = parsed.hostname.toLowerCase();
            const expectedHost = HOST.toLowerCase();
            if (parsedHost !== expectedHost && parsedHost !== `www.${expectedHost}` && `www.${parsedHost}` !== expectedHost) {
                rejectedUrls.push({ url: urlStr, reason: `Host mismatch (${parsed.hostname} != ${HOST})` });
                continue;
            }

            // Add normalized URL without trailing fragment
            parsed.hash = '';
            uniqueUrls.add(parsed.toString());
        } catch {
            rejectedUrls.push({ url: urlStr, reason: 'Malformed URL' });
        }
    }

    if (rejectedUrls.length > 0) {
        console.warn(`⚠️ Filtered out ${rejectedUrls.length} invalid/external URL(s):`);
        rejectedUrls.slice(0, 5).forEach(r => console.warn(`   - ${r.url} (${r.reason})`));
        if (rejectedUrls.length > 5) console.warn(`   ... and ${rejectedUrls.length - 5} more.`);
    }

    return Array.from(uniqueUrls);
}

/**
 * Submits a batch of URLs to an IndexNow endpoint
 */
async function submitBatch(endpoint, batch, dryRun = false) {
    const payload = {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: batch
    };

    if (dryRun) {
        console.log(`🔍 [DRY RUN] Would submit ${batch.length} URLs to: ${endpoint}`);
        console.log(`📋 Sample payload:`);
        console.log(JSON.stringify({
            ...payload,
            urlList: batch.slice(0, 3).concat(batch.length > 3 ? [`... and ${batch.length - 3} more`] : [])
        }, null, 2));
        return { success: true, status: 200, dryRun: true };
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Host': new URL(endpoint).hostname
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000)
    });

    const responseText = await response.text().catch(() => '');

    switch (response.status) {
        case 200:
            console.log(`✅ Success (200 OK): Batch of ${batch.length} URLs submitted to ${endpoint}`);
            return { success: true, status: 200 };
        case 202:
            console.log(`✅ Accepted (202 Accepted): Batch received by ${endpoint} (key pending verification or queued)`);
            return { success: true, status: 202 };
        case 400:
            console.error(`❌ Bad Request (400): Invalid format or payload at ${endpoint}. Details: ${responseText}`);
            return { success: false, status: 400, error: responseText };
        case 403:
            console.error(`❌ Forbidden (403): Key not valid or key file unreachable at ${KEY_LOCATION}. Details: ${responseText}`);
            return { success: false, status: 403, error: responseText };
        case 422:
            console.error(`❌ Unprocessable Entity (422): URLs do not match host ${HOST}. Details: ${responseText}`);
            return { success: false, status: 422, error: responseText };
        case 429:
            console.warn(`⚠️ Rate Limited (429): Too many requests to ${endpoint}.`);
            return { success: false, status: 429, error: responseText };
        default:
            console.error(`⚠️ Warning: ${endpoint} returned status ${response.status}. Details: ${responseText}`);
            return { success: false, status: response.status, error: responseText };
    }
}

/**
 * Submits URLs in batches to IndexNow with automatic fallback
 */
async function submitToIndexNow(urls, dryRun = false) {
    const totalBatches = Math.ceil(urls.length / BATCH_SIZE);
    console.log(`\n🚀 Starting IndexNow submission for ${urls.length} URL(s) in ${totalBatches} batch(es)...`);
    console.log(`🎯 Primary endpoint:  ${PRIMARY_ENDPOINT}`);
    console.log(`🔄 Fallback endpoint: ${FALLBACK_ENDPOINT}`);

    let totalSubmitted = 0;
    let failedBatches = 0;

    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
        const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
        const batch = urls.slice(i, i + BATCH_SIZE);
        console.log(`\n📦 Submitting batch ${batchNumber}/${totalBatches} (${batch.length} URLs)...`);

        let result = await submitBatch(PRIMARY_ENDPOINT, batch, dryRun).catch(err => ({
            success: false,
            error: err.message
        }));

        // If primary fails and we are not in dry-run, try the fallback endpoint
        if (!result.success && !dryRun) {
            console.warn(`⚠️ Primary endpoint failed. Trying fallback endpoint: ${FALLBACK_ENDPOINT}`);
            result = await submitBatch(FALLBACK_ENDPOINT, batch, dryRun).catch(err => ({
                success: false,
                error: err.message
            }));
        }

        if (result.success) {
            totalSubmitted += batch.length;
        } else {
            failedBatches++;
        }
    }

    console.log(`\n🏁 Submission Summary:`);
    console.log(`   - Total URLs processed: ${urls.length}`);
    console.log(`   - Successful URLs:      ${totalSubmitted}`);
    console.log(`   - Failed batches:       ${failedBatches}`);
}

// MAIN EXECUTION
(async () => {
    try {
        console.log('⚡ IndexNow Protocol CLI — 4kiptvfr.com');
        console.log(`🌐 Target Host:    ${HOST}`);
        console.log(`🔑 Key Location:   ${KEY_LOCATION}`);

        // Parse CLI arguments
        const args = process.argv.slice(2);
        const dryRun = args.includes('--dry-run') || args.includes('-d');
        const sitemapIdx = args.findIndex(a => a === '--sitemap' || a === '-s');
        const customSitemap = sitemapIdx !== -1 && args[sitemapIdx + 1] ? args[sitemapIdx + 1] : null;

        const limitIdx = args.findIndex(a => a === '--limit' || a === '-l');
        const limit = limitIdx !== -1 && args[limitIdx + 1] ? parseInt(args[limitIdx + 1], 10) : null;

        // Verify local key file exists
        verifyLocalKeyFile();

        // 1. Determine URLs to submit
        let rawUrls = [];
        const specificUrls = args.filter(arg => !arg.startsWith('-') && (arg.startsWith('http') || arg.startsWith('/')));

        if (specificUrls.length > 0) {
            console.log(`\n🎯 ${specificUrls.length} specific URL(s) provided via CLI arguments.`);
            rawUrls = specificUrls;
        } else {
            console.log(`\n🔍 Fetching URLs from sitemap...`);
            rawUrls = await getSitemapUrls(customSitemap);
            console.log(`📄 Discovered ${rawUrls.length} raw URL(s) in sitemap.`);
        }

        // 2. Filter, normalize, deduplicate
        let cleanedUrls = normalizeAndFilterUrls(rawUrls);

        if (limit && limit > 0) {
            console.log(`🔢 Applying limit: submitting first ${limit} URL(s) only.`);
            cleanedUrls = cleanedUrls.slice(0, limit);
        }

        if (cleanedUrls.length === 0) {
            console.log('⚠️ No valid URLs found to submit. Exiting.');
            return;
        }

        console.log(`✨ ${cleanedUrls.length} unique, verified URL(s) ready for IndexNow submission.`);

        if (dryRun) {
            console.log('\n🔒 DRY RUN MODE ENABLED — No requests will be transmitted to search engines.');
        }

        // 3. Submit
        await submitToIndexNow(cleanedUrls, dryRun);

        if (dryRun) {
            console.log('\n✅ Dry run completed successfully! You can run without --dry-run when ready to submit.');
        } else {
            console.log('\n✨ All Done! Participating IndexNow search engines (Bing, Yandex, Seznam, Naver) have been notified.');
        }

    } catch (error) {
        console.error('\n🔥 Fatal Error:', error.message);
        process.exit(1);
    }
})();
