import {
  ShieldCheck,
  Clock3,
  Award,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We believe honesty is the foundation of every great customer relationship. No hidden fees, no unnecessary repairs.",
  },
  {
    icon: Clock3,
    title: "Reliability",
    description:
      "Whether it's an emergency or routine maintenance, we show up on time and get the job done right.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We use trusted materials and proven techniques to deliver long-lasting plumbing solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Every customer deserves respect, clear communication, and exceptional service from start to finish.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
            Our Values
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
            The Principles That Guide Us
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Everything we do is driven by a commitment to quality,
            transparency, and treating every customer like family.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-600 leading-7">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}