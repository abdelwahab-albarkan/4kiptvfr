import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

const sizeClass: Record<Size, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

function classes(variant: Variant, size: Size, block?: boolean, extra?: string) {
  return [
    "btn",
    variantClass[variant],
    sizeClass[size],
    block ? "btn-block" : "",
    extra ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
};

/** Renders a Next <Link> when `href` is set, otherwise a native <button>. */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  block,
  className,
  href,
  ...rest
}: BaseProps &
  (
    | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
  )) {
  const cls = classes(variant, size, block, className);

  if (href) {
    return (
      <Link href={href} className={cls} {...(rest as object)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
