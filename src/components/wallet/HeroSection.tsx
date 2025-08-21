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
        <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-hunt-blue via-hunt-purple to-hunt-blue overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          <span className="text-white text-2xl font-bold relative z-10">H</span>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-hunt-blue/50 to-hunt-purple/50 blur-xl scale-150 opacity-30"></div>
        </div>
        <h1 className="text-2xl font-bold text-hunt-text-primary bg-gradient-to-r from-hunt-blue via-hunt-purple to-hunt-blue bg-clip-text text-transparent">
          HUNT TICKETS
        </h1>
      </motion.div>

    </motion.div>
  )
}