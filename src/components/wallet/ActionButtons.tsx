import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, MessageCircle, Loader2, Receipt } from 'lucide-react'
import type { TicketData } from '../../types'
import { usePDFDownload } from '../../hooks'

interface ActionButtonsProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder?: () => void
  className?: string
}

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
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
  onViewOrder,
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
      className={`space-y-3 ${className}`}
    >
      {/* Download PDF Button - Primary CTA */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleDownloadPDF}
        disabled={downloading || tickets.length === 0}
        className="
          w-full py-4 px-6 
          bg-white/10 backdrop-blur-xl border border-white/20
          hover:bg-white/15 hover:border-white/30
          text-white font-medium text-base
          rounded-2xl 
          shadow-lg shadow-black/10
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-3
          relative overflow-hidden
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-hunt-blue/20 before:to-transparent 
          before:opacity-0 hover:before:opacity-100 before:transition-opacity
        "
      >
        {downloading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Preparando descarga...
          </>
        ) : (
          <>
            <Download className="h-5 w-5" />
            DESCARGAR PDF
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onViewTickets}
        className="
          w-full py-4 px-6
          bg-white/5 backdrop-blur-xl border border-white/15
          hover:bg-white/10 hover:border-white/25
          text-white font-medium rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          relative overflow-hidden
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-white/5 before:to-transparent 
          before:opacity-0 hover:before:opacity-100 before:transition-opacity
        "
      >
        <Eye className="h-5 w-5" />
        VER ENTRADAS ({tickets.length})
      </motion.button>

      {/* View Order Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onViewOrder}
        className="
          w-full py-4 px-6
          bg-white/5 backdrop-blur-xl border border-white/15
          hover:bg-white/10 hover:border-white/25
          text-white font-medium rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          relative overflow-hidden
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-white/5 before:to-transparent 
          before:opacity-0 hover:before:opacity-100 before:transition-opacity
        "
      >
        <Receipt className="h-5 w-5" />
        VER MI ORDEN
      </motion.button>

      {/* Support Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContactSupport}
        className="
          w-full py-4 px-6
          bg-white/5 backdrop-blur-xl border border-white/15
          hover:bg-white/10 hover:border-white/25
          text-white font-medium rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          relative overflow-hidden
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-white/5 before:to-transparent 
          before:opacity-0 hover:before:opacity-100 before:transition-opacity
        "
      >
        <MessageCircle className="h-5 w-5" />
        SOPORTE 24/7
      </motion.button>

      {/* Footer info */}
      <motion.div
        variants={buttonVariants}
        className="text-center mt-6 pt-4 border-t border-white/5"
      >
        <p className="text-white/40 text-sm font-medium">
          Hunt Tickets © 2024
        </p>
        <p className="text-white/30 text-xs mt-1">
          Revisa tu email para más detalles
        </p>
      </motion.div>
    </motion.div>
  )
}