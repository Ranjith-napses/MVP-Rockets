
export default function PrimaryButton({ label, href = "#" }) {
  return (
    <a
      href={href}
      className="bg-pinko text-white mt-2 mb-2 text-sm md:text-base font-semibold px-6 py-3 rounded hover:bg-pink-600 transition whitespace-nowrap inline-block"
    >
      {label}
    </a>
  );
}
