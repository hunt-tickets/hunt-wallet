import { motion } from 'framer-motion'

interface HeroSectionProps {
  eventName?: string
  className?: string
}

const heroVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut"
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.4,
      ease: "easeOut"
    }
  }
}

export const HeroSection = ({ eventName, className = '' }: HeroSectionProps) => {
  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className={`text-center py-12 ${className}`}
    >
      {/* Hunt Tickets Logo */}
      <motion.div
        variants={logoVariants}
        className="mb-8"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-hunt-blue to-hunt-purple">
          <span className="text-white text-2xl font-bold">H</span>
        </div>
        <h1 className="text-2xl font-semibold text-hunt-text-primary">
          HUNT TICKETS
        </h1>
      </motion.div>

      {/* Welcome Message */}
      <motion.div
        variants={textVariants}
        className="space-y-2"
      >
        <h2 className="text-xl font-medium text-hunt-text-primary">
          ✨ ¡Gracias por tu compra!
        </h2>
        {eventName && (
          <p className="text-hunt-text-secondary">
            Tus entradas para <span className="text-hunt-text-tertiary font-medium">{eventName}</span> están listas
          </p>
        )}
      </motion.div>
    </motion.div>
  )
}