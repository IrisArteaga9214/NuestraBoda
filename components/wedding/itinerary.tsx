"use client"

import React from 'react'
import { motion } from 'framer-motion'

const events = [
  {
    time: "17:00 h",
    title: "Ceremonia",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="14" r="6" stroke="#8B1A1A" strokeWidth="1.5" fill="#8B1A1A" fillOpacity="0.1"/>
        <circle cx="15" cy="10" r="6" stroke="#8B1A1A" strokeWidth="1.5" fill="#F9F7F2"/>
        <path d="M15 4L13.5 6H16.5L15 4Z" fill="#8B1A1A"/>
      </svg>
    ),
  },
  {
    time: "18:30 h",
    title: "Recepción y Bienvenida",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3L12 13L17 3H7Z" stroke="#8B1A1A" strokeWidth="1.5" fill="#8B1A1A" fillOpacity="0.1" strokeLinejoin="round"/>
        <path d="M12 13V21M9 21H15" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="15" cy="6" r="1" fill="#8B1A1A"/>
      </svg>
    ),
  },
  {
    time: "19:00 h",
    title: "Cena de Bodas",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#8B1A1A" strokeWidth="1.5" fill="#8B1A1A" fillOpacity="0.1"/>
        <path d="M12 7V17M12 7L10 10M12 7L14 10" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <path d="M8 8V16M16 8V16" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    time: "20:30 h",
    title: "Protocolo y Brindis",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10C8 6 10 4 12 4C14 4 16 6 16 10C16 14 12 15 12 15V20" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 20H15" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 8L11 9.5M12 8L13 9.5" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    time: "22:00 h",
    title: "Fiesta y Baile",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="9" r="6" stroke="#8B1A1A" strokeWidth="1.5" fill="#8B1A1A" fillOpacity="0.1"/>
        <path d="M12 3V5M12 13V15M8 9H6M18 9H16M16.2 4.8L14.8 6.2M9.2 11.8L7.8 13.2" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 16L10 21H14L12 16Z" fill="#8B1A1A"/>
      </svg>
    ),
  },
]

export function Itinerary() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: '#EDE9DF' }}>
      <div className="max-w-3xl mx-auto">
        
        <motion.div 
          className="text-center mb-24 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
          >
            El Gran Día
          </p>
          <h2
            className="text-xl md:text-2xl tracking-[0.4em] uppercase"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#2D2D2D' }}
          >
            Itinerario
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ 
              originY: 0, 
              backgroundColor: '#D9D2C4', 
              width: '1px',
              left: '27px', // Aseguramos posición en móvil
              transform: 'translateX(-0.5px)' // Centrado exacto
            }}
          />

          <div className="flex flex-col gap-20">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`pl-16 md:pl-0 w-full md:w-[calc(50%-50px)] ${
                    i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:pl-14 md:text-left'
                  }`}
                >
                  <motion.p
                    className="text-lg md:text-xl tracking-[0.15em] mb-1"
                    style={{ color: '#8B1A1A', fontFamily: 'var(--font-cormorant)', fontWeight: 700 }}
                  >
                    {event.time}
                  </motion.p>
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#2D2D2D', lineHeight: 1.1 }}
                  >
                    {event.title}
                  </h3>
                </div>

                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20, 
                    delay: (i * 0.1) + 0.3 
                  }}
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center rounded-full z-10"
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: '#F9F7F2',
                    border: '1px solid #D9D2C4',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
                  }}
                >
                  {event.icon}
                </motion.div>

                <div className="hidden md:block w-[calc(50%-50px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}