export function BotanicalLeft() {
  return (
    <svg width="180" height="500" viewBox="0 0 180 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main stem */}
      <path d="M140 490 C130 420 120 360 135 290 C150 220 145 150 125 80" stroke="#8B1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Branch 1 */}
      <path d="M137 380 C110 365 80 350 50 345" stroke="#8B1A1A" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Leaf on branch 1 */}
      <path d="M50 345 C35 330 20 320 15 305 C25 308 40 315 50 345Z" fill="#8B1A1A" opacity="0.5"/>
      <path d="M50 345 C40 328 35 310 40 295 C45 308 50 325 50 345Z" fill="#8B1A1A" opacity="0.3"/>
      {/* Branch 2 */}
      <path d="M138 300 C115 290 90 285 65 280" stroke="#8B1A1A" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Leaf on branch 2 */}
      <path d="M65 280 C45 268 30 255 25 240 C38 245 52 258 65 280Z" fill="#8B1A1A" opacity="0.5"/>
      <path d="M65 280 C55 262 50 245 58 232 C62 244 65 262 65 280Z" fill="#8B1A1A" opacity="0.3"/>
      {/* Branch 3 high */}
      <path d="M133 200 C110 188 88 182 65 178" stroke="#8B1A1A" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M65 178 C42 162 25 148 20 132 C35 137 52 152 65 178Z" fill="#8B1A1A" opacity="0.5"/>
      {/* Small berries */}
      <circle cx="88" cy="352" r="3" fill="#8B1A1A" opacity="0.6"/>
      <circle cx="80" cy="358" r="2" fill="#8B1A1A" opacity="0.4"/>
      <circle cx="75" cy="348" r="2.5" fill="#8B1A1A" opacity="0.5"/>
      {/* Small leaf sprigs */}
      <path d="M130 150 C115 138 100 130 88 118 C100 122 115 132 130 150Z" fill="#8B1A1A" opacity="0.4"/>
      <path d="M128 130 C115 120 105 108 100 95 C108 101 118 114 128 130Z" fill="#8B1A1A" opacity="0.3"/>
      {/* Thin wispy lines */}
      <path d="M135 420 C125 415 108 412 95 415" stroke="#8B1A1A" strokeWidth="0.5" fill="none" opacity="0.5" strokeLinecap="round"/>
      <path d="M140 250 C128 246 112 243 100 246" stroke="#8B1A1A" strokeWidth="0.5" fill="none" opacity="0.5" strokeLinecap="round"/>
    </svg>
  )
}

export function BotanicalRight() {
  return (
    <svg width="180" height="500" viewBox="0 0 180 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
      <path d="M140 490 C130 420 120 360 135 290 C150 220 145 150 125 80" stroke="#8B1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M137 380 C110 365 80 350 50 345" stroke="#8B1A1A" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M50 345 C35 330 20 320 15 305 C25 308 40 315 50 345Z" fill="#8B1A1A" opacity="0.5"/>
      <path d="M50 345 C40 328 35 310 40 295 C45 308 50 325 50 345Z" fill="#8B1A1A" opacity="0.3"/>
      <path d="M138 300 C115 290 90 285 65 280" stroke="#8B1A1A" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M65 280 C45 268 30 255 25 240 C38 245 52 258 65 280Z" fill="#8B1A1A" opacity="0.5"/>
      <path d="M65 280 C55 262 50 245 58 232 C62 244 65 262 65 280Z" fill="#8B1A1A" opacity="0.3"/>
      <path d="M133 200 C110 188 88 182 65 178" stroke="#8B1A1A" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M65 178 C42 162 25 148 20 132 C35 137 52 152 65 178Z" fill="#8B1A1A" opacity="0.5"/>
      <circle cx="88" cy="352" r="3" fill="#8B1A1A" opacity="0.6"/>
      <circle cx="80" cy="358" r="2" fill="#8B1A1A" opacity="0.4"/>
      <circle cx="75" cy="348" r="2.5" fill="#8B1A1A" opacity="0.5"/>
      <path d="M130 150 C115 138 100 130 88 118 C100 122 115 132 130 150Z" fill="#8B1A1A" opacity="0.4"/>
      <path d="M128 130 C115 120 105 108 100 95 C108 101 118 114 128 130Z" fill="#8B1A1A" opacity="0.3"/>
      <path d="M135 420 C125 415 108 412 95 415" stroke="#8B1A1A" strokeWidth="0.5" fill="none" opacity="0.5" strokeLinecap="round"/>
      <path d="M140 250 C128 246 112 243 100 246" stroke="#8B1A1A" strokeWidth="0.5" fill="none" opacity="0.5" strokeLinecap="round"/>
    </svg>
  )
}


export function SmallBotanical() {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50 C30 40 55 35 80 38 C95 40 108 38 115 30" stroke="#8B1A1A" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M45 38 C42 28 38 20 30 15 C35 22 42 30 45 38Z" fill="#8B1A1A" opacity="0.3"/>
      <path d="M65 37 C68 26 72 17 80 12 C76 20 70 28 65 37Z" fill="#8B1A1A" opacity="0.3"/>
      <path d="M80 38 C83 28 87 20 94 15 C90 22 84 30 80 38Z" fill="#8B1A1A" opacity="0.25"/>
      <circle cx="30" cy="15" r="2.5" fill="#8B1A1A" opacity="0.4"/>
      <circle cx="80" cy="12" r="2" fill="#8B1A1A" opacity="0.35"/>
      <circle cx="115" cy="30" r="2" fill="#8B1A1A" opacity="0.35"/>
    </svg>
  )
}

export function DividerOrnament() {
  return (
    <div className="flex items-center gap-4 my-12">
      <div className="flex-1 h-px" style={{ backgroundColor: '#D9D2C4' }} />
      <SmallBotanical />
      <div className="flex-1 h-px" style={{ backgroundColor: '#D9D2C4' }} />
    </div>
  )
}
