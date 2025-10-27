import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-32 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 px-6">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Let’s connect — I’m open to collaborations, new projects, and
          opportunities.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:mitchell.hess@example.com"
            className="bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-gray-100 rounded-full px-6 py-2 shadow-md hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/mitchellhess"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-gray-100 rounded-full px-6 py-2 shadow-md hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Mitchell-Hess"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-gray-100 rounded-full px-6 py-2 shadow-md hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
}
