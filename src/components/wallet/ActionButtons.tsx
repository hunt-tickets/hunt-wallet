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
          bg-gradient-to-r from-hunt-blue via-hunt-purple to-hunt-blue
          bg-size-200 bg-pos-0 hover:bg-pos-100
          border border-hunt-blue/30 hover:border-hunt-blue/50
          text-white font-bold text-base
          rounded-2xl 
          shadow-lg shadow-hunt-blue/20
          transition-all duration-500
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-3
          relative overflow-hidden
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
          before:translate-x-[-100%] hover:before:translate-x-[100%]
          before:transition-transform before:duration-700
          backdrop-blur-xl
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
          bg-gradient-to-r from-hunt-green/20 to-hunt-green/10
          border border-hunt-green/30 hover:border-hunt-green/50
          hover:bg-gradient-to-r hover:from-hunt-green/30 hover:to-hunt-green/20
          text-white font-medium rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          relative overflow-hidden
          backdrop-blur-xl
          shadow-lg shadow-hunt-green/10
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-transparent before:via-hunt-green/20 before:to-transparent 
          before:translate-x-[-100%] hover:before:translate-x-[100%]
          before:transition-transform before:duration-500
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
          bg-gradient-to-r from-hunt-yellow/20 to-hunt-yellow/10
          border border-hunt-yellow/30 hover:border-hunt-yellow/50
          hover:bg-gradient-to-r hover:from-hunt-yellow/30 hover:to-hunt-yellow/20
          text-white font-medium rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          relative overflow-hidden
          backdrop-blur-xl
          shadow-lg shadow-hunt-yellow/10
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-transparent before:via-hunt-yellow/20 before:to-transparent 
          before:translate-x-[-100%] hover:before:translate-x-[100%]
          before:transition-transform before:duration-500
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
          bg-gradient-to-r from-hunt-red/20 to-hunt-red/10
          border border-hunt-red/30 hover:border-hunt-red/50
          hover:bg-gradient-to-r hover:from-hunt-red/30 hover:to-hunt-red/20
          text-white font-medium rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          relative overflow-hidden
          backdrop-blur-xl
          shadow-lg shadow-hunt-red/10
          before:absolute before:inset-0 
          before:bg-gradient-to-r before:from-transparent before:via-hunt-red/20 before:to-transparent 
          before:translate-x-[-100%] hover:before:translate-x-[100%]
          before:transition-transform before:duration-500
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