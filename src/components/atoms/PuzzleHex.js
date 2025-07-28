
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PuzzleHex({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative w-[180px] md:w-[200px] lg:w-[220px] h-[200px] md:h-[220px] bg-pinko text-white hexagon p-4 text-center flex flex-col justify-center items-center shadow-xl"
    >
      <div className="w-10 h-10 mb-2">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h4 className="font-semibold text-md md:text-lg">{title}</h4>
      <p className="text-sm md:text-base mt-1">{description}</p>
    </motion.div>
  )
}
