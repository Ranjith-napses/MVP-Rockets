export function Text({ children, className }) {
  return <p className={` font-pop text-gray-300 text-base md:text-sm ${className}`}>{children}</p>;
}

export function Heading({ children }) {
  return <h2 className="text-white text-4xl md:text-5xl font-bold text-center">{children}</h2>;
}

export function ButtonIcon({ direction, onClick }) {
  return (
    <button
  onClick={onClick}
  className="w-12 h-12 flex items-center justify-center z-10 shadow-md
             rounded-full 
             border border-gr text-pinko 
             sm:bg-transparent  sm:shadow-none"
>
  {direction === "left" ? "❮" : "❯"}
</button>
  );
}