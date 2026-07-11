import { motion } from "framer-motion";

const timeline = [
  {
    year: "1982",
    title: "The Beginning",
    description:
      "Joe founded the company with one truck and one mission: provide honest plumbing services people could trust.",
  },
  {
    year: "1995",
    title: "Growing the Team",
    description:
      "As customer demand increased, we expanded with licensed plumbers who shared the same values and commitment.",
  },
  {
    year: "2010",
    title: "Serving Thousands",
    description:
      "More than 5,000 satisfied customers had trusted us for repairs, maintenance, and emergency plumbing services.",
  },
  {
    year: "Today",
    title: "Still Family Owned",
    description:
      "Although we've grown, we're still committed to delivering friendly service, quality workmanship, and honest pricing.",
  },
];

export default function AboutTimeline() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Our Journey
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
            Four Decades of Growth
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            From a single service truck to one of the area's most trusted
            plumbing companies, our story has always been about people first.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Card */}
              <div className="w-full md:w-1/2 px-0 md:px-10">
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="bg-white rounded-3xl shadow-lg p-8 transition-all duration-300"
                >
                  <span className="inline-flex px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Circle */}
              <motion.div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
                viewport={{ once: true }}
              />

              {/* Empty Space */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}