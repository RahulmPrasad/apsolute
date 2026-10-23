"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MousePointer = () => {
  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring for smooth animation
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  // State for pointer color
  const [color, setColor] = useState("#43b345"); // default green

  useEffect(() => {
    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    // Observe footer visibility
    const footer = document.querySelector(".Footer");
    let observer;
    if (footer) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setColor("#FFF"); // change color when footer is visible
          } else {
            setColor("#43b345"); // default color
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(footer);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (observer && footer) observer.unobserve(footer);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: color,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default MousePointer;
