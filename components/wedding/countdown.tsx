"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const WEDDING_DATE = new Date("2026-08-01T17:00:00")

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const now = new Date()
      const diff = WEDDING_DATE.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: '#EDE9DF' }}>

      <motion.div
        className="absolute top-2 right-[-25px] md:top-6 md:right-4 pointer-events-none select-none w-[150px] md:w-[220px] z-10"
        initial={{ opacity: 0, scale: 2.5, rotate: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 0.85, scale: 1, rotate: -12, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1], delay: 0.5 }}
      >
        <Image
          src="/images/rubber-stamp.png"
          alt="Sellado con amor"
          width={220}
          height={110}
          style={{ width: '100%', height: 'auto' }}
        />
      </motion.div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contando los días hasta el gran momento
        </motion.p>

        <motion.h2
          className="text-2xl md:text-3xl tracking-[0.25em] uppercase mb-16"
          style={{ 
            fontFamily: 'var(--font-cormorant)', 
            fontWeight: 400, 
            color: '#3D3D3D' 
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          1 de Agosto, 2026
        </motion.h2>

        <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4 md:gap-10">
          {units.map(({ label, value }, index) => (
            <motion.div 
              key={label} 
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
            >
              <div
                className="overflow-hidden"
                style={{
                  borderBottom: '1px solid #D1C9BC', 
                  paddingBottom: '12px',
                  minWidth: '80px',
                }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="block text-6xl md:text-7xl leading-none tabular-nums text-center"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontWeight: 300, 
                      color: '#2D2D2D', // Volvemos al gris original pero con mejor visibilidad
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {mounted ? pad(value) : "00"}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span
                className="text-[12px] md:text-xs tracking-[0.3em] uppercase"
                style={{ 
                  color: '#5E544A',
                  fontFamily: 'var(--font-cormorant)', 
                  fontWeight: 600 
                }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}