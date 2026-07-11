import Counter from "./Counter";

export default function Statistics() {
  const stats = [
    {
      value: 40,
      suffix: "+",
      label: "Years Experience",
    },
    {
      value: 5000,
      suffix: "+",
      label: "Happy Customers",
    },
    {
      value: 10000,
      suffix: "+",
      label: "Jobs Completed",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Emergency Availability",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-dark py-20 lg:py-24">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 800 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 H250 V220 H600 V60 H800"
          stroke="white"
          strokeWidth="6"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-4xl font-bold text-secondary">
              <Counter
                end={stat.value}
                duration={2000}
                suffix={stat.suffix}
              />
            </h3>

            <p className="mt-2 text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}