import home from "@/content/home.json";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { MotionReveal } from "@/components/MotionReveal";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Hero headline={home.heroHeadline} subtext={home.heroSubtext} ctas={home.heroCTAs} />
      {home.supportingTagline && (
        <MotionReveal>
          <p className="mb-8 text-center text-sm uppercase tracking-[0.4em] text-muted">
            {home.supportingTagline}
          </p>
        </MotionReveal>
      )}
      <MotionReveal>
        <Section title="Highlights" description="Calm, attentive moments that let the land speak first.">
          <div className="grid gap-6 md:grid-cols-3">
            {home.highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="space-y-3 rounded-3xl border border-border bg-surface p-6 shadow-[0_20px_30px_rgba(19,38,33,0.15)]"
              >
                <h3 className="text-xl font-semibold text-forest">{highlight.title}</h3>
                <p className="text-sm text-muted">{highlight.text}</p>
              </article>
            ))}
          </div>
        </Section>
      </MotionReveal>
      {home.issue && (
        <MotionReveal>
          <Section
            title={home.issue.title}
            className="rounded-[2rem] glow-border border border-border"
            tone="default"
          >
            <div className="relative space-y-3 pl-6">
              <div className="absolute inset-y-0 left-0 w-1 rounded bg-accent" aria-hidden />
              <ul className="space-y-3 pl-4">
                {home.issue.bullets.map((bullet) => (
                  <li key={bullet} className="type-body text-muted list-disc">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </MotionReveal>
      )}
      <MotionReveal>
        <Section title={home.story.title} description={home.story.description}>
          <p className="text-base text-lake opacity-90">{home.story.details}</p>
        </Section>
      </MotionReveal>
      <MotionReveal>
        <Section
          title={home.ctaBanner.headline}
          description={home.ctaBanner.subtext}
          tone="surface"
          className="rounded-[2.5rem]"
        >
          <div className="flex flex-wrap gap-3">
            <Button href="/plan" variant="primary">
              Plan Your Visit
            </Button>
            <Button href="/contact" variant="ghost">
              Contact / Enquire
            </Button>
          </div>
        </Section>
      </MotionReveal>
    </>
  );
}
