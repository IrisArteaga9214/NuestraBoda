'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

export default function SectionWrapper({ children }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }} // Empieza invisible y un poco abajo
      whileInView={{ opacity: 1, y: 0 }} // Se revela al hacer scroll
      viewport={{ once: true, margin: "-10% 0px" }} // Se activa una sola vez
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] // Una curva suave y elegante
      }}
      className="relative w-full"
    >
      {children}
    </motion.section>
  )
}