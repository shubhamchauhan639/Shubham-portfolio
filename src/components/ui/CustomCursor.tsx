"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useSpring(0, { stiffness: 200, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 200, damping: 28 });

  const trailX = useSpring(0, { stiffness: 80, damping: 22 });
  const trailY = useSpring(0, { stiffness: 80, damping: 22 });

  useEffect(() => {
    // Detect touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      setIsVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY, trailX, trailY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer glow trail */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="fixed pointer-events-none z-[9999] top-0 left-0"
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          style={{
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: "1.5px solid var(--brand-indigo)",
            background: "transparent",
            boxShadow: isHovering
              ? "0 0 20px 6px var(--glow-indigo), 0 0 40px 12px var(--glow-violet)"
              : "0 0 12px 2px var(--glow-indigo)",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="fixed pointer-events-none z-[9999] top-0 left-0"
      >
        <motion.div
          animate={{
            width: isHovering ? 6 : 8,
            height: isHovering ? 6 : 8,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          style={{
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "var(--gradient-primary)",
            boxShadow: "0 0 10px 3px var(--glow-indigo)",
          }}
        />
      </motion.div>
    </>
  );
}
