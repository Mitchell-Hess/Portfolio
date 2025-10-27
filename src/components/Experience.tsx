import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer / Data Scientist",
      company: "PepsiCo, Inc.",
      period: "Jul 2024 – Present",
      details: [
        "Deployed a Python-based data quality framework used company-wide to automate validation and reporting for large-scale analytics datasets.",
        "Increased pipeline efficiency by 30% with parallelized error detection and optimized reporting logic.",
        "Partnered with engineering and DevOps teams to deliver scalable AWS and Rancher deployments, improving uptime and data reliability.",
      ],
    },
    {
      role: "Data Scientist Intern",
      company: "PepsiCo, Inc.",
      period: "May 2023 – Aug 2023",
      details: [
        "Built ML models to predict Frito-Lay demand and detect ingestion errors, cutting manual troubleshooting by 40%.",
        "Automated ETL workflows and visualization pipelines to boost forecasting accuracy across analytics dashboards.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Good Faith Energy",
      period: "May 2022 – Aug 2022",
      details: [
        "Built a full-stack solar pricing tool using Svelte, PostgreSQL, and Node.js to generate real-time cost estimates and ROI projections.",
        "Created Figma wireframes and responsive layouts reducing input time by 20% and improving interface consistency.",
      ],
    },
  ];

  return (
    <motion.section
      className="bg-white pt-32 pb-24"
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50"
            >
              <h3 className="text-2xl font-semibold text-blue-700">{exp.role}</h3>
              <p className="text-gray-800 font-medium mb-2">
                {exp.company} • {exp.period}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

