import { PhoneCall, Siren } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section
      id="emergency"
      className="relative overflow-hidden bg-linear-to-r from-primary to-secondary py-20"
    >
      {/* Background Pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-10"
        preserveAspectRatio="none"
        viewBox="0 0 800 300"
        aria-hidden="true"
      >
        <path
          d="M0 150 H250 V50 H550 V250 H800"
          stroke="white"
          strokeWidth="6"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15">
          <Siren className="h-8 w-8 text-white" />
        </div>

        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Need a Plumber Right Now?
        </h2>

        <p className="mx-auto mb-8 max-w-lg text-white/85">
          Available 24 hours every day. Our team is ready to be at your door
          within the hour.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:+7277238626"
            className="inline-flex items-center justify-center gap-2 rounded-soft bg-secondary px-7 py-4 font-semibold text-white shadow-softlg transition-colors hover:bg-secondary/90">
            
            <PhoneCall className="h-5 w-5" />
            Call Now
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-soft bg-white px-7 py-4 font-semibold text-primary transition hover:bg-white/90"
          >
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
}