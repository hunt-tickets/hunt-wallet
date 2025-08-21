import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'framer-motion'
import type { TicketData } from '../../types'

interface QRCodeComponentProps {
  ticket: TicketData
  size?: number
  className?: string
}

const qrVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring" as "spring",
      stiffness: 200,
      delay: 0.5
    }
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.4, 0, 0.6, 1] as [number, number, number, number]
    }
  }
}

export const QRCodeComponent = ({ 
  ticket, 
  size = 120, 
  className = '' 
}: QRCodeComponentProps) => {
  // Generate QR data with security
  const qrData = JSON.stringify({
    ticketId: ticket.id,
    eventId: ticket.eventInfo.id,
    seatInfo: ticket.seatInfo,
    timestamp: Date.now(),
    hash: btoa(`${ticket.id}-${ticket.eventInfo.id}`).slice(0, 16)
  })

  return (
    <motion.div
      variants={qrVariants}
      initial="initial"
      animate="animate"
      whileHover="pulse"
      className={`bg-white p-4 rounded-lg ${className}`}
    >
      <QRCodeSVG
        value={qrData}
        size={size}
        level="H"
        includeMargin={false}
        fgColor="#000000"
        bgColor="#ffffff"
      />
    </motion.div>
  )
}