"use client";

import {VentureStudioHero,} from "@/components/organisms/AllOrganisms";
import WhyUsCardsSection from "@/components/organisms/WhyUsCardsSection";
import ComplianceIcons from "@/components/molecules/ComplianceIcons";
import TrustedBrandsSection from "@/components/organisms/TrustedBrandsSection";

import InvestorsSection from "@/components/organisms/InvestorsSection";
import TeamSection from "@/components/organisms/TeamSection";
import StatsSection1 from "@/components/organisms/statsSection1";
import ContactSection from "@/components/organisms/ContactSection";


export default function VentureStudiosPage() {
  return (
    <div className="p-8">
      <VentureStudioHero />
       <StatsSection1/>
      <TrustedBrandsSection/>
        <InvestorsSection/>
      <WhyUsCardsSection/>
       <section className="bg-pgown py-2 px-4 text-center">
        <ComplianceIcons/>  
      </section>
      <TeamSection/>
      <ContactSection/>

    </div>
  );

}
