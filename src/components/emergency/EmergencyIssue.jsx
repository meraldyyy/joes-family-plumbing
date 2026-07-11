import {
  TriangleAlert,
  Waves,
  Droplets,
  Biohazard,
  ThermometerSnowflake,
  Flame,
  Info,
} from "lucide-react";

const issues = [
  {
    icon: TriangleAlert,
    title: "Burst or Bursting Pipes",
    description:
      "Shut off your main water valve, then call us right away.",
  },
  {
    icon: Waves,
    title: "Flooding or Major Leaks",
    description:
      "Fast dispatch to limit water damage to your property.",
  },
  {
    icon: Droplets,
    title: "No Water at All",
    description:
      "We diagnose supply issues and restore service quickly.",
  },
  {
    icon: Biohazard,
    title: "Sewage Backup",
    description:
      "Handled safely and promptly to protect your health and home.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Frozen or Cracked Pipes",
    description:
      "Safe thawing and repair before pipes fail completely.",
  },
  {
    icon: Flame,
    title: "Water Heater Failure",
    description:
      "Leaking or failed units repaired or replaced fast.",
  },
];

export default function EmergencyIssues() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Is This an Emergency?
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Call Us Immediately If You're Experiencing
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {issues.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-softlg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-secondary transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Notice */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
              <Info className="h-5 w-5" />
            </div>

            <p className="leading-7 text-slate-700">
              If you smell gas, evacuate immediately and call your gas utility
              or <strong>911</strong> first — then reach out to us for any
              plumbing-related follow-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}