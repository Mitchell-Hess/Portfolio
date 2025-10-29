import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-slate-800 dark:to-slate-900 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Building innovative solutions that solve real-world problems
        </motion.p>

        <div className="space-y-8">
          {/* ScoutMaster Project */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-slate-700"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative p-6 sm:p-10 flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">
              {/* Project Logo */}
              <motion.div
                className="flex-shrink-0 mx-auto md:mx-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative group/logo">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover/logo:opacity-75 transition"></div>
                  <img
                    src="/assets/scoutmaster_logo.png"
                    alt="ScoutMaster logo"
                    className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-xl border-4 border-white dark:border-slate-800"
                  />
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="flex-1 text-center md:text-left space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ScoutMaster
                  </h3>
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                    A mobile app that helps users discover real-world filming
                    locations for movies and TV shows. Built with React Native and
                    Firebase.
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {["React Native", "Node.js", "MongoDB", "Firebase"].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center md:justify-start">
                  <a
                    href="https://scoutmasterapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    Visit Website
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portfolio Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-slate-700"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative p-6 sm:p-10 flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">
              {/* Project Icon */}
              <motion.div
                className="flex-shrink-0 mx-auto md:mx-0"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative group/logo">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover/logo:opacity-75 transition"></div>
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-xl border-4 border-white dark:border-slate-800 flex items-center justify-center">
                    <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="flex-1 text-center md:text-left space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Interactive Portfolio
                  </h3>
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                    This portfolio site (yes, the one you're looking at right now... pretty meta, I know). Built with a custom cursor that follows you around and a gradient effect that moves with your mouse. Includes smooth animations, dark mode support, and live API integrations pulling data from Spotify and MLB.
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    Tech Stack & Deployment
                  </h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {["React", "TypeScript", "Tailwind 4", "Vite", "Framer Motion", "Docker", "CI/CD"].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Process Notes */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                    Development Highlights
                  </h4>
                  <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Custom cursor with hover effects (hides on mobile devices)</li>
                    <li>• Dynamic gradient spotlight that tracks your mouse</li>
                    <li>• Dockerized with automated CI/CD for easy deployment</li>
                    <li>• Real-time API integrations showing current Spotify plays and Cleveland Guardians stats</li>
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center md:justify-start">
                  <a
                    href="https://github.com/Mitchell-Hess/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    View on GitHub
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
