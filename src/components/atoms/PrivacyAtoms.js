
const HeadingText = ({ children }) => (
  <h3 className="text-lg md:text-2xl font-bold text-pgown mb-2">
    {children}
  </h3>
);

const Heading1 = ({ children }) => (
  <h1 className="text-3xl md:text-4xl  text-center font-bold text-pgown mb-4">
    {children}
  </h1>
);


const ParagraphText = ({ children }) => (
  <p className="text-xl text-gr font-pop mb-2">{children}</p>
);
const ParagraphText1 = ({ children }) => (
  <p className="text-lg text-gr font-pop mb-2">{children}</p>
);

const ListItem = ({ children }) => (
  <li className="font-po list-disc list-inside text-base text-gr  mb-2">{children}</li>
);

const Paragraphbo = ({ children }) => (
  <p className=" text-gr  text-base font-pop mb-2">{children}</p>
);

export { HeadingText, Heading1, ParagraphText, ParagraphText1, ListItem,Paragraphbo };
