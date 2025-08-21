import type { TicketData, TicketCategory } from '../types'

export const formatSeatDisplay = (ticket: TicketData): string => {
  switch(ticket.type) {
    case 'seat':
      return `FILA ${ticket.seatInfo.row} - ASIENTO ${ticket.seatInfo.seat}`
    
    case 'zone':
      return `${ticket.seatInfo.zone?.toUpperCase()}`
    
    case 'table':
      return `MESA ${ticket.seatInfo.table} - ${ticket.seatInfo.capacity} PERSONAS`
    
    case 'general':
      return `ACCESO GENERAL - ${ticket.seatInfo.zone}`
    
    default:
      return 'ENTRADA VÁLIDA'
  }
}

export const getCategoryColors = (category: TicketCategory): string => {
  const colors = {
    standard: 'from-slate-800 to-slate-900',
    vip: 'from-purple-800 to-purple-900',
    premium: 'from-yellow-700 to-yellow-800'
  }
  return colors[category] || colors.standard
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date)
}

export const formatTime = (time: string): string => {
  return new Intl.DateTimeFormat('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(new Date(`2000-01-01T${time}`))
}

export const getStatusColor = (status: TicketData['status']): string => {
  switch(status) {
    case 'valid': return 'text-hunt-green'
    case 'used': return 'text-hunt-text-secondary'
    case 'expired': return 'text-hunt-red'
    case 'cancelled': return 'text-hunt-red'
    default: return 'text-hunt-text-secondary'
  }
}

export const getStatusText = (status: TicketData['status']): string => {
  switch(status) {
    case 'valid': return 'Válido'
    case 'used': return 'Usado'
    case 'expired': return 'Expirado'
    case 'cancelled': return 'Cancelado'
    default: return 'Desconocido'
  }
}