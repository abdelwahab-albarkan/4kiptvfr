import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LinkCard from "@/components/LinkCard";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { PROBLEM_LIST } from "@/lib/problemes";

const PROBLEMS = [
  { q: "L'IPTV ne fonctionne pas du tout", a: "Vérifiez d'abord votre connexion internet, puis l'exactitude de vos identifiants (URL, identifiant, mot de passe) saisis sans espace. Redémarrez l'application et l'appareil. Si rien ne s'affiche, assurez-vous que votre abonnement est actif." },
  { q: "L'image se fige ou met en mémoire tampon (buffering)", a: "Le buffering vient presque toujours du réseau. Privilégiez une connexion Ethernet, rapprochez-vous de la box en Wi-Fi, fermez les autres appareils gourmands et réduisez le buffer dans les réglages du lecteur. La 4K demande une connexion stable." },
  { q: "Quel débit internet faut-il ?", a: "Comptez environ 10 à 15 Mb/s pour du Full HD et au moins 25 Mb/s pour un flux 4K stable. En dessous, privilégiez la qualité HD dans l'application." },
  { q: "Erreur 403 ou 404", a: "Une erreur 403 signale un accès refusé (identifiants ou abonnement à vérifier), une 404 un flux introuvable (lien mal saisi ou expiré). Recopiez soigneusement vos accès depuis l'e-mail de confirmation." },
  { q: "Écran noir sur une chaîne", a: "Un écran noir concerne souvent une chaîne précise : essayez-en une autre. Si tout est noir, il s'agit généralement d'un problème de connexion ou de codec ; redémarrez le lecteur et l'appareil." },
  { q: "Pas de son sur certaines chaînes", a: "Réglez la sortie audio de votre téléviseur sur PCM plutôt que Bitstream : certains flux utilisent un codec audio non pris en charge en Bitstream." },
  { q: "Mon compte a expiré", a: "Votre abonnement est arrivé à échéance. Renouvelez-le pour réactiver vos accès ; vos réglages d'application sont conservés." },
  { q: "Serveur indisponible", a: "Ce message est généralement temporaire. Patientez quelques minutes, redémarrez l'application, puis contactez le support si le problème persiste." },
];

export const metadata = buildMetadata({
  title: "Dépannage IPTV : coupures, buffering, erreurs, écran noir",
  description:
    "Guide de dépannage IPTV : résoudre le buffering, les coupures, les erreurs 403/404, l'écran noir, l'absence de son ou un compte expiré. Solutions pas à pas.",
  path: "/problemes",
  keywords: ["iptv ne fonctionne pas", "iptv buffering", "iptv coupure", "iptv erreur 403", "iptv ecran noir"],
});

export default function ProblemesPage() {
  return (
    <>
      <JsonLd data={faqSchema(PROBLEMS)} />
      <PageHeader
        eyebrow="Dépannage"
        title={<>Résoudre les <span className="accent">problèmes</span> courants</>}
        lead="La plupart des soucis IPTV se règlent en quelques minutes. Voici les causes fréquentes et leurs solutions, du buffering aux messages d'erreur."
        breadcrumb={[{ label: "Dépannage" }]}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            Avant tout, un réflexe résout une grande partie des problèmes : vérifier sa connexion internet et redémarrer
            l'application puis l'appareil. Si cela ne suffit pas, identifiez votre symptôme ci-dessous.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Diagnostics détaillés" title="Guides de dépannage par problème" />
        <div className="grid grid--3">
          {PROBLEM_LIST.map((p) => (
            <LinkCard key={p.slug} href={`/problemes/${p.slug}`} title={p.name} description={p.lead} meta="Voir le guide" />
          ))}
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Réponses rapides" title="Trouvez votre problème" center />
        <FAQ items={PROBLEMS} />
        <p style={{ textAlign: "center", marginTop: "var(--space-6)" }}>
          Toujours bloqué ? <Link href="/contact" className="link">Contactez notre support</Link> — nous répondons rapidement en français.
        </p>
      </Section>

      <CTA
        title="Un problème persistant ?"
        lead="Notre équipe support vous accompagne par e-mail ou WhatsApp pour résoudre votre souci rapidement."
        primary={SECONDARY_CTA}
        secondary={PRIMARY_CTA}
      />
    </>
  );
}
