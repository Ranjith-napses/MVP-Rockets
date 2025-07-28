"use client";
import Image from "next/image";
import { useState } from "react";

const ContactFormBlock = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>

      <div className="w-full mt-16 bg-pgown text-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center font-pop max-w-2xl mx-auto text-base sm:text-lg">
          Have a business requirement? Drop your details below and one of our
          team members will get in touch with you and help you understand how
          MVPRockets can help you!
        </p>
      </div>

  
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
        
          <form className="w-full md:max-w-lg border rounded-lg bg-white border-b border-gray-200 shadow-md shadow-black/5 p-6 sm:p-8 space-y-6">
            {[ 
              { label: "Your name", name: "name", type: "text" },
              { label: "Your email", name: "email", type: "email" },
              { label: "Contact Number (optional)", name: "phone", type: "text" },
              { label: "Subject", name: "subject", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block mb-2 font-semibold text-pgown">
                  {field.label}
                </label>
                <input
                  className="w-full border border-gray-200 rounded p-3 text-sm"
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div>
              <label className="block mb-2 font-semibold text-pgown">
                Your message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded p-3 text-sm h-32"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-pinko min-w-[180px] text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition"
              >
                Submit
              </button>
            </div>
          </form>

        
          <div className="w-full md:w-1/3 space-y-8">
            {[
              {
                icon: "/icons/whatsapp-logo-light.svg",
                title: "WhatsApp",
                desc: "Send a message",
              },
              {
                icon: "/icons/envelope-light.svg",
                title: "Email Us",
                desc: "buildmyproject@mvprockets.com",
              },
              {
                icon: "/icons/map-pin-fill.svg",
                title: "Locate Us",
                desc: "Wyoming, USA\nBangalore, India",
              },
            ].map((info, idx) => (
              <div className="flex items-start gap-4" key={idx}>
                <div className="bg-pink-100 p-2 rounded-full shrink-0">
                  <Image src={info.icon} alt={info.title} width={24} height={24} />
                </div>
                <div>
                  <p className="font-semibold font-pop text-xl text-pgown">
                    {info.title}
                  </p>
                  <p className="  text-gr font-pop  text-base whitespace-pre-line">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormBlock;
