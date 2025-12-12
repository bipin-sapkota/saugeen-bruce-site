import sustainability from "@/content/sustainability.json";
import { Button } from "@/components/Button";
import { MotionReveal } from "@/components/MotionReveal";
import { Section } from "@/components/Section";

export default function SustainabilityPage() {
  return (
    <>
      <MotionReveal>
        <Section title="Guiding Principles" description="How we approach every trail moment.">
          <div className="grid gap-6 md:grid-cols-3">
            {sustainability.principles.map((principle) => (
              <article
                key={principle.title}
                className="space-y-2 rounded-3xl border border-border bg-surface p-6"
              >
                <h3 className="text-xl font-semibold text-text">{principle.title}</h3>
                <p className="text-sm text-muted">{principle.description}</p>
              </article>
            ))}
          </div>
        </Section>
      </MotionReveal>
      <MotionReveal>
        <Section title="Current Practices">
          <div className="grid gap-6 md:grid-cols-3">
            {sustainability.practices.map((practice) => (
              <article
                key={practice.title}
                className="space-y-2 rounded-3xl border border-border bg-surface p-6"
              >
                <h3 className="text-xl font-semibold text-text">{practice.title}</h3>
                <p className="text-sm text-muted">{practice.details}</p>
              </article>
            ))}
          </div>
        </Section>
      </MotionReveal>
      {sustainability.culturalProtocols && (
        <MotionReveal>
          <Section title={sustainability.culturalProtocols.title} tone="muted">
            <div className="space-y-3">
              {sustainability.culturalProtocols.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 h-4 w-4">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-dark)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 12s1.5-4 6-4 6 4 6 4-1.5 4-6 4-6-4-6-4z" />
                      <path d="M12 8v8" />
                    </svg>
                  </span>
                  <p className="type-body text-muted">{bullet}</p>
                </div>
              ))}
            </div>
          </Section>
        </MotionReveal>
      )}
      <MotionReveal>
        <Section tone="surface" className="rounded-[2rem]">
          <p className="text-sm text-muted">Connect with the Nokomis team to learn more.</p>
          <div className="mt-4 flex flex-wrap gap-3">
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
