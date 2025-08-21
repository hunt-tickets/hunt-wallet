import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const useUrlToken = () => {
  const location = useLocation()

  const token = useMemo(() => {
    const pathParts = location.pathname.split('/')
    // Assuming URL structure: /ticket/[token]
    if (pathParts[1] === 'ticket' && pathParts[2]) {
      return pathParts[2]
    }
    
    // Fallback: check query params
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get('token')
  }, [location])

  return token
}