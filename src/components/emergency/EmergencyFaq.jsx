import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can someone reach my home?",
    answer:
      "Our emergency plumbers typically arrive within 60 minutes depending on traffic, weather, and your location. We'll give you an accurate ETA as soon as you're dispatched.",
  },
  {
    question: "Do emergency calls cost more?",
    answer:
      "Emergency visits may include an after-hours service fee, but you'll always receive a clear quote before any repair work begins. No hidden charges.",
  },
  {
    question: "What should I do while waiting for the plumber?",
    answer:
      "If possible, shut off the water supply to prevent further damage. If there's any risk involving gas or electricity, leave the area and contact the appropriate emergency service first.",
  },
];

export default function EmergencyFaq() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Quick Answers
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Emergency Plumbing FAQ
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-6 w-6 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 text-slate-600 leading-7">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}