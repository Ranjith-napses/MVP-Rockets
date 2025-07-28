import { motion } from "framer-motion";

export default function IconTitleText({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-start gap-4"
    >
      <div className="w-16 h-16 text-white sm:w-14 sm:h-14 rounded-full bg-pinko flex items-center justify-center shrink-0">
            {icon}
          </div>

      <div>
        <h3 className="text-base sm:text-lg font-semibold text-left text-pgown mb-1">{title}</h3>
        <p className="text-gr text-sm sm:text-base text-left justify-center font-pop leading-snug sm:leading-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );
}