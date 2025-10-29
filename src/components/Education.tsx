import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "M.S. Computer Science",
      school: "University of North Texas",
      logo: "/assets/northtexas_logo.jpg",
      date: "Expected May 2026",
      bullets: [
        "Highlighted Courses: Software Development for AI, Usability Testing in Software Engineering, Analysis of Computer Algorithms",
        "GPA: 4.0",
      ],
    },
    {
      degree: "B.S. Computer Science",
      school: "University of North Texas",
      logo: "/assets/northtexas_logo.jpg",
      date: "May 2024",
      bullets: [
        "Minor in Mathematics",
        "Awarded the CSCE Undergrduate Cybersecurity Certificate",
        "Member of the Guitar Club",
        "Magna Cum Laude"
      ],
    },
  ];

  return (
    <motion.section
      id="education"
      className="relative py-20 sm:py-32 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:to-slate-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Education
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Academic foundation in Computer Science and Software Engineering
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-slate-700"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative flex flex-col items-start gap-6">
                <motion.div
                  className="flex-shrink-0 mx-auto sm:mx-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition"></div>
                    <img
                      src={ed.logo}
                      alt={`${ed.school} logo`}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-lg border-2 border-white dark:border-slate-800"
                    />
                  </div>
                </motion.div>

                <div className="flex-1 w-full space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {ed.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {ed.school}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {ed.date}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {ed.bullets.map((b, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * j }}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <span className="leading-relaxed">{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
