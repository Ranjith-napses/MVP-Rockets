"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroWithTestimonials() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
    
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl  font-semibold text-pgown mb-4">
          Let’s Build Amazing <br /> Things, Together!
        </h2>
        <p className="text-gr font-pop text-xl mb-6">
          We are a leading venture studio company that bolsters innovation and
          growth into your business by building market fit MVPs.
        </p>
        <Link  href="/contact">
        <button  className="bg-pinko text-white px-6 py-3 rounded-md shadow-md">
          Talk to an expert
        </button>
        </Link>

      </div>

     
      <div className="relative flex-shrink-0 w-full  m-4 max-w-lg">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="rounded-full overflow-hidden shadow-xl"
        >
          <Image
            src="/Services-Review-Hero-Section-Circle.jpg"
            alt="Testimonials"
            width={500}
            height={500}
            className="w-full h-auto rounded-full object-cover"
          />
        </motion.div>

      
        <motion.div
          initial={{ x:-150, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute sm:top-8 sm:text-sm  top-10 -left-6 bg-[#fdeef0] rounded-xl shadow-md p-4 w-[300px] text-sm"
        >
            <div className="flex items-center gap-2">
          <p className="text-gr font-pop flex mb-2">
            “MVPRockets treats StreamAlive like their own, always exceeding
            expectations. We wish all partners were this exceptional”
          </p>
          
            <Image
              src="/Lux-DP.svg"
              alt="User 1"
              width={32}
              height={32}
              className="rounded-full"
            />
         </div>
        </motion.div>
        

      
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 right-0 bg-pgown  rounded-xl shadow-lg p-4 w-[260px] text-sm"
        >
            <div className="flex items-center gap-2">
            <Image
              src="/Saurav-DP.svg"
              alt="User 2"
              width={32}
              height={32}
              className="rounded-full"
            />
          
          <p className="mb-2 font-pop text-gr">
            “MVPRockets, led by Giri and Praveen, were crucial in building
            Jiraaf early on”
          </p>
           </div>
        </motion.div>
      </div>
     
    </section>
  );
}


