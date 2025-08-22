import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageProviderProps {
  children: ReactNode
  defaultLanguage?: Language
  storageKey?: string
}

interface LanguageProviderState {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Traducciones básicas
const translations = {
  es: {
    // Buttons
    'download.pdf': 'DESCARGAR PDF',
    'view.tickets': 'VER ENTRADAS',
    'view.order': 'VER MI ORDEN',
    'support.24': 'SOPORTE 24/7',
    'preparing': 'PREPARANDO...',
    
    // Messages
    'tickets.ready': 'Tus entradas están listas',
    'tickets.ready.download': 'Tus entradas están listas para descargar',
    'hello': 'Hola',
    
    // Navigation
    'light.mode': 'Modo claro',
    'dark.mode': 'Modo oscuro',
    'help': 'Ayuda',
    
    // Loading and errors
    'loading.tickets': 'Cargando tus entradas...',
    'something.wrong': 'Oops, algo salió mal',
    'error.loading': 'No pudimos cargar tus entradas. Por favor verifica el link o contacta soporte.',
    'contact.support': 'Contactar Soporte',
    
    // Footer
    'powered.by': 'Powered by Hunt Technology'
  },
  en: {
    // Buttons
    'download.pdf': 'DOWNLOAD PDF',
    'view.tickets': 'VIEW TICKETS',
    'view.order': 'VIEW MY ORDER',
    'support.24': '24/7 SUPPORT',
    'preparing': 'PREPARING...',
    
    // Messages
    'tickets.ready': 'Your tickets are ready',
    'tickets.ready.download': 'Your tickets are ready to download',
    'hello': 'Hello',
    
    // Navigation
    'light.mode': 'Light mode',
    'dark.mode': 'Dark mode',
    'help': 'Help',
    
    // Loading and errors
    'loading.tickets': 'Loading your tickets...',
    'something.wrong': 'Oops, something went wrong',
    'error.loading': 'We couldn\'t load your tickets. Please verify the link or contact support.',
    'contact.support': 'Contact Support',
    
    // Footer
    'powered.by': 'Powered by Hunt Technology'
  }
}

const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es'
  
  const browserLang = navigator.language.toLowerCase()
  
  // Si el idioma del navegador es inglés o contiene 'en', usar inglés
  if (browserLang.startsWith('en')) {
    return 'en'
  }
  
  // Por defecto español
  return 'es'
}

const initialState: LanguageProviderState = {
  language: 'es',
  setLanguage: () => null,
  t: (key: string) => key,
}

const LanguageProviderContext = createContext<LanguageProviderState>(initialState)

export function LanguageProvider({
  children,
  defaultLanguage,
  storageKey = 'hunt-wallet-language',
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return defaultLanguage || 'es'
    
    const stored = localStorage.getItem(storageKey) as Language
    if (stored && (stored === 'es' || stored === 'en')) {
      return stored
    }
    
    return defaultLanguage || detectBrowserLanguage()
  })

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key
  }

  const value = {
    language,
    setLanguage: (newLanguage: Language) => {
      localStorage.setItem(storageKey, newLanguage)
      setLanguage(newLanguage)
    },
    t,
  }

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext)

  if (context === undefined)
    throw new Error('useLanguage must be used within a LanguageProvider')

  return context
}