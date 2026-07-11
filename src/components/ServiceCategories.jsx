import { ArrowRight } from "lucide-react";

export default function ServiceCategories() {
  const categories = [
    {
      title: "Residential Plumbing",
      description:
        "Trusted repairs and installations for homes of every size, from leaking faucets to complete repiping.",
      image: "./src/assets/h1.png",
      alt: "Modern residential kitchen with sink and faucet",
    },
    {
      title: "Commercial Plumbing",
      description:
        "Keep your business running with preventative maintenance and rapid repairs for offices, restaurants, and retail spaces.",
      image: "./src/assets/h2.png",
      alt: "Commercial building plumbing system",
    },
    {
      title: "Emergency Plumbing",
      description:
        "Burst pipe at 2 AM? Our emergency team is available 24/7 to restore your plumbing fast.",
      image: "./src/assets/h3.png",
      alt: "Emergency plumbing repair",
    },
  ];

  return (
    <section
      id="services-cat"
      className="bg-slate-50 py-16 md:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            What We Handle
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-dark sm:text-5xl">
            Plumbing Solutions for Every Property
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-dark/60 sm:text-lg">
            Whether it's your home, business, or an emergency situation, our
            experienced team delivers dependable plumbing solutions with
            quality workmanship and fast response.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_25px_60px_rgba(0,0,0,.12)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-60"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark">
                  {category.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-dark/60">
                  {category.description}
                </p>

                <a
                  href="#services"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}