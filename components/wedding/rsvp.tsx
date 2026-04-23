"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { BotanicalLeft, BotanicalRight } from "./decorations"

// Definimos los tipos de las variantes para que TypeScript no marque error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 0.3 
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
}

const decorationVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 0.2, 
    scale: 1, 
    transition: { duration: 1.5, ease: "easeOut" } 
  }
}

export function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attendance: "yes",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phoneNumber = "524411014380"
    const attendanceText = form.attendance === "yes" 
      ? "Confirmo con gusto mi asistencia."
      : "Lamentablemente no podré asistir."

    const fullMessage = `Hola, soy ${form.name}.\n\n${attendanceText}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`
    
    window.open(whatsappUrl, "_blank")
    setSubmitted(true)
  }

  return (
    <section className="paper-section torn-top relative py-20 md:py-32 px-6 overflow-hidden">
      {/* Decoraciones Botánicas */}
      <motion.div 
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        variants={decorationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <BotanicalLeft />
      </motion.div>
      
      <motion.div 
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        variants={decorationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <BotanicalRight />
      </motion.div>

      <motion.div 
        className="max-w-md mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Encabezado */}
        <motion.div className="text-center mb-10" variants={itemVariants}>
          <p className="text-4xl md:text-5xl mb-3" style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}>
            Confirmación de asistencia
          </p>
          <h2 className="text-sm tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-cormorant)', color: '#7A6E63' }}>
             Nos encantará compartir este día contigo
          </h2>

          <motion.div 
            className="inline-block px-8 py-3 border-y border-[#D9D2C4] mb-6"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80 } }
            }}
          >
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase font-bold" style={{ fontFamily: 'var(--font-cormorant)', color: '#8B1A1A' }}>
              Evento solo para adultos
            </p>
          </motion.div>

          <p className="text-sm opacity-70 italic" style={{ fontFamily: 'var(--font-cormorant)', color: '#202020' }}>
            Confirma antes del 1 de julio de 2026
          </p>
        </motion.div>

        {/* Formulario o Gracias */}
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div 
              key="submitted"
              className="text-center py-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-4xl mb-3" style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}>¡Gracias!</p>
              <p style={{ fontFamily: 'var(--font-cormorant)', color: '#7A6E63' }}>Hemos recibido tu confirmación.</p>
            </motion.div>
          ) : (
            <motion.form 
              key="form-rsvp"
              onSubmit={handleSubmit} 
              className="flex flex-col gap-6"
              variants={itemVariants}
            >
              <div className="flex flex-col">
                <label style={{ fontFamily: 'var(--font-cormorant)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#7A6E63', marginBottom: '8px', textAlign: 'center' }}>
                  Nombre Completo
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre"
                  className="focus:border-[#8B1A1A] transition-colors duration-300"
                  style={{ backgroundColor: '#F9F7F2', border: '1px solid #D9D2C4', borderRadius: '25px', padding: '14px 20px', fontFamily: 'var(--font-cormorant)', outline: 'none', textAlign: 'center' }}
                />
              </div>

              <div className="flex flex-col relative">
                <label style={{ fontFamily: 'var(--font-cormorant)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#7A6E63', marginBottom: '8px', textAlign: 'center' }}>
                  ¿Asistirás?
                </label>
                <select
                  name="attendance"
                  value={form.attendance}
                  onChange={handleChange}
                  style={{ backgroundColor: '#F9F7F2', border: '1px solid #D9D2C4', borderRadius: '25px', padding: '14px 20px', fontFamily: 'var(--font-cormorant)', outline: 'none', textAlignLast: 'center', appearance: 'none' }}
                >
                  <option value="yes">Sí, asistiré con gusto</option>
                  <option value="no">Lamentablemente no podré</option>
                </select>
                <div className="absolute right-6 bottom-4 pointer-events-none opacity-30">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, backgroundColor: '#701414' }}
                whileTap={{ scale: 0.98 }}
                className="py-4 px-8 text-xs tracking-[0.3em] uppercase text-[#F9F7F2] bg-[#8B1A1A] rounded-[30px] font-bold shadow-md transition-all"
                style={{ fontFamily: 'var(--font-cormorant)', cursor: 'pointer' }}
              >
                Confirmar Asistencia
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
