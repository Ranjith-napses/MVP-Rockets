

import Image from "next/image";
import { color } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { href } from "react-router-dom";

export function LogoTitle() {
  return (
    <div className=" flex items-start mb-4 md:mb-2">
      <div className=" w-48 h-12 md:w-64 md:h-16 relative">
        <Image
          src="/founders/mvprockets-logo.svg"
          alt="MVPROCKETS Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}


export function FooterInput() {
  return (
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 rounded-md bg-white text-black mb-4"
    />
  );
}

export function NewsletterButton() {
  return (
    <button className="w-full bg-pinko text-white py-3 rounded-md">
      Receive Newsletter
    </button>
  );
}

export function SocialIcons () {
  const iconLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100064095549346" },
    { icon: FaTwitter, href: "https://x.com/mvprockets" },
    {icon:FaYoutube,href:"https://www.youtube.com/@mvp-rocket/"},
    { icon: FaPinterestP, href: "" },//dummy link
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/mvprockets" },
    { icon: FaInstagram, href: "https://instagram.com" },//dummy link
  ];

  return (
    <div className="flex gap-4">
      {iconLinks.map(({ icon: Icon, href }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pinko transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

