import IconTitleText from "../atoms/IconTitleText";
import { 
  Headset,
  ShieldAlert ,
  Users,
  ThumbsUp,
  CheckCheck,
  Award
 } from 'lucide-react';

const items = [
  {
    icon:   <Award />,
    title: "Product Leadership",
    description:
      "Our founders have decades of product leadership experience in some of the best companies (Yahoo, Microsoft, Thoughtworks, SAP)",
  },
  {
    icon:  <CheckCheck /> ,
    title: "Proven Frameworks",
    description:
      "We know what works and what doesn't work, thanks to our silicon valley expertise and years of success that ensures business transformation.",
  },
  {
    icon:   <ThumbsUp />,
    title: "Timeline Guarantee",
    description:
      "We give timeline guarantee. We deliver on time every time. If there is a delay, we pay for the delay!",
  },
  {
    icon: <Users />,
    title: "Dedicated Product Team",
    description:
      "Best in the industry experts who commit to work on one thing at a time to ensure the best outputs that your business deserves.",
  },
  {
    icon: <ShieldAlert />,
    title: "Safe, Secure & Robust",
    description:
      "We don’t build just another MVP. We built 'THE MVP', ensuring it’s safe, secure, scalable and just everything you need.",
  },
  {
    icon:  <Headset />,
    title: "Support, Till You Need It",
    description:
      "At MVPRockets, we support you during the launch and to the point where you get a new CTO and are ready to take the product in-house.",
  },
];

export default function WhyUsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {items.map((item, index) => (
        <IconTitleText key={index} {...item} />
      ))}
    </div>
  );
}