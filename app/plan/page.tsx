import plan from "@/content/plan.json";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { MotionReveal } from "@/components/MotionReveal";
import { Section } from "@/components/Section";
import Image from "next/image";

export default function PlanPage() {
  return (
    <>
      <MotionReveal>
  <Section title="The Journey at a Glance">
    <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start">
      {/* Text */}
      <div className="lg:col-span-5 space-y-4">
        <p className="type-body text-muted">
          This map outlines the full experience corridor along the Saugeen–Bruce Peninsula, following the
          Bruce Trail from Tobermory in the north to Sauble Beach in the south. It situates key gathering
          points, trails, and landmarks between Georgian Bay and Lake Huron, within the Saugeen Ojibway
          Nation Territories. The journey is designed as a continuous north–south flow, allowing visitors
          to move through natural, cultural, and communal spaces at a considered pace.
        </p>
      </div>

      {/* Image */}
      <div className="lg:col-span-7">
        <figure className="rounded-3xl border border-border bg-surface p-4 shadow-soft lg:p-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-background/30">
            <Image
              src="/images/our-plan.jpeg"
              alt="Map showing the Bruce Trail route across the Saugeen–Bruce Peninsula with key landmarks and gathering points."
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-contain p-2"
              priority
            />
          </div>

          <figcaption className="mt-3 text-xs leading-relaxed text-muted">
            Illustrated overview of the Saugeen–Bruce Peninsula journey (Bruce Trail route, national park lands,
            scenic lookouts, welcome centres, and gathering spaces).
          </figcaption>
        </figure>
      </div>
    </div>
  </Section>
</MotionReveal>
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
