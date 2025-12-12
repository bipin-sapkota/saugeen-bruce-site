"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Container } from "./Container";

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  brandName: string;
  nav: NavItem[];
  primaryCTA: { label: string; href: string };
};

export function Header({ brandName, nav, primaryCTA }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur-3xl">
      <Container className="flex items-center justify-between gap-6 py-4 flex-wrap sm:flex-nowrap">
        <Link
          href="/"
          className="font-display flex items-center gap-2 text-lg font-semibold tracking-[0.3em] text-[var(--text)]"
        >
          <span className="text-base text-accent">●</span>
          <span className="whitespace-nowrap">{brandName}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.35em] sm:flex sm:ml-8 sm:flex-nowrap">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 pb-1 transition whitespace-nowrap ${
                  isActive
                    ? "border-b-2 border-accent text-accent-dark"
                    : "text-muted hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Button variant="ghost" href={primaryCTA.href} className="whitespace-nowrap">
            {primaryCTA.label}
          </Button>
        </div>
        <button
          className="sm:hidden"
          onClick={() => setIsOpen((state) => !state)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-[var(--text)]" />
          <span className="mt-1 block h-0.5 w-6 bg-[var(--text)]" />
          <span className="mt-1 block h-0.5 w-6 bg-[var(--text)]" />
        </button>
      </Container>
      {isOpen && (
        <div className="sm:hidden border-t border-border bg-surface px-4 py-4 text-sm">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[var(--text)] transition ${
                  pathname === item.href ? "text-accent-dark font-semibold" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={primaryCTA.href}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-[var(--text)]"
            >
              {primaryCTA.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
