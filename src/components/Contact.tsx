import { motion } from "framer-motion";

export default function Contact() {
  const contactMethods = [
    {
      name: "Email",
      href: "mailto:mitchell.hess@outlook.com",
      icon: "📧",
      label: "mitchell.hess@outlook.com",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mitchellhess",
      icon: "💼",
      label: "linkedin.com/in/mitchellhess",
    },
    {
      name: "GitHub",
      href: "https://github.com/Mitchell-Hess",
      icon: "💻",
      label: "github.com/Mitchell-Hess",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative py-20 sm:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl mb-16 max-w-3xl mx-auto text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I'm always open to new opportunities, collaborations, and interesting projects.
          Let's connect and build something amazing!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target={method.name !== "Email" ? "_blank" : undefined}
              rel={method.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-white/20 hover:border-white/40"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative space-y-4">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold">{method.name}</h3>
                <p className="text-white/80 text-sm break-all">{method.label}</p>
                <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                  <span>Connect</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer text */}
        <motion.div
          className="pt-12 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/70 text-sm sm:text-base">
            © 2025 Mitchell Hess. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
