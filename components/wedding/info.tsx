"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function Info() {
  const hotels = [
    { 
      nombre: "Hotel Florida Inn", 
      ubicacion: "San Joaquín, Qro", 
      telefono: "4411013077", 
      rotate: -2 
    },
    { 
      nombre: "Hotel Doña Lupe", 
      ubicacion: "San Joaquín, Qro", 
      telefono: "4423822561", 
      rotate: 1 
    },
    { 
      nombre: "Cabañas La Escondida", 
      ubicacion: "San Joaquín, Qro", 
      telefono: "4423228629", 
      rotate: -1 
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 overflow-hidden" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="max-w-5xl mx-auto">

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-24 md:mb-32"
        >
          <div className="text-center mb-6 md:mb-8">
            <h2
              className="text-2xl md:text-3xl tracking-[0.3em] uppercase"
              style={{ 
                fontFamily: 'var(--font-cormorant)', 
                fontWeight: 500, 
                color: '#1A1A1A' 
              }}
            >
              Dress Code
            </h2>
          </div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 md:mb-10"
          >
            <img
              src="/images/dresscode.png"
              alt="Dress Code Illustration"
              className="w-[180px] md:w-[240px] drop-shadow-sm"
            />
          </motion.div>

          <div className="text-center flex flex-col items-center max-w-md">
            <div className="w-12 h-[1px] bg-[#8B1A1A] mb-4 opacity-60" />
            <p
              className="text-xl md:text-2xl italic mb-3"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#2D2D2D' }}
            >
              Se sugiere vestimenta formal
            </p>
            <p 
              className="text-[13px] md:text-sm tracking-[0.12em] uppercase"
              style={{ color: '#4A4A4A', fontWeight: 600 }}
            >
              Hombres: traje · Mujeres: vestido largo
            </p>
          </div>
        </motion.div>


        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2
              className="text-2xl md:text-3xl tracking-[0.3em] uppercase"
              style={{ 
                fontFamily: 'var(--font-cormorant)', 
                fontWeight: 500, 
                color: '#1A1A1A' 
              }}
            >
              Recomendación de Hospedaje
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-16 md:mb-20"
          >
            <img
              src="/images/etiqueta-vintage.png"
              alt="Destino Nuestra Boda"
              className="w-[200px] md:w-[280px] drop-shadow-md"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
            {hotels.map((hotel, i) => (
              <motion.div 
                key={i}
                initial={{ 
                  opacity: 0, 
                  x: i % 2 === 0 ? -100 : 100, 
                  rotate: 0 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  rotate: hotel.rotate 
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1, 
                  delay: i * 0.1, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ y: -10, rotate: 0, transition: { duration: 0.3 } }}
                className="relative cursor-default"
              >
                <div className="relative drop-shadow-lg">
                  <img
                    src="/images/tarjeta-viaje.png"
                    alt="Card background"
                    className="w-full block"
                  />
                  
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 pt-4">
                    <h3
                      className="text-lg md:text-xl leading-tight mb-2"
                      style={{ 
                        fontFamily: 'var(--font-cormorant)', 
                        color: '#1A1A1A', 
                        fontWeight: 700 
                      }}
                    >
                      {hotel.nombre}
                    </h3>

                    <p 
                      className="text-[11px] md:text-xs tracking-[0.2em] uppercase mb-5"
                      style={{ color: '#8B1A1A', fontWeight: 700 }}
                    >
                      {hotel.ubicacion}
                    </p>

                    <motion.a
                      href={`tel:${hotel.telefono}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 border-2 text-[11px] tracking-[0.2em] uppercase transition-colors"
                      style={{
                        borderColor: '#8B1A1A',
                        color: '#8B1A1A',
                        fontFamily: 'var(--font-cormorant)',
                        fontWeight: 800
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#8B1A1A'
                        e.currentTarget.style.color = '#F9F7F2'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#8B1A1A'
                      }}
                    >
                      Reservar
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}