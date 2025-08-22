import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2 } from 'lucide-react'
import type { TicketData } from '../../../types'

interface TicketVintageDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const TicketVintageDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: TicketVintageDesignProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Ticket Header */}
      <div className="relative">
        <div className="
          bg-gradient-to-r from-amber-50 to-orange-50
          border-2 border-dashed border-amber-600
          rounded-lg p-4 relative
          shadow-lg
          before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
          before:w-4 before:h-4 before:bg-white before:rounded-full before:-translate-x-2
          before:border-2 before:border-amber-600
          after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
          after:w-4 after:h-4 after:bg-white after:rounded-full after:translate-x-2
          after:border-2 after:border-amber-600
        ">
          <div className="text-center space-y-2">
            <div className="text-amber-900 font-mono text-xs tracking-widest">
              ADMIT ONE • HUNT EXPERIENCE • 2024
            </div>
            <h2 className="text-xl font-serif text-amber-900">
              Bienvenido, Juan Pérez
            </h2>
            <div className="text-amber-700 text-sm font-mono">
              TICKET ID: HT-{Math.random().toString(36).substr(2, 6).toUpperCase()}
            </div>
          </div>
          
          {/* Perforations */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-amber-600 rounded-full -translate-x-0.5" />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-2">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-amber-600 rounded-full translate-x-0.5" />
            ))}
          </div>
        </div>
      </div>

      {/* Vintage Action Buttons */}
      <div className="space-y-3">
        <motion.button
          whileHover={{ scale: 1.02, rotate: 0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            w-full p-4
            bg-gradient-to-r from-red-700 to-red-800
            border-4 border-red-900
            text-amber-50 font-bold text-sm
            relative overflow-hidden
            transform -rotate-0.5
            shadow-[4px_4px_0px_0px_rgba(127,29,29,1)]
            hover:shadow-[6px_6px_0px_0px_rgba(127,29,29,1)]
            transition-all duration-200
            before:absolute before:inset-0 before:bg-gradient-to-r 
            before:from-transparent before:via-yellow-400/20 before:to-transparent
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-700
          "
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {downloading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Download className="h-5 w-5" />
            )}
            <span className="font-mono tracking-wider">DESCARGAR ENTRADAS</span>
          </div>
          <div className="absolute top-1 right-2 text-xs font-mono text-red-300">
            PDF
          </div>
        </motion.button>

        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ scale: 1.05, rotate: -0.3 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewTickets}
            className="
              p-4 bg-gradient-to-br from-green-700 to-green-800
              border-3 border-green-900
              text-green-50 font-semibold text-xs
              transform rotate-0.3
              shadow-[3px_3px_0px_0px_rgba(20,83,45,1)]
              hover:shadow-[4px_4px_0px_0px_rgba(20,83,45,1)]
              transition-all duration-200
            "
          >
            <div className="flex flex-col items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="font-mono">VER</span>
              <span className="text-green-200 text-xs">({tickets.length})</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, rotate: 0.3 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewOrder}
            className="
              p-4 bg-gradient-to-br from-blue-700 to-blue-800
              border-3 border-blue-900
              text-blue-50 font-semibold text-xs
              transform -rotate-0.3
              shadow-[3px_3px_0px_0px_rgba(30,64,175,1)]
              hover:shadow-[4px_4px_0px_0px_rgba(30,64,175,1)]
              transition-all duration-200
            "
          >
            <div className="flex flex-col items-center gap-2">
              <Receipt className="h-4 w-4" />
              <span className="font-mono">ORDEN</span>
            </div>
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, rotate: -0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContactSupport}
          className="
            w-full p-3
            bg-gradient-to-r from-purple-700 to-purple-800
            border-3 border-purple-900
            text-purple-50 font-semibold text-sm
            transform rotate-0.2
            shadow-[3px_3px_0px_0px_rgba(88,28,135,1)]
            hover:shadow-[4px_4px_0px_0px_rgba(88,28,135,1)]
            transition-all duration-200
          "
        >
          <div className="flex items-center justify-center gap-3">
            <MessageCircle className="h-4 w-4" />
            <span className="font-mono tracking-wide">ASISTENCIA 24/7</span>
          </div>
        </motion.button>
      </div>

      {/* Vintage Footer */}
      <div className="text-center">
        <div className="
          inline-block bg-amber-100 text-amber-800 
          px-4 py-1 border border-amber-600
          font-mono text-xs tracking-widest
          transform -rotate-1
        ">
          ★ POWERED BY HUNT TECHNOLOGY ★
        </div>
      </div>
    </motion.div>
  )
}