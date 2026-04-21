'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './envelope-intro.module.css'

interface EnvelopeIntroProps {
  onOpen?: () => void;
}

export default function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  
  // Referencia para el sonido corto del click/sobre
  const clickAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    // Precargamos el sonido del click (sonido2.mp3)
    clickAudioRef.current = new Audio('/sounds/sonido2.mp3')
    
    return () => { document.body.style.overflow = 'auto' }
  }, [])

  const handleOpen = () => {
    // 1. Suena el efecto de click inmediatamente
    if (clickAudioRef.current) {
      clickAudioRef.current.play().catch(err => console.log("Error click:", err))
    }

    // 2. Avisa a la página principal para que prepare la música (con su retraso de 3s)
    if (onOpen) {
      onOpen()
    }

    setOpen(true)
    
    setTimeout(() => { document.body.style.overflow = 'auto' }, 3500)
    setTimeout(() => { setIsVisible(false) }, 6500)
  }

  if (!isVisible) return null

  return (
    <div className={`${styles.envelopeWrapper} ${open ? styles.openWrapper : ''}`}>
      <div className={`${styles.envelope} ${open ? styles.open : ''}`}>
        <div className={styles.base}>
          <img src="/images/sobre_final.png" alt="Sobre" />
        </div>
        <div className={styles.flap}>
          <img src="/images/solapa_final.png" alt="Solapa" />
        </div>
        <div className={styles.sealContainer} onClick={handleOpen}>
          <div className={styles.seal} />
          <span className={styles.hintText}>Toca para abrir</span>
        </div>
      </div>
    </div>
  )
}