// import { useState } from "react";
// import { Heading, ButtonIcon, Text } from "../atoms/index";
// import { TestimonialCard } from "../molecules/TestimonialCard";

// const reviews = [
//   {
//     name: "Saurav Ghosh",
//     role: "Co-Founder, Jiraaf",
//     image: "/Saurav-DP.svg",
//     content: [
//       "MVP rockets is one of the best things that happened to Jiraaf early on in our Journey. Giri, Praveen and team bring decades of experience in building products and they played an instrumental role in building Jiraaf - a startup with no tech founder. One thing that stands out for me is their commitment to best practices and processes. These are big value adds for early stage startups because we are geared to scale products in the right way from day zero (from unit testing, test coverage to writing test automations today).",
//       " the MVP team are true partners, they understand the importance of delivering product as per business timelines as well as being extremely flexible with bandwidth requirements when business needs them the most.",
//       "Lastly, Praveen, Sathish, Giri have been great mentors for the entire team. As a result of the comfort with them, we did not have a CTO / HOE for a whole year and that I think speaks volumes for the trust and faith that we had in the MVP team."
//     ]

//   },
//   {
//     name: "Karun Kuriren",
//     role: "CO- Founder, Alaanpay",
//     image: "/Karun-DP.svg",
//     content: [
//       "As a semi-technical founder, I was apprehensive about outsourcing my MVP building. But I was more apprehensive about hiring an inhouse team in a hurry.",
//       "MVPRockets was fantastic as a partner in our initial months. They are a smart group of people and have done this many times and hence are able to start releasing functional products in no time. We eventually built an inhouse team with MVPRocket's help.",
//       "However, Giri and Praveen continue to be thought partners for us and are always willing to help when needed.They were strangers when we began and are friends now."
//     ]
//   },

//   {
//     name: "Lux Narayan",
//     role: "Founder, StreamAlive",
//     image: "/Lux-DP.svg",
//     content: [
//       "We were introduced to MVPRockets when we sought a partner to help make StreamAlive's SaaS V1. I couldn't be more grateful to our investors for this introduction! Our very first meeting with Giri and his co-founders was refreshingly candid and they preferred to let their work do the talking. My co-founders and I had a great feeling about working with them.",
//       "Fast forward a year (and more just our MVP), and I can confidently say that 'feeling' has been ratified in many more ways than we expected. The team at MVPRockets is truly an extension of our own and treats StreamAlive as their own product. They've made a habit of exceeding expectations and continue to challenge us to think in exciting new ways. We wish we had partners like this in every sphere of our business operations!"
//     ]
//   }
// ];

// export default function TestimonialsSection() {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((prev) => (prev + 1) % reviews.length);
//   const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

//   return (
//     <section id="testimonials" className="bg-pgown py-16 px-4">
//       <Heading>
//         <span className="text-pinko text-3xl block mb-2">OUR</span>
//         Clients Love Us
//       </Heading>
//       <div className="relative mt-12">
//         <div className="absolute left-0 top-1/2 -translate-y-1/2">
//           <ButtonIcon direction="left" onClick={prev} />
//         </div>
//         <TestimonialCard review={reviews[index]} keyIndex={index} />

//         <div className="absolute right-0 top-1/2 -translate-y-1/2">
//           <ButtonIcon direction="right" onClick={next} />
//         </div>
//       </div>
//     </section>
//   );
// }


// components/organisms/TestimonialsSection.js
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Heading, ButtonIcon, Text } from "../atoms/index";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { AnimatePresence, motion } from "framer-motion";

const reviews = [
  {
    name: "Saurav Ghosh",
    role: "Co-Founder, Jiraaf",
    image: "/Saurav-DP.svg",
    content: [
      "MVP rockets is one of the best things that happened to Jiraaf early on in our Journey. Giri, Praveen and team bring decades of experience in building products and they played an instrumental role in building Jiraaf - a startup with no tech founder. One thing that stands out for me is their commitment to best practices and processes. These are big value adds for early stage startups because we are geared to scale products in the right way from day zero (from unit testing, test coverage to writing test automations today).",
      " the MVP team are true partners, they understand the importance of delivering product as per business timelines as well as being extremely flexible with bandwidth requirements when business needs them the most.",
      "Lastly, Praveen, Sathish, Giri have been great mentors for the entire team. As a result of the comfort with them, we did not have a CTO / HOE for a whole year and that I think speaks volumes for the trust and faith that we had in the MVP team."
    ]
  },
  {
    name: "Karun Kuriren",
    role: "CO- Founder, Alaanpay",
    image: "/Karun-DP.svg",
    content: [
      "As a semi-technical founder, I was apprehensive about outsourcing my MVP building. But I was more apprehensive about hiring an inhouse team in a hurry.",
      "MVPRockets was fantastic as a partner in our initial months. They are a smart group of people and have done this many times and hence are able to start releasing functional products in no time. We eventually built an inhouse team with MVPRocket's help.",
      "However, Giri and Praveen continue to be thought partners for us and are always willing to help when needed.They were strangers when we began and are friends now."
    ]
  },
  {
    name: "Lux Narayan",
    role: "Founder, StreamAlive",
    image: "/Lux-DP.svg",
    content: [
      "We were introduced to MVPRockets when we sought a partner to help make StreamAlive's SaaS V1. I couldn't be more grateful to our investors for this introduction! Our very first meeting with Giri and his co-founders was refreshingly candid and they preferred to let their work do the talking. My co-founders and I had a great feeling about working with them.",
      "Fast forward a year (and more just our MVP), and I can confidently say that 'feeling' has been ratified in many more ways than we expected. The team at MVPRockets is truly an extension of our own and treats StreamAlive as their own product. They've made a habit of exceeding expectations and continue to challenge us to think in exciting new ways. We wish we had partners like this in every sphere of our business operations!"
    ]
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const next = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
    preventScrollOnSwipe: true
  });

  const slideVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: dir === "right" ? 200 : -200
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir === "right" ? -200 : 200,
      transition: { duration: 0.4 }
    })
  };

  return (
    <section
      id="testimonials"
      className="bg-pgown py-16 px-4 text-white text-[17px]"
      {...handlers}
    >
      <Heading>
        <span className="text-pinko text-3xl block mb-2">OUR</span>
        Clients Love Us
      </Heading>

      <div className="relative mt-12">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <ButtonIcon direction="left" onClick={prev} />
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <TestimonialCard review={reviews[index]} keyIndex={index} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <ButtonIcon direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}
