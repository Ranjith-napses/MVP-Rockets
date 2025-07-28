"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ label, href, onClick, scroll = true }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} scroll={scroll}>
      <span
        onClick={() => {
          if (!isActive && onClick) onClick();
        }}
        className={`px-2 py-1 text-base font-pop font-bold transition-colors ${
          isActive
            ? "text-pinko cursor-default pointer-events-none"
            : "text-pgown hover:text-pinko cursor-pointer"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
