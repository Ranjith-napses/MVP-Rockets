
"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Subheading,
  Heading,
  CEOImage,
  CEOName,
  Paragraph,
  LinkedInCTA,
} from "../atoms/CEOModuleAtoms";

export default function CEOModuleCard() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }else{
        controls.start("hidden");
    }
  }, [controls, inView]);

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={slideInFromRight}
      initial="hidden"
      animate={controls}
      className="text-center max-w-5xl mx-auto px-4 md:px-6"
    >
      <Subheading>How it started!</Subheading>
      <Heading>Message from CEO</Heading>
      <CEOImage src="/Giridharan-Natarajan-1.jpg" alt="Giridharan Natarajan" />
      <CEOName>Giridharan Natarajan</CEOName>

      <div className="mt-4 space-y-4  font-pop text-left  ">
        <Paragraph>
          Welcome to MVPRockets! We believe startups and new tech businesses
          can change the world, and launching a successful product has never
          been easier. However, there’s a lot of noise around this. I & my
          co-founder founded MVPRockets with a singular vision of
          creating/helping create 1000 successful ventures and impact over a
          billion lives.
        </Paragraph>

        <Paragraph>
          As the CEO of MVPRockets today, I’m proud to lead a{" "}
             <Link href="/about-us#teams">
                <span className="text-pinko  ">
                       team of 140+ Rockstars
                 </span>
               </Link>{" "}
          building high quality products for high quality businesses. In just
          four years, we’ve partnered with over 30 businesses, launched multiple
          high-quality products, and impacted millions of lives and have built
          very strong reputation of being the best in New product development.
          We are on an exciting journey to do so much more.
        </Paragraph>

        <Paragraph>
          If you have an idea and need a partner to build a generation-defining
          company, talk to us.
        </Paragraph>
      </div>

      <LinkedInCTA />
    </motion.div>
  );
}
