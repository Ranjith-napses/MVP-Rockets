import {
  HeadingText,
  Heading1,
  Paragraphbo,
  ParagraphText,
  ListItem,
} from "../atoms/PrivacyAtoms";

const PrivacyBlock = ({
  id, 
  title,
  title1,
  paragraphs2,
  paragraphs1,
  paragraphs = [],
  list = [],
}) => (
  <div id={id} className="px-4 md:px-20 py-6 max-w-4xl mx-auto">
    <HeadingText>{title}</HeadingText>
    <Heading1>{title1}</Heading1>
    <ParagraphText>{paragraphs1}</ParagraphText>
    {paragraphs.map((text, idx) => (
      <ParagraphText key={idx}>{text}</ParagraphText>
    ))}
    {list.length > 0 && (
      <ul className="pl-4 text-pop">
        {list.map((item, idx) => (
          <ListItem key={idx}>{item}</ListItem>
        ))}
      </ul>
    )}
    <Paragraphbo>{paragraphs2}</Paragraphbo>
  </div>
);

export default PrivacyBlock;
