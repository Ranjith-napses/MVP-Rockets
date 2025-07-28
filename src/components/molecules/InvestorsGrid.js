
import InvestorLogo from "../atoms/InvestorLogo";

const investors = [
  { src: "/accel.svg", alt: "Accel" },
  { src: "/ycombinator.png", alt: "Y Combinator" },
  { src: "/jungle.svg", alt: "Jungle Ventures" },
  { src: "/trifecta.svg", alt: "Trifecta Capital" },
  { src: "/gfc.svg", alt: "GFC" },
  { src: "/bvp.svg", alt: "Bessemer Venture Partners" },
];

export default function InvestorsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
      {investors.map((logo, i) => (
        <InvestorLogo key={i} {...logo} />
      ))}
    </div>
  );
}