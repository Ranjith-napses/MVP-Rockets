

"use client"; 

import { useEffect, useState } from "react";

export default function CounterText({ value, duration = 2000, suffix = "+ " }) {
  const [count, setCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    let start = 0;
    const numericValue = Number(value) || 0;
    const increment = numericValue / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        clearInterval(interval);
        setCount(numericValue);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [value, duration]);

  if (!isClient) return null;

  return (
    <span className="text-white text-3xl md:text-4xl font-extrabold text-left">
      {count}{suffix}
    </span>
  );
}
