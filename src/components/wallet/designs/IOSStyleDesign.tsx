import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2 } from 'lucide-react'
import type { TicketData } from '../../../types'

interface IOSStyleDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const IOSStyleDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: IOSStyleDesignProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Saludo estilo iOS */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-white">
          Hola, Juan
        </h2>
        <p className="text-white/60 text-base">
          Tus entradas están listas para descargar
        </p>
      </div>

      {/* Botones estilo iOS */}
      <div className="space-y-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            w-full py-4 px-6
            bg-blue-500 hover:bg-blue-600
            text-white font-semibold text-base
            rounded-xl
            shadow-lg shadow-blue-500/30
            transition-all duration-200
            flex items-center justify-center gap-3
            disabled:opacity-60
          "
        >
          {downloading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Download className="h-5 w-5" />
          )}
          <span>Descargar PDF</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewTickets}
          className="
            w-full py-4 px-6
            bg-green-500 hover:bg-green-600
            text-white font-semibold text-base
            rounded-xl
            shadow-lg shadow-green-500/30
            transition-all duration-200
            flex items-center justify-center gap-3
          "
        >
          <Eye className="h-5 w-5" />
          <span>Ver Entradas ({tickets.length})</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewOrder}
          className="
            w-full py-4 px-6
            bg-orange-500 hover:bg-orange-600
            text-white font-semibold text-base
            rounded-xl
            shadow-lg shadow-orange-500/30
            transition-all duration-200
            flex items-center justify-center gap-3
          "
        >
          <Receipt className="h-5 w-5" />
          <span>Ver Mi Orden</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContactSupport}
          className="
            w-full py-4 px-6
            bg-gray-600 hover:bg-gray-700
            text-white font-semibold text-base
            rounded-xl
            shadow-lg shadow-gray-600/30
            transition-all duration-200
            flex items-center justify-center gap-3
          "
        >
          <MessageCircle className="h-5 w-5" />
          <span>Soporte 24/7</span>
        </motion.button>
      </div>

      {/* Separador iOS style */}
      <div className="flex items-center gap-4 py-4">
        <div className="flex-1 h-px bg-white/10"></div>
        <span className="text-white/40 text-xs font-medium">HUNT WALLET</span>
        <div className="flex-1 h-px bg-white/10"></div>
      </div>
    </motion.div>
  )
}