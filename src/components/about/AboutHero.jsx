
export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-blue-700 via-blue-600 to-sky-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
          A Family Business,
          <br />
          Built One Honest Job
          <br />
          at a Time
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-8 text-lg text-blue-100 leading-relaxed">
          For over 40 years, Joe's Emergency Plumbing has stood for the same
          thing: showing up, telling the truth, and doing the work right.
        </p>
      </div>

      {/* Wave */}
      <svg
        className="block w-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,80
             C240,150
             480,0
             720,60
             C960,120
             1200,150
             1440,80
             L1440,160
             L0,160
             Z"
        />
      </svg>
    </section>
  );
}