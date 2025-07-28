"use client";
import LogoCarousel from "@/components/molecules/LogoCarousel";
import AboutUsSection from "@/components/organisms/AboutUsSection";
import { MeetTeamSection } from "@/components/organisms/AllOrganisms";
import ContactSection from "@/components/organisms/ContactSection";
import InvestorsSection from "@/components/organisms/InvestorsSection";
import StatsSection from "@/components/organisms/StatsSection";
import TeamSection from "@/components/organisms/TeamSection";
import TimelineSection from "@/components/organisms/TimelineSection";

export default function AboutusPage() {
  return (
    <div className="p-8">
      <AboutUsSection />
      <StatsSection/>

        <section className="text-center px-4 py-12 sm:py-20 md:py-24 bg-white">
      <p className="text-xl sm:text-lg font-pop font-semibold text-pinko tracking-widest uppercase mb-2">
        Leading Brands
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-pgown mb-4">
        Our Clients
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gr font-pop max-w-3xl mx-auto">
        We’ve helped over 100 businesses kick start their journey. And they love working with us!
      </p>
        <LogoCarousel/>
    </section >
    <InvestorsSection/>
      <TimelineSection/>
      <section id="teams">
    <TeamSection/>
    </section>
     <ContactSection/>
   
     

    
    </div>
  );
}
