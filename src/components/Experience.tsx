import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer / Data Scientist",
      company: "PepsiCo, Inc.",
      logo: "/assets/pepsico_logo.jpg",
      period: "Jul 2024 – Present",
      details: [
        "Built a Python data-quality framework adopted company-wide for automated validation and reporting.",
        "Improved pipeline efficiency by 30% through optimized parallelized logic.",
        "Partnered with DevOps to deploy on AWS using Docker and Rancher for scalability.",
      ],
    },
    {
      role: "Data Scientist Intern",
      company: "PepsiCo, Inc.",
      logo: "/assets/pepsico_logo.jpg",
      period: "May 2023 – Aug 2023",
      details: [
        "Developed ML models to predict demand and detect ETL anomalies, reducing manual debug time 40%.",
        "Automated data-quality visualizations and forecasting dashboards.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Good Faith Energy",
      logo: "/assets/good_faith_energy_logo.jpg",
      period: "May 2022 – Aug 2022",
      details: [
        "Built a solar-pricing tool with Svelte, Node.js, and PostgreSQL for real-time quotes.",
        "Reduced quote generation time 20% with responsive UI and streamlined workflow.",
      ],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-32 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md border-4 border-gray-100 dark:border-gray-700"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-400">
                    {exp.role}
                  </h3>
                  <p className="font-medium mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {exp.details.map((d, j) => (
                      <li key={j}>{d}</li>
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
