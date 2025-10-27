import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load theme preference
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);

    if (shouldBeDark) {
      document.body.classList.add("dark");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);

    if (next) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const links = ["hero", "about", "projects", "experience", "education", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 transition">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
          Mitchell Hess
        </h1>

        {/* Links + toggle */}
        <div className="flex items-center gap-5 sm:gap-8">
          {links.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="capitalize text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm sm:text-base"
            >
              {section}
            </a>
          ))}

          <button
            onClick={toggleDarkMode}
            className="text-lg sm:text-xl p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800
                       dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-yellow-300
                       transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}


