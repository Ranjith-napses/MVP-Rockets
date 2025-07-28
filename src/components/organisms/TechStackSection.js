import TechIcon from "../atoms/TechIcon";
import OrbitIcons from "../molecules/OrbitIcons";


export default function TechStackSection() {

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <OrbitIcons />
        <div className="md:w-1/2 flex justify-center">
          <TechIcon />
        </div>
      </div>
    </section>
  );
}