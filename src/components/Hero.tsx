import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-center">
        Hi, I’m Mitchell Hess
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-2xl text-gray-700 dark:text-gray-300">
        Full-Stack Software Engineer & Data Scientist passionate about building
        scalable, data-driven applications.
      </p>
    </motion.section>
  );
}
