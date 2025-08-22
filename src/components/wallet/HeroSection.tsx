import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

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
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
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
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  }
}


export const HeroSection = ({ className = '' }: Omit<HeroSectionProps, 'eventName'>) => {
  const { t } = useLanguage()
  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className={`text-center py-6 md:py-12 ${className}`}
    >
      {/* User Greeting */}
      <motion.div
        variants={logoVariants}
        className="mb-8 text-center"
      >
        <h2 className="text-xl font-semibold text-white mb-2">
          ¡{t('hello')}, Juan! 👋
        </h2>
        <p className="text-white/70 text-sm">
          {t('tickets.ready.download')}
        </p>
      </motion.div>

    </motion.div>
  )
}