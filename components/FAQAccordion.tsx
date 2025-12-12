"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-border bg-surface p-4 shadow-[0_10px_25px_rgba(20,34,30,0.12)]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between text-left text-sm font-semibold text-text"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span className="text-xs tracking-[0.4em] text-muted">{isOpen ? "—" : "+"}</span>
            </button>
            {isOpen && (
              <p className="mt-3 text-base text-muted leading-relaxed">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
