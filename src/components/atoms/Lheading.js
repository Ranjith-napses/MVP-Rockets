export default function Heading({ text, className }) {
  return <h1 className={`text-3xl font-bold ${className}`}>{text}</h1>;
}