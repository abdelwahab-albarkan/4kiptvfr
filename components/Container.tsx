import type { ElementType, ReactNode } from "react";

export default function Container({
  children,
  narrow,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  narrow?: boolean;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag
      className={["container", narrow ? "container--narrow" : "", className ?? ""]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
