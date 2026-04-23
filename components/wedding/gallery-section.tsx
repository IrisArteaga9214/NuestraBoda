'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const PHOTOS = [
  {
    src: '/images/pareja1.jpeg',
    alt: 'Daniela y Roberto',
    caption: 'Contigo aprendí\nque el amor existe',
    rotation: -2,
  },
  {
    src: '/images/pareja2.jpeg',
    alt: 'En tus ojos',
    caption: 'Y en tus ojos\nencontré mi hogar',
    rotation: 1.5,
    // Ajustamos la posición: 'top' empuja la imagen hacia abajo para mostrar la parte superior
    objectPosition: 'top center', 
  },
  {
    src: '/images/familia1.jpeg',
    alt: 'Familia unida',
    caption: 'Gracias por la familia\nque formamos juntos',
    rotation: -1,
  },
  {
    src: '/images/familia2.jpeg',
    alt: 'Juntos siempre',
    caption: 'Juntos siempre\nen todo momento',
    rotation: 2,
  },
]

function PolaroidCard({ photo, index }: { photo: (typeof PHOTOS)[0]; index: number }) {
  const isEven = index % 2 === 0
  
  return (
    <motion.div
      className={`flex flex-col items-center ${index % 2 === 1 ? 'mt-8 sm:mt-12' : ''}`}
      initial={{ 
        opacity: 0, 
        x: isEven ? -120 : 120,
        rotate: isEven ? -15 : 15,
        scale: 0.8
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        rotate: photo.rotation, 
        scale: 1 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.15, 
        type: "spring", 
        stiffness: 40, 
        damping: 12
      }}
    >
      <div
        className="inline-block w-auto bg-[#F5F2EC] shadow-xl hover:shadow-2xl transition-shadow duration-500"
        style={{
          paddingTop: 12,
          paddingLeft: 12,
          paddingRight: 12,
          paddingBottom: 48,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 4,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 3,
        }}
      >
        <div className="overflow-hidden bg-[#E2E2E2] w-full" style={{ lineHeight: 0 }}>
          <motion.div
            initial={{ filter: "grayscale(100%) contrast(1.2) brightness(1.2)", opacity: 0 }}
            whileInView={{ filter: "grayscale(100%) contrast(1) brightness(1)", opacity: 1 }}
            transition={{ duration: 2, delay: (index * 0.2) + 0.6 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={220}
              height={275}
              className="block w-[140px] h-[175px] sm:w-[180px] sm:h-[225px] md:w-[220px] md:h-[275px]"
              style={{ 
                objectFit: 'cover',
                // Usamos la posición personalizada o por defecto 'center'
                objectPosition: (photo as any).objectPosition || 'center' 
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.p
        className="mt-4 text-center whitespace-pre-line"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: (index * 0.2) + 1 }}
        style={{
          fontFamily: 'var(--font-caveat), cursive',
          fontSize: 'clamp(18px, 3vw, 24px)',
          color: '#8B1A1A',
          lineHeight: 1.2,
          maxWidth: '220px',
          transform: `rotate(${photo.rotation * 0.5}deg)`,
        }}
      >
        {photo.caption}
      </motion.p>
    </motion.div>
  )
}

export function GallerySection() {
  return (
    <section className="py-24 px-4 overflow-hidden" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
          >
            Momentos Juntos
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#8B1A1A] opacity-30" />
            <h2
              className="text-sm sm:text-base tracking-[0.4em] uppercase"
              style={{ color: '#2D2D2D', fontFamily: 'var(--font-cormorant)', fontWeight: 300 }}
            >
              Nuestra Historia
            </h2>
            <div className="h-[1px] w-12 bg-[#8B1A1A] opacity-30" />
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
          {PHOTOS.map((photo, i) => (
            <PolaroidCard key={photo.src} photo={photo} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}