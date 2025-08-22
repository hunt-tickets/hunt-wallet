import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2 } from 'lucide-react'
import type { TicketData } from '../../../types'

interface AsymmetricDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const AsymmetricDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: AsymmetricDesignProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 relative"
    >
      {/* Broken Header */}
      <div className="relative">
        <motion.div
          animate={{ rotate: [0, 0.5, 0, -0.3, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
            p-4 relative overflow-hidden
            clip-path-polygon
            transform -skew-x-2
          "
          style={{
            clipPath: 'polygon(0% 0%, 95% 0%, 100% 85%, 5% 100%)'
          }}
        >
          <div className="transform skew-x-2">
            <h2 className="text-white font-black text-lg tracking-tight">
              Hey Juan!
            </h2>
            <div className="text-white/80 text-sm font-medium">
              Ready to break some rules? 🔥
            </div>
          </div>
        </motion.div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0, -5, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 transform rotate-45"
        />
        <motion.div
          animate={{ 
            y: [0, 5, -10, 0],
            x: [0, -3, 3, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1 left-8 w-4 h-4 bg-cyan-400 rounded-full"
        />
      </div>

      {/* Chaos Grid */}
      <div className="grid grid-cols-12 grid-rows-6 gap-2 h-64">
        {/* Download Button - Spans weird areas */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            col-span-8 row-span-3
            bg-gradient-to-br from-red-500 via-red-600 to-red-700
            text-white font-bold text-sm
            transform -rotate-1 hover:rotate-0
            transition-all duration-300
            relative overflow-hidden
            border-l-4 border-yellow-400
            shadow-lg hover:shadow-xl
            flex items-center justify-center
          "
          style={{
            clipPath: 'polygon(0% 0%, 90% 0%, 100% 75%, 10% 100%)'
          }}
        >
          <div className="flex flex-col items-center gap-2">
            {downloading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <Download className="h-6 w-6" />
            )}
            <span className="text-center">DOWNLOAD<br/>CHAOS</span>
          </div>
        </motion.button>

        {/* View Button - Organic shape */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={onViewTickets}
          className="
            col-span-4 row-span-2
            bg-gradient-to-tl from-green-500 to-emerald-600
            text-white font-semibold text-xs
            transform rotate-2
            transition-all duration-300
            flex flex-col items-center justify-center gap-1
            relative
          "
          style={{
            borderRadius: '50% 20% 50% 20%'
          }}
        >
          <Eye className="h-5 w-5" />
          <span>VIEW</span>
          <span className="text-green-200 text-xs">({tickets.length})</span>
          
          {/* Decorative dots */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full" />
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full" />
        </motion.button>

        {/* Order Button - Triangle */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          onClick={onViewOrder}
          className="
            col-span-5 row-span-2 col-start-1 row-start-4
            bg-gradient-to-br from-purple-500 to-indigo-600
            text-white font-semibold text-xs
            transform -rotate-3
            transition-all duration-300
            flex items-center justify-center
            relative
          "
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        >
          <div className="flex flex-col items-center gap-1 pb-4">
            <Receipt className="h-4 w-4" />
            <span>ORDER</span>
          </div>
        </motion.button>

        {/* Support Button - Weird rectangle */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactSupport}
          className="
            col-span-7 row-span-3 col-start-6 row-start-4
            bg-gradient-to-r from-orange-500 via-red-500 to-pink-500
            text-white font-semibold text-sm
            transform rotate-1
            transition-all duration-300
            flex items-center justify-center gap-2
            relative overflow-hidden
            border-r-4 border-cyan-400
          "
          style={{
            clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)'
          }}
        >
          <MessageCircle className="h-5 w-5" />
          <span>HELP<br/>ME!</span>
          
          {/* Chaos lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-white/30 transform -skew-x-12" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-white/30 transform skew-x-12" />
        </motion.button>

        {/* Random decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="
            col-span-2 row-span-1 col-start-9 row-start-2
            bg-yellow-400
            flex items-center justify-center
            text-black text-xs font-black
          "
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
          }}
        >
          ★
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 45, -45, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="
            col-span-1 row-span-1 col-start-2 row-start-6
            bg-cyan-400
            rounded-full
          "
        />
      </div>

      {/* Broken Footer */}
      <div className="text-center">
        <motion.div
          animate={{ skewX: [0, 2, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="
            inline-block
            bg-gradient-to-r from-gray-800 to-black
            text-white px-4 py-2
            font-mono text-xs
            transform -rotate-1
            border-l-2 border-purple-400
            border-r-2 border-yellow-400
          "
        >
          HUNT.exe // SYSTEM_OVERRIDE
        </motion.div>
      </div>
    </motion.div>
  )
}