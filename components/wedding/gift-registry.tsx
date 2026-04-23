"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function GiftRegistry() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const floatingEnvelopes = Array.from({ length: 10 });

  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: '#EDE9DF' }}>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        {isMounted && floatingEnvelopes.map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: -150, 
              x: `${Math.random() * 100}%`,
              rotate: 0, 
              opacity: 0 
            }}
            whileInView={{ 
              y: [null, 1000], 
              rotate: [0, 45, -45, 20],
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ 
              duration: Math.random() * 5 + 12, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.5 
            }}
            className="absolute"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="1" stroke="#8B1A1A" strokeWidth="0.5" />
              <path d="M2 7L12 13L22 7" stroke="#8B1A1A" strokeWidth="0.5" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-4xl md:text-6xl mb-4"
            style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
          >
            Lluvia de Sobres
          </p>
          <h2
            className="text-sm md:text-base tracking-[0.4em] uppercase mb-16"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#2D2D2D' }}
          >
            Tu presencia es nuestro mejor regalo
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative px-8 py-12 mb-14"
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#8B1A1A] opacity-30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#8B1A1A] opacity-30" />

          <p
            className="text-lg md:text-xl leading-relaxed mb-8 italic"
            style={{ color: '#5A5A5A', fontFamily: 'var(--font-cormorant)' }}
          >
            "Si deseas contribuir a nuestros sueños como pareja, hemos optado por 
            la modalidad de lluvia de sobres."
          </p>

          <p
            className="text-sm md:text-base tracking-wide uppercase leading-loose"
            style={{ color: '#2D2D2D', fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}
          >
            El día del evento habrá un buzón especial <br/> donde podrás depositar tu cariño.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="relative p-4 bg-[#F9F7F2] rounded-full shadow-inner" style={{ border: '1px solid #D9D2C4' }}>
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.9 }}
            >
              <motion.rect 
                x="2" y="5" width="20" height="14" rx="2" 
                stroke="#8B1A1A" strokeWidth="1" 
                fill="#F9F7F2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
              />
              <motion.path 
                d="M2 7L12 13L22 7" 
                stroke="#8B1A1A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              />
              <path d="M2 17L8 12" stroke="#8B1A1A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3"/>
              <path d="M22 17L16 12" stroke="#8B1A1A" strokeWidth="0.8" strokeLinecap="round" opacity="0.3"/>
            </svg>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-10 text-[11px] uppercase tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#2D2D2D' }}
        >
          Gracias por ser parte de este inicio
        </motion.p>
      </div>
    </section>
  )
}