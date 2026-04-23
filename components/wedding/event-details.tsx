"use client"

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { MapPin, Calendar, Clock, Church, PartyPopper } from 'lucide-react'

const cardVariants: Variants = {
  hidden: { y: 60, opacity: 0, rotate: 0 },
  visible: (rotateEnd: number) => ({ 
    y: 0, 
    opacity: 1, 
    rotate: rotateEnd,
    transition: { 
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 1.2,
      delay: 0.4
    }
  })
}

export function EventDetails() {
  return (
    <section className="py-16 md:py-24 px-6 overflow-hidden" style={{ backgroundColor: '#FAF9F7' }}>
      <div className="max-w-4xl mx-auto">

        <motion.div 
          className="text-center mb-12 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-4xl md:text-5xl mb-3"
            style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
          >
            Detalles del Evento
          </p>
          <h2
            className="text-lg md:text-xl tracking-[0.25em] uppercase"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#2D2D2D' }}
          >
            Lugar y Fecha
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-20">

          <div className="relative flex items-end justify-start min-h-[380px] md:min-h-[420px] w-full px-4">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/sobre_sello.png" 
                alt="Sobre Ceremonia"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>

            <motion.div 
              className="relative z-10 w-[75%] md:w-[72%] p-6 shadow-2xl mb-8 -ml-2"
              variants={cardVariants}
              custom={-3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ 
                backgroundColor: '#F9F4E8',
                border: '1px solid #E5DED0',
              }}
            >
              <div className="relative text-center">
                <div className="flex justify-center mb-3">
                  <Church className="w-8 h-8" style={{ color: '#8B1A1A' }} />
                </div>
                <h3 className="text-3xl mb-1" style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}>
                  Ceremonia
                </h3>
                
                <div className="space-y-1.5 mt-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  <div className="flex items-center justify-center gap-2 text-[15px] font-medium leading-none text-[#2D2D2D]">
                    <Calendar className="w-4 h-4 opacity-60" />
                    <p>1 de Agosto, 2026</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[15px] font-medium leading-none text-[#2D2D2D]">
                    <Clock className="w-4 h-4 opacity-60" />
                    <p>17:00 hrs</p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center mt-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#8B1A1A]" />
                      <p className="text-[15px] font-bold text-[#1A1A1A]">Parroquia San Joaquín</p>
                    </div>
                    <p 
                      className="text-[14px] leading-tight mt-1 font-semibold" 
                      style={{ color: '#333333' }}
                    >
                      Juárez #2, San Joaquín, Qro.
                    </p>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://maps.app.goo.gl/vPXJ5EqYQ8FNk64d9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase shadow-md"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontWeight: 600,
                    color: '#F9F4E8',
                    backgroundColor: '#8B1A1A',
                  }}
                >
                  Ver ubicación
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="relative flex items-end justify-start min-h-[380px] md:min-h-[420px] w-full px-4 mt-6 md:mt-0">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/sobre_sello.png" 
                alt="Sobre Recepción"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>

            <motion.div 
              className="relative z-10 w-[75%] md:w-[72%] p-6 shadow-2xl mb-8 -ml-2"
              variants={cardVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ 
                backgroundColor: '#F9F4E8',
                border: '1px solid #E5DED0',
              }}
            >
              <div className="relative text-center">
                <div className="flex justify-center mb-3">
                  <PartyPopper className="w-8 h-8" style={{ color: '#8B1A1A' }} />
                </div>
                <h3 className="text-3xl mb-1" style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}>
                  Recepción
                </h3>
                
                <div className="space-y-1.5 mt-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  <div className="flex items-center justify-center gap-2 text-[15px] font-medium leading-none text-[#2D2D2D]">
                    <Calendar className="w-4 h-4 opacity-60" />
                    <p>1 de Agosto, 2026</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[15px] font-medium leading-none text-[#2D2D2D]">
                    <Clock className="w-4 h-4 opacity-60" />
                    <p>18:30 hrs</p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center mt-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#8B1A1A]" />
                      <p className="text-[15px] font-bold text-[#1A1A1A]">Auditorio Municipal</p>
                    </div>
                    <p 
                      className="text-[14px] leading-tight mt-1 font-semibold" 
                      style={{ color: '#333333' }}
                    >
                      Guerrero #8, San Joaquín, Qro.
                    </p>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://maps.app.goo.gl/2fvEH7pQ6fULar7s7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase shadow-md"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontWeight: 600,
                    color: '#F9F4E8',
                    backgroundColor: '#8B1A1A',
                  }}
                >
                  Ver ubicación
                </motion.a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}