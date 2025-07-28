
import { Heading, Text, Button } from "../atoms/FaqAtoms";
import { FaqItem } from "../molecules/FaqItem";

const faqList = [
  { question: "How are you different from any other product development shops?", 
    answer: "What a tech startup needs is a high quality product team, that consists of a product manager, designers, developers, QA and Analytics team - not just a group of developers. The MVPRockets leaders have started, run and exited tech product companies before – They have occupied senior positions in v successful tech startups & learnt from their experiencesThey have essentially walked the path the tech entrepreneurs are expected to walk the first few years & they have walked it multiple times. MVPRockets do not only take care of your tech, but also advise you on best practices on Product, Design, UX, GTM, Blitzscaling etc. & help set your company up for success from all these fronts. So, when you work with MVPRockets, you not only get a product developed, but you also benefit from the experience of the entire team in building & running tech startups.This is the difference between a traditional product dev shop and MVPRockets – we understand how a successful product team is built & have experience building this multiple times in the past. This makes us different 🙂" },
  { question: "How can you launch an MVP so fast?",
     answer: "We have built a ton of modules thats required for product building – like Sign Up/Login, Forgot password, Email Integration, Payment Gateway integration etc.. Which we either re-use & that helps us reduce time to market significantly" },
  { question: "What technologies do you use?", 
    answer: "We use Javascript frameworks for backend, Flutter for App development, Mongo for DB and AWS for hosting. We build products in clean, micro services architecture" },
  {
    question: "Do we have to change technologies when we are ready to scale?",
    answer:
      "No. Absolutely not. The tech choices we make are good to get you to millions of users in scale & beyond. We do not make sub-par tech choices for the sake of speed.",
  },
  { question: "Do you work for equity in startups?",
     answer: "No, Sorry. Its your company and we think you should completely own it. We are happy with money 🙂" },
  { question: "Do you also help with marketing?", 
    answer: "While we will be involved in marketing & also build features that would help in organic growth, at this point, we do not do complete marketing for you. We have recommendations though" },
  { question: "Can I get design done elsewhere?",
     answer: "One of our core strengths is that we understand how startups work – this is our 4th startup as founders. We would encourage you to use our expertise in identifing the scope of MVPs. Post that if you wish, we are open to collaborating with another design agency." },
  { question: "Can I get only the designs done with you?",
     answer: "We are open to exploring different models with our customers, but would love to work the entire way with our clients." },
];

export default function FaqSection() {
  return (
    <section  id="faqsection" className="py-16 px-4 md:px-12 lg:px-24 bg-white grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <p className="text-pinko font-medium uppercase">Some</p>
        <Heading>Frequently Asked Questions</Heading>
        <Text className="leading-relaxed font-pop text-gr pt-4">
          As seasoned innovators and technology pioneers, we partner in your success, driving digital
          transformation and advancing your business through cutting-edge solutions and strategic insights.
        </Text>
        <Button>Ask any Question</Button>
      </div>

      <div className="bg-white rounded-xl border-t-[6px] border-pinko p-6">
        {faqList.map((faq, i) => (
          <FaqItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
