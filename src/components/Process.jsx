import FadeIn from "./animations/FadeIn";

const steps = [
  {
    number: "01",
    title: "Call Us",
    description:
      "Reach a real person 24/7 and briefly explain your plumbing issue.",
  },
  {
    number: "02",
    title: "Technician Dispatched",
    description:
      "A licensed plumber is immediately assigned and heads to your location.",
  },
  {
    number: "03",
    title: "Problem Fixed",
    description:
      "You'll receive an upfront quote before we complete the repair professionally.",
  },
  {
    number: "04",
    title: "Job Completed",
    description:
      "We clean the workspace, provide warranty coverage, and ensure everything works perfectly.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <FadeIn>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              How It Works
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-dark sm:text-5xl">
              From Call to Completed
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-dark/60 sm:text-lg">
              Our simple four-step process gets your plumbing back to normal
              quickly, professionally, and without surprises.
            </p>
          </div>
        </FadeIn>

        {/* Desktop Line */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-8 h-[2px] border-t-2 border-dashed border-primary/30" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.1}>
                <div className="relative text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-xl">
                    {step.number}
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-xl font-bold text-dark">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-dark/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="relative lg:hidden">
          <div className="absolute left-6 top-0 h-full w-[2px] bg-primary/20" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.1}>
                <div className="relative flex gap-5">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-dark">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-dark/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}