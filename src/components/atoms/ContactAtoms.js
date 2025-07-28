
export function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="email"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full md:w-[360px] px-4 py-3 rounded-md text-[#3f3f3f] outline-none"
    />
  );
}

export function SubmitButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex mt-4 md:mt-0 px-6 py-2 bg-pinko text-white rounded-md hover:bg-pink-700"
    >
      {children}
    </button>
  );
}


export function ContactCard({ icon, title, subtitle, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 border border-white rounded-lg p-4 md:p-6 transition-colors"
    >
      <div className="bg-white text-pinko rounded-full p-3 text-xl hover:bg-pinko hover:text-white hover:shadow-md transition-transform duration-300">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-white/80">{subtitle}</p>
      </div>
    </a>
  );
}




