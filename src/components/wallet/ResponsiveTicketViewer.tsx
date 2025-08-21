import { useEffect, useState } from 'react'
import type { TicketData } from '../../types'
import { TicketsCarousel } from './TicketsCarousel'
import { MobileTicketCarousel } from './MobileTicketCarousel'

interface ResponsiveTicketViewerProps {
  tickets: TicketData[]
  className?: string
}

export const ResponsiveTicketViewer = ({ tickets, className = '' }: ResponsiveTicketViewerProps) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return (
      <MobileTicketCarousel 
        tickets={tickets} 
        className={className} 
      />
    )
  }

  return (
    <TicketsCarousel 
      tickets={tickets} 
      className={className} 
    />
  )
}