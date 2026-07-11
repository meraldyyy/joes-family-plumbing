import { useEffect, useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Maria Sanchez",
    location: "Riverside",
    image: "https://i.pravatar.cc/80?img=12",
    review:
      "They showed up within the hour on a Sunday night when our water heater burst. Fair price, no upsell, just a fast honest fix.",
  },
  {
    name: "David Kim",
    location: "Downtown",
    image: "https://i.pravatar.cc/80?img=32",
    review:
      "As a restaurant owner, downtime costs me money. Joe's team fixed our grease trap issue the same day and kept us open for dinner service.",
  },
  {
    name: "Anthony Reyes",
    location: "Maple Heights",
    image: "https://i.pravatar.cc/80?img=45",
    review:
      "Transparent quote before any work started. No pressure, no hidden fees. This is how plumbing service should always be.",
  },
  {
    name: "Priya Nair",
    location: "Oakwood",
    image: "https://i.pravatar.cc/80?img=5",
    review:
      "Their leak detection equipment found a hidden slab leak before it caused major damage. Absolutely worth every penny.",
  },
  {
    name: "Helen Brooks",
    location: "Fairview",
    image: "https://i.pravatar.cc/80?img=23",
    review:
      "Three generations of my family have trusted Joe's Plumbing. The quality and honesty have never changed.",
  },
  {
    name: "Marcus Webb",
    location: "Brookline",
    image: "https://i.pravatar.cc/80?img=51",
    review:
      "Financing made our whole-home repipe affordable, and the crew kept us informed from start to finish.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  useEffect(() => {
    const interval = setInterval(next, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="bg-slate-50 py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-dark sm:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-dark/60 sm:text-lg">
            Thousands of homeowners and businesses trust Joe's Plumbing for
            reliable service, honest pricing, and quality workmanship.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,.08)] sm:p-12">
            <div
              key={current}
              className="animate-in fade-in duration-500"
            >
              {/* Quote */}
              <Quote className="mb-6 h-10 w-10 text-primary/20" />

              {/* Stars */}
              <div className="mb-6 flex justify-center gap-1 lg:justify-start">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-center text-lg leading-9 text-dark/70 lg:text-left lg:text-xl">
                "{testimonial.review}"
              </p>

              {/* Customer */}
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full border-4 border-primary/10 object-cover"
                />

                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-bold text-dark">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-dark/50">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex justify-center gap-2 sm:justify-start">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}