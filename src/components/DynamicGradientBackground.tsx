import { useEffect, useState } from "react";

const DynamicGradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkMobile();

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

    // Throttle mouse move for better performance
    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
        rafId = null;
      });
    };

    // Only add mouse listener on non-mobile devices
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      observer.disconnect();
    };
  }, [isMobile]);

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

  // Don't render gradient on mobile for better performance
  if (isMobile) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[1] mix-blend-multiply dark:mix-blend-screen transition-all duration-200 ease-out pointer-events-none will-change-transform"
      style={getGradientStyle()}
    />
  );
};

export default DynamicGradientBackground;
