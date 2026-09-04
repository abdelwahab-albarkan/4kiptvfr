import { FEATURES } from "@/lib/site";
import Icon, { type IconName } from "./Icon";

/** Icons paired to the 6 core features (aids comprehension, one visual language). */
const ICONS: IconName[] = ["tv", "bolt", "guide", "film", "shield", "screens"];

export default function Features({
  items = FEATURES,
}: {
  items?: { title: string; description: string }[];
}) {
  return (
    <div className="grid grid--3">
      {items.map((f, i) => (
        <article key={f.title} className="card card--hover">
          <span className="icon-chip" aria-hidden="true">
            <Icon name={ICONS[i % ICONS.length]} size={22} />
          </span>
          <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.2rem" }}>{f.title}</h3>
          <p style={{ marginTop: "var(--space-3)", fontSize: "0.975rem" }}>{f.description}</p>
        </article>
      ))}
    </div>
  );
}
