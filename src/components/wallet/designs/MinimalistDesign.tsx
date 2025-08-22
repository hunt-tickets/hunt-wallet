import { motion } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2 } from 'lucide-react'
import type { TicketData } from '../../../types'
import { useLanguage } from '../../../contexts/LanguageContext'

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
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="px-6 py-6 relative"
    >
      {/* Breathing Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-white/1 rounded-3xl"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.01, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
      {/* Botones Minimalistas Mejorados */}
      <div className="space-y-6">
        {/* CTA Principal Premium */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ 
            scale: 1.02,
            y: -2,
            transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
          }}
          whileTap={{ scale: 0.98 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            group relative overflow-hidden
            w-full py-6 px-8
            bg-gradient-to-r from-white/12 via-white/8 to-white/12
            hover:from-white/18 hover:via-white/14 hover:to-white/18
            backdrop-blur-md
            border border-white/30 hover:border-white/50
            text-white font-semibold text-base tracking-wider
            rounded-2xl
            transition-all duration-300 ease-out
            flex items-center justify-center gap-4
            shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
            hover:shadow-[0_12px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]
            disabled:opacity-50 disabled:cursor-not-allowed
            disabled:hover:scale-100 disabled:hover:y-0
          "
          style={{
            boxShadow: downloading ? 
              '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(59, 130, 246, 0.3)' :
              undefined
          }}
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ 
              x: ['100%', '200%'],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 flex items-center gap-4">
            <motion.div
              animate={downloading ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: downloading ? 1 : 0.3, repeat: downloading ? Infinity : 0, ease: "linear" }}
            >
              {downloading ? (
                <div className="relative">
                  <Loader2 className="h-6 w-6 animate-spin text-blue-300" />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-300 animate-spin" />
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Download className="h-6 w-6" />
                </motion.div>
              )}
            </motion.div>
            
            <motion.span
              className="font-semibold tracking-wide"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
              animate={downloading ? { opacity: [1, 0.7, 1] } : { opacity: 1 }}
              transition={{ duration: 1.5, repeat: downloading ? Infinity : 0 }}
            >
              {downloading ? t('preparing') : t('download.pdf')}
            </motion.span>
          </div>
          
          {/* Inner Glow */}
          <div className="absolute inset-0.5 bg-gradient-to-r from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Botones Secundarios Premium */}
        <div className="grid gap-4">
          {/* Botón Ver Entradas */}
          <motion.button
            initial={{ opacity: 0, y: 15, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ 
              scale: 1.01,
              y: -1,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.99 }}
            onClick={onViewTickets}
            className="
              group relative overflow-hidden
              w-full py-5 px-6
              bg-gradient-to-br from-white/8 via-white/4 to-white/2
              hover:from-white/12 hover:via-white/8 hover:to-white/4
              backdrop-blur-xl
              border border-white/15 hover:border-white/25
              text-white/85 hover:text-white font-medium text-sm tracking-wide
              rounded-xl
              transition-all duration-300 ease-out
              flex items-center gap-4
              shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.15)]
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_24px_rgba(0,0,0,0.2)]
            "
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Eye className="h-5 w-5" />
            </motion.div>
            
            <div className="flex-1 text-left">
              <span className="block font-medium">{t('view.tickets')}</span>
              <motion.div 
                className="flex items-center gap-1 mt-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span className="text-xs text-white/60">{tickets.length} tickets</span>
              </motion.div>
            </div>
            
            {/* Micro gradiente hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.button>

          {/* Botón Ver Orden */}
          <motion.button
            initial={{ opacity: 0, y: 15, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ 
              scale: 1.01,
              y: -1,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.99 }}
            onClick={onViewOrder}
            className="
              group relative overflow-hidden
              w-full py-5 px-6
              bg-gradient-to-br from-white/6 via-white/3 to-white/1
              hover:from-white/10 hover:via-white/6 hover:to-white/3
              backdrop-blur-xl
              border border-white/12 hover:border-white/20
              text-white/80 hover:text-white/95 font-medium text-sm tracking-wide
              rounded-xl
              transition-all duration-300 ease-out
              flex items-center gap-4
              shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_16px_rgba(0,0,0,0.1)]
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.15)]
            "
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ rotate: -5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Receipt className="h-5 w-5" />
            </motion.div>
            
            <span className="flex-1 text-left font-medium">{t('view.order')}</span>
            
            {/* Micro gradiente hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.button>

          {/* Botón Soporte */}
          <motion.button
            initial={{ opacity: 0, y: 15, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ 
              scale: 1.01,
              y: -1,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.99 }}
            onClick={onContactSupport}
            className="
              group relative overflow-hidden
              w-full py-5 px-6
              bg-gradient-to-br from-white/5 via-white/2 to-white/1
              hover:from-white/8 hover:via-white/5 hover:to-white/2
              backdrop-blur-xl
              border border-white/10 hover:border-white/18
              text-white/75 hover:text-white/90 font-medium text-sm tracking-wide
              rounded-xl
              transition-all duration-300 ease-out
              flex items-center gap-4
              shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.08)]
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.12)]
            "
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.div>
            
            <div className="flex-1 text-left">
              <span className="block font-medium">{t('support.24')}</span>
              <div className="flex items-center gap-1 mt-0.5">
                <motion.div 
                  className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-white/50">Online now</span>
              </div>
            </div>
            
            {/* Micro gradiente hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.button>
        </div>
      </div>
      </div>
    </motion.div>
  )
}