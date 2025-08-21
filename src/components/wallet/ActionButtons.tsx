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
          bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800
          border border-gray-600 hover:border-gray-500
          text-white font-bold text-base
          rounded-2xl 
          shadow-xl shadow-black/30
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-3
          relative overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
          before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
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
          bg-white hover:bg-gray-50
          border-2 border-gray-300 hover:border-gray-400
          text-gray-900 font-semibold rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          shadow-lg shadow-gray-200/50
          hover:shadow-xl hover:shadow-gray-300/50
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
          bg-gradient-to-r from-gray-100 to-white hover:from-white hover:to-gray-50
          border-2 border-gray-200 hover:border-gray-300
          text-gray-800 font-semibold rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          shadow-lg shadow-gray-100/50
          hover:shadow-xl hover:shadow-gray-200/50
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
          bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800
          border-2 border-gray-600 hover:border-gray-500
          text-white font-semibold rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          shadow-lg shadow-gray-800/30
          hover:shadow-xl hover:shadow-gray-700/40
        "
      >
        <MessageCircle className="h-5 w-5" />
        SOPORTE 24/7
      </motion.button>

    </motion.div>
  )
}