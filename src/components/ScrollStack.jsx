"use client";

import { Children, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export const ScrollStackItem = ({ children }) => children;

// One sticky card. As the cards after it scroll over it, it shrinks, tilts back
// slightly and dims, so the stack reads as depth instead of overlap.
const StackCard = ({ children, index, total, progress, itemScale, reduceMotion }) => {
  const start = index / total;
  const targetScale = 1 - (total - 1 - index) * itemScale;

  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const rotateX = useTransform(progress, [start, 1], [0, index === total - 1 ? 0 : 6]);
  const shade = useTransform(progress, [start, 1], [0, index === total - 1 ? 0 : 0.35]);

  return (
    <div className="scroll-stack-item" style={{ "--i": index }}>
      <motion.div
        className="scroll-stack-card"
        style={reduceMotion ? undefined : { scale, rotateX }}
        initial={reduceMotion ? false : { opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
        {!reduceMotion && <motion.div className="scroll-stack-shade" style={{ opacity: shade }} />}
      </motion.div>
    </div>
  );
};

const ScrollStack = ({ children, className = "", itemScale = 0.05 }) => {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const items = Children.toArray(children);

  return (
    <div ref={containerRef} className={`scroll-stack ${className}`.trim()}>
      {items.map((child, i) => (
        <StackCard
          key={child.key ?? i}
          index={i}
          total={items.length}
          progress={scrollYProgress}
          itemScale={itemScale}
          reduceMotion={reduceMotion}
        >
          {child}
        </StackCard>
      ))}
    </div>
  );
};

export default ScrollStack;
