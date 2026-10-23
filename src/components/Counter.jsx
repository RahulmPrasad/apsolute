"use client";

import React, { useEffect, useState } from "react";

// duration is in ms
const Counter = ({ target, label, duration = 5000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // 16ms ≈ 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="count-items">
      <span className="number-count">{count}+</span>
      <span className="text-count">{label}</span>
    </div>
  );
};

export default Counter;
