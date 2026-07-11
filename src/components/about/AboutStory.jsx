export default function AboutStory() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop"
              alt="Our Story"
              className="w-full h-130 object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>

            <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
              How We Started
            </span>

            <h2 className="mt-3 text-5xl font-extrabold text-slate-900 leading-tight">
              One Plumber,
              <br />
              One Truck,
              <br />
              One Promise
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              Joe's Emergency Plumbing started as a single plumber answering
              calls out of his own truck, with one rule: treat every home like
              it was his own family's.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              That rule never changed. Even as the company grew into a full team
              of licensed technicians, our commitment to honesty, quality
              workmanship, and exceptional customer service has remained exactly
              the same.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Today, we proudly serve homeowners and businesses throughout the
              region while staying true to the values that built our reputation
              more than four decades ago.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}