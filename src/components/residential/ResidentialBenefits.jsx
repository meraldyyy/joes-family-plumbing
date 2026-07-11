import {
  BadgeCheck,
  Clock3,
  HandCoins,
  House,
} from "lucide-react";

import neighborhoodImg from "../../assets/h1.png";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Licensed Professionals",
    desc: "Every technician is licensed, insured, and background-checked.",
  },
  {
    icon: Clock3,
    title: "Same-Day Service",
    desc: "Most residential calls are scheduled and completed the same day.",
  },
  {
    icon: HandCoins,
    title: "Transparent Pricing",
    desc: "You approve a clear quote before we ever pick up a tool.",
  },
  {
    icon: House,
    title: "Family-Owned Business",
    desc: "Three generations of homeowners have trusted our name.",
  },
];

export default function ResidentialBenefits() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Image */}
        <div className="group overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
          <img
            src={neighborhoodImg}
            alt="Residential Plumbing"
            className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
            WHY HOMEOWNERS TRUST US
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-dark md:text-5xl">
            Treated Like a Neighbor,
            <br />
            Not a Job Number
          </h2>

          <div className="mt-12 space-y-8">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-5"
                >
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-dark">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-lg leading-7 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}