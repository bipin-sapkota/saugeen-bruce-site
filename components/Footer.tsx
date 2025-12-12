import Link from "next/link";

export function Footer({
  nav,
  disclaimer,
  social,
}: {
  nav: { label: string; href: string }[];
  disclaimer: string;
  social: { label: string; href: string }[];
}) {
  return (
    <footer className="border-t border-white/10 bg-black/80 px-6 py-10 text-sm text-white/70 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="max-w-4xl text-xs text-white/50">{disclaimer}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
          {social.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Saugeen Bruce</p>
      </div>
    </footer>
  );
}
