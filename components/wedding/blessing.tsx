import { SmallBotanical } from './decorations'

const families = [
  {
    side: 'Familia de la Novia',
    names: [
      { role: 'Padre de la Novia', name: 'Antonio García Moreno' },
      { role: 'Madre de la Novia', name: 'Carmen López de García' },
    ],
  },
  {
    side: 'Familia del Novio',
    names: [
      { role: 'Padre del Novio', name: 'Miguel Fernández Ruiz' },
      { role: 'Madre del Novio', name: 'Isabel Martínez de Fernández' },
    ],
  },
]

export function Blessing() {
  return (
    <section
      className="relative py-28 px-6"
      style={{
        backgroundImage: 'url(/images/paper-texture.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#F9F7F2',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* Script heading */}
        <p
          className="text-4xl md:text-5xl mb-3"
          style={{ fontFamily: 'var(--font-great-vibes)', color: '#8B1A1A' }}
        >
          Con la bendición de
        </p>
        <h2
          className="text-xl tracking-[0.3em] uppercase mb-12"
          style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: '#2D2D2D' }}
        >
          Nuestras Familias
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="flex-1 h-px max-w-[100px]" style={{ backgroundColor: '#D9D2C4' }} />
          <SmallBotanical />
          <div className="flex-1 h-px max-w-[100px]" style={{ backgroundColor: '#D9D2C4' }} />
        </div>

        {/* Invitation message */}
        <p
          className="text-2xl md:text-3xl mb-5 leading-snug"
          style={{ fontFamily: 'var(--font-great-vibes)', color: '#2D2D2D', letterSpacing: '0.02em' }}
        >
          Tenemos el honor de invitarlos
        </p>
        <p
          className="text-sm md:text-base leading-loose max-w-lg mx-auto mb-14"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 400,
            color: '#7A6E63',
            letterSpacing: '0.05em',
          }}
        >
          Con el corazón rebosante de alegría y amor, nos complace convocarlos a ser testigos
          y partícipes del momento más especial de nuestras vidas: la unión de nuestras almas
          en sagrado matrimonio.
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <div className="flex-1 h-px max-w-[100px]" style={{ backgroundColor: '#D9D2C4' }} />
          <SmallBotanical />
          <div className="flex-1 h-px max-w-[100px]" style={{ backgroundColor: '#D9D2C4' }} />
        </div>

        {/* Families */}
        <div className="grid md:grid-cols-2 gap-12">
          {families.map((family) => (
            <div key={family.side}>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-5"
                style={{ color: '#8B1A1A', fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}
              >
                {family.side}
              </p>
              {family.names.map((person) => (
                <div key={person.name} className="mb-4">
                  <p
                    className="text-lg"
                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 500, color: '#2D2D2D' }}
                  >
                    {person.name}
                  </p>
                  <p
                    className="text-xs tracking-[0.15em] uppercase"
                    style={{ color: '#7A6E63', fontFamily: 'var(--font-cormorant)' }}
                  >
                    {person.role}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
