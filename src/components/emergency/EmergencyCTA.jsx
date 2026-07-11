import { PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] py-28">
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-white shadow-[0_15px_40px_rgba(255,122,0,0.35)]">
          <ShieldCheck className="h-12 w-12" />
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
          Plumbing Emergency?
          <br />
          Don't Wait.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Water damage gets worse every minute. Our licensed emergency plumbers
          are available 24 hours a day to protect your home and restore your
          plumbing as quickly as possible.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <a
            href="tel:+7277238626"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            <PhoneCall className="h-5 w-5" />
            Call Now
          </a>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-slate-900"
          >
            Request Service
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <h3 className="text-4xl font-black text-white">24/7</h3>
            <p className="mt-2 text-white/60">
              Emergency Availability
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">60 Min</h3>
            <p className="mt-2 text-white/60">
              Average Response
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">100%</h3>
            <p className="mt-2 text-white/60">
              Licensed & Insured
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}