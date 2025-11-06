import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer / Data Scientist",
      company: "PepsiCo, Inc.",
      logo: "/assets/pepsico_logo.jpg",
      period: "Jul 2024 to Present",
      details: [
        "Created a Python framework that validates data quality across pipelines, which the team adopted company-wide for consistency. It automatically flags issues and generates reports, saving hours of manual checks.",
        "Improved pipeline efficiency by 30% through parallelized error detection and optimized reporting logic, making data processing significantly faster during peak periods.",
        "Collaborated with engineering and DevOps teams to deliver scalable Azure and Docker deployments, boosting system uptime and data reliability across the platform.",
        "Worked closely with business teams to develop new features that surface key insights on market share and other critical metrics, helping stakeholders make data-driven decisions.",
      ],
    },
    {
      role: "Data Scientist Intern",
      company: "PepsiCo, Inc.",
      logo: "/assets/pepsico_logo.jpg",
      period: "May 2023 to Aug 2023",
      details: [
        "Built ML models that predict demand patterns and catch ETL issues before they cause problems. This reduced the time engineers spent debugging by about 40%.",
        "Set up automated dashboards that visualize data quality metrics and forecasts, making it easier for the team to spot trends and anomalies at a glance.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Good Faith Energy",
      logo: "/assets/good_faith_energy_logo.jpg",
      period: "May 2022 to Aug 2022",
      details: [
        "Developed a solar pricing tool using Svelte, Node.js, and PostgreSQL that generates real-time quotes based on customer inputs and current pricing data.",
        "Streamlined the quoting workflow by building a responsive interface that cut generation time by 20%, helping the sales team close deals faster.",
      ],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="relative py-20 sm:py-32 bg-white dark:bg-slate-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-slate-800/30 dark:to-slate-900/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Where I've worked and what I've built
        </motion.p>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-slate-700"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition"></div>
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-lg border-2 border-white dark:border-slate-800"
                    />
                  </div>
                </motion.div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.details.map((d, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * j }}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-relaxed">{d}</span>
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
