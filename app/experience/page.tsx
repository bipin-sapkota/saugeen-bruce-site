import experience from "@/content/experience.json";
import { Button } from "@/components/Button";
import { MotionReveal } from "@/components/MotionReveal";
import { Section } from "@/components/Section";
import { StoryStationList } from "@/components/StoryStationList";
import { Timeline } from "@/components/Timeline";

const phases = [
  {
    title: "Foundations",
    description: "Orientation at the Welcome Circle, learning how to listen to the land and one another.",
  },
  {
    title: "Launch",
    description: "Steady steps along cedar, stone, and sand, punctuated by story stations and guided pauses.",
  },
  {
    title: "Growth",
    description: "A closing gathering to share reflections, gratitude, and care for what remains protected.",
  },
];

function isMeaningfulHours(value?: string) {
  if (!value) return false;
  const v = value.trim().toLowerCase();
  return v.length > 0 && v !== "tbc" && v !== "to be confirmed" && v !== "to be confirmed during launch.";
}

export default function ExperiencePage() {
  return (
    <>
      <MotionReveal>
        <Section
          eyebrow="Experience"
          title="Nokomis Trail Experience"
          description={experience.overview}
        />
      </MotionReveal>

      <MotionReveal>
        <Section
          title="Story Stations"
          description="Interpretive stops that pair signage with SON-approved narration."
          density="compact"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
            <p className="type-body text-muted">{experience.storyStationsNote}</p>
          </div>

          <div className="badge-pill">Examples</div>

          <StoryStationList stations={experience.storyStations} />
        </Section>
      </MotionReveal>

      <MotionReveal>
        <Section title={experience.gatheringSpace.title} description="An amphitheatre-like circle for storytelling and calm pauses.">
          <p className="type-body text-muted">{experience.gatheringSpace.description}</p>
        </Section>
      </MotionReveal>

      <MotionReveal>
        <Section title={experience.welcomeCentre.title} description={experience.welcomeCentre.description}>
          <div className="space-y-3">
            <p className="type-body text-muted">{experience.welcomeCentre.details}</p>
            {isMeaningfulHours(experience.welcomeCentre.hours) && (
              <p className="text-xs tracking-[0.4em] text-muted uppercase">Hours: {experience.welcomeCentre.hours}</p>
            )}
          </div>
        </Section>
      </MotionReveal>

      <MotionReveal>
        <Section title="Trail Details" description="Key facts for planning and pacing." density="compact">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experience.trailFacts.map((fact) => (
              <article
                key={fact.label}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-soft"
              >
                <p className="text-xs tracking-[0.4em] text-muted uppercase">{fact.label}</p>
                <p className="text-2xl font-semibold text-text">{fact.value}</p>
                <div className="h-px w-full bg-border/70" />
                <p className="text-sm text-muted">
                  {fact.label === "Length"
                    ? "Interpretive loop designed for slow movement."
                    : fact.label === "Group Size"
                      ? "Small groups to reduce impact and keep space respectful."
                      : "Proposed detail for the visitor journey."}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </MotionReveal>

      <MotionReveal>
        <Section
          title="Phases"
          description="A phased rollout to support low-impact delivery."
          density="compact"
        >
          <Timeline phases={phases} />
        </Section>
      </MotionReveal>

      <MotionReveal>
        <Section tone="surface" className="rounded-[2rem]" divider>
          <div className="space-y-5">
            <p className="text-xs tracking-[0.4em] text-muted uppercase">Next step</p>
            <h2 className="type-h2 text-text">Ready to plan a respectful visit?</h2>
            <p className="type-body text-muted">
              Use the planning guide for timing, accessibility notes, and expectations for quiet presence.
            </p>
          </div>
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
