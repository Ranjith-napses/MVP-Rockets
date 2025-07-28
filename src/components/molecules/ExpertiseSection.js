// // molecules/ExpertiseSection.js
// import React, { useState, useEffect } from 'react';
// import ExpertiseCard from "../atoms/ExpertiseCard"; // Assuming you have this atom for each card
// import { FaLaptopCode, FaStoreAlt, FaCloud, FaHeartbeat } from "react-icons/fa"; // Importing icons

// // Define the expertiseData array
// const expertiseData = [
//   {
//     title: "EdTech",
//     description: "Transforming the EdTech industry by building solutions that empower students, educators, and all-size institutions.",
//     icon: <FaLaptopCode />,
//   },
//   {
//     title: "Marketplaces",
//     description: "User-friendly marketplaces with all the features needed to build a perfect eCommerce venture.",
//     icon: <FaStoreAlt />,
//   },
//   {
//     title: "SaaS",
//     description: "Re-inventing the SaaS industry by building reliable & SaaS products tailored to meet business needs.",
//     icon: <FaCloud />,
//   },
//   {
//     title: "Healthcare",
//     description: "Making healthcare more safe by improving patient care and streamlining processes with technology.",
//     icon: <FaHeartbeat />,
//   },
//   {
//     title: "Finance",
//     description: "Transforming financial services through technology, bringing speed, transparency, and accessibility.",
//     icon: <FaLaptopCode />,
//   },
//   // Add more items as needed
// ];

// const ExpertiseSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const section = document.querySelector(".expertise-section");
//     const rect = section.getBoundingClientRect();
//     if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
//       setIsVisible(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       className={`expertise-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mt-16 ${
//         isVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
//       }`}
//     >
//       {expertiseData.map((item, index) => (
//         <div
//           key={index}
//           className={`w-full transform transition duration-500 ease-in-out ${
//             // For large screens, place items in multiple rows automatically
//             "flex flex-col" // Ensure each card is a column
//           }`}
//         >
//           <ExpertiseCard {...item} />
//         </div>
//       ))}
//     </section>
//   );
// };

// export default ExpertiseSection;
