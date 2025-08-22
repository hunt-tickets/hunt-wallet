import type { TicketData } from '../../types'
import { usePDFDownload } from '../../hooks'
import { MinimalistDesign } from './designs/MinimalistDesign'

interface ActionButtonsProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder?: () => void
}

export const ActionButtons = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder
}: ActionButtonsProps) => {
  const { downloading, downloadTickets } = usePDFDownload()

  const handleDownloadPDF = async () => {
    try {
      await downloadTickets(tickets)
    } catch (error) {
      console.error('Error al descargar:', error)
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