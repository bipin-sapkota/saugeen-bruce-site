import Image from "next/image";
import { Button } from "./Button";

export type HeroCTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function Hero({
  headline,
  subtext,
  ctas,
}: {
  headline: string;
  subtext: string;
  ctas: HeroCTA[];
}) {
  return (
    <section className="relative mb-12 w-full overflow-hidden rounded-[2.5rem] border border-border bg-accent-dark shadow-[0_25px_60px_rgba(15,25,21,0.45)]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gradient.svg"
          alt="Nokomis Trail canvas"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>
      <div className="relative z-10 flex min-h-[460px] flex-col justify-center gap-6 px-6 py-16 text-white sm:px-12 sm:py-20">
        <p className="text-[0.65rem] uppercase tracking-[0.45em] text-white/80">
          Nokomis (Grandmother) Trail
        </p>
        <h1 className="max-w-2xl type-h1 font-display text-white">
          {headline}
        </h1>
        <p className="max-w-3xl type-body-lg text-white/85">
          {subtext}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {ctas.map((cta) => (
            <Button key={cta.label} href={cta.href} variant={cta.variant ?? "primary"}>
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
