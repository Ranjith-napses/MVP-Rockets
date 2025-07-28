
"use client";
import React, { useEffect, useRef } from "react";

export function VentureStudioHero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const animate = () => {
      el.classList.remove("opacity-0", "-translate-x-60");
      el.classList.add("opacity-100", "translate-x-0");
    };

  
    if (window.innerWidth < 768) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(el); 
        }
      },
      { threshold: 0.2 } 
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/icons/pexels-hillaryfox-1595385.jpg')",
      }}
    >
      
      <div className="absolute inset-0 bg-pgown/70 z-0" />

      
      <div
        ref={ref}
        className="relative z-10 max-w-3xl text-center opacity-0 -translate-x-60 transform transition-all duration-[1200ms] delay-[200ms] ease-out"
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Product Partner for <span className="text-pinko">Venture Studios</span>
        </h1>
        <p className="text-lg font-pop md:text-xl mb-6">
          We are startup product experts & we take care of your product woes.
          <br /> So, you can take care of the venture.
        </p>
        <button className="bg-pinko hover:bg-pink-600 text-white py-2 px-6 rounded-lg transition-all duration-300">
          Talk to an expert
        </button>
      </div>
    </section>
  );
}
