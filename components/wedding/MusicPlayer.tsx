'use client'
import { useState, useEffect, useRef } from 'react' // Añadimos useRef
import styles from './envelope-intro.module.css'

export default function EnvelopeIntro() {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null) // Referencia para el audio

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    audioRef.current = new Audio('/sounds/sonido2.mp3')
    return () => { document.body.style.overflow = 'auto' }
  }, [])

  const handleOpen = () => {
    if (audioRef.current) {
      audioRef.current.play()
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