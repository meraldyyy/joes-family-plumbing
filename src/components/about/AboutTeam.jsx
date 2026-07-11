const team = [
  {
    name: "Joe Thompson",
    role: "Founder & Master Plumber",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
    description:
      "With over 40 years of experience, Joe continues to lead the company with integrity and hands-on expertise.",
  },
  {
    name: "Michael Thompson",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
    description:
      "Michael oversees daily operations and ensures every customer receives prompt, professional service.",
  },
  {
    name: "David Carter",
    role: "Senior Plumbing Technician",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&auto=format&fit=crop&q=80",
    description:
      "David specializes in residential plumbing repairs and emergency services with exceptional attention to detail.",
  },
  {
    name: "Sarah Wilson",
    role: "Customer Care Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
    description:
      "Sarah ensures every client enjoys a smooth experience from the first phone call until the job is complete.",
  },
];

export default function AboutTeam() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
            Meet The Team
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
            The People Behind
            <br />
            Our Success
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Our experienced team is dedicated to providing reliable,
            high-quality plumbing services with professionalism,
            honesty, and care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-2 font-medium text-blue-600">
                  {member.role}
                </p>

                <p className="mt-5 text-slate-600 leading-7">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}