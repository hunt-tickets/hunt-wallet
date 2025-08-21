import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2 } from 'lucide-react'
import type { TicketData } from '../../../types'

interface CardSystemDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const CardSystemDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: CardSystemDesignProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Saludo en Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="
          bg-white/10 backdrop-blur-xl
          border border-white/20
          rounded-2xl p-6
          text-center
        "
      >
        <h2 className="text-xl font-semibold text-white mb-2">
          ¡Hola, Juan! 👋
        </h2>
        <p className="text-white/70 text-sm">
          Todo listo para tu experiencia
        </p>
      </motion.div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Download Card */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            col-span-2
            bg-white/15 backdrop-blur-xl
            border border-white/30 hover:border-white/50
            rounded-2xl p-6
            transition-all duration-300
            hover:bg-white/20
          "
        >
          <div className="flex flex-col items-center gap-3">
            {downloading ? (
              <Loader2 className="h-8 w-8 text-white animate-spin" />
            ) : (
              <Download className="h-8 w-8 text-white" />
            )}
            <span className="text-white font-medium text-sm">
              DESCARGAR PDF
            </span>
          </div>
        </motion.button>

        {/* Ver Entradas Card */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onViewTickets}
          className="
            bg-white/10 backdrop-blur-xl
            border border-white/20 hover:border-white/40
            rounded-2xl p-5
            transition-all duration-300
            hover:bg-white/15
          "
        >
          <div className="flex flex-col items-center gap-2">
            <Eye className="h-6 w-6 text-white" />
            <span className="text-white text-xs font-medium text-center">
              VER ENTRADAS
            </span>
            <span className="text-white/60 text-xs">
              ({tickets.length})
            </span>
          </div>
        </motion.button>

        {/* Ver Orden Card */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onViewOrder}
          className="
            bg-white/10 backdrop-blur-xl
            border border-white/20 hover:border-white/40
            rounded-2xl p-5
            transition-all duration-300
            hover:bg-white/15
          "
        >
          <div className="flex flex-col items-center gap-2">
            <Receipt className="h-6 w-6 text-white" />
            <span className="text-white text-xs font-medium text-center">
              MI ORDEN
            </span>
          </div>
        </motion.button>

        {/* Soporte Card */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactSupport}
          className="
            col-span-2
            bg-white/8 backdrop-blur-xl
            border border-white/15 hover:border-white/30
            rounded-2xl p-4
            transition-all duration-300
            hover:bg-white/12
          "
        >
          <div className="flex items-center justify-center gap-3">
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="text-white text-sm font-medium">
              SOPORTE 24/7
            </span>
          </div>
        </motion.button>
      </div>
    </motion.div>
  )
}