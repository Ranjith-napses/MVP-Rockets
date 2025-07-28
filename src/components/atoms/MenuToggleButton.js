export default function MenuToggleButton({ onClick }) {
  return (
    <button
      className="md:hidden text-pinko"
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}
