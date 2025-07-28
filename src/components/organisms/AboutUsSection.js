
"use client";
import Image from "next/image";


export default function AboutSection() {

  
  return (
    <div id="services" className="scroll-mt-24">
    <section className="relative bg-white overflow-hidden">
     
      <div className="bg-pgown text-white text-center py-20 sm:py-24 md:py-32 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2 sm:mb-4">
          Who We Are?
        </h2>
        <p className="text-sm p-2 sm:text-base md:text-xl max-w-2xl mx-auto">
          Started in the year 2017 & helped over <span className="font-bold">45+</span> businesses
          build high quality products.
        </p>
      </div>

      <div className="relative -mt-20 sm:-mt-24 md:-mt-28 z-10 max-w-6xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl">
          <Image
            src="/whoweare.png"
            alt="Team working"
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      
      <div className="relative -mt-10 sm:-mt-12 md:-mt-16 z-20 max-w-4xl mx-auto bg-white text-center px-4 sm:px-6 py-8 sm:py-10 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold font-pop text-pgown mb-4 sm:mb-6">
          About MVPRockets
        </h2>
        <p className="text-gr font-pop text-sm sm:text-base md:text-xl leading-relaxed">
          A leading product studio enabling startups & businesses transform their vision into product reality.
          We believe technology is a major force multiplier for mankind. We make it easier for businesses to
          leverage technology to solve large problems. Innovation is what we are awesome at. And we channel it to
          our product development, resulting in amazing products & outcomes!
        </p>
      </div>
    </section>
    </div>
  );
}
