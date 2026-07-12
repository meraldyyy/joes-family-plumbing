import FadeIn from "../animations/FadeIn";
import {

  PhoneCall,
} from "lucide-react";

export default function EmergencyHero() {


  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0052CC] via-[#0B5FFF] to-[#2AA8FF]">
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-900/30 blur-[180px]" />

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

      <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-14 sm:px-6 md:pt-28 lg:grid lg:min-h-screen lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        {/* Content */}
        <FadeIn direction="left">
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">

            <h1 className="mt-6 text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:mt-8 lg:text-7xl">
              Reliable Plumbing Care for Every Room in Your Home
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/85 sm:text-lg lg:mx-0 lg:mt-7 lg:text-xl">
              From a dripping faucet to a full re-pipe, our licensed technicians treat your home like their own — honest pricing, no surprises.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="tel:+7277238626"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-secondary px-8 font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/90"
              >
                <PhoneCall className="h-5 w-5" />
                Call Now
              </a>

              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                Request Free Estimate
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Image */}
        <FadeIn direction="right" delay={0.2}>
          <div className="relative mx-auto mt-14 w-full max-w-md lg:mt-0 lg:max-w-none">
            <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-cyan-300/30 to-blue-900/20 blur-3xl" />

            <div className="overflow-hidden rounded-[30px] border border-white/20 shadow-[0_35px_80px_rgba(0,0,0,.25)]">
              <img
                src="/assets/h3.png"
                alt="Professional plumber"
                className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[620px]"
                loading="lazy"
              />
            </div>

          </div>
        </FadeIn>
      </div>

      <svg
        className="-mb-1 block w-full"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 40C240 90 480 0 720 20C960 40 1200 90 1440 40V80H0V40Z"
          fill="#F8FAFC"
        />
      </svg>
    </section>
  );
}