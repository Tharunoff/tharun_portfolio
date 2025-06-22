import { useEffect, useRef } from "react";

const Spotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        const { clientX: x, clientY: y } = e;
        spotlightRef.current.style.background = `
          radial-gradient(
            600px at ${x}px ${y}px,
            rgba(16, 136, 255, 0.15),
            transparent 80%
          )
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-0 transition duration-300"
    ></div>
  );
};

export default Spotlight;
