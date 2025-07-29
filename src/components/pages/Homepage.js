"use client";

import React from 'react';
import HeroSection from '../organisms/HeroSection';
import StatsSection from '../organisms/StatsSection';
import TrustedBrandsSection from '../organisms/TrustedBrandsSection';
import InvestorsSection from '../organisms/InvestorsSection';
import WhyUsSection from '../organisms/WhyUsSection';
import ProductDevelopmentSection from '../organisms/ProductDevelopmentSection';
import TechStackSection from '../organisms/TechStackSection';
import DomainsExpertiseSection from '../organisms/DomainsExpertiseSection';
import CEOModuleSection from '../organisms/CEOModuleSection';
import CaseStudySection from '../organisms/CaseStudySection';
import ContactSection from '../organisms/ContactSection';
import TestimonialsSection from '../organisms/TestimonialsSection';
import FaqSection from '../organisms/FaqSection';
import ContactField1 from '../organisms/ContactField1';
import ScrollReset from '../utils/ScrollReset';





export default function HomePage() {

  return (
    <>
     <ScrollReset/> 
    <section id="page">
      <HeroSection/> 
      <StatsSection/>
      <TrustedBrandsSection/>
      <InvestorsSection/>
      <WhyUsSection/>
      <ProductDevelopmentSection/>
      <TechStackSection/>
      <DomainsExpertiseSection/>
      <CEOModuleSection/>
      <div id="case-studies">
         <CaseStudySection />
      </div>
      <ContactField1/>
      <div id="testimonials">
       <TestimonialsSection />
      </div>
      <FaqSection/>
      <ContactSection/>
      </section>
    </>
  );
}