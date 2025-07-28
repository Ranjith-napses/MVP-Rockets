import { useState } from "react";
import { Input, SubmitButton } from "../atoms/ContactAtoms";
import ContactOptions from "../molecules/ContactOptions";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-pgown py-16 px-4 md:px-12 lg:px-24 text-white">
   
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10 max-w-6xl mx-auto text-left">
        <h2 className="text-3xl md:text-3xl font-bold leading-tight md:max-w-lg">
          Start Transforming Your Vision  Into Reality, Today!
        </h2>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-center">
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton onClick={handleSubmit}>Talk to an expert</SubmitButton>
        </div>
      </div>

      {submitted && (
        <div className="text-end text-green-300 border border-green-500 px-4 py-2 mx-auto w-fit rounded mb-6">
          Thank you for your message. It has been sent.
        </div>
      )}

      <hr className="my-10 border-white/20 w-full max-w-5xl mx-auto" />

      <ContactOptions />
    </section>
  );
}
