"use client";
import LogoCarousel from "@/components/molecules/LogoCarousel";
import ContactFromSection from "@/components/organisms/ContactField1";
import ContactField1 from "@/components/organisms/ContactField1";
import ContactSection from "@/components/organisms/ContactSection";
import GrowthSolutionsGrid from "@/components/organisms/GrowthSolutionsGrid";
import HeroWithTestimonials from "@/components/organisms/HeroWithTestimonials";
import InvestorsSection from "@/components/organisms/InvestorsSection";
import ServicesGridSection from "@/components/organisms/ServicesGridSection";
import StatsSection from "@/components/organisms/StatsSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import TrustedBrandsSection from "@/components/organisms/TrustedBrandsSection";
import React from "react";

export default function servicesPage() {
  return (
    <section >
    <div className="p-8">
    <HeroWithTestimonials/>
    <StatsSection/>
    
   <section className="text-center px-4 py-12 sm:py-20 md:py-24 bg-pink-400">
      <p className="text-xl sm:text-lg font-pop font-semibold text-pinko tracking-widest uppercase mb-2">
       TRUSTED by
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-pgown mb-4">
         Leading Brands
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gr font-pop max-w-3xl mx-auto">
       We’ve helped over 100+ businesses go to the market with amazing products we helped them build. And everytime, our clients, and the market just loved it!
      </p>

      <LogoCarousel/>
        <hr></hr>
         <InvestorsSection/>
  
    </section>
   
    <ServicesGridSection/>
     <ContactField1/>
    <TestimonialsSection/>
    <GrowthSolutionsGrid/>
     <ContactSection/>
    </div>
    </section>
  );
}
