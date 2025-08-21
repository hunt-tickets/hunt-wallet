import { useState } from 'react'
import { motion } from 'framer-motion'
import type { TicketData } from '../../types'
import { AppleWalletCard } from './AppleWalletCard'

interface TicketsCarouselProps {
  tickets: TicketData[]
  className?: string
}

const carouselVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  }
}

export const TicketsCarousel = ({ tickets, className = '' }: TicketsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (tickets.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-white/60">No se encontraron tickets</div>
      </div>
    )
  }

  if (tickets.length === 1) {
    // Single ticket - show centered
    return (
      <motion.div
        variants={carouselVariants}
        initial="hidden"
        animate="visible"
        className={`flex justify-center ${className}`}
      >
        <AppleWalletCard ticket={tickets[0]} isActive={true} />
      </motion.div>
    )
  }

  // Multiple tickets - show carousel
  return (
    <motion.div
      variants={carouselVariants}
      initial="hidden"
      animate="visible"
      className={`relative ${className}`}
    >
      {/* Carousel container */}
      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-4"
          animate={{ x: -currentIndex * 320 }}
          transition={{ type: "spring" as "spring", stiffness: 300, damping: 30 }}
        >
          {tickets.map((ticket, index) => (
            <div
              key={ticket.id}
              className="flex-shrink-0 w-80"
            >
              <AppleWalletCard
                ticket={ticket}
                isActive={index === currentIndex}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="
            glass-button p-2 m-2 rounded-full
            disabled:opacity-30 disabled:cursor-not-allowed
            hover:scale-110 transition-transform
          "
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={() => setCurrentIndex(Math.min(tickets.length - 1, currentIndex + 1))}
          disabled={currentIndex === tickets.length - 1}
          className="
            glass-button p-2 m-2 rounded-full
            disabled:opacity-30 disabled:cursor-not-allowed
            hover:scale-110 transition-transform
          "
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-6">
        {tickets.map((_, index) => (
          <button
            key={index}
            className={`
              h-2 rounded-full transition-all duration-200
              ${index === currentIndex 
                ? 'bg-hunt-blue w-6' 
                : 'bg-white/20 w-2 hover:bg-white/40'
              }
            `}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4">
        <span className="text-white/40 text-sm">
          {currentIndex + 1} de {tickets.length} entradas
        </span>
      </div>

      {/* Swipe hint for mobile */}
      {tickets.length > 1 && (
        <div className="text-center mt-2 md:hidden">
          <span className="text-white/30 text-xs">
            Desliza para ver más entradas
          </span>
        </div>
      )}
    </motion.div>
  )
}