import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
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

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Simple cursor dot with minimal movement */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          willChange: "transform",
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              isPointer
                ? "bg-gradient-to-br from-blue-600 to-purple-600 scale-125 shadow-lg shadow-purple-500/50"
                : "bg-gradient-to-br from-blue-600 to-purple-600 shadow-md shadow-blue-500/30"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
