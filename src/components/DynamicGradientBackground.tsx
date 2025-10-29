import { useEffect, useState } from "react";

const DynamicGradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleMouseMove = (e: MouseEvent) => {
      // Convert mouse position to percentage
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Calculate gradient colors based on cursor position
  const getGradientStyle = () => {
    const { x, y } = mousePosition;

    if (isDark) {
      // Dark mode: subtle gradient spotlight
      return {
        background: `radial-gradient(
          circle 150px at ${x}% ${y}%,
          rgba(59, 130, 246, 0.25) 0%,
          rgba(139, 92, 246, 0.15) 50%,
          transparent 100%
        )`,
      };
    } else {
      // Light mode: subtle gradient spotlight
      return {
        background: `radial-gradient(
          circle 150px at ${x}% ${y}%,
          rgba(96, 165, 250, 0.3) 0%,
          rgba(167, 139, 250, 0.2) 50%,
          transparent 100%
        )`,
      };
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1] mix-blend-multiply dark:mix-blend-screen transition-all duration-200 ease-out pointer-events-none"
      style={getGradientStyle()}
    />
  );
};

export default DynamicGradientBackground;
