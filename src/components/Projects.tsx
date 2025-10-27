import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-32 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col md:flex-row md:items-center gap-10 md:text-left"
        >
          <img
            src="/assets/scoutmaster_logo.png"
            alt="ScoutMaster logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md border-4 border-blue-200 dark:border-blue-800"
          />
          <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              ScoutMaster
            </h3>
            <p className="mb-6 leading-relaxed max-w-lg text-gray-700 dark:text-gray-300">
              A mobile app that helps users discover real-world filming
              locations for movies and TV shows. Built with React Native and
              Firebase.
            </p>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 w-full">
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {["React Native", "Node.js", "MongoDB", "Firebase"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-4 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://scoutmasterapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md hover:bg-blue-500 hover:shadow-lg transition text-sm font-medium whitespace-nowrap"
              >
                Visit Site
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
