import type { ElementType, ReactNode } from "react";

export default function Card({
  children,
  hover,
  soft,
  as: Tag = "div",
  className,
  style,
}: {
  children: ReactNode;
  hover?: boolean;
  soft?: boolean;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cls = ["card", hover ? "card--hover" : "", soft ? "card--soft" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag className={cls} style={style}>
      {children}
    </Tag>
  );
}
