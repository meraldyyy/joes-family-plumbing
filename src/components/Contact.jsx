import { useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "727-723-8626",
    href: "tel:+7277238626",
  },
  {
    icon: Mail,
    label: "Email",
    value: " Office@joesfamilyplumbing.com",
    href: "mailto:Office@joesfamilyplumbing.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "1715 N. Hercules  Ave. Clearwater, FL 33755",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Open 24/7 for Emergencies",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    e.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Get In Touch
          </span>

          <h2 className="mt-3 mb-6 text-3xl font-bold text-dark sm:text-4xl">
            Contact Joe's Plumbing
          </h2>

          <div className="mb-8 space-y-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-soft bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-dark/50">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-dark hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-dark">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

         <div className="h-56 overflow-hidden rounded-softlg border border-dark/10">
          <iframe
            title="Joe's Family Plumbing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57720561.55622749!2d-160.79589843750003!3d27.994401411046145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f1c71a6358ed%3A0xa6494381d43d9394!2s1715%20N%20Hercules%20Ave%2C%20Clearwater%2C%20FL%2033765%2C%20USA!5e0!3m2!1sen!2sid!4v1783683965485!5m2!1sen!2sid"
            className="h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        </div>

        {/* Right */}
        <div className="rounded-softlg border border-dark/5 bg-white p-7 shadow-soft sm:p-9">
          <h3 className="mb-6 text-xl font-semibold text-dark">
            Request a Free Estimate
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-dark/70">
                Full Name
              </label>

              <input
                type="text"
                required
                className="w-full rounded-soft border border-dark/15 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-dark/70">
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                  className="w-full rounded-soft border border-dark/15 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-dark/70">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  className="w-full rounded-soft border border-dark/15 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-dark/70">
                Service Needed
              </label>

              <select className="w-full rounded-soft border border-dark/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary">
                <option>Emergency Plumbing</option>
                <option>Drain Cleaning</option>
                <option>Leak Detection</option>
                <option>Pipe Repair</option>
                <option>Water Heater Repair</option>
                <option>Bathroom Plumbing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-dark/70">
                Message
              </label>

              <textarea
                rows={4}
                className="w-full resize-none rounded-soft border border-dark/15 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-soft bg-primary px-6 py-4 font-semibold text-white shadow-soft transition hover:bg-primary/90"
            >
              Send Request
            </button>

            {submitted && (
              <p className="text-sm text-primary">
                Thanks — we'll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}