import { SmallBotanical } from './decorations'

const moments = [
  {
    year: '2019',
    title: 'El Primer Encuentro',
    description:
      'Una tarde de otoño nuestros caminos se cruzaron por primera vez. Una mirada bastó para saber que algo especial comenzaba.',
  },
  {
    year: '2020',
    title: 'Nuestro Primer "Sí"',
    description:
      'Entre aventuras y momentos sencillos, descubrimos que queríamos pasar cada día juntos. El amor creció más de lo que imaginamos.',
  },
  {
    year: '2023',
    title: 'La Propuesta',
    description:
      'Bajo un cielo estrellado, rodeados de flores, llegó la pregunta más importante de nuestras vidas. Ella dijo sí con lágrimas de alegría.',
  },
  {
    year: '2026',
    title: 'Para Siempre',
    description:
      'Hoy celebramos el comienzo de nuestro para siempre. Gracias por ser parte de esta historia de amor.',
  },
]

export function OurStory() {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: '#EDE9DF' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-4xl md:text-5xl mb-3"
            style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
          >
            Nuestra Historia
          </p>
          <h2
            className="text-xl tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#2D2D2D' }}
          >
            Un amor que comenzó así
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px"
            style={{ backgroundColor: '#D9D2C4', transform: 'translateX(-0.5px)' }}
          />
          <div className="flex flex-col gap-0">
            {moments.map((moment, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-0 pb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`pl-14 md:pl-0 w-full md:w-[calc(50%-32px)] ${
                    i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
                  }`}
                >
                  <p
                    className="text-xs tracking-[0.3em] uppercase mb-1"
                    style={{ color: '#8B1A1A', fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}
                  >
                    {moment.year}
                  </p>
                  <h3
                    className="text-xl mb-2"
                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 500, color: '#2D2D2D' }}
                  >
                    {moment.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#7A6E63', fontFamily: 'var(--font-cormorant)' }}
                  >
                    {moment.description}
                  </p>
                </div>

                {/* Node */}
                <div
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 mt-1 flex items-center justify-center rounded-full"
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#EDE9DF',
                    border: '1px solid #D9D2C4',
                  }}
                >
                  <SmallBotanical />
                </div>

                <div className="hidden md:block w-[calc(50%-32px)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
