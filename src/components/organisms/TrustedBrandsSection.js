import dynamic from "next/dynamic";



const LogoCarousel = dynamic(() => import("../molecules/LogoCarousel"), { ssr: false });

export default function TrustedBrandsSection() {
  return (
    <div className="bg-[#FAFAFA]  py-12">
      <div className="text-center text-pinko text-xl font-semibold uppercase tracking-widest">
        Trusted By
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-pgown text-center mb-8">
        Leading Brands
      </h2>
      <LogoCarousel />
      <hr></hr>
    </div>
  );
}
