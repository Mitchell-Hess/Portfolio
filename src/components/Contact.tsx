import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="bg-gray-100 pt-32 pb-24 text-center"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact</h2>
      <p className="text-lg text-gray-700 mb-4">
        I’m open to new opportunities and collaborations — feel free to reach out.
      </p>
      <div className="space-y-2">
        <p>
          <a
            href="mailto:mitchell.hess@outlook.com"
            className="text-blue-600 hover:underline"
          >
            mitchell.hess@outlook.com
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/mitchell-hess"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/mitchell-hess
          </a>
        </p>
        <p>
          <a
            href="https://github.com/mitchell-hess"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            github.com/mitchell-hess
          </a>
        </p>
      </div>
    </motion.section>
  );
}
