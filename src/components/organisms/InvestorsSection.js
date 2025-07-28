
import InvestorsGrid from "../molecules/InvestorsGrid";

export default function InvestorsSection() {
  return (
    <section className="bg-[#FAFAFA] pt-16 pb-8 md:pt-8 md:pb-16 px-4 text-center">
      <h2 className="text-pgown text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
        Some of the best investors have backed our startups/clients
      </h2>
      <InvestorsGrid />
    </section>
  );
}
