
import { ContactCard } from "../atoms/ContactAtoms";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactOptions() {
  return (
    <div className="mt-10 flex flex-col md:flex-row gap-6 justify-start">
      <ContactCard
        icon={<FaWhatsapp />}
        title="WhatsApp"
        subtitle="Send a message"
        link="https://wa.me/919087411480?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
      />
      <ContactCard
        icon={<FaEnvelope />}
        title="Email Us"
        subtitle="buildmyproject@mvprockets.com"
        link="mailto:buildmyproject@mvprockets.com"
      />
    </div>
  );
}
