import StatBlock1 from "../molecules/StatBlock1";

export default function StatsSection1() {
  return (
    <section className="w-full bg-pgown  flex justify-center">
      <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white text-center">
        <div className="flex justify-center">
          <StatBlock1 value={45} suffix="+" labelBottom="MVPS" />
        </div>
        <div className="flex justify-center">
          <StatBlock1 value={40} suffix="%" labelBottom="Faster time to market" />
        </div>
        <div className="flex justify-center ">
          <StatBlock1 value={140} suffix="+" labelBottom="Team Size" />
        </div>
      </div>
    </section>
  );
}
