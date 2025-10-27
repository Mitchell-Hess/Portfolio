import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = ["top", "experience", "projects", "education", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, offset: 0 };
        const rect = el.getBoundingClientRect();
        return { id, offset: rect.top - 120 };
      });

      const visible = offsets.find((s) => s.offset >= -150 && s.offset <= 150);
      if (visible) setActive(visible.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#top", id: "top" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-xl font-bold text-blue-600 hover:text-blue-700 transition"
        >
          MH
        </a>
        <ul className="flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition-colors ${
                  active === item.id
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
