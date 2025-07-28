export function Text({ children, className }) {
  return <p className={`text-[#3f3f3f] text-base md:text-lg ${className}`}>{children}</p>;
}

export function Heading({ children }) {
  return <h2 className="text-pgown text-3xl md:text-5xl font-bold text-left mb-4">{children}</h2>;
}

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-6 py-3 bg-pinko text-white rounded-md hover:bg-pink-700"
    >
      {children}
    </button>
  );
}

export function ArrowIcon({ isOpen }) {
  return (
    <span className={`transition-transform text-xl ${isOpen ? 'rotate-180 text-pinko' : 'text-[#340068]'}`}>
      ▾
    </span>
  );
}
