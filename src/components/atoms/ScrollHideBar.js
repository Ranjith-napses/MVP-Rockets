

"use client";
import React, { useEffect, useState } from "react";

const ScrollHideBar = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHide(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
  className={`h-[4px] w-full fixed top-0 left-0 z-[60]
  bg-gradient-to-r from-pinko via-pgown to-pinko
  animate-gradientMove transition-opacity duration-500 ease-in-out
  ${hide ? "opacity-0" : "opacity-100"}`}
></div>
  );
};

export default ScrollHideBar;

