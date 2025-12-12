import toursData from "@/content/tours.json";
import { Button } from "@/components/Button";
import { MotionReveal } from "@/components/MotionReveal";
import { Section } from "@/components/Section";

export default function ToursPage() {
  return (
    <>
      <MotionReveal>
        <Section
          title="Tours & Experiences"
          description="Small-group offerings that rotate through marsh, forest, and limestone edges."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {toursData.tours.map((tour) => (
              <article
                key={tour.title}
                className="space-y-3 rounded-3xl border border-border bg-surface p-6 text-sm shadow-[0_20px_30px_rgba(17,30,26,0.2)]"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-muted">{tour.duration}</p>
                <h3 className="text-2xl font-semibold text-text">{tour.title}</h3>
                <p className="text-muted">{tour.note}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-muted opacity-80">Guided reflection included</p>
              </article>
            ))}
          </div>
        </Section>
      </MotionReveal>
      <MotionReveal>
        <Section title="Workshops" description="Hands-on, seated conversations centered on listening to landscape cues.">
          <div className="grid gap-6 md:grid-cols-2">
            {toursData.workshops.map((workshop) => (
              <article
                key={workshop.title}
                className="space-y-2 rounded-2xl border soft-border-lake bg-surface p-5"
              >
                <h3 className="text-xl font-semibold text-text">{workshop.title}</h3>
                <p className="text-sm text-muted">{workshop.focus}</p>
              </article>
            ))}
          </div>
        </Section>
      </MotionReveal>
      <MotionReveal>
        <Section tone="surface" className="rounded-[2rem]">
          <p className="text-sm text-muted">Custom groups welcome—please share timing and interests.</p>
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
