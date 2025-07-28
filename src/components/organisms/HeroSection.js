
"use client";

import HeroText from "../molecules/HeroText";
import PrimaryButton from "../atoms/PrimaryButton";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-4 py-24 bg-white overflow-hidden">
      <HeroText />
      <PrimaryButton label="Talk to an expert" href="#contact" customClass="mt-8" />
    </section>
  );
}
