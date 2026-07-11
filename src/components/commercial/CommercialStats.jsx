import {
  Clock3,
  Building2,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: Clock3,
    value: "60 Min",
    label: "Emergency Response",
  },
  {
    icon: Building2,
    value: "200+",
    label: "Businesses Served",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    label: "Commercial Support",
  },
  {
    icon: BadgeCheck,
    value: "100%",
    label: "Licensed & Insured",
  },
];

export default function CommercialStats() {
  return (
    <section
  className="py-20"
  style={{ backgroundColor: "#0B1F3A" }}
>
    {/* Pipe Pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        preserveAspectRatio="none"
        viewBox="0 0 800 600"
        aria-hidden="true"
      >
        <path
          d="M-50 100 H300 V300 H700 V550"
          stroke="white"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M850 60 H500 V220 H150 V500"
          stroke="white"
          strokeWidth="8"
          fill="none"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-5xl font-black text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-white/70">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}