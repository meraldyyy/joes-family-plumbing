import FadeIn from "./animations/FadeIn";
import {
  BadgeCheck,
  HandCoins,
  Home,
  Smile,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Home,
      text: "Family-Owned Business",
    },
    {
      icon: BadgeCheck,
      text: "Licensed Technicians",
    },
    {
      icon: HandCoins,
      text: "Honest, Upfront Pricing",
    },
    {
      icon: Smile,
      text: "Customer Satisfaction First",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <FadeIn direction="left">
          <div className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
            <img
              src="/assets/family.png"
              alt="Family-owned plumbing team standing together in front of a service van"
              className="aspect-[4/5] w-full rounded-[28px] object-cover shadow-soft lg:h-[650px] lg:aspect-auto lg:rounded-softlg"
              loading="lazy"
              width={800}
              height={650}
            />

            <div className="absolute bottom-4 right-4 rounded-2xl bg-primary px-5 py-3 text-white shadow-softlg backdrop-blur-xl md:bottom-6 md:right-6 md:px-6 md:py-4">
              <p className="text-xl font-bold md:text-2xl">
                40+
              </p>

              <p className="text-[11px] text-white/80 md:text-xs">
                Years in Business
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn direction="right" delay={0.2}>
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm">
              About Joe&apos;s Plumbing
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-dark md:text-4xl lg:text-5xl">
              A Family Business Built on Honest Work
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-dark/60 md:text-lg lg:mx-0">
              What started as one plumber with a truck has grown into a full
              team of licensed technicians—without losing the personal, honest
              service our neighbors have relied on for generations.
            </p>

            <ul className="mt-8 grid gap-5 text-left sm:grid-cols-2">
              {features.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-2xl border border-dark/5 bg-bg p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <span className="text-sm font-medium leading-6 text-dark/75 md:text-base">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-dark px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-dark/90 md:w-auto md:text-base"
            >
              Learn More About Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}