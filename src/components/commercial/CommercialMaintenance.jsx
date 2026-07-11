import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import maintenance from "../../assets/h2.png";

const benefits = [
  "Reduce unexpected downtime",
  "Extend equipment lifespan",
  "Prevent expensive emergency repairs",
  "Priority scheduling for contract clients",
];

export default function CommercialMaintenance() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">

        {/* Image */}
        <div className="group overflow-hidden rounded-[32px] shadow-xl">
          <img
            src={maintenance}
            alt="Commercial Maintenance"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-primary">
            Preventive Maintenance
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-dark lg:text-5xl">
            Keep Your Business
            <br />
            Running Without
            <br />
            Plumbing Surprises
          </h2>

          <p className="mt-6 text-lg leading-8 text-dark/70">
            A small plumbing issue can quickly become a costly interruption.
            Our preventative maintenance programs help identify problems early,
            reduce downtime, and keep your facility operating efficiently.
          </p>

          {/* Benefits */}
          <div className="mt-10 space-y-5">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>

                <span className="text-lg font-medium text-dark">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/#contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90"
          >
            Schedule Consultation
            <ArrowRight className="h-5 w-5" />
          </a>

        </div>
      </div>
    </section>
  );
}