import { useState, useEffect } from 'react'
import type { TicketData, TicketWalletResponse } from '../types'

interface UseTicketsDataReturn {
  tickets: TicketData[]
  loading: boolean
  error: string | null
  eventInfo: TicketWalletResponse['eventInfo'] | null
  purchaseInfo: TicketWalletResponse['purchaseInfo'] | null
}

export const useTicketsData = (tokenFromURL: string): UseTicketsDataReturn => {
  const [tickets, setTickets] = useState<TicketData[]>([])
  const [eventInfo, setEventInfo] = useState<TicketWalletResponse['eventInfo'] | null>(null)
  const [purchaseInfo, setPurchaseInfo] = useState<TicketWalletResponse['purchaseInfo'] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTickets = async () => {
      if (!tokenFromURL) {
        setError('Token no válido')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        // TODO: Replace with actual API endpoint
        const response = await fetch(`/api/tickets/${tokenFromURL}`)
        
        if (!response.ok) {
          throw new Error('Error al cargar los tickets')
        }

        const data: TicketWalletResponse = await response.json()
        
        setTickets(data.tickets)
        setEventInfo(data.eventInfo)
        setPurchaseInfo(data.purchaseInfo)

      } catch (err) {
        console.error('Error fetching tickets:', err)
        setError(err instanceof Error ? err.message : 'Error desconocido')
        
        // For development: Generate mock data
        setTickets(generateMockTickets())
        setEventInfo(generateMockEventInfo())
        setPurchaseInfo(generateMockPurchaseInfo())
        
      } finally {
        setLoading(false)
      }
    }

    fetchTickets()
  }, [tokenFromURL])

  return { tickets, loading, error, eventInfo, purchaseInfo }
}

// Mock data for development
const generateMockTickets = (): TicketData[] => {
  return [
    {
      id: 'ticket-001',
      type: 'seat',
      eventInfo: {
        id: 'event-001',
        name: 'Concierto Premium Rock',
        venue: 'Estadio Nacional',
        date: new Date('2024-12-25T20:00:00'),
        time: '20:00',
        description: 'Una noche increíble de rock'
      },
      seatInfo: {
        row: 'A',
        seat: 15,
        section: 'VIP'
      },
      pricing: {
        category: 'vip',
        price: 150000,
        currency: 'COP'
      },
      qrToken: 'qr-token-001',
      barcode: 'barcode-001',
      purchaseInfo: {
        orderId: 'ORD-2024-001',
        purchaseDate: new Date(),
        customerName: 'Juan Pérez',
        customerEmail: 'juan@example.com'
      },
      status: 'valid'
    },
    {
      id: 'ticket-002',
      type: 'seat',
      eventInfo: {
        id: 'event-001',
        name: 'Concierto Premium Rock',
        venue: 'Estadio Nacional',
        date: new Date('2024-12-25T20:00:00'),
        time: '20:00',
        description: 'Una noche increíble de rock'
      },
      seatInfo: {
        row: 'A',
        seat: 16,
        section: 'VIP'
      },
      pricing: {
        category: 'vip',
        price: 150000,
        currency: 'COP'
      },
      qrToken: 'qr-token-002',
      barcode: 'barcode-002',
      purchaseInfo: {
        orderId: 'ORD-2024-001',
        purchaseDate: new Date(),
        customerName: 'Juan Pérez',
        customerEmail: 'juan@example.com'
      },
      status: 'valid'
    }
  ]
}

const generateMockEventInfo = () => ({
  id: 'event-001',
  name: 'Concierto Premium Rock',
  venue: 'Estadio Nacional',
  date: new Date('2024-12-25T20:00:00')
})

const generateMockPurchaseInfo = () => ({
  orderId: 'ORD-2024-001',
  total: 300000,
  currency: 'COP',
  purchaseDate: new Date()
})