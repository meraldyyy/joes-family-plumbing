import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark pb-8 pt-16 text-white">
      <div className="mx-auto mb-12 grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        {/* Logo */}
        <div>
          <a href="#top" className="flex items-center">
          <img
            src="/assets/logo.avif"
            alt="Joe's Plumbing"
            className="h-14 w-auto"
          />
        </a>
          <p className="text-sm text-white/60">
            Family-owned, licensed plumbing experts serving our community for
            over 40 years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-semibold">Quick Links</h4>

          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="#top" className="transition hover:text-secondary">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="transition hover:text-secondary">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="transition hover:text-secondary">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="transition hover:text-secondary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-semibold">Services</h4>

          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a href="#services" className="transition hover:text-secondary">
                Emergency Plumbing
              </a>
            </li>

            <li>
              <a href="#services" className="transition hover:text-secondary">
                Drain Cleaning
              </a>
            </li>

            <li>
              <a href="#services" className="transition hover:text-secondary">
                Leak Detection
              </a>
            </li>

            <li>
              <a href="#services" className="transition hover:text-secondary">
                Water Heater Repair
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold">Contact Info</h4>

          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              727-723-8626
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Office@joesfamilyplumbing.com
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              1715 N. Hercules  Ave. Clearwater, FL 33755
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-center text-xs text-white/50 sm:flex-row sm:px-6">
        <p>
          © 2026 Joe's Family Plumbing. 
          All rights reserved. Design : Mavost.id
        </p>

        <div className="flex gap-5">
          <a href="#" className="transition hover:text-secondary">
            Privacy Policy
          </a>

          <a href="#" className="transition hover:text-secondary">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}