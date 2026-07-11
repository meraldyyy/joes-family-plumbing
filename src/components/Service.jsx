import FadeIn from "./animations/FadeIn";
import {
  ArrowRight,
  Flame,
  Search,
  ShowerHead,
  Siren,
  Waves,
  Wrench,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Emergency Plumbing",
      description:
        "Rapid dispatch for burst pipes, major leaks, and no-water emergencies, any hour.",
      image: "/assets/h3.png",
      icon: Siren,
      alt: "Plumber fixing a burst pipe",
    },
    {
      title: "Drain Cleaning",
      description:
        "Clear stubborn clogs fast using modern equipment that protects your pipes.",
      image: "/assets/d2.png",
      icon: Waves,
      alt: "Drain cleaning equipment",
    },
    {
      title: "Leak Detection",
      description:
        "Advanced detection technology locates hidden leaks before they become expensive repairs.",
      image: "/assets/d3.png",
      icon: Search,
      alt: "Leak detection service",
    },
    {
      title: "Pipe Repair",
      description:
        "Whether it's a minor repair or complete repiping, we deliver lasting solutions.",
      image: "/assets/d4.png",
      icon: Wrench,
      alt: "Pipe repair",
    },
    {
      title: "Water Heater Repair",
      description:
        "Installation, maintenance, and repair for traditional and tankless water heaters.",
      image: "/assets/d5.png",
      icon: Flame,
      alt: "Water heater installation",
    },
    {
      title: "Bathroom Plumbing",
      description:
        "Complete plumbing services for sinks, toilets, showers, bathtubs, and remodels.",
      image: "/assets/d6.png",
      icon: ShowerHead,
      alt: "Bathroom plumbing",
    },
  ];

  return (
    <section
      id="services"
      className="bg-slate-50 py-16 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <FadeIn>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Our Services
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-dark sm:text-5xl">
              Complete Plumbing Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-dark/60 sm:text-lg">
              From emergency repairs to complete plumbing installations, our
              experienced technicians provide dependable service for homes and
              businesses with quality workmanship you can trust.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn
                key={service.title}
                delay={index * 0.08}
              >
                <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_25px_60px_rgba(0,0,0,.12)]">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    {/* Floating Icon */}
                    <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl transition-all duration-300 group-hover:bg-primary">
                      <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-dark">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-dark/60">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}