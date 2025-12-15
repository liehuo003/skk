"use client";

import { useState } from "react";

const monthlyOptions = ["1–5 kg", "5–10 kg", "10–20 kg", "20–50 kg", "50+ kg"];
const interestOptions = [
  { value: "bulk", label: "Bulk" },
  { value: "oem", label: "OEM" },
  { value: "café supply", label: "Café supply" },
  { value: "distribution", label: "Distribution" }
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const [formState, setFormState] = useState({
    fullName: "",
    company: "",
    email: "",
    country: "",
    monthlyUsage: monthlyOptions[0],
    interestedIn: [] as string[],
    message: ""
  });

  const handleCheckboxChange = (value: string) => {
    setFormState((prev) => {
      const exists = prev.interestedIn.includes(value);
      return {
        ...prev,
        interestedIn: exists ? prev.interestedIn.filter((v) => v !== value) : [...prev.interestedIn, value]
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setMessage("Thanks! We’ll get back within 1 business day.");
      setFormState({
        fullName: "",
        company: "",
        email: "",
        country: "",
        monthlyUsage: monthlyOptions[0],
        interestedIn: [],
        message: ""
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section id="contact" className="bg-green-50/40 py-16">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-deep-green">Contact</h2>
          <p className="text-deep-green/80">
            Tell us about your application and volumes. We will recommend grades and share documents.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-subtle">
            <div className="form-grid">
              <div className="space-y-1">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  required
                  value={formState.fullName}
                  onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  required
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                />
              </div>
            </div>
            <div className="form-grid">
              <div className="space-y-1">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="country">Country/Region</label>
                <input
                  id="country"
                  name="country"
                  required
                  value={formState.country}
                  onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                />
              </div>
            </div>
            <div className="form-grid">
              <div className="space-y-1">
                <label htmlFor="monthlyUsage">Monthly Usage</label>
                <select
                  id="monthlyUsage"
                  name="monthlyUsage"
                  value={formState.monthlyUsage}
                  onChange={(e) => setFormState({ ...formState, monthlyUsage: e.target.value })}
                >
                  {monthlyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <span className="text-sm font-medium text-deep-green/80">Interested In</span>
                <div className="flex flex-wrap gap-3">
                  {interestOptions.map((option) => (
                    <label key={option.value} className="flex items-center gap-2 text-sm text-deep-green/80">
                      <input
                        type="checkbox"
                        checked={formState.interestedIn.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        className="h-4 w-4 rounded border-green-300 text-deep-green focus:ring-green-200"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-deep-green px-5 py-3 text-sm font-semibold text-white shadow-subtle transition hover:opacity-90 disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send Inquiry"}
            </button>
            {message && (
              <p className={`text-sm ${status === "success" ? "text-green-700" : "text-red-600"}`}>{message}</p>
            )}
          </form>
        </div>
        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-subtle">
          <h3 className="text-lg font-semibold text-deep-green">Prefer direct contact?</h3>
          <p className="text-sm text-deep-green/80">
            Email: <a href="mailto:sales@sailtik.com" className="font-semibold underline">sales@sailtik.com</a>
          </p>
          <p className="text-sm text-deep-green/80">
            WhatsApp: <a href="https://wa.me/00000000000" className="font-semibold underline">chat with us</a>
          </p>
          <div className="space-y-2 text-sm text-deep-green/70">
            <p>We respond within 1 business day and tailor recommendations to your application.</p>
            <p className="font-semibold text-deep-green">Tell us your use case → we’ll recommend grades.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
