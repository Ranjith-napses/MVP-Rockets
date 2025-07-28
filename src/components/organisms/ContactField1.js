
// import React from "react";
// import ContactForm from "../molecules/ContactForm";

// const ContactField1 = () => {
//   return (
//     <section className="flex flex-col md:flex-row gap-10 px-4 py-12 bg-pink-50">
//       <div className="flex-1 max-w-lg mt-40 m-20 text-start justify-center">
//         <div className="flex items-center mb-8 space-x-4 ">
//           <div className="bg-pinko w-24 h-24 flex items-center justify-center rounded-full">
//             <span className="text-white text-4xl">💬</span>
//           </div>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-bold text-pgown mb-4">
//           Get a Free Product<br></br> Consultation Today!
//         </h2>
//         <p className="text-gr font-pop max-w-lg  sm:min-w-full  text-lg">
//           Take the first step/scale your entrepreneur journey today. Talk to one of our experts about your vision and let us transform it into reality!
//         </p>
//       </div>
//       <div className="flex-1 w-full max-w-md  mx-auto px-4 ">
//         <ContactForm />
//       </div>
//     </section>
//   );
// };

// export default ContactField1;



import React from "react";
import ContactForm from "../molecules/ContactForm";

const ContactField1 = () => {
  return (
    <section className="w-full bg-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-6">
            <div className="bg-pinko w-20 h-20 flex items-center justify-center rounded-full">
              <span className="text-white text-4xl">💬</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-pgown mb-4">
            Get a Free Product<br />Consultation Today!
          </h2>
          <p className="text-gr text-lg font-pop sm:text-lg max-w-md mx-auto md:mx-0">
            Take the first step/scale your entrepreneur journey today. Talk to one of our experts about your vision and let us transform it into reality!
          </p>
        </div>

        {/* Right Form */}
        <div className="flex-1 w-full max-w-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactField1;
