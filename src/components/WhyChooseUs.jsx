import FadeIn from "./animations/FadeIn";
import {
  BadgeCheck,
  HandCoins,
  HeartHandshake,
  Settings2,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Response",
    description:
      "Emergency plumbers dispatched quickly with same-day service available 24/7.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Experts",
    description:
      "Every technician is fully licensed, insured, and professionally trained.",
  },
  {
    icon: HandCoins,
    title: "Transparent Pricing",
    description:
      "Honest upfront estimates with no hidden costs or unexpected charges.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Work",
    description:
      "Every repair and installation is backed by our workmanship guarantee.",
  },
  {
    icon: Settings2,
    title: "Modern Equipment",
    description:
      "Advanced diagnostic tools ensure faster and more accurate repairs.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "We treat every home like our own and don't leave until you're completely satisfied.",
  },
];

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Customers",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Licensed & Insured",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Average Rating",
    filled: true,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-slate-50 py-16 md:py-20 lg:py-28"
    >
      {/* Glow */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Why Choose Joe's Plumbing
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-dark sm:text-5xl">
              Trusted Plumbing Experts
              <br className="hidden sm:block" />
              For More Than 40 Years
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-dark/60 sm:text-lg">
              We combine decades of experience, licensed professionals, and
              honest pricing to deliver plumbing services homeowners and
              businesses can rely on every day.
            </p>
          </div>
        </FadeIn>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.08}>
                <article className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_60px_rgba(0,0,0,.10)]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                    <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-dark">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-dark/60">
                    {feature.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Stats */}
        <FadeIn delay={0.3}>
          <div className="mt-14 rounded-[32px] bg-dark p-6 sm:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    <Icon
                      className={`mx-auto h-8 w-8 ${
                        stat.filled
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-secondary"
                      }`}
                    />

                    <h3 className="mt-4 text-4xl font-extrabold text-white">
                      {stat.value}
                    </h3>

                    <p className="mt-2 text-white/70">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}