"use client";

import { motion } from "framer-motion";
import AnimatedWord from "../atoms/AnimatedWord";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}  
      animate={{ opacity: 1, y: 0 }}     
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto overflow-hidden"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-pgown leading-snug text-center">
        Product & GenAI Partners for
        <br />
        the Top <AnimatedWord />
      </h1>

      <p className="mt-6 text-gr font-pop text-lg max-w-xl mx-auto text-center">
        Not just the bare-bone MVPs. Launch production-ready, compliant, secure products in 12 weeks
      </p>
    </motion.div>
  );
}
