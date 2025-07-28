import Image from "next/image";



export default function ServicesGridSection() {

 
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
 
    <section className=" px-4 md:px-12 lg:px-20 py-12 bg-white text-center">
      <h2 className="text-3xl md:text-4xl  font-bold text-purple-900 mb-10">
        How We Help <br /> Businesses Scale?
      </h2>

      <div className="grid  md:grid-cols-2 lg:grid-cols-2">
        {services.map((item, i) => (
          <div key={i} className="group max-w-sm mx-auto">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold font-pop text-pgown">{item.title}</h3>
            <p className="mt-1 text-gr font-pop  text-lg mb-8">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
   
  );
}
