"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll(); // 0 to 1
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        scaleX,
        height: "5px",
        background: "#ff4d4d",
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollProgress;
