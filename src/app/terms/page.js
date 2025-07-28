"use client";

import ContactSection from "@/components/organisms/ContactSection";
import TermsSection from "@/components/organisms/TermsSection";

export default function termsPage() {
  return (
    <div className="p-8">
      <TermsSection/>
      <ContactSection/>
    </div>
  );
}
