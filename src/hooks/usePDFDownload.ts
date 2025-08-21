import { useState } from 'react'
import type { TicketData } from '../types'

interface UsePDFDownloadReturn {
  downloading: boolean
  downloadTickets: (tickets: TicketData[]) => Promise<void>
  downloadSingleTicket: (ticket: TicketData) => Promise<void>
}

export const usePDFDownload = (): UsePDFDownloadReturn => {
  const [downloading, setDownloading] = useState(false)

  const downloadTickets = async (tickets: TicketData[]) => {
    setDownloading(true)
    
    try {
      // TODO: Implement actual PDF generation
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate download
      
      // Create a mock PDF blob for now
      const pdfContent = generateMockPDF(tickets)
      const blob = new Blob([pdfContent], { type: 'application/pdf' })
      
      // Create download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `hunt-tickets-${tickets[0]?.purchaseInfo.orderId || 'tickets'}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      
    } catch (error) {
      console.error('Error downloading PDF:', error)
      throw new Error('Error al descargar los tickets')
    } finally {
      setDownloading(false)
    }
  }

  const downloadSingleTicket = async (ticket: TicketData) => {
    await downloadTickets([ticket])
  }

  return {
    downloading,
    downloadTickets,
    downloadSingleTicket
  }
}

// Mock PDF content generator
const generateMockPDF = (tickets: TicketData[]): string => {
  return `%PDF-1.4
Hunt Tickets - ${tickets[0]?.eventInfo.name}
${tickets.length} ticket(s) for ${tickets[0]?.purchaseInfo.customerName}
Order: ${tickets[0]?.purchaseInfo.orderId}
Generated: ${new Date().toISOString()}
`
}