import { useState } from "react";
import { ArrowIcon } from "../atoms/FaqAtoms";

export function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <h4 className={`font-semibold text-lg ${isOpen ? "text-pinko" : "text-pgown  "}`}>
          {question}
        </h4>
        <ArrowIcon isOpen={isOpen} />
      </div>
      {isOpen && (
        <p className="text-gr font-pop mt-2 transition-opacity duration-300 ease-in-out">
          {answer || "Answer will be added soon."}
        </p>
      )}
    </div>
  );
}
