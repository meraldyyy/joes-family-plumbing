import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How fast can you respond to an emergency?",
    answer:
      "Our average response time for true emergencies is under 60 minutes, and we operate 24 hours a day, every day of the year.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "We provide a clear, upfront quote before any work begins, based on the diagnosis. No hidden fees, ever.",
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer:
      "Yes. Every repair comes with a workmanship warranty, and parts are covered according to the manufacturer's terms.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, checks, cash, and financing options for larger projects.",
  },
  {
    question: "Is financing really available?",
    answer:
      "Yes. We partner with financing providers so larger projects like repiping or water heater replacement can be paid over time.",
  },
  {
    question: "Do you service commercial properties?",
    answer:
      "Absolutely. We work with restaurants, retail spaces, offices, and property managers, including scheduled maintenance plans.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  const toggleFaq = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-slate-50 py-12 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-dark sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-dark/60 sm:text-base md:text-lg md:leading-8">
            Have questions? Here are the answers to the most common questions
            our customers ask before scheduling plumbing services.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 sm:rounded-3xl ${
                  active
                    ? "border-primary/20 bg-white shadow-xl"
                    : "border-slate-200 bg-white hover:border-primary/20 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={active}
                  aria-controls={`faq-${index}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:gap-5 sm:p-6"
                >
                  <span className="text-sm font-semibold leading-snug text-dark sm:text-base md:text-lg">
                    {faq.question}
                  </span>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                      active
                        ? "bg-primary text-white rotate-180"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </button>

                <div
                  id={`faq-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-dark/60 sm:px-6 sm:pb-6 sm:text-base sm:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}