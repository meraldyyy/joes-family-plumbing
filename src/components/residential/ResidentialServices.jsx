import {
  TriangleAlert,
  Droplets,
  Waves,
  Flame,
  Toilet,
  Wrench,
  ShowerHead,
  Siren,
} from "lucide-react";

const services = [
  {
    icon: TriangleAlert,
    title: "Burst Pipes",
    desc: "Fast shutoff and repair to limit water damage.",
  },
  {
    icon: Droplets,
    title: "Water Leaks",
    desc: "Precision detection before damage spreads.",
  },
  {
    icon: Waves,
    title: "Drain Cleaning",
    desc: "Clear clogs safely without damaging pipes.",
  },
  {
    icon: Flame,
    title: "Water Heater Repair",
    desc: "Tank and tankless installs, repairs, replacements.",
  },
  {
    icon: Toilet,
    title: "Toilet Repairs",
    desc: "Running, clogged, or leaking toilets fixed right.",
  },
  {
    icon: Wrench,
    title: "Pipe Replacement",
    desc: "Full or partial re-piping with minimal disruption.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Plumbing",
    desc: "Sinks, tubs, showers, and full remodel support.",
  },
  {
    icon: Siren,
    title: "Emergency Issues",
    desc: "Any time, any day — we're on our way fast.",
  },
];

export default function ResidentialServices() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
            COMMON HOME ISSUES
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-dark md:text-5xl">
            If It's Happening in Your Home,
            <br />
            We've Fixed It
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[28px] bg-white p-10 text-center shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
              >
                <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-[28px] font-bold leading-tight text-dark">
                  {item.title}
                </h3>

                <p className="mt-4 text-[17px] leading-7 text-slate-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}