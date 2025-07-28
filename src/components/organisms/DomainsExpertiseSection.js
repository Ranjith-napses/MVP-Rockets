

import ComplianceIcons from "../molecules/ComplianceIcons";
import DomainCard from "../molecules/DomainCard";
import { 
  SquareCode ,
  Store,
  Cloudy,
  Stethoscope,
  Factory,
  Car,
  HandCoins,
  MonitorPlay
 } from 'lucide-react';


const domains = [
  {
    icon:<SquareCode />,
    title: "EdTech",
    products: 3,
    description: "Transforming the EdTech industry by building solutions that empower students, educators, and all-size institutions.",
  },
  {
    icon: <Store />,
    title: "Marketplaces",
    products: 3,
    description: "User-friendly marketplaces with all the features needed to build a perfect eCommerce venture.",
  },
  {
    icon: <Cloudy />,
    title: "SaaS",
    products: 3,
    description: "Re-inventing the SaaS industry by building reliable & SaaS products tailored to meet business needs.",
  },
  {
    icon:   <Stethoscope />,
    title: "Healthcare",
    products: 3,
    description: "Making healthcare more safe by improving patient care and streamlining processes with technology.",
  },
  {
    icon:  <Factory />,
    title: "Supply Chain/Logistics",
    products: 2,
    description: "Doubling efficiency & cutting with innovative inventory management, real-time tracking and streamlining operations.",
  },
  {
    icon:<Car/>,
    title: "Automotive",
    products: 2,
    description: "Transforming the automotive sector with advanced connected car software, driver-assistance software and more.",
  },
  {
    icon:  <HandCoins />,
    title: "Fintech",
    products: 6,
    description: "Making the Fintech space safer with secure, robust and interactive digital banking applications, payment gateways, etc.",
  },
  {
    icon: <MonitorPlay />,
    title: "Others",
    products: 8,
    description: "Customized tech solutions for any business sector - innovation tailored & delivered across industries!",
  },
];

export default function DomainsExpertiseSection() {
  return (
    <section className="bg-pgown py-16 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Domains Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {domains.map((domain, index) => (
          <DomainCard key={index} {...domain} />
        ))}
      </div>
      <hr></hr>
      <ComplianceIcons/>
    </section>
  );
}
