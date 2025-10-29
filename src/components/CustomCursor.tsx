import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is touch-enabled (mobile/tablet)
    const checkIfMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkIfMobile();

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(!!isClickable);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`rounded-full transition-all duration-200 ring-1 ring-white/40 ${
          isPointer
            ? "w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 scale-125 shadow-lg shadow-purple-500/50"
            : "w-3 h-3 bg-gradient-to-br from-blue-600 to-purple-600 shadow-md shadow-blue-500/30"
        }`}
      />
    </div>
  );
};

export default CustomCursor;
