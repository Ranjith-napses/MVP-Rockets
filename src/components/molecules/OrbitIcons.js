import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';


export default function OrbitIcons() {

  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  const handleScroll = () => {
    const contentPosition = contentRef.current.getBoundingClientRect();
    if (contentPosition.top < window.innerHeight && contentPosition.bottom >= 0) {
      setIsVisible(true); 
    } else {
      setIsVisible(false); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={contentRef}
      className="md:w-1/2 text-start ml-4"
    >
      <motion.h2
        className="text-6xl font-bold text-pgown mb-12"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isVisible ? 2 : 0, x: isVisible ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        Robust Tech Stack
      </motion.h2>

      <motion.p
        className="text-gr font-pop text-lg leading-7 mb-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isVisible ? 2 : 0, x: isVisible ? 0 : 2000 }}
        transition={{ duration: 1 }}
      >
        We are experts in NestJS, NextJS, TypeScript, Flutter, MySQL, NoSQL, GraphDB, Elastic search, Redis, AWS, Azure,
        Terraform, SonarQube, Cucumber, Playwright, Appium, and React Storybook.
      </motion.p>

      <motion.p
        className="text-gr font-pop text-lg leading-7"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isVisible ? 2 : 0, x: isVisible ? 0 : 2000 }}
        transition={{ duration: 1 }}
      >
        We use Extreme Programming, Test-Driven Development, CI/CD, Functional Automation, Atomic Design, SOLID Principles,
        and Saga Pattern to build high quality, scalable, production-ready products in record time.
      </motion.p>
    </div>
  );
}