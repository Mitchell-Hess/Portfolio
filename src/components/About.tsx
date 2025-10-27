import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 py-32 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6 sm:px-8 text-center md:text-left">
        <img
          src="/assets/profile_image.jpg"
          alt="Mitchell Hess"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-blue-100 dark:border-slate-700"
        />
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="leading-relaxed mb-4 text-lg text-gray-700 dark:text-gray-300">
            I’m a full-stack engineer and data scientist at PepsiCo, building
            tools that combine data, design, and efficiency to create scalable
            solutions.
          </p>
          <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
            Outside of work, I love music production, guitar pedals, and
            baseball. I’m always exploring new frameworks and ideas to improve
            user experience.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
