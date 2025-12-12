"use client";

import { useState } from "react";

export function ContactForm({ copy }: { copy: string }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors([]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: string[] = [];
    if (!form.name.trim()) newErrors.push("Please share your name.");
    if (!form.email.trim()) newErrors.push("A response email is required.");
    if (!form.message.trim()) newErrors.push("Tell us what you are hoping to experience.");
    if (newErrors.length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }
    console.log("Contact form submitted", form);
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-lake opacity-90">{copy}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="font-semibold text-lake">
            <span className="text-xs uppercase tracking-[0.35em] text-lake opacity-70">Name</span>
            <input
              className="mt-2 w-full rounded-2xl border soft-border-lake bg-white/60 px-4 py-3 text-sm text-forest focus:border-forest focus:outline-none"
              value={form.name}
              onChange={(event) => handleChange("name", event.target.value)}
            />
          </label>
          <label className="font-semibold text-lake">
            <span className="text-xs uppercase tracking-[0.35em] text-lake opacity-70">Email</span>
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border soft-border-lake bg-white/60 px-4 py-3 text-sm text-forest focus:border-forest focus:outline-none"
              value={form.email}
              onChange={(event) => handleChange("email", event.target.value)}
            />
          </label>
        </div>
        <label className="font-semibold text-lake">
          <span className="text-xs uppercase tracking-[0.35em] text-lake opacity-70">Message</span>
          <textarea
            className="mt-2 h-32 w-full rounded-2xl border soft-border-lake bg-white/60 px-4 py-3 text-sm text-forest focus:border-forest focus:outline-none"
            value={form.message}
            onChange={(event) => handleChange("message", event.target.value)}
          />
        </label>
        {errors.length > 0 && (
          <div className="rounded-2xl border border-rose-400/30 bg-rose-50/60 p-3 text-sm text-rose-700">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        {status === "success" && (
          <div className="rounded-2xl border border-forest bg-forest-soft p-3 text-sm text-forest">
            Thank you—expect a reply soon.
          </div>
        )}
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[0_20px_30px_rgba(14,35,30,0.35)] transition hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest"
        >
          Submit enquiry
        </button>
      </form>
    </div>
  );
}
