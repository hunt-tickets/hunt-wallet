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
        <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-hunt-blue to-hunt-purple">
          <span className="text-white text-2xl font-bold">H</span>
        </div>
        <h1 className="text-2xl font-semibold text-hunt-text-primary">
          HUNT TICKETS
        </h1>
      </motion.div>

    </motion.div>
  )
}