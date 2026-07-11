const steps = [
  {
    number: "01",
    title: "Call Dispatched",
    description:
      "A real person answers, day or night, and gets your details in under a minute.",
  },
  {
    number: "02",
    title: "Technician En Route",
    description:
      "The nearest licensed plumber is sent your way, fully equipped.",
  },
  {
    number: "03",
    title: "On-Site in ~60 Min",
    description:
      "Damage is contained and a clear repair quote is provided upfront.",
  },
  {
    number: "04",
    title: "Fixed & Warrantied",
    description:
      "Repair completed, area cleaned, and workmanship warranty on file.",
  },
];

export default function EmergencyTimeline() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            What Happens Next
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Our Emergency Response Timeline
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-orange-100 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Circle */}
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-2xl font-black text-white shadow-lg">
                  {step.number}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}