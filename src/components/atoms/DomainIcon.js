

import Image from "next/image";

export default function DomainIcon({ icon: icon }) {
  return (
    <div className="w-12 h-12 text-white sm:w-12 sm:h-12 rounded-full bg-pinko flex items-center justify-center shrink-0">
            {icon}
          </div>

  );
}
