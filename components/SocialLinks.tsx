import { SITE, type SocialPlatform } from "@/lib/site";
import Icon, { type IconName } from "./Icon";
import styles from "./SocialLinks.module.css";

interface PlatformMeta {
  id: SocialPlatform;
  label: string;
  ariaLabel: string;
  icon: IconName;
}

const PLATFORMS: PlatformMeta[] = [
  {
    id: "facebook",
    label: "Facebook",
    ariaLabel: "Suivez-nous sur Facebook",
    icon: "facebook",
  },
  {
    id: "instagram",
    label: "Instagram",
    ariaLabel: "Suivez-nous sur Instagram",
    icon: "instagram",
  },
  {
    id: "tiktok",
    label: "TikTok",
    ariaLabel: "Suivez-nous sur TikTok",
    icon: "tiktok",
  },
  {
    id: "youtube",
    label: "YouTube",
    ariaLabel: "Suivez-nous sur YouTube",
    icon: "youtube",
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    ariaLabel: "Suivez-nous sur X (Twitter)",
    icon: "twitter",
  },
  {
    id: "telegram",
    label: "Telegram",
    ariaLabel: "Rejoignez notre communauté sur Telegram",
    icon: "telegram",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    ariaLabel: "Contactez-nous sur WhatsApp",
    icon: "whatsapp",
  },
];

export interface SocialLinksProps {
  /** Override or provide custom social links (defaults to SITE.socialLinks). */
  links?: Partial<Record<SocialPlatform, string>>;
  /** Section title (defaults to "Suivez-nous"). */
  title?: string;
  /** Whether to show the heading above the icon row. Defaults to true. */
  showTitle?: boolean;
  /** Optional container class name. */
  className?: string;
}

/**
 * Reusable SocialLinks component.
 * Renders social media profile links with accessible aria-labels and SVG icons.
 * Unconfigured/empty URLs are never rendered. If no URLs are configured, returns null.
 */
export default function SocialLinks({
  links = SITE.socialLinks,
  title = "Suivez-nous",
  showTitle = true,
  className,
}: SocialLinksProps) {
  // Filter only platforms with non-empty, trimmed URLs
  const activePlatforms = PLATFORMS.map((platform) => {
    const rawUrl = links[platform.id];
    const url = typeof rawUrl === "string" ? rawUrl.trim() : "";
    return { ...platform, url };
  }).filter((platform) => platform.url.length > 0);

  // If no social links are configured, do not render anything
  if (activePlatforms.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.socialArea} ${className || ""}`.trim()}>
      {showTitle && title && <p className={styles.title}>{title}</p>}
      <ul className={styles.list} aria-label={title}>
        {activePlatforms.map((p) => (
          <li key={p.id} className={styles.item}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.ariaLabel}
              data-platform={p.id}
              className={styles.link}
            >
              <Icon name={p.icon} size={20} className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
