import contact from "@/content/contact.json";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { MotionReveal } from "@/components/MotionReveal";
import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <>
      <MotionReveal>
        <Section title="Connect">
          <ContactForm copy={contact.formCopy} />
        </Section>
      </MotionReveal>
      <MotionReveal>
        <Section title="Other ways to reach us">
          <div className="space-y-4">
            {contact.contactOptions.map((option) => (
              <article
                key={option.type}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-muted">{option.type}</p>
                <p className="text-lg font-semibold text-text">
                  <a href={`mailto:${option.detail}`} className="underline-offset-2 hover:underline">
                    {option.detail}
                  </a>
                </p>
                <p className="text-sm text-muted">{option.note}</p>
              </article>
            ))}
          </div>
        </Section>
      </MotionReveal>
      <MotionReveal>
        <Section tone="surface" className="rounded-[2rem]">
          <p className="text-sm text-muted">Still have questions about Nokomis Trail?</p>
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
