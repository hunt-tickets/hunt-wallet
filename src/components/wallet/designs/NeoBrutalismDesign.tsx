import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2 } from 'lucide-react'
import type { TicketData } from '../../../types'

interface NeoBrutalismDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const NeoBrutalismDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: NeoBrutalismDesignProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Saludo Brutal */}
      <div className="text-center space-y-4">
        <div className="
          bg-yellow-400 text-black
          px-6 py-3 
          border-4 border-black
          transform rotate-1
          shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        ">
          <h2 className="text-xl font-black uppercase tracking-wider">
            ¡HOLA JUAN!
          </h2>
        </div>
        <p className="text-white font-bold text-sm uppercase tracking-wide">
          → TUS ENTRADAS ESTÁN AQUÍ ←
        </p>
      </div>

      {/* Botones Brutales */}
      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.02, rotate: -0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            w-full py-5 px-6
            bg-red-500 hover:bg-red-400
            border-4 border-black
            text-black font-black text-base uppercase tracking-wider
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            transition-all duration-150
            flex items-center justify-center gap-4
            transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            disabled:opacity-60
          "
        >
          {downloading ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Download className="h-6 w-6" />
          )}
          <span>DESCARGAR PDF</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02, rotate: 0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewTickets}
          className="
            w-full py-5 px-6
            bg-cyan-400 hover:bg-cyan-300
            border-4 border-black
            text-black font-black text-base uppercase tracking-wider
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            transition-all duration-150
            flex items-center justify-center gap-4
            transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
          "
        >
          <Eye className="h-6 w-6" />
          <span>VER ENTRADAS ({tickets.length})</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02, rotate: -0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewOrder}
          className="
            w-full py-5 px-6
            bg-purple-400 hover:bg-purple-300
            border-4 border-black
            text-black font-black text-base uppercase tracking-wider
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            transition-all duration-150
            flex items-center justify-center gap-4
            transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
          "
        >
          <Receipt className="h-6 w-6" />
          <span>VER MI ORDEN</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02, rotate: 0.3 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContactSupport}
          className="
            w-full py-5 px-6
            bg-orange-400 hover:bg-orange-300
            border-4 border-black
            text-black font-black text-base uppercase tracking-wider
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            transition-all duration-150
            flex items-center justify-center gap-4
            transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
          "
        >
          <MessageCircle className="h-6 w-6" />
          <span>SOPORTE NOW!</span>
        </motion.button>
      </div>

      {/* Footer Brutal */}
      <div className="text-center pt-4">
        <div className="
          bg-white text-black
          px-4 py-2 
          border-3 border-black
          inline-block
          font-black text-xs uppercase tracking-widest
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        ">
          HUNT TECHNOLOGY
        </div>
      </div>
    </motion.div>
  )
}