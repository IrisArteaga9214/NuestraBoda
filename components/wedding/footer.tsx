"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  const whatsappUrl = "https://wa.me/524428200679?text=Hola%20Iris,%20vi%20tu%20trabajo%20en%20la%20invitación%20de%20Daniela%20y%20Roberto,%20me%20das%20información."

  return (
    <footer className="py-24 px-6 text-center deckled-top" style={{ backgroundColor: '#EDE9DF' }}>
      <motion.div 
        className="max-w-xl mx-auto flex flex-col items-center gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        
        <motion.div 
          className="relative w-32 h-32 mb-4"
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 60, 
            delay: 0.2,
            duration: 1 
          }}
        >
          <Image
            src="/images/wax-seal.png"
            alt="Sello de lacre D&R"
            fill
            className="object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Nombres y Fecha */}
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p
            className="text-5xl md:text-6xl"
            style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
          >
            Daniela &amp; Roberto
          </p>
          <p
            className="text-2xl tracking-[0.3em] uppercase" 
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4A4A4A', fontWeight: 600 }}
          >
            01 . 08 . 2026
          </p>
        </motion.div>

        <div className="flex items-center gap-6 w-full justify-center opacity-80">
          <motion.div 
            className="h-px bg-[#D9D2C4]" 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 rounded-full" 
            style={{ backgroundColor: '#D9D2C4' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
          <motion.div 
            className="h-px bg-[#D9D2C4]" 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </div>

        <motion.div 
          className="flex flex-col items-center gap-3 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <p
            className="text-sm tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#4A4A4A' }}
          >
            Desarrollado Por:
          </p>
          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span 
              className="text-2xl"
              style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
            >
              Ing. Iris Arteaga
            </span>
            
            <p 
              className="text-xs tracking-[0.2em] uppercase mt-2 font-medium"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#3A5A7A', textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              442 820 0679
            </p>
          </motion.a>
        </motion.div>

        <motion.p
          className="text-sm tracking-[0.2em] uppercase mt-10 opacity-70"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#4A4A4A' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
        >
          Hecho con amor
        </motion.p>
      </motion.div>
    </footer>
  )
}