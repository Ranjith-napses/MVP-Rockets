"use client";

import { useEffect, useState } from "react";

const words = ["Startups", "Enterprises", "Consultants", "Venture Builders"];

export default function AnimatedWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (letterIndex < currentWord.length) {
        setDisplayText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex(letterIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setLetterIndex(0);
          setWordIndex((wordIndex + 1) % words.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [letterIndex, wordIndex]);

  return (
    <span className="text-pinko ml-2 inline-block min-w-[150px]">
      {displayText}
    </span>
  );
}
