'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PuzzleTile({ icon, title, description, index, isMobile }) {
  return (
    <motion.svg
      viewBox="0 0 275 250"
      xmlns="http://www.w3.org/2000/svg"
      initial={isMobile ? false : { opacity: 0, scale: 0.8, y: 40, rotate: 10 }}
      whileInView={isMobile ? false : { opacity: 1, scale: 1, y: 0, rotate: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`w-[240px] h-[250px] ${index % 2 === 1 ? 'mt-8' : ''}`}
    ><path
        d="M270.877 117.264L256.874 141.557C252.125 139.548 246.888 138.452 241.47 138.452C219.612 138.452 201.834 156.231 201.834 178.149C201.834 190.996 207.983 202.442 217.542 209.688L203.173 234.59H67.7649L0 117.264L67.7649 0H203.173L217.116 24.1713L223.326 34.8262C227.101 31.5384 231.85 29.2248 237.086 28.3724C237.147 28.3724 237.269 28.3115 237.39 28.3115C238.73 28.1289 240.069 28.0071 241.47 28.0071C256.63 28.0071 268.929 40.3058 268.929 55.5271C268.929 61.9809 266.737 67.8867 262.962 72.5748C262.962 72.5748 262.901 72.7575 262.779 72.8184C259.552 76.8368 255.23 79.881 250.237 81.5249L256.447 92.2407L270.877 117.264Z"
        fill="#EF4A8A"
      />
      
      <foreignObject x="30" y="50" width="210" height="150">
        <div className="flex flex-col items-center justify-center text-white text-center p-2">
          <div className="w-12 h-12 mb-3 mx-auto">
            <Image src={icon} alt={title} width={48} height={48} />
          </div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm mt-1 text-white/90">{description}</p>
        </div>
      </foreignObject>
    </motion.svg>
  )
}
