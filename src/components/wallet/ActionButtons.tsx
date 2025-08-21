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
          bg-white hover:bg-gray-100
          border border-gray-300
          text-black font-semibold text-base
          rounded-2xl 
          shadow-lg shadow-black/10
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-3
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
          bg-black hover:bg-gray-800
          border border-gray-700
          text-white font-semibold rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          shadow-lg shadow-black/20
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
          bg-white hover:bg-gray-100
          border border-gray-300
          text-black font-semibold rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          shadow-lg shadow-black/10
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
          bg-black hover:bg-gray-800
          border border-gray-700
          text-white font-semibold rounded-2xl
          flex items-center justify-center gap-3
          transition-all duration-300
          shadow-lg shadow-black/20
        "
      >
        <MessageCircle className="h-5 w-5" />
        SOPORTE 24/7
      </motion.button>

    </motion.div>
  )
}