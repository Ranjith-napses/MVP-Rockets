import React from "react";

export const InputField = ({ label, name, type = "text", placeholder, value, onChange, error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-bold text-pgown mb-1">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pinko ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export const TextAreaField = ({ label, name, placeholder, value, onChange, error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-pgown mb-1">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={4}
      className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pinko ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export const SelectField = ({ label, name, options, value, onChange, error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-pgown mb-1">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4  text-gr py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pinko ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Which service do you need?</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export const PrimaryButton = ({ text }) => (
  <button
    type="submit"
    className="w-full bg-pinko hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
  >
    {text}
  </button>
);
