"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export function Reservation() {
  const [showPases, setShowPases] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { amount: 0.6, once: true })

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isInView) {
      const runAnimation = (delay: number) => {
        timeoutId = setTimeout(() => {
          setShowPases((prev) => !prev);
          // Después del primer giro, todos los demás serán cada 2000ms (2s)
          runAnimation(2800);
        }, delay);
      };

      runAnimation(900); 
    }

    return () => clearTimeout(timeoutId);
  }, [isInView])

  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div 
          ref={containerRef}
          className="relative mx-auto w-full max-w-[480px] aspect-[4/5] drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ 
            perspective: "1500px", 
            transformStyle: "preserve-3d" 
          }}
        >
          
          {/* LADO A: HEMOS RESERVADO PARA TI */}
          <motion.div 
            className="absolute inset-0 z-20"
            animate={{ rotateY: showPases ? 180 : 0 }}
            transition={{ duration: 1.4, ease: [0.45, 0.05, 0.55, 0.95] }}
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transformStyle: "preserve-3d",
              willChange: "transform"
            }}
          >
            <Image 
              src="/images/tarjetapase.png" 
              alt="Marco Reservado"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
              <p 
                className="text-xl md:text-2xl leading-relaxed uppercase tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#F9F4E8', fontWeight: 200 }}
              >
                hemos reservado <br /> para ti
              </p>
            </div>
          </motion.div>

          {/* LADO B: 2 PASES */}
          <motion.div 
            className="absolute inset-0 z-10"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: showPases ? 0 : -180 }}
            transition={{ duration: 1.4, ease: [0.45, 0.05, 0.55, 0.95] }}
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transformStyle: "preserve-3d",
              willChange: "transform"
            }}
          >
            <Image 
              src="/images/tarjetapase.png" 
              alt="Marco Reservado"
              fill
              className="object-contain"
              style={{ transform: 'scaleX(-1)' }} 
            />
            <div className="absolute inset-0 flex items-center justify-center gap-3 text-center p-12">
              <span 
                className="text-7xl md:text-9xl leading-none"
                style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#F9F4E8' }}
              >
                2
              </span>
              <span 
                className="text-2xl md:text-3xl uppercase tracking-[0.2em] mt-2"
                style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, color: '#F9F4E8' }}
              >
                Pases
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}