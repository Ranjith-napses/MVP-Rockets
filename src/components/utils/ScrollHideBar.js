"use client";
import { useEffect, useState } from "react";

export default function ScrollHideBar() {
  const [showBar, setShowBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
      
        setShowBar(false);
      } else {
        
        setShowBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[3px] z-50 transition-opacity duration-500 ease-in-out ${
        showBar ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x`}
    ></div>
  );
}
