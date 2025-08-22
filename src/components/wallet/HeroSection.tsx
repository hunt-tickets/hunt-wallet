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
      className={`text-center py-6 md:py-10 ${className}`}
    >
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
        />
        <span className="text-white/80 text-xs font-medium tracking-wide uppercase">Ready</span>
      </motion.div>

      {/* Hero Typography */}
      <motion.div
        variants={logoVariants}
        className="mb-8 text-center"
      >
        <div className="mb-4">
          <motion.span 
            className="text-3xl md:text-4xl font-thin text-white/90 tracking-widest"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t('hello')}, 
          </motion.span>
          <motion.span 
            className="text-3xl md:text-4xl font-black text-white tracking-tight ml-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}
          >
            Juan
          </motion.span>
        </div>
        
        <motion.p 
          className="text-white/50 text-sm font-light leading-relaxed tracking-wide max-w-xs mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t('tickets.ready.download')}
        </motion.p>
      </motion.div>

    </motion.div>
  )
}