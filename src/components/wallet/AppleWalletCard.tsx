import { motion } from 'framer-motion'
import type { TicketData } from '../../types'
import { QRCodeComponent } from '../ui/QRCodeComponent'
import { BarcodeStrip } from '../ui/BarcodeStrip'
import { formatSeatDisplay, getCategoryColors, formatDate, formatTime, getStatusColor, getStatusText } from '../../utils/ticketHelpers'

interface AppleWalletCardProps {
  ticket: TicketData
  isActive?: boolean
  className?: string
}

const cardVariants = {
  active: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    z: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  inactive: {
    scale: 0.85,
    opacity: 0.6,
    rotateY: -5,
    z: -50,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const staggerChild = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

export const AppleWalletCard = ({ 
  ticket, 
  isActive = true, 
  className = '' 
}: AppleWalletCardProps) => {
  const gradientColors = getCategoryColors(ticket.pricing.category)
  
  return (
    <motion.div
      variants={isActive ? cardHoverVariants : cardVariants}
      initial="inactive"
      animate={isActive ? "active" : "inactive"}
      whileHover={isActive ? "hover" : undefined}
      whileTap={isActive ? "tap" : undefined}
      className={`
        bg-gradient-to-br ${gradientColors}
        border border-white/20 
        rounded-2xl 
        backdrop-blur-2xl 
        shadow-2xl 
        overflow-hidden
        w-full max-w-sm mx-auto
        relative
        before:absolute before:inset-0 before:bg-black/20 before:backdrop-blur-sm before:rounded-2xl
        ${className}
      `}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Header with Event Logo & Status */}
        <motion.div 
          variants={staggerChild}
          className="p-6 border-b border-white/5 relative"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              {ticket.eventInfo.logo ? (
                <img 
                  src={ticket.eventInfo.logo} 
                  alt={ticket.eventInfo.name}
                  className="h-8 w-auto mb-2" 
                />
              ) : (
                <div className="h-8 w-24 bg-white/10 rounded mb-2 flex items-center justify-center">
                  <span className="text-white/60 text-xs font-medium">HUNT</span>
                </div>
              )}
              <h3 className="text-white/90 text-lg font-medium">
                {ticket.eventInfo.name}
              </h3>
            </div>
            <div className={`text-xs font-medium ${getStatusColor(ticket.status)}`}>
              {getStatusText(ticket.status)}
            </div>
          </div>
        </motion.div>

        {/* Event Info */}
        <motion.div 
          variants={staggerChild}
          className="px-6 py-4 space-y-3"
        >
          <div className="text-white text-xl font-semibold">
            {ticket.eventInfo.name}
          </div>
          <div className="flex items-center gap-2 text-white/70">
            📅 {formatDate(ticket.eventInfo.date)} • {formatTime(ticket.eventInfo.time)}
          </div>
          <div className="text-white/60">
            🏟️ {ticket.eventInfo.venue}
          </div>
        </motion.div>

        {/* Seat Details */}
        <motion.div 
          variants={staggerChild}
          className="px-6 py-3 bg-white/[0.02] border-y border-white/5"
        >
          <div className="text-white font-medium text-center text-lg">
            {formatSeatDisplay(ticket)}
          </div>
          {ticket.pricing.category !== 'standard' && (
            <div className="text-center mt-1">
              <span className={`
                inline-block px-2 py-1 rounded-full text-xs font-medium
                ${ticket.pricing.category === 'vip' 
                  ? 'bg-hunt-purple/20 text-hunt-purple' 
                  : 'bg-hunt-yellow/20 text-hunt-yellow'
                }
              `}>
                {ticket.pricing.category.toUpperCase()}
              </span>
            </div>
          )}
        </motion.div>

        {/* QR Code */}
        <motion.div 
          variants={staggerChild}
          className="flex justify-center py-8 bg-white/[0.03]"
        >
          <QRCodeComponent ticket={ticket} size={120} />
        </motion.div>

        {/* Barcode Footer */}
        <motion.div 
          variants={staggerChild}
          className="h-12 bg-white/[0.05] flex items-center justify-center"
        >
          <BarcodeStrip ticketId={ticket.id} />
        </motion.div>

        {/* Order ID */}
        <motion.div 
          variants={staggerChild}
          className="px-6 py-2 text-center"
        >
          <div className="text-white/40 text-xs">
            Orden: {ticket.purchaseInfo.orderId}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}