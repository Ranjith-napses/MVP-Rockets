import WhyUsGrid from "../molecules/WhyUsGrid";

export default function WhyUsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
      <h4 className="text-pinko font-semibold text-xl  tracking-wide uppercase mb-2">MVPROCKETS</h4>
      <h2 className="text-5xl md:text-5xl font-bold text-pgown text-center mb-8">Why Us?</h2>
      <WhyUsGrid />
    </section>
  );
}
