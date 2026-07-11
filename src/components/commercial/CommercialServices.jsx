import {
  UtensilsCrossed,
  Store,
  Building2,
  KeyRound,
  Hammer,
  CalendarDays,
} from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafes",
    desc: "Grease traps, backflow prevention, and after-hours emergency response.",
  },
  {
    icon: Store,
    title: "Retail Businesses",
    desc: "Fast repairs scheduled around your store hours.",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    desc: "Multi-unit systems, boiler rooms, and shared plumbing lines.",
  },
  {
    icon: KeyRound,
    title: "Property Managers",
    desc: "One call for every unit — priority scheduling for portfolio clients.",
  },
  {
    icon: Hammer,
    title: "Construction Companies",
    desc: "Rough-in and finish plumbing coordinated with your build schedule.",
  },
  {
    icon: CalendarDays,
    title: "Maintenance Contracts",
    desc: "Scheduled inspections that catch problems before they're costly.",
  },
];

export default function CommercialServices() {
  return (
   <section className="bg-slate-50 py-28">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
        WHO WE SERVE
      </span>

      <h2 className="mt-5 text-5xl font-extrabold leading-tight text-dark">
        Built for Businesses That Can't
        <br />
        Afford Downtime
      </h2>

    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {services.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-[30px]
              bg-white
              px-10
              py-12
              text-center
              shadow-[0_15px_45px_rgba(15,23,42,0.06)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_55px_rgba(37,99,235,0.12)]
            "
          >

            {/* Icon */}
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
              <Icon className="h-7 w-7" />
            </div>

            {/* Title */}
            <h3 className="mb-4 text-[34px] font-extrabold leading-none text-dark">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mx-auto max-w-xs text-[18px] leading-8 text-slate-500">
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