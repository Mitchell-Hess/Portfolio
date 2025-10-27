import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      className="bg-gray-50 pt-32 pb-24"
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8"
        >
          <h3 className="text-3xl font-semibold text-blue-600 mb-2">
            ScoutMaster
          </h3>
          <p className="text-gray-700 mb-4">
            A mobile app helping users discover real-world filming locations for movies and TV shows.
            Scaled to 10K+ records, optimized fuzzy search, and improved query performance by 25%.
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {["React Native", "Node.js", "MongoDB", "Firebase"].map((tech, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="https://scoutmasterapp.com/"
            target="_blank"
            className="inline-block mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
          >
            Visit Site
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
