import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { HeroSection } from '../components/ui/HeroSection'
import { WalletContainer } from '../components/wallet/WalletContainer'
import { ActionButtons } from '../components/wallet/ActionButtons'
import { TicketFeatures } from '../components/wallet/TicketFeatures'
import { TicketModal } from '../components/wallet/TicketModal'
import { SupportContact } from '../components/wallet/SupportContact'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'
import { useTicketsData, useUrlToken } from '../hooks'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const WalletPage = () => {
  const token = useUrlToken()
  const { tickets, loading, error, eventInfo } = useTicketsData(token || 'demo-token')
  const [showTicketsModal, setShowTicketsModal] = useState(false)
  const [showSupportModal, setShowSupportModal] = useState(false)

  useEffect(() => {
    // Add some meta tags for better mobile experience
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    }
  }, [])

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <p className="text-hunt-text-secondary">Cargando tus entradas...</p>
          </div>
        </div>
      </Layout>
    )
  }

  if (error && tickets.length === 0) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md mx-auto p-6">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="text-xl font-semibold text-hunt-text-primary mb-2">
              Oops, algo salió mal
            </h2>
            <p className="text-hunt-text-secondary mb-6">
              No pudimos cargar tus entradas. Por favor verifica el link o contacta soporte.
            </p>
            <button
              onClick={() => setShowSupportModal(true)}
              className="glass-button px-6 py-3 font-medium"
            >
              💬 Contactar Soporte
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        className="min-h-screen flex flex-col justify-center items-center px-4 py-12"
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Main Wallet Container */}
        <WalletContainer className="mt-8">
          {/* Ticket Features Grid */}
          <TicketFeatures className="mb-8" />

          {/* Action Buttons */}
          <ActionButtons
            tickets={tickets}
            onViewTickets={() => setShowTicketsModal(true)}
            onContactSupport={() => setShowSupportModal(true)}
          />

          {/* Development info */}
          {error && (
            <div className="text-center mt-6 pt-6 border-t border-white/5">
              <p className="text-white/40 text-xs">
                ⚠️ Modo desarrollo: Usando datos de prueba
              </p>
            </div>
          )}
        </WalletContainer>
      </motion.div>

      {/* Modals */}
      <TicketModal
        isOpen={showTicketsModal}
        onClose={() => setShowTicketsModal(false)}
        tickets={tickets}
        eventName={eventInfo?.name}
      />

      <SupportContact
        isOpen={showSupportModal}
        onClose={() => setShowSupportModal(false)}
      />
    </Layout>
  )
}