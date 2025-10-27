import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "M.S. Computer Science",
      school: "University of North Texas",
      logo: "/assets/northtexas_logo.jpg",
      date: "Expected May 2026",
      bullets: [
        "Focus: AI, Data Mining, Advanced Software Engineering",
        "GPA: 4.0 / 4.0",
      ],
    },
    {
      degree: "B.S. Computer Science",
      school: "University of North Texas",
      logo: "/assets/northtexas_logo.jpg",
      date: "May 2024",
      bullets: [
        "Minor in Mathematics, Cybersecurity Certificate",
        "Relevant Courses: Algorithms, AI Development, Usability Testing",
      ],
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-32 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-10">
          {education.map((ed, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <img
                src={ed.logo}
                alt={`${ed.school} logo`}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md border-4 border-gray-100 dark:border-gray-700"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-400">
                  {ed.degree}
                </h3>
                <p className="font-medium mb-2">
                  {ed.school} — {ed.date}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  {ed.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
