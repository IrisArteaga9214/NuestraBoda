'use client'

import { useRef } from 'react'
import { Hero } from "@/components/wedding/hero-section"
import { Invitation } from "@/components/wedding/invitation"
import { EventDetails } from "@/components/wedding/event-details"
import { Countdown } from "@/components/wedding/countdown"
import { Gallery } from "@/components/wedding/gallery"
import { Itinerary } from "@/components/wedding/itinerary"
import { Details } from "@/components/wedding/details"
import { GiftRegistry } from "@/components/wedding/gift-registry"
import { RSVP } from "@/components/wedding/rsvp"
import { Footer } from "@/components/wedding/footer"
import { Reservation } from "@/components/wedding/reservations"
import { Info } from "@/components/wedding/info"
import EnvelopeIntro from "@/components/wedding/EnvelopeIntro"

export default function WeddingPage() {
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleStartMusic = () => {
    // Agregamos un retraso de 3 segundos (3000ms) antes de iniciar
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 41.5 // Ajustado al segundo 41
        audioRef.current.volume = 0.3
        audioRef.current.play().catch(err => console.log("Error al reproducir:", err))
      }
    }, 2000)
  }

  return (
    <main className="relative w-full" style={{ backgroundColor: '#F9F7F2' }}>
      <audio 
        ref={audioRef} 
        src="/sounds/wildestDreams.mp3" 
        loop 
        preload="auto" 
      />

      <EnvelopeIntro onOpen={handleStartMusic} />

      {/* --- BLOQUE 1: HERO --- */}
      <section className="sticky top-0 h-screen w-full z-[1]">
        <Hero />
      </section>

      {/* --- BLOQUE 2: TRANSICIÓN --- */}
      <div className="relative z-[10] bg-[#F9F7F2] shadow-[0_-20px_50px_rgba(0,0,0,0.08)]">
        <Invitation />
        <Details />
        <div className="h-20 bg-[#F9F7F2]" />
      </div>

      {/* --- BLOQUE 3: DETALLES --- */}
      <div className="relative z-[20] bg-[#F9F7F2] shadow-[0_-20px_50px_rgba(0,0,0,0.08)]">
         <Countdown />
        <EventDetails />
        <Info />
        <Itinerary />
        <Gallery />
        <GiftRegistry />
        <RSVP />
        <Footer />
      </div>
    </main>
  )
}