
import Image from "next/image";

export default function InvestorLogo({ src, alt }) {
  return (
    <div className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-12 relative">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        className="transition-all duration-300"
      />
    </div>
  );
}
