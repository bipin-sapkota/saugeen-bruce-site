"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

const variantStyles: Record<string, string> = {
  primary:
    "bg-accent-dark text-white shadow-[0_20px_40px_rgba(14,35,30,0.35)] hover:bg-[#0f2c1f]",
  secondary:
    "border border-accent text-accent hover:bg-surface-soft focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-forest",
  ghost:
    "border border-accent text-accent font-semibold shadow-sm shadow-transparent hover:shadow-[0_8px_24px_rgba(110,166,154,0.25)] hover:border-accent hover:text-accent",
};

export type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-forest";
  const classes = `${base} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
