"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Inertial page scrolling. Skipped for users who prefer reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.09, smoothWheel: true });
    return () => lenis.destroy();
  }, []);

  return null;
}
