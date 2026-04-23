"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, Variants } from 'framer-motion'

export function Invitation() {
  const [showPases, setShowPases] = useState(false)
  const reservationRef = useRef(null)
  const isReservationInView = useInView(reservationRef, { amount: 0.6, once: true })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.6, delayChildren: 0.4 },
    },
  }

  const sealVariants: Variants = {
    hidden: { opacity: 0, scale: 1.2, rotate: -5 },
    visible: { 
      opacity: 1, scale: 1, rotate: 0,
      transition: { duration: 1.8, ease: [0.34, 1.56, 0.64, 1] } 
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
    },
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isReservationInView) {
      const runAnimation = (delay: number) => {
        timeoutId = setTimeout(() => {
          setShowPases((prev) => !prev);
          runAnimation(2800);
        }, delay);
      };
      runAnimation(900); 
    }
    return () => clearTimeout(timeoutId);
  }, [isReservationInView])

  return (
    <section className="py-24 px-6 overflow-hidden" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          className="text-center flex flex-col items-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="mb-10 w-32 h-32 relative" variants={sealVariants}>
            <Image src="/images/wax-seal.png" alt="Sello de lacre" fill className="object-contain" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl mb-3"
            style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
          >
            Daniela &amp; Roberto
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl tracking-[0.3em] uppercase mb-10"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#414040' }}
          >
            Acompáñanos a celebrar nuestro amor
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#000000', letterSpacing: '0.03em' }}
          >
            Con profunda alegría en nuestros corazones, nos complace invitarlos a ser testigos
            del momento más especial de nuestras vidas. Los esperamos para compartir el inicio 
            de esta nueva etapa; su presencia hará este día aún más inolvidable.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={reservationRef}
          className="relative w-full max-w-[380px] md:max-w-[420px] aspect-[4/5] drop-shadow-2xl mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          <motion.div 
            className="absolute inset-0 z-20"
            animate={{ rotateY: showPases ? 180 : 0 }}
            transition={{ duration: 1.4, ease: [0.45, 0.05, 0.55, 0.95] }}
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transformStyle: "preserve-3d", willChange: "transform" }}
          >
            <Image src="/images/tarjetapase.png" alt="Marco" fill className="object-contain" priority />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Contenedor interno con max-width para que el texto no toque los bordes del óvalo */}
              <div className="w-[70%] text-center">
                <p 
                  className="text-lg md:text-xl lg:text-2xl leading-snug uppercase tracking-[0.15em] md:tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#F9F4E8', fontWeight: 300 }}
                >
                  hemos <br /> reservado <br /> para ti
                </p>
              </div>
            </div>
          </motion.div>

          {/* LADO B: 2 PASES */}
          <motion.div 
            className="absolute inset-0 z-10"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: showPases ? 0 : -180 }}
            transition={{ duration: 1.4, ease: [0.45, 0.05, 0.55, 0.95] }}
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transformStyle: "preserve-3d", willChange: "transform" }}
          >
            <Image src="/images/tarjetapase.png" alt="Marco" fill className="object-contain" style={{ transform: 'scaleX(-1)' }} />
            <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 text-center">
              <span className="text-7xl md:text-8xl lg:text-9xl leading-none" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#F9F4E8' }}>2</span>
              <span className="text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.2em] mt-2" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, color: '#F9F4E8' }}>Pases</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}