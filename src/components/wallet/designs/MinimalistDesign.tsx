import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2 } from 'lucide-react'
import type { TicketData } from '../../../types'

interface MinimalistDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const MinimalistDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: MinimalistDesignProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Saludo Minimalista */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-light text-white tracking-wide">
          Hola, Juan
        </h2>
        <p className="text-white/60 text-sm font-light leading-relaxed">
          Tus entradas están listas
        </p>
      </div>

      {/* Botones Minimalistas */}
      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            w-full py-5 px-6
            bg-transparent 
            border border-white/20 hover:border-white/40
            text-white font-light text-sm tracking-wider
            rounded-none
            transition-all duration-500
            flex items-center justify-center gap-4
            hover:bg-white/5
          "
        >
          {downloading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          <span>DESCARGAR PDF</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onViewTickets}
          className="
            w-full py-5 px-6
            bg-transparent 
            border border-white/10 hover:border-white/25
            text-white/80 hover:text-white font-light text-sm tracking-wider
            rounded-none
            transition-all duration-500
            flex items-center justify-center gap-4
            hover:bg-white/3
          "
        >
          <Eye className="h-4 w-4" />
          <span>VER ENTRADAS ({tickets.length})</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onViewOrder}
          className="
            w-full py-5 px-6
            bg-transparent 
            border border-white/10 hover:border-white/25
            text-white/80 hover:text-white font-light text-sm tracking-wider
            rounded-none
            transition-all duration-500
            flex items-center justify-center gap-4
            hover:bg-white/3
          "
        >
          <Receipt className="h-4 w-4" />
          <span>VER MI ORDEN</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onContactSupport}
          className="
            w-full py-5 px-6
            bg-transparent 
            border border-white/10 hover:border-white/25
            text-white/80 hover:text-white font-light text-sm tracking-wider
            rounded-none
            transition-all duration-500
            flex items-center justify-center gap-4
            hover:bg-white/3
          "
        >
          <MessageCircle className="h-4 w-4" />
          <span>SOPORTE 24/7</span>
        </motion.button>
      </div>
    </motion.div>
  )
}