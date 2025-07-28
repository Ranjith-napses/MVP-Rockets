"use client";

import { useState } from "react";
import Logo from "../atoms/Logo";
import PrimaryButton from "../atoms/PrimaryButton";
import MenuToggleButton from "../atoms/MenuToggleButton";
import HeaderNav from "../molecules/HeaderNav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 


  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6  flex items-center justify-between">
          <Logo />
          <HeaderNav isMobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          <div className="hidden  md:block">
            <PrimaryButton label="Contact Us" href="/contact" />
          </div>
          <MenuToggleButton onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </header>
    </>
  );
}
