  import StatBlock from "../molecules/StatBlock";

  export default function StatsSection() {
    return (
      <section className="w-full bg-pgown ">
        
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white">
          <StatBlock value={45} labelRight="Products" labelBottom="Built" />
          <StatBlock value={140} labelRight="Growing" labelBottom="Team" />
          <StatBlock value={5} labelRight="Countries" labelBottom="& Expanding" />
        </div>
        </section>
    );
  }


