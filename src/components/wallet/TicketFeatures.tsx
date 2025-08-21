import { motion } from 'framer-motion'
import { Shield, Smartphone, Download, Clock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Seguro',
    description: 'Encriptación de grado militar'
  },
  {
    icon: Smartphone,
    title: 'Móvil',
    description: 'Acceso desde cualquier dispositivo'
  },
  {
    icon: Download,
    title: 'Descarga',
    description: 'PDF para acceso offline'
  },
  {
    icon: Clock,
    title: '24/7',
    description: 'Soporte técnico disponible'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

interface TicketFeaturesProps {
  className?: string
}

export const TicketFeatures = ({ className = '' }: TicketFeaturesProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`grid grid-cols-2 gap-4 ${className}`}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="
            p-4
            bg-white/5 backdrop-blur-xl border border-white/10
            rounded-2xl
            text-center
            hover:bg-white/10 hover:border-white/20
            transition-all duration-300
            group
          "
        >
          <div className="
            w-10 h-10 mx-auto mb-3
            bg-white/10 backdrop-blur-xl
            rounded-xl
            flex items-center justify-center
            group-hover:bg-white/20 transition-all duration-300
          ">
            <feature.icon className="h-5 w-5 text-white/70" />
          </div>
          <h3 className="text-white font-medium text-sm mb-1">
            {feature.title}
          </h3>
          <p className="text-white/60 text-xs leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}