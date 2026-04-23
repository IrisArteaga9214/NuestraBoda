'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './envelope-intro.module.css'

interface EnvelopeIntroProps {
  onOpen?: () => void;
}

export default function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const clickAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    clickAudioRef.current = new Audio('/sounds/sonido2.mp3')
    return () => { document.body.style.overflow = 'auto' }
  }, [])

  const handleOpen = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.play().catch(err => console.log("Error click:", err))
    }
    if (onOpen) onOpen()
    setOpen(true)
    
    // Tiempos originales intactos
    setTimeout(() => { document.body.style.overflow = 'auto' }, 3500)
    setTimeout(() => { setIsVisible(false) }, 6500)
  }

  if (!isVisible) return null

  return (
    <div className={`${styles.envelopeWrapper} ${open ? styles.openWrapper : ''}`}>
      <div className={`${styles.envelope} ${open ? styles.open : ''}`}>
        <div className={styles.base}>
          <picture>
            <source srcSet="/images/sobre_c_abierto.png" media="(min-width: 1024px)" />
            <img src="/images/sobre_final.png" alt="Sobre" />
          </picture>
        </div>
        <div className={styles.flap}>
          <picture>
            <source srcSet="/images/solapa_c_.png" media="(min-width: 1024px)" />
            <img src="/images/solapa_final.png" alt="Solapa" />
          </picture>
        </div>
        <div className={styles.sealContainer} onClick={handleOpen}>
          <div className={styles.seal} />
          <span className={styles.hintText}>Toca para abrir</span>
        </div>
      </div>
    </div>
  )
}