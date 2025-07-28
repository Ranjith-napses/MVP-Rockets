import Image from "next/image";

export default function GrowthSolutionsGrid() {
  const services = [
    {
      title: "Product Development",
      desc: "Build tailored, robust & scalable products for your business with MVPRockets.",
      image: "/PD1.jpg",
    },
    {
      title: "MVP Development",
      desc: "Start small and scale big. Build the best MVP products in no time.",
      image: "/PD2.jpg",
    },
    {
      title: "Tech Stack Modernization",
      desc: "Make your product agile and user-friendly using modern technologies.",
      image: "/PD3.jpg",
    },
    {
      title: "GenAI Product Development",
      desc: "Build intelligent products using cutting-edge Generative AI.",
      image: "/PD4.jpg",
    },
  ];

  return (
    <section className="px-4 md:px-12 lg:px-20 py-16 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
        How We Help <br /> Businesses Scale?
      </h2>
      <p className="text-lg text-gr font-pop max-w-3xl mx-auto mb-12">
        Choose from our diverse range of services and get started with what you need!
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, i) => (
          <div key={i} className="group">
            <div className="relative h-64 overflow-hidden rounded-xl shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-pgown">{item.title}</h3>
            <p className="mt-1 text-lg text-gr font-pop max-w-xs mx-auto">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
