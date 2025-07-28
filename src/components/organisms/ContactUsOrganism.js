"use client";
import React from "react";
import ContactFormBlock from "../molecules/ContactFormBlock";
import ContactSection from "../organisms/ContactSection";

const ContactUsOrganism  = () => {
  return (
    <section id="contact" className="w-full bg-white">
      <ContactFormBlock />
      <ContactSection />
    </section>
  );
};

export default ContactUsOrganism;
