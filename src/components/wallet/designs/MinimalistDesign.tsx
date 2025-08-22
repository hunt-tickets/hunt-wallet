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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-8"
    >
      {/* Botones Minimalistas Mejorados */}
      <div className="space-y-5 px-2">
        {/* Botón Principal - Descargar */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ 
            scale: 1.02, 
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            group
            w-full py-6 px-8
            bg-gradient-to-r from-white/8 to-white/4
            backdrop-blur-sm
            border border-white/30 hover:border-white/50
            text-white font-light text-base tracking-wide
            rounded-2xl
            transition-all duration-300 ease-out
            flex items-center justify-center gap-4
            hover:bg-gradient-to-r hover:from-white/12 hover:to-white/6
            shadow-lg shadow-black/20
            hover:shadow-xl hover:shadow-black/30
            disabled:opacity-50 disabled:cursor-not-allowed
            disabled:hover:scale-100 disabled:hover:y-0
            relative overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex items-center gap-4">
            {downloading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Download className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            )}
            <span className="font-medium">
              {downloading ? 'PREPARANDO...' : 'DESCARGAR PDF'}
            </span>
          </div>
        </motion.button>

        {/* Botón Ver Entradas */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ 
            scale: 1.015, 
            y: -1,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.99 }}
          onClick={onViewTickets}
          className="
            group
            w-full py-5 px-8
            bg-white/3 hover:bg-white/8
            backdrop-blur-sm
            border border-white/15 hover:border-white/30
            text-white/85 hover:text-white font-light text-sm tracking-wider
            rounded-xl
            transition-all duration-300 ease-out
            flex items-center justify-center gap-3
            shadow-md shadow-black/10
            hover:shadow-lg hover:shadow-black/20
          "
        >
          <Eye className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          <span>VER ENTRADAS ({tickets.length})</span>
        </motion.button>

        {/* Botón Ver Orden */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ 
            scale: 1.015, 
            y: -1,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.99 }}
          onClick={onViewOrder}
          className="
            group
            w-full py-5 px-8
            bg-white/2 hover:bg-white/6
            backdrop-blur-sm
            border border-white/10 hover:border-white/25
            text-white/80 hover:text-white/95 font-light text-sm tracking-wider
            rounded-xl
            transition-all duration-300 ease-out
            flex items-center justify-center gap-3
            shadow-md shadow-black/10
            hover:shadow-lg hover:shadow-black/20
          "
        >
          <Receipt className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          <span>VER MI ORDEN</span>
        </motion.button>

        {/* Botón Soporte */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ 
            scale: 1.015, 
            y: -1,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.99 }}
          onClick={onContactSupport}
          className="
            group
            w-full py-5 px-8
            bg-white/2 hover:bg-white/6
            backdrop-blur-sm
            border border-white/10 hover:border-white/25
            text-white/80 hover:text-white/95 font-light text-sm tracking-wider
            rounded-xl
            transition-all duration-300 ease-out
            flex items-center justify-center gap-3
            shadow-md shadow-black/10
            hover:shadow-lg hover:shadow-black/20
          "
        >
          <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          <span>SOPORTE 24/7</span>
        </motion.button>
      </div>
    </motion.div>
  )
}