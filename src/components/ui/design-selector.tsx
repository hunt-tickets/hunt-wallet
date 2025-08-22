import { useState } from 'react'
import { Palette } from 'lucide-react'

interface DesignSelectorProps {
  currentDesign: string
  onDesignChange: (design: string) => void
}

export function DesignSelector({ currentDesign, onDesignChange }: DesignSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const designs = [
    { id: 'minimalist', name: 'Minimalista', desc: 'Elegante y espacioso' },
    { id: 'cards', name: 'Card System', desc: 'Modular y organizado' },
    { id: 'ios', name: 'iOS Style', desc: 'Familiar y pulido' },
    { id: 'brutal', name: 'Neo-Brutalism', desc: 'Bold y distintivo' },
    { id: 'glass', name: 'Glassmorphism Pro', desc: 'Futurista y sofisticado' },
    { id: 'vintage', name: 'Ticket Vintage', desc: 'Entrada clásica con perforaciones' },
    { id: 'neon', name: 'Neon Concert', desc: 'Vibes de concierto con luces' },
    { id: 'luxury', name: 'VIP Luxury', desc: 'Experiencia premium dorada' },
    { id: 'chaos', name: 'Asymmetric Chaos', desc: 'Experimental y roto' },
    { id: 'cyber', name: 'Cyber Hero', desc: 'Terminal ciberpunk con efectos 3D' },
    { id: 'horizon', name: 'Horizon Space', desc: 'Experiencia espacial interactiva' }
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          inline-flex items-center justify-center
          w-10 h-10
          bg-white/10 hover:bg-white/20
          backdrop-blur-xl border border-white/20
          rounded-full
          text-white/90
          transition-all duration-200
          hover:scale-105
        "
        title="Cambiar diseño"
      >
        <Palette className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="
          absolute top-12 right-0 z-50
          bg-white/15 backdrop-blur-2xl
          border border-white/20
          rounded-2xl p-4
          min-w-[280px]
          shadow-2xl shadow-black/25
        ">
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-sm mb-3">
              Estilos de Diseño
            </h3>
            {designs.map((design) => (
              <button
                key={design.id}
                onClick={() => {
                  onDesignChange(design.id)
                  setIsOpen(false)
                }}
                className={`
                  w-full text-left p-3 rounded-xl
                  border border-white/10 hover:border-white/30
                  transition-all duration-200
                  ${currentDesign === design.id 
                    ? 'bg-white/20 border-white/40' 
                    : 'bg-white/5 hover:bg-white/10'
                  }
                `}
              >
                <div className="text-white font-medium text-sm">
                  {design.name}
                </div>
                <div className="text-white/60 text-xs mt-1">
                  {design.desc}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}