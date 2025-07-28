"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import PrivacyPolicySection from "@/components/organisms/PrivacyPolicySection";
import ContactSection from "@/components/organisms/ContactSection";

export default function PrivacyPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }
      }
    }
  }, [pathname]);

  return (
    <div className="p-8">
      <PrivacyPolicySection />
      <ContactSection/>
    </div>
  );
}
