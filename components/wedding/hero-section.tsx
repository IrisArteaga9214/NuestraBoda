'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: '600px' }}>
      <Image
        src="/images/hero-bg.jpeg"
        alt="Daniela y Roberto"
        fill
        className="object-cover object-center"
        priority
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      <style>{`
        @keyframes scrollName {
          0%   { transform: rotate(180deg) translateY(100%); }
          100% { transform: rotate(180deg) translateY(-100%); }
        }
        .name-scroll {
          animation: scrollName 10s linear infinite;
        }
      `}</style>

      <div
        className="absolute inset-y-0 left-0 z-10 flex items-center pointer-events-none select-none overflow-hidden"
        style={{ width: 'clamp(40px, 8vw, 80px)' }}
      >
        <h1
          className="name-scroll"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontWeight: 300,
            fontSize: 'clamp(40px, 10vw, 90px)',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            whiteSpace: 'nowrap',
            textShadow: '0 2px 15px rgba(0,0,0,0.4)',
            lineHeight: 1,
          }}
        >
          Daniela &amp; Roberto
        </h1>
      </div>

      <div className="absolute top-8 sm:top-2 left-1/2 -translate-x-1/2 z-20">
        <div
          className="relative select-none"
          style={{
            width: 'clamp(130px, 18vw, 180px)', 
            height: 'clamp(130px, 18vw, 180px)',
          }}
        >
          <Image
            src="/images/monograma_.png"
            alt="Monograma D&R"
            fill
            className="object-contain drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      <div className="absolute bottom-12 sm:bottom-16 right-4 sm:right-10 z-10 flex flex-col items-center">
        <p
          style={{
            fontFamily: 'var(--font-windsong), cursive',
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            marginBottom: '4px' 
          }}
        >
          Nos casamos
        </p>

        <p
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 700, 
            fontSize: 'clamp(28px, 5.5vw, 54px)', // Tamaño mucho más agresivo
            color: '#FFFFFF',
            letterSpacing: '0.2em',
            whiteSpace: 'nowrap',
            textShadow: `
              0px 2px 10px rgba(0,0,0,0.8),
              0px 0px 20px rgba(0,0,0,0.4)
            `,
          }}
        >
          01 . 08 . 2026
        </p>
      </div>
    </section>
  )
}