import { motion, AnimatePresence } from 'framer-motion'
import { GlassContainer } from '../layout/GlassContainer'

interface SupportContactProps {
  isOpen: boolean
  onClose: () => void
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring" as "spring",
      stiffness: 300,
      damping: 25
    }
  }
}

const supportOptions = [
  {
    icon: '💬',
    title: 'Chat en vivo',
    description: 'Respuesta inmediata 24/7',
    action: 'chat',
    color: 'hunt-green'
  },
  {
    icon: '📧',
    title: 'Email',
    description: 'soporte@hunttickets.com',
    action: 'email',
    color: 'hunt-blue'
  },
  {
    icon: '📱',
    title: 'WhatsApp',
    description: '+57 300 123 4567',
    action: 'whatsapp',
    color: 'hunt-green'
  },
  {
    icon: '❓',
    title: 'Centro de Ayuda',
    description: 'Preguntas frecuentes',
    action: 'help',
    color: 'hunt-purple'
  }
]

export const SupportContact = ({ isOpen, onClose }: SupportContactProps) => {
  const handleSupportAction = (action: string) => {
    switch (action) {
      case 'chat':
        // Open chat widget
        console.log('Opening chat...')
        break
      case 'email':
        window.open('mailto:soporte@hunttickets.com?subject=Soporte para tickets')
        break
      case 'whatsapp':
        window.open('https://wa.me/573001234567?text=Hola, necesito ayuda con mis tickets')
        break
      case 'help':
        window.open('/help', '_blank')
        break
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <GlassContainer variant="modal" className="w-full max-w-md">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-hunt-text-primary">
                    💬 Contacta Soporte
                  </h2>
                  <button
                    onClick={onClose}
                    className="glass-button p-2 rounded-full hover:bg-white/20"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Support Options */}
                <div className="space-y-3">
                  {supportOptions.map((option, index) => (
                    <motion.button
                      key={option.action}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.1 }
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSupportAction(option.action)}
                      className="
                        w-full p-4 
                        glass-button 
                        text-left
                        hover:bg-white/10
                        flex items-center gap-4
                      "
                    >
                      <div className="text-2xl">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-hunt-text-primary">
                          {option.title}
                        </div>
                        <div className="text-sm text-hunt-text-secondary">
                          {option.description}
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-hunt-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <p className="text-hunt-text-secondary text-sm">
                    Disponible 24/7 para ayudarte
                  </p>
                  <p className="text-hunt-text-secondary text-xs mt-1">
                    Tiempo promedio de respuesta: 2 minutos
                  </p>
                </div>
              </GlassContainer>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}