import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2 } from 'lucide-react'
import type { TicketData } from '../../../types'

interface NeonConcertDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const NeonConcertDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: NeonConcertDesignProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 relative"
    >
      {/* Neon Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-4 left-4 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg animate-pulse delay-500" />
      </div>

      {/* Stage Header */}
      <div className="relative text-center">
        <motion.div
          animate={{ 
            textShadow: [
              "0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080",
              "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
              "0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl font-black uppercase tracking-widest text-white mb-2"
          style={{
            fontFamily: 'Impact, Arial Black, sans-serif',
            textShadow: '0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080'
          }}
        >
          JUAN VIP ACCESS
        </motion.div>
        <div className="text-cyan-400 text-sm font-bold tracking-wider">
          ♦ HUNT EXPERIENCE LIVE ♦
        </div>
      </div>

      {/* Neon Action Buttons */}
      <div className="space-y-4 relative z-10">
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px #ff0080, 0 0 60px #ff0080, inset 0 0 30px #ff0080"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            w-full py-5 px-6
            bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-600
            border-2 border-fuchsia-400
            text-white font-black text-base uppercase tracking-wider
            relative overflow-hidden
            transition-all duration-300
            shadow-[0_0_20px_#ff0080]
            hover:shadow-[0_0_30px_#ff0080,_0_0_60px_#ff0080]
            before:absolute before:inset-0 before:bg-gradient-to-r 
            before:from-transparent before:via-white/30 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-500
          "
          style={{
            textShadow: '0 0 10px #ffffff, 0 0 20px #ffffff'
          }}
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {downloading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <Download className="h-6 w-6" />
            )}
            <span>GET YOUR TICKETS</span>
          </div>
          {/* Corner decorations */}
          <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-white"></div>
          <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-white"></div>
          <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-white"></div>
          <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-white"></div>
        </motion.button>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px #00ffff, 0 0 40px #00ffff"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewTickets}
            className="
              py-5 px-4
              bg-gradient-to-br from-cyan-600 to-cyan-800
              border-2 border-cyan-400
              text-white font-bold text-sm uppercase
              shadow-[0_0_15px_#00ffff]
              hover:shadow-[0_0_25px_#00ffff]
              transition-all duration-300
              relative
            "
            style={{
              textShadow: '0 0 8px #ffffff'
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <Eye className="h-5 w-5" />
              <span>VIEW</span>
              <span className="text-cyan-200 text-xs">({tickets.length} TIX)</span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-cyan-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px #ffff00, 0 0 40px #ffff00"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewOrder}
            className="
              py-5 px-4
              bg-gradient-to-br from-yellow-500 to-yellow-700
              border-2 border-yellow-400
              text-black font-bold text-sm uppercase
              shadow-[0_0_15px_#ffff00]
              hover:shadow-[0_0_25px_#ffff00]
              transition-all duration-300
              relative
            "
            style={{
              textShadow: '0 0 8px #000000'
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <Receipt className="h-5 w-5" />
              <span>ORDER</span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-yellow-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>

        <motion.button
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 20px #ff4500, 0 0 40px #ff4500"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={onContactSupport}
          className="
            w-full py-4 px-6
            bg-gradient-to-r from-orange-600 to-red-600
            border-2 border-orange-400
            text-white font-bold text-sm uppercase tracking-wide
            shadow-[0_0_15px_#ff4500]
            hover:shadow-[0_0_25px_#ff4500]
            transition-all duration-300
          "
          style={{
            textShadow: '0 0 8px #ffffff'
          }}
        >
          <div className="flex items-center justify-center gap-3">
            <MessageCircle className="h-5 w-5" />
            <span>BACKSTAGE SUPPORT</span>
          </div>
        </motion.button>
      </div>

      {/* Neon Footer */}
      <div className="text-center relative">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="
            inline-block text-transparent bg-clip-text 
            bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-yellow-400
            font-bold text-xs tracking-widest uppercase
          "
          style={{
            filter: 'drop-shadow(0 0 10px #ff0080) drop-shadow(0 0 20px #00ffff)'
          }}
        >
          ⚡ HUNT TECHNOLOGY LIVE ⚡
        </motion.div>
      </div>
    </motion.div>
  )
}