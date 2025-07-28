import { useRef, useEffect, useState } from "react";
import BrandLogo from "../atoms/BrandLogo";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const logos = [
  { src: "/alaan.svg", alt: "Alaan" },
  { src: "/streamalive.svg", alt: "StreamAlive" },
  { src: "/nirogstreet.svg", alt: "NirogStreet" },
  { src: "/jiraaf.svg", alt: "Jiraaf" },
  { src: "/hafla.svg", alt: "Haffla" },
  { src: "/bimaplan.svg", alt: "Bessemer" },
  { src: "/arisinfra.svg", alt: "GFC" },
  { src: "/ansr.svg", alt: "Y Combinator" },
  { src: "/livspace.svg", alt: "Livspace" },
  { src: "/drreddys.svg", alt: "Trifecta" },
  { src: "/deloitte.svg", alt: "Jungle Ventures" },
  { src: "/apollotyres.svg", alt: "Apollo Tyres" },
];

export default function LogoCarousel() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const duplicatedLogos = [...logos, ...logos];

  
  useEffect(() => {
    let animationFrame;
    let start;

    const animate = (time) => {
      if (!start) start = time;
      if (!paused && trackRef.current) {
        trackRef.current.scrollLeft += 1; 
        if (
          trackRef.current.scrollLeft >=
          trackRef.current.scrollWidth / 2
        ) {
          trackRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  useEffect(() => {
    const handleTouchStart = () => setPaused(true);
    const handleTouchEnd = () => setPaused(false);

    const track = trackRef.current;
    if (track) {
      track.addEventListener("touchstart", handleTouchStart);
      track.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (track) {
        track.removeEventListener("touchstart", handleTouchStart);
        track.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full  py-8 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto px-4 w-full md:w-1/2 relative">
        <div
          ref={trackRef}
          className="flex overflow-x-scroll no-scrollbar items-center"
          style={{
            whiteSpace: "nowrap",
            gap: "2.5cm",
            scrollBehavior: "auto",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-28 h-12 sm:w-32 sm:h-16 md:w-36 md:h-20 flex items-center justify-center"
            >
              <BrandLogo src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

       
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-pink-500 text-white rounded-full z-10"
          onClick={() => {
            if (trackRef.current) {
              trackRef.current.scrollLeft -= 200;
            }
          }}
        >
          <FaChevronLeft />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-pink-500 text-white rounded-full z-10"
          onClick={() => {
            if (trackRef.current) {
              trackRef.current.scrollLeft += 200;
            }
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
