import NavLink from "../atoms/NavLink";
import PrimaryButton from "../atoms/PrimaryButton";
import Link from "next/link";


export default function HeaderNav({ isMobileOpen, onClose }) {
 
  const items = [
    { label: "Home", href: "/#page" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <>
    
      <nav className="hidden text-pgown md:flex items-center gap-6">
        {items.map((item) => (
          // <NavLink key={item.label} label={item.label} href={item.href} scroll={false} />
          <NavLink
  key={item.label}
  label={item.label}
  href={item.href}
  scroll={!item.href.includes("#")} // ✅ Automatically handle scrolling
/>
        ))}
      </nav>

      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 md:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       
        <div className="flex justify-end px-4 py-3 border-b">
          <button
            onClick={onClose}
            className="text-pinko text-2xl font-pop font-bold"
            aria-label="Close Menu"
          >
            ×
          </button>
        </div>

      
        <div className="h-[calc(100%-60px)] flex flex-col justify-center items-start px-6 gap-6 text-pgown font-medium">
          {items.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              onClick={onClose}
            />
          ))}
          <PrimaryButton label="Contact Us" href="/contact" />
        </div>
      </div>
    </>
  );
}
