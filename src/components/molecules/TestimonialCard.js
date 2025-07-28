import { motion, AnimatePresence } from "framer-motion";
import { Text } from "../atoms";

export function TestimonialCard({ review, keyIndex }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-6xl w-full px-4 md:px-12 lg:px-24 mx-auto"
      >
        <img
          src={review.image}
          alt={review.name}
          className="w-40 h-40 rounded-full mx-auto mb-4"
        />
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
        </div>
        <h3 className="text-white font-bold text-xl mb-1">{review.name}</h3>
        <p className="text-purple-200 mb-4">{review.role}</p>
        {review.content.map((para, i) => (
          <Text key={i} className="mb-4  leading-relaxed md:text-lg">{para}</Text>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
