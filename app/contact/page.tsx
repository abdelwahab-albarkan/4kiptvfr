import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildMetadata } from "@/lib/seo";
import { SITE, waLink } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact & support",
  description:
    "Contactez l'équipe 4kiptvfr.com. Support français par e-mail et WhatsApp, réponse rapide 7j/7. Une question avant de vous abonner ? Écrivez-nous.",
  path: "/contact",
  keywords: ["iptv france contact", "iptv france support", "iptv service client"],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Une question ? <span className="accent">Parlons-en</span></>}
        lead="Notre équipe support, en français, vous répond rapidement par e-mail ou WhatsApp, 7 jours sur 7."
        breadcrumb={[{ label: "Contact" }]}
      />

      <Section>
        <div className="grid grid--3">
          <div className="card">
            <span className="icon-chip" aria-hidden="true"><Icon name="mail" /></span>
            <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.1rem" }}>Écrivez-nous</h3>
            <a href={`mailto:${SITE.supportEmail}`} className="link" style={{ marginTop: "var(--space-2)", display: "inline-block" }}>
              {SITE.supportEmail}
            </a>
          </div>
          <div className="card">
            <span className="icon-chip" aria-hidden="true"><Icon name="chat" /></span>
            <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.1rem" }}>Support instantané</h3>
            <p style={{ marginTop: "var(--space-2)", fontSize: "0.95rem" }}>Assistance rapide pour l'installation et la commande, par WhatsApp.</p>
            <a
              href={waLink("Bonjour, j'ai une question pour le support 4kiptvfr.com.")}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              style={{ marginTop: "var(--space-3)", display: "inline-flex", alignItems: "center", gap: 8 }}
              aria-label="Nous contacter sur WhatsApp"
            >
              <WhatsAppIcon size={18} /> Discuter sur WhatsApp
            </a>
          </div>
          <div className="card">
            <span className="icon-chip" aria-hidden="true"><Icon name="clock" /></span>
            <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.1rem" }}>Disponible 7j/7</h3>
            <p style={{ marginTop: "var(--space-2)", fontSize: "0.95rem" }}>Réponse généralement en quelques minutes en journée.</p>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-10)" }}>
          <SectionHeading eyebrow="Formulaire" title="Envoyez-nous un message" />
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
