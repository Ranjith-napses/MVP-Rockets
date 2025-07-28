"use client";

import Link from "next/link";
import {
  LogoTitle,
  FooterInput,
  NewsletterButton,
  SocialIcons,
} from "../atoms/FooterAtoms";
import FooterLinksGroup from "../molecules/FooterLinksGroup";

export default function FooterSection() {
  return (
    <footer className="bg-[#111229] text-white px-6 md:px-20 pt-14">
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      
        <div>
          <LogoTitle />
          <p className="text-gr font-pop text-lg max-w-xs leading-relaxed">
            Empowering startups & enterprises to turn vision into reality with rapid,
            scalable product development and amazing support.
          </p>
          <div className="mt-6 text-gr font-pop text-lg">
            <p>Wyoming, USA</p>
            <p>Bangalore, India</p>
          </div>
        </div>

      
        <FooterLinksGroup
          className="font-pop space-y-2"
          title="Quick Links"
          links={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "About Us", href: "/about-us" },
            { label: "Case Study", href: "/#case-studies" },
            { label: "Testimonials", href: "/#testimonials" },
            { label: "Contact Us", href: "/contact" },
            { label: "Venture Studios", href: "/venture-studios" },
          ]}
        />

       
        <div>
          <h3 className="text-2xl font-semibold font-pop text-gr mb-4">Join Our Newsletter</h3>
          <FooterInput />
          <NewsletterButton className="mt-4" />

          <div className="mt-8">
            <FooterLinksGroup
              className="space-y-2"
              title="Also From Us"
              links={[
                { label: "DBDaddy", href: "https://dbdaddy.dev/app/login" },
                { label: "Slingshot.is", href: "https://slingshot.is/" },
                { label: "StoriesWithDory", href: "https://storieswithdory.com/" },
              ]}
            />
          </div>
        </div>
      </div>

   
      <div className="border-t border-gray-700 mt-10 pt-6 pb-8 text-sm text-gr font-pop">
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
       
          <p className="w-full md:w-auto">© 2025 MVPRockets. All rights reserved</p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Support", href: "#" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms & Condition", href: "/terms" },
              { label: "FAQs", href: "/#faqsection" },
              { label: "GDPR", href: "/privacy#gdpr" },
              {
                label: "Security Disclosure",
                href: "/security/vulnerability-disclosure-policy.txt",
                target: "_blank",
              },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                target={link.target || "_self"}
                rel={link.target ? "noopener noreferrer" : undefined}
                className="hover:text-pinko transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

         
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
