"use client";
import { motion } from "framer-motion";
import DomainIcon from "../atoms/DomainIcon";

export default function DomainCard({ icon, title, products, description }) {
  return (
    <motion.div
      className="flex items-center bg-transparent text-white max-w-xs space-x-4 mb-4 p-4 rounded-lg"
      initial={{ opacity: 0, y: +100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex gap-2">
      <DomainIcon icon={icon} />
      <div className="text-left">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-pinko font-semibold font-pop">{products} Products</p>
        <p className="text-base text-white  font-pop pt-3">{description}</p>
      </div>
      </div>
    </motion.div>
  );
}
