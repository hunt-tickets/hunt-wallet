import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2 } from 'lucide-react'
import type { TicketData } from '../../../types'

interface GlassmorphismProDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const GlassmorphismProDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: GlassmorphismProDesignProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Saludo Glass */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="
          relative
          bg-gradient-to-r from-white/20 via-white/10 to-white/20
          backdrop-blur-3xl
          border border-white/30
          rounded-3xl p-6
          text-center
          shadow-2xl shadow-white/10
          before:absolute before:inset-0
          before:bg-gradient-to-br before:from-white/20 before:to-transparent
          before:rounded-3xl before:pointer-events-none
          after:absolute after:inset-0
          after:bg-gradient-to-t after:from-black/10 after:to-transparent
          after:rounded-3xl after:pointer-events-none
        "
      >
        <div className="relative z-10">
          <h2 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">
            ¡Hola, Juan! ✨
          </h2>
          <p className="text-white/80 text-sm drop-shadow">
            Experiencia premium lista
          </p>
        </div>
      </motion.div>

      {/* Botones Glass */}
      <div className="space-y-4">
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            w-full py-5 px-6
            relative overflow-hidden
            bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30
            backdrop-blur-2xl
            border border-white/40 hover:border-white/60
            text-white font-semibold text-base
            rounded-2xl
            shadow-2xl shadow-blue-500/20
            transition-all duration-300
            flex items-center justify-center gap-3
            disabled:opacity-60
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-700
          "
        >
          <div className="relative z-10 flex items-center gap-3">
            {downloading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Download className="h-5 w-5" />
            )}
            <span>DESCARGAR PDF</span>
          </div>
        </motion.button>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewTickets}
          className="
            w-full py-5 px-6
            relative overflow-hidden
            bg-gradient-to-r from-green-500/25 via-emerald-500/25 to-green-500/25
            backdrop-blur-2xl
            border border-white/30 hover:border-white/50
            text-white font-medium text-base
            rounded-2xl
            shadow-xl shadow-green-500/15
            transition-all duration-300
            flex items-center justify-center gap-3
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-700
          "
        >
          <div className="relative z-10 flex items-center gap-3">
            <Eye className="h-5 w-5" />
            <span>VER ENTRADAS ({tickets.length})</span>
          </div>
        </motion.button>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewOrder}
          className="
            w-full py-5 px-6
            relative overflow-hidden
            bg-gradient-to-r from-orange-500/25 via-yellow-500/25 to-orange-500/25
            backdrop-blur-2xl
            border border-white/30 hover:border-white/50
            text-white font-medium text-base
            rounded-2xl
            shadow-xl shadow-orange-500/15
            transition-all duration-300
            flex items-center justify-center gap-3
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-700
          "
        >
          <div className="relative z-10 flex items-center gap-3">
            <Receipt className="h-5 w-5" />
            <span>VER MI ORDEN</span>
          </div>
        </motion.button>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContactSupport}
          className="
            w-full py-5 px-6
            relative overflow-hidden
            bg-gradient-to-r from-red-500/25 via-pink-500/25 to-red-500/25
            backdrop-blur-2xl
            border border-white/30 hover:border-white/50
            text-white font-medium text-base
            rounded-2xl
            shadow-xl shadow-red-500/15
            transition-all duration-300
            flex items-center justify-center gap-3
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-700
          "
        >
          <div className="relative z-10 flex items-center gap-3">
            <MessageCircle className="h-5 w-5" />
            <span>SOPORTE 24/7</span>
          </div>
        </motion.button>
      </div>

      {/* Glass Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="
          text-center py-3
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-xl
        "
      >
        <p className="text-white/50 text-xs font-light tracking-wide">
          ✨ Powered by Glass Technology ✨
        </p>
      </motion.div>
    </motion.div>
  )
}