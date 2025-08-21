import { useState } from 'react'
import { motion } from 'framer-motion'
import type { TicketData } from '../../types'
import { AppleWalletCard } from './AppleWalletCard'

interface MobileTicketCarouselProps {
  tickets: TicketData[]
  className?: string
}

export const MobileTicketCarousel = ({ tickets, className = '' }: MobileTicketCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (tickets.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-white/60">No se encontraron tickets</div>
      </div>
    )
  }

  if (tickets.length === 1) {
    return (
      <div className={`px-4 ${className}`}>
        <AppleWalletCard ticket={tickets[0]} isActive={true} />
      </div>
    )
  }

  const handleDragEnd = (_event: any, info: any) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    
    if (Math.abs(offset) > 100 || Math.abs(velocity) > 500) {
      const direction = offset > 0 ? -1 : 1
      const newIndex = Math.max(0, Math.min(tickets.length - 1, currentIndex + direction))
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Mobile drag carousel */}
      <div className="overflow-hidden">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -320 * (tickets.length - 1), right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          animate={{ x: -currentIndex * 320 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              className="flex-shrink-0 w-80 px-4"
            >
              <AppleWalletCard
                ticket={ticket}
                isActive={index === currentIndex}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-6">
        {tickets.map((_, index) => (
          <motion.button
            key={index}
            className={`
              h-2 rounded-full transition-all duration-200
              ${index === currentIndex 
                ? 'bg-hunt-blue w-6' 
                : 'bg-white/20 w-2'
              }
            `}
            onClick={() => setCurrentIndex(index)}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4">
        <span className="text-white/40 text-sm">
          {currentIndex + 1} de {tickets.length} entradas
        </span>
      </div>

      {/* Swipe hint */}
      <div className="text-center mt-2">
        <span className="text-white/30 text-xs">
          Desliza horizontalmente para navegar
        </span>
      </div>
    </div>
  )
}