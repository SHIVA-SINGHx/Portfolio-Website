import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PixelPetCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [direction, setDirection] = useState(1);
  const [sparkles, setSparkles] = useState([]);

  // Direct DOM references for 60fps/120fps stutter-free hardware accelerated tracking
  const petRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Only enable on desktop/mouse devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let sparkTimer = 0;

    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Sparkles trail on move (throttled smoothly)
      sparkTimer++;
      if (sparkTimer % 4 === 0) {
        const id = Math.random();
        setSparkles((prev) => [
          ...prev.slice(-6),
          {
            id,
            x: e.clientX,
            y: e.clientY,
            color: Math.random() > 0.5 ? "#34d399" : "#38bdf8",
          },
        ]);
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 400);
      }

      // Check clickable element
      const target = e.target;
      if (target) {
        const clickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button";
        setIsHoveringClickable(!!clickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth 60fps requestAnimationFrame loop (Zero lag, buttery smooth lerp)
    const updatePosition = () => {
      // Offset companion nicely next to the cursor tip (18px right, 14px down)
      const targetX = targetRef.current.x + 18;
      const targetY = targetRef.current.y + 14;

      const dx = targetX - posRef.current.x;
      const dy = targetY - posRef.current.y;

      // Snappy yet fluid lerp factor
      posRef.current.x += dx * 0.35;
      posRef.current.y += dy * 0.35;

      if (Math.abs(dx) > 1) {
        setDirection(dx > 0 ? 1 : -1);
      }

      if (petRef.current) {
        petRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) scaleX(${direction})`;
      }

      animationFrameId.current = requestAnimationFrame(updatePosition);
    };

    animationFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isVisible, direction]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Micro Sparkles Trail */}
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0.9, scale: 1 }}
            animate={{ opacity: 0, scale: 0.2, y: -10 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: s.x,
              top: s.y,
              width: 3,
              height: 3,
              backgroundColor: s.color,
              borderRadius: "1px",
              boxShadow: `0 0 5px ${s.color}`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* GPU Accelerated Pixel Companion (Zero React Re-render Lag) */}
      <div
        ref={petRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          willChange: "transform",
        }}
        className="flex flex-col items-center select-none"
      >
        {/* Cute reaction bubble on clickable items */}
        <AnimatePresence>
          {isHoveringClickable && (
            <motion.div
              initial={{ opacity: 0, y: 3, scale: 0.7 }}
              animate={{ opacity: 1, y: -4, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-400 text-black font-extrabold shadow-sm select-none"
            >
              click!
            </motion.div>
          )}
        </AnimatePresence>

        {/* 16x16 Pixel Companion Mascot */}
        <div className="drop-shadow-[0_2px_8px_rgba(52,211,153,0.35)]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cat Ears */}
            <rect x="2" y="1" width="3" height="3" fill="#34d399" />
            <rect x="11" y="1" width="3" height="3" fill="#34d399" />
            <rect x="3" y="2" width="1" height="1" fill="#ec4899" />
            <rect x="12" y="2" width="1" height="1" fill="#ec4899" />

            {/* Head / Body */}
            <rect x="2" y="3" width="12" height="9" fill="#18181b" stroke="#34d399" strokeWidth="0.8" />

            {/* Eyes */}
            {isHoveringClickable ? (
              // Joyful star eyes when hovering interactive link
              <>
                <rect x="4" y="5" width="3" height="1" fill="#38bdf8" />
                <rect x="5" y="4" width="1" height="3" fill="#38bdf8" />
                <rect x="9" y="5" width="3" height="1" fill="#38bdf8" />
                <rect x="10" y="4" width="1" height="3" fill="#38bdf8" />
              </>
            ) : (
              // Calm pixel eyes with sparkle reflection
              <>
                <rect x="4" y="5" width="2" height="2" fill="#38bdf8" />
                <rect x="5" y="5" width="1" height="1" fill="#ffffff" />
                <rect x="10" y="5" width="2" height="2" fill="#38bdf8" />
                <rect x="11" y="5" width="1" height="1" fill="#ffffff" />
              </>
            )}

            {/* Cheeks & Nose */}
            <rect x="7.5" y="7" width="1" height="1" fill="#ec4899" />
            <rect x="3" y="7" width="1.5" height="1" fill="#f43f5e" opacity="0.6" />
            <rect x="11.5" y="7" width="1.5" height="1" fill="#f43f5e" opacity="0.6" />

            {/* Paws */}
            <rect x="3" y="12" width="2" height="2" fill="#34d399" />
            <rect x="11" y="12" width="2" height="2" fill="#34d399" />
            <rect x="7" y="12" width="2" height="1.5" fill="#10b981" />
          </svg>
        </div>
      </div>
    </div>
  );
};
