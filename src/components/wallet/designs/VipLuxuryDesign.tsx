import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2, Crown, Star } from 'lucide-react'
import type { TicketData } from '../../../types'

interface VipLuxuryDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const VipLuxuryDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: VipLuxuryDesignProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 relative"
    >
      {/* Luxury Header */}
      <div className="text-center relative">
        <div className="
          bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400
          text-black px-6 py-3 mb-4
          relative overflow-hidden
          shadow-2xl
        ">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="relative z-10 flex items-center justify-center gap-2">
            <Crown className="h-5 w-5" />
            <span className="font-serif font-bold text-lg tracking-wide">VIP MEMBER</span>
            <Crown className="h-5 w-5" />
          </div>
          {/* Gold shine effect */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </div>
        
        <h2 className="text-xl font-serif text-yellow-200 mb-2">
          Señor Juan Pérez
        </h2>
        <div className="flex items-center justify-center gap-2 text-yellow-300/80 text-sm">
          <Star className="h-3 w-3 fill-current" />
          <span className="font-serif italic">Experiencia Premium Exclusiva</span>
          <Star className="h-3 w-3 fill-current" />
        </div>
      </div>

      {/* Luxury Action Buttons */}
      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            w-full py-5 px-8
            bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800
            border-2 border-yellow-400
            text-yellow-100 font-serif font-semibold text-base
            relative overflow-hidden
            shadow-2xl shadow-yellow-400/20
            transition-all duration-300
            hover:shadow-yellow-400/40
            before:absolute before:inset-0 before:bg-gradient-to-r 
            before:from-transparent before:via-yellow-400/10 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-700
          "
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {downloading ? (
              <Loader2 className="h-5 w-5 animate-spin text-yellow-400" />
            ) : (
              <Download className="h-5 w-5 text-yellow-400" />
            )}
            <span>Descargar Colección Exclusiva</span>
          </div>
          {/* Decorative corners */}
          <div className="absolute top-2 left-2 w-4 h-4">
            <div className="w-full h-0.5 bg-yellow-400"></div>
            <div className="w-0.5 h-full bg-yellow-400"></div>
          </div>
          <div className="absolute top-2 right-2 w-4 h-4">
            <div className="w-full h-0.5 bg-yellow-400"></div>
            <div className="w-0.5 h-full bg-yellow-400 ml-auto"></div>
          </div>
          <div className="absolute bottom-2 left-2 w-4 h-4">
            <div className="w-0.5 h-full bg-yellow-400"></div>
            <div className="w-full h-0.5 bg-yellow-400 mt-auto"></div>
          </div>
          <div className="absolute bottom-2 right-2 w-4 h-4">
            <div className="w-0.5 h-full bg-yellow-400 ml-auto"></div>
            <div className="w-full h-0.5 bg-yellow-400 mt-auto"></div>
          </div>
        </motion.button>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewTickets}
            className="
              py-6 px-4
              bg-gradient-to-br from-slate-700 to-slate-800
              border border-yellow-400/50
              text-yellow-100 font-serif font-medium text-sm
              shadow-xl shadow-black/40
              hover:shadow-yellow-400/20
              transition-all duration-300
              relative
              before:absolute before:inset-0 before:bg-gradient-to-br 
              before:from-yellow-400/5 before:to-transparent before:opacity-0 
              hover:before:opacity-100 before:transition-opacity
            "
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-2 bg-yellow-400/20 rounded-full">
                <Eye className="h-5 w-5 text-yellow-400" />
              </div>
              <span>Ver Entradas</span>
              <span className="text-yellow-300/60 text-xs font-sans">
                {tickets.length} disponibles
              </span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewOrder}
            className="
              py-6 px-4
              bg-gradient-to-br from-slate-700 to-slate-800
              border border-yellow-400/50
              text-yellow-100 font-serif font-medium text-sm
              shadow-xl shadow-black/40
              hover:shadow-yellow-400/20
              transition-all duration-300
              relative
              before:absolute before:inset-0 before:bg-gradient-to-br 
              before:from-yellow-400/5 before:to-transparent before:opacity-0 
              hover:before:opacity-100 before:transition-opacity
            "
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-2 bg-yellow-400/20 rounded-full">
                <Receipt className="h-5 w-5 text-yellow-400" />
              </div>
              <span>Mi Orden</span>
              <span className="text-yellow-300/60 text-xs font-sans">
                Detalles VIP
              </span>
            </div>
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContactSupport}
          className="
            w-full py-4 px-6
            bg-gradient-to-r from-slate-800 to-slate-700
            border border-yellow-400/30
            text-yellow-200 font-serif font-medium text-sm
            shadow-lg shadow-black/30
            hover:shadow-yellow-400/10
            transition-all duration-300
          "
        >
          <div className="flex items-center justify-center gap-3">
            <MessageCircle className="h-4 w-4 text-yellow-400" />
            <span>Concierge Personal 24/7</span>
          </div>
        </motion.button>
      </div>

      {/* Luxury Footer */}
      <div className="text-center pt-4">
        <div className="
          inline-flex items-center gap-2
          px-4 py-2
          bg-gradient-to-r from-yellow-400/20 to-yellow-600/20
          border border-yellow-400/30
          text-yellow-300 font-serif text-xs
          shadow-lg
        ">
          <Star className="h-3 w-3 fill-current" />
          <span>Powered by Hunt Technology Premium</span>
          <Star className="h-3 w-3 fill-current" />
        </div>
      </div>
    </motion.div>
  )
}