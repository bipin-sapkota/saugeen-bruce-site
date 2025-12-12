import about from "@/content/about.json";
import { Button } from "@/components/Button";
import { MotionReveal } from "@/components/MotionReveal";
import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <>
      <MotionReveal>
        <Section title="Mission" description={about.mission} />
      </MotionReveal>
      <MotionReveal>
        <Section title="Governance" description={about.governance} />
      </MotionReveal>
      <MotionReveal>
        <Section title="Partners" description={about.partners} />
      </MotionReveal>
      <MotionReveal>
        <Section title="Acknowledgements" description={about.acknowledgements} />
      </MotionReveal>
      {about.stakeholders && (
        <MotionReveal>
          <Section title="Stakeholders" density="compact">
            <div className="grid gap-6 md:grid-cols-2">
              {about.stakeholders.map((stakeholder) => (
                <article
                  key={stakeholder.name}
                  className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-[0_12px_30px_rgba(15,31,27,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,31,27,0.2)]"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-muted">Stakeholder</p>
                  <h3 className="type-h3 text-text">{stakeholder.name}</h3>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted opacity-75">Role</p>
                  <p className="type-body text-muted">{stakeholder.role}</p>
                </article>
              ))}
            </div>
          </Section>
        </MotionReveal>
      )}
      <MotionReveal>
        <Section tone="surface" className="rounded-[2rem]">
          <div className="space-y-4">
            <p className="text-sm text-muted">We welcome you to join the Nokomis Trail in listening and care.</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/plan" variant="primary">
                Plan Your Visit
              </Button>
              <Button href="/contact" variant="ghost">
                Contact / Enquire
              </Button>
            </div>
          </div>
        </Section>
      </MotionReveal>
    </>
  );
}
