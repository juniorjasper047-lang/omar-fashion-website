import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "gold",
  className,
  onClick,
  type = "button",
}: Props) {
  const cls = cn(variant === "gold" ? "btn-gold" : "btn-outline", className);
  const external = href?.startsWith("http") || href?.startsWith("wa.me") || href?.startsWith("#");

  if (!href) {
    return (
      <button type={type} onClick={onClick} className={cls}>
        {children}
      </button>
    );
  }
  if (external) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={cls}>
      {children}
    </Link>
  );
}
