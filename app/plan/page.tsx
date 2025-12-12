import plan from "@/content/plan.json";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { MotionReveal } from "@/components/MotionReveal";
import { Section } from "@/components/Section";

export default function PlanPage() {
  return (
    <>
      <MotionReveal>
        <Section title="Getting Here" description={plan.gettingHere} />
      </MotionReveal>
      <MotionReveal>
        <Section title="Best Seasons" description={plan.bestSeasons} />
      </MotionReveal>
      <MotionReveal>
        <Section title="Accessibility" description={plan.accessibility} />
      </MotionReveal>
      <MotionReveal>
        <Section title="What to Bring">
          <ul className="space-y-2 pl-4 text-sm text-muted">
            {plan.whatToBring.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </MotionReveal>
      <MotionReveal>
        <Section title="Etiquette" description="Guidance to keep the trail quiet and respectful.">
          <FAQAccordion items={plan.etiquette} />
        </Section>
      </MotionReveal>
      <MotionReveal>
        <Section tone="surface" className="rounded-[2rem]">
          <p className="text-sm text-muted">Need help shaping your path?</p>
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
