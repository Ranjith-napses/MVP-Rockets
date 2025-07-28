import CaseStudySlider from "../molecules/CaseStudySlider";

export default function CaseStudySection() {
  return (
    <section id="case-studies" className=" scroll-mt-24 py-2 bg-white w-full"  >
      <div className="text-center mb-2 px-4">
        <p className="text-pinko uppercase font-semibold m-2   text-2xl">Our</p>
        <h2 className="text-4xl md:text-5xl font-pop font-bold text-pgown">Case Studies</h2>
      </div>
      <CaseStudySlider />
    </section>
  );
}

