import Image from "next/image";

export const Subheading = ({ children }) => (
  <p className="text-pinko text-xl md:text-2xl font-semibold uppercase mb-2">
    {children}
  </p>
);

export const Heading = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-semibold text-pgown mb-4">
    {children}
  </h2>
);

export const CEOImage = ({ src, alt }) => (
  <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto">
    <Image src={src} alt={alt} width={195} height={195} className="object-cover" />
  </div>
);

export const CEOName = ({ children }) => (
  <h3 className="mt-4 text-3xl font-bold text-pgown">{children}</h3>
);

export const Paragraph = ({ children }) => (
  <p className="text-base md:text-lg text-gr text-center">{children}</p>
);

export const LinkedInCTA = () => (
  <p className="mt-6 text-lg font-medium">
    Hello 👋 Reach me on{" "}
    <a
      href="https://www.linkedin.com/in/giridharann"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pinko font-semibold border-b-2 border-pink-300 hover:border-pinko"
    >
      LinkedIn
    </a>
  </p>
);
