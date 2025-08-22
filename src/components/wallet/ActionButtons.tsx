import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, MessageCircle, Loader2, Receipt } from 'lucide-react'
import type { TicketData } from '../../types'
import { usePDFDownload } from '../../hooks'
import { MinimalistDesign } from './designs/MinimalistDesign'

interface ActionButtonsProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder?: () => void
  className?: string
  designStyle?: string
}


const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6
    }
  }
}

export const ActionButtons = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  className = '',
  designStyle = 'current'
}: ActionButtonsProps) => {
  const { downloading, downloadTickets } = usePDFDownload()
  const [downloadError, setDownloadError] = useState<string | null>(null)

  const handleDownloadPDF = async () => {
    try {
      setDownloadError(null)
      await downloadTickets(tickets)
    } catch (error) {
      setDownloadError(error instanceof Error ? error.message : 'Error al descargar')
    }
  }

  // Siempre usar el diseño minimalista por defecto
  const commonProps = {
    tickets,
    onViewTickets,
    onContactSupport,
    onViewOrder: onViewOrder || (() => {}),
    downloading,
    onDownload: handleDownloadPDF
  }

  return <MinimalistDesign {...commonProps} />
}