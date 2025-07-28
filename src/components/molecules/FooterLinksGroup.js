import Link from "next/link";

export default function FooterLinksGroup({ title, links, className = "" }) {
  return (
    <div className={`text-left gap-8 sm:text-left  md:text-left ${className}`}>
      <h3 className="text-2xl font-pop font-semibold text-gr mb-4">{title}</h3>
      <ul className="text-lg font-pop space-y-2 text-white">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              target={link.target || "_self"}
              rel={link.target ? "noopener noreferrer" : undefined}
              className="hover:text-pinko transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
