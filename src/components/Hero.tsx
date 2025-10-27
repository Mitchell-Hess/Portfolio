import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <motion.h1
        className="text-6xl font-extrabold text-gray-900 mb-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mitchell Hess
      </motion.h1>

      <motion.h2
        className="text-2xl text-blue-600 font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Full-Stack Software Engineer / Data Scientist
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-700 mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I build performant, scalable applications using React, Node.js, and Python —
        combining full-stack engineering with data-driven design to deliver tools that
        are fast, reliable, and intuitive.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <a
          href="https://github.com/mitchell-hess"
          target="_blank"
          className="px-5 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mitchell-hess"
          target="_blank"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
