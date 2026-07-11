import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

 const navLinks = [
  { name: "Home", href: "/" },
  { name: "Residential", href: "/residential" },
  { name: "Commercial", href: "/commercial" },
  { name: "Emergency", href: "/emergency" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div className="relative mx-auto max-w-7xl">
        <nav
          className={`relative z-50 flex items-center justify-between rounded-full border transition-all duration-300 ${
            isScrolled
              ? "border-white/20 bg-white/90 px-4 py-2 shadow-2xl backdrop-blur-2xl"
              : "border-white/15 bg-white/15 px-4 py-2 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <Link to="#top">
            <img
              src="/assets/logo.avif"
              alt="Joe's Plumbing"
              className={`w-auto transition-all duration-300 ${
                isScrolled
                  ? "h-9 md:h-11"
                  : "h-10 md:h-14"
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 font-medium text-dark/80 lg:flex">
           {navLinks.map((link) => {
  const isActive = location.pathname === link.href;

  return (
    <Link
                key={link.name}
                to={link.href}
                className={`relative pb-1 transition-all duration-300 ${
                  isScrolled
                    ? "text-dark hover:text-primary"
                    : "text-white hover:text-white/80"
                } ${
                  isActive
                    ? isScrolled
                      ? "text-primary after:bg-primary"
                      : "text-white after:bg-white"
                    : ""
                } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="tel:+7277238626"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-soft transition-all duration-300 hover:scale-105 hover:bg-primary/90"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/70 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 lg:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-full z-50 mt-3 origin-top overflow-hidden rounded-3xl border border-white/30 bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,.15)] backdrop-blur-2xl transition-all duration-300 lg:hidden ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-3 scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-4">
            {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className={`rounded-2xl px-5 py-4 text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-dark hover:bg-slate-100 active:scale-[0.98]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

            <a
              href="tel:+7277238626"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <PhoneCall className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}