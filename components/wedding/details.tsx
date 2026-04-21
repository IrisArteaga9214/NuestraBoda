'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'

const parents = [
  {
    side: "Familia de la Novia",
    names: [
      { role: "Padre de la Novia", name: "Alfredo Arteaga Trejo" },
      { role: "Madre de la Novia", name: "Yesenia Martínez Ledesma" },
    ],
  },
  {
    side: "Familia del Novio",
    names: [
      { role: "Padre del Novio", name: "Roberto Arévalo Delgado" },
      { role: "Madre del Novio", name: "Magdalena Corcino Lagunas" },
    ],
  },
]

const godparents = [
  { role: "Padrino de Velación", name: "Manuel Arteaga Trejo" },
  { role: "Madrina de Velación", name: "Marisol García Ledesma" },
]

export function Details() {
  
  // Variantes para el texto que sube (Título y Padrinos)
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } 
    },
  }

  // Variantes para el Encuentro Lateral (Padres)
  const columnVariants = (direction: number): Variants => ({
    hidden: { 
      opacity: 0, 
      x: direction * 120, 
      filter: "blur(15px)" 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 2.2, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  })

  return (
    <section className="pt-2 pb-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* ENCABEZADO: Con la bendición de */}
        <motion.div 
          className="text-center mb-16" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={revealVariants}
          style={{ willChange: "transform, opacity, filter" }}
        >
          <p
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
          >
            Con la bendición de
          </p>
          <h2
            className="text-2xl md:text-3xl tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, color: '#1A1A1A' }}
          >
            Nuestros Padres
          </h2>
        </motion.div>

        {/* SECCIÓN PADRES */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {parents.map((family, index) => (
            <motion.div 
              key={family.side} 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={columnVariants(index === 0 ? -1 : 1)}
              style={{ willChange: "transform, opacity, filter" }}
            >
              {/* Título de Familia: Rojo más fuerte y grueso */}
              <p
                className="text-sm md:text-base tracking-[0.3em] uppercase mb-10"
                style={{ color: '#A02020', fontFamily: 'var(--font-cormorant)', fontWeight: 700 }}
              >
                {family.side}
              </p>

              {family.names.map((person) => (
                <div key={person.name} className="mb-8">
                  {/* Nombre: Negro puro y tamaño destacado */}
                  <p
                    className="text-xl md:text-2xl"
                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 500, color: '#000000' }}
                  >
                    {person.name}
                  </p>
                  {/* Rol: Gris muy oscuro y negrita para legibilidad */}
                  <p
                    className="text-[12px] md:text-[13px] tracking-[0.15em] uppercase mt-2"
                    style={{ 
                      color: '#333333', 
                      fontFamily: 'var(--font-cormorant)', 
                      fontWeight: 700 
                    }}
                  >
                    {person.role}
                  </p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* SECCIÓN PADRINOS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={revealVariants}
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="text-center mb-14">
            <h3
              className="text-2xl md:text-3xl tracking-[0.35em] uppercase"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, color: '#1A1A1A' }}
            >
              Nuestros Padrinos
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
            {godparents.map((g) => (
              <div key={g.role} className="text-center">
                <p
                  className="text-xl md:text-2xl"
                  style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 500, color: '#000000' }}
                >
                  {g.name}
                </p>
                <p
                  className="text-[12px] md:text-[13px] tracking-[0.15em] uppercase mt-2"
                  style={{ 
                    color: '#333333', 
                    fontFamily: 'var(--font-cormorant)', 
                    fontWeight: 700 
                  }}
                >
                  {g.role}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}