import { useState } from 'react'
import { motion } from 'framer-motion'
import type { TicketData } from '../../types'
import { usePDFDownload } from '../../hooks'

interface ActionButtonsProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  className?: string
}

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.02, 
    y: -2,
    transition: {
      duration: 0.2
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6
    }
  }
}

export const ActionButtons = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  className = '' 
}: ActionButtonsProps) => {
  const { downloading, downloadTickets } = usePDFDownload()
  const [downloadError, setDownloadError] = useState<string | null>(null)

  const handleDownloadPDF = async () => {
    try {
      setDownloadError(null)
      await downloadTickets(tickets)
    } catch (error) {
      setDownloadError(error instanceof Error ? error.message : 'Error al descargar')
    }
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className={`space-y-4 max-w-md mx-auto ${className}`}
    >
      {/* Download PDF Button - Primary CTA */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={handleDownloadPDF}
        disabled={downloading || tickets.length === 0}
        className="
          w-full py-4 px-6 
          bg-hunt-blue hover:bg-hunt-blue/90
          text-white font-medium text-lg
          rounded-xl 
          shadow-lg shadow-hunt-blue/20
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-3
        "
      >
        {downloading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            Preparando descarga...
          </>
        ) : (
          <>
            📥 DESCARGAR PDF
          </>
        )}
      </motion.button>

      {downloadError && (
        <div className="text-hunt-red text-sm text-center">
          {downloadError}
        </div>
      )}

      {/* View Tickets Button */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={onViewTickets}
        className="
          w-full py-4 px-6
          bg-white/5 backdrop-blur-sm border border-white/20
          hover:bg-white/10 transition-all duration-200
          text-white font-medium rounded-xl
          flex items-center justify-center gap-3
        "
      >
        🎫 VER ENTRADAS ({tickets.length})
      </motion.button>

      {/* Support Button */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={onContactSupport}
        className="
          w-full py-4 px-6
          bg-white/5 backdrop-blur-sm border border-white/20
          hover:bg-white/10 transition-all duration-200
          text-white font-medium rounded-xl
          flex items-center justify-center gap-3
        "
      >
        💬 SOPORTE 24/7
      </motion.button>

      {/* Footer info */}
      <motion.div
        variants={buttonVariants}
        className="text-center mt-8"
      >
        <p className="text-hunt-text-secondary text-sm">
          Hunt Tickets © 2024
        </p>
        <p className="text-hunt-text-secondary text-xs mt-1">
          Revisa tu email para más detalles
        </p>
      </motion.div>
    </motion.div>
  )
}