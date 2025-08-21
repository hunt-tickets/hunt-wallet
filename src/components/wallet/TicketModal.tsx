import { motion, AnimatePresence } from 'framer-motion'
import type { TicketData } from '../../types'
import { ResponsiveTicketViewer } from './ResponsiveTicketViewer'

interface TicketModalProps {
  isOpen: boolean
  onClose: () => void
  tickets: TicketData[]
  eventName?: string
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring" as "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: {
      duration: 0.2
    }
  }
}

export const TicketModal = ({ 
  isOpen, 
  onClose, 
  tickets, 
  eventName 
}: TicketModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="
                glass-panel 
                w-full max-w-6xl max-h-[90vh]
                overflow-y-auto
                relative
                bg-hunt-bg/95 backdrop-blur-2xl
                border-2 border-white/20
                shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 sticky top-0 bg-hunt-bg/80 backdrop-blur-sm -mx-6 -mt-6 px-6 pt-6 pb-4 border-b border-white/10">
                <div>
                  <h2 className="text-2xl font-semibold text-hunt-text-primary">
                    Tus Entradas
                  </h2>
                  {eventName && (
                    <p className="text-hunt-text-secondary mt-1">
                      {eventName}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="
                    glass-button p-2 rounded-full
                    hover:bg-white/20 transition-all
                  "
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tickets Content */}
              <div className="py-4">
                <ResponsiveTicketViewer tickets={tickets} />
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-hunt-text-secondary text-sm">
                  Presenta estos códigos QR en el evento para acceder
                </p>
                <p className="text-hunt-text-secondary text-xs mt-2">
                  Guarda este link para acceder a tus tickets cuando quieras
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}