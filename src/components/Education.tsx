import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of North Texas",
      date: "May 2026",
      details: [
        "Languages & Frameworks: Python, JavaScript, TypeScript, C++, Go, React, React Native, Svelte, Node.js, HTML, CSS",
        "Tools & Methodologies: AWS, Docker, Rancher, Git, CI/CD, Agile, OOP, Figma, Unit & Integration Testing",
        "Databases: PostgreSQL, MySQL, MongoDB, Firebase",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of North Texas",
      date: "May 2024",
      details: [
        "Minor in Mathematics  •  CSCE Undergraduate Cybersecurity Certificate",
        "Relevant Coursework: Analysis of Computer Algorithms, Software Development for AI, Usability Testing in Software Engineering",
      ],
    },
  ];

  return (
    <motion.section
      className="bg-white pt-32 pb-24"
      id="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Education
        </h2>
        {education.map((ed, i) => (
          <div key={i} className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-600">{ed.degree}</h3>
            <p className="text-gray-800 font-medium">
              {ed.school} — {ed.date}
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              {ed.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

