import { motion, AnimatePresence } from 'framer-motion'
import { X, Receipt, Calendar, MapPin, CreditCard, User } from 'lucide-react'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  orderData?: {
    orderId: string
    eventName: string
    date: string
    venue: string
    tickets: number
    total: string
    customerName: string
    customerEmail: string
    paymentMethod: string
    orderDate: string
  }
}

const modalVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2
    }
  }
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

export const OrderModal = ({ isOpen, onClose, orderData }: OrderModalProps) => {
  const defaultOrderData = {
    orderId: "HT-2024-001234",
    eventName: "Hunt Experience 2024",
    date: "15 de Marzo, 2024 - 8:00 PM",
    venue: "Estadio Nacional, Lima",
    tickets: 2,
    total: "S/ 150.00",
    customerName: "Juan Pérez",
    customerEmail: "juan@example.com",
    paymentMethod: "Visa ****1234",
    orderDate: "10 de Marzo, 2024 - 3:45 PM"
  }

  const order = orderData || defaultOrderData

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              relative w-full max-w-md
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              rounded-2xl p-6
              shadow-2xl shadow-black/25
              max-h-[90vh] overflow-y-auto
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-hunt-blue/20">
                  <Receipt className="h-5 w-5 text-hunt-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Mi Orden</h2>
                  <p className="text-white/60 text-sm">#{order.orderId}</p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-white/60" />
              </button>
            </div>

            {/* Order Details */}
            <div className="space-y-4">
              {/* Event Info */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-hunt-purple mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white text-sm">{order.eventName}</h3>
                    <p className="text-white/70 text-sm">{order.date}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3 text-white/50" />
                      <p className="text-white/50 text-xs">{order.venue}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-hunt-green mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white text-sm">Información del Cliente</h3>
                    <p className="text-white/70 text-sm">{order.customerName}</p>
                    <p className="text-white/50 text-xs">{order.customerEmail}</p>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-hunt-yellow mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white text-sm">Pago</h3>
                    <p className="text-white/70 text-sm">{order.paymentMethod}</p>
                    <p className="text-white/50 text-xs">Pagado el {order.orderDate}</p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="p-4 bg-hunt-blue/10 rounded-xl border border-hunt-blue/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70 text-sm">Entradas</span>
                  <span className="text-white text-sm">{order.tickets} x</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-white text-lg">Total</span>
                  <span className="text-hunt-blue text-lg">{order.total}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs text-center">
                ¿Necesitas ayuda? Contacta nuestro soporte 24/7
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}