export interface TicketData {
  id: string
  type: 'seat' | 'zone' | 'table' | 'general'
  eventInfo: {
    id: string
    name: string
    venue: string
    date: Date
    time: string
    logo?: string
    description?: string
  }
  seatInfo: {
    row?: string
    seat?: number | string
    zone?: string
    table?: number
    capacity?: number
    section?: string
  }
  pricing: {
    category: 'standard' | 'vip' | 'premium'
    price: number
    currency: string
  }
  qrToken: string
  barcode: string
  purchaseInfo: {
    orderId: string
    purchaseDate: Date
    customerName: string
    customerEmail: string
  }
  status: 'valid' | 'used' | 'expired' | 'cancelled'
}

export interface TicketWalletResponse {
  tickets: TicketData[]
  eventInfo: {
    id: string
    name: string
    venue: string
    date: Date
    logo?: string
  }
  purchaseInfo: {
    orderId: string
    total: number
    currency: string
    purchaseDate: Date
  }
}

export type TicketCategory = 'standard' | 'vip' | 'premium'
export type TicketType = 'seat' | 'zone' | 'table' | 'general'
export type TicketStatus = 'valid' | 'used' | 'expired' | 'cancelled'