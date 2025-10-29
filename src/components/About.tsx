import { motion } from "framer-motion";
import MusicShowcase from "./widgets/MusicShowcase";
import GuardiansTracker from "./widgets/GuardiansTracker";

export default function About() {
  const skills = [
    { name: "React & TypeScript", icon: "⚛️" },
    { name: "Python & ML", icon: "🐍" },
    { name: "Node.js", icon: "🟢" },
    { name: "AWS & Docker", icon: "☁️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git & CI/CD", icon: "git" },
  ];

  return (
    <motion.section
      id="about"
      className="relative py-20 sm:py-32 bg-white dark:bg-slate-900 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800/30 dark:to-slate-900/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <img
                src="/assets/profile_image.jpg"
                alt="Mitchell Hess"
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-800"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer / Data Scientist</span> at <span className="font-semibold">PepsiCo</span>, where I build data quality frameworks and optimize pipelines to help teams work more efficiently. Most of my day is spent in Python and Databricks, trying to make complicated things simple.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                When I'm not coding, I'm usually playing guitar in my band <span className="font-semibold text-purple-600 dark:text-purple-400">eileen</span>, climbing at the gym, or watching the Guardians lose in heartbreaking fashion. I tend to dive deep into whatever I'm interested in at the moment.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Technologies I work with
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-slate-600"
                  >
                    <div className="text-2xl mb-2">
                      {skill.icon === "git" ? (
                        <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.605-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                        </svg>
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* API Widgets - Full Width Section */}
        <motion.div
          className="mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            What I'm Into Right Now
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <MusicShowcase />
            <GuardiansTracker />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
