import { motion } from 'framer-motion'
import { Badge } from 'lucide-react'

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  }
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  }
}

export const HeroSection = () => {
  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="text-center mb-12"
    >
      {/* Badge */}
      <motion.div
        variants={badgeVariants}
        className="flex items-center justify-center mb-6"
      >
        <div className="
          inline-flex items-center gap-2 
          px-4 py-2
          bg-white/10 backdrop-blur-xl border border-white/20
          rounded-full
          text-sm font-medium text-white/90
        ">
          <Badge className="h-4 w-4" />
          Hunt Wallet
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        className="
          text-4xl md:text-5xl lg:text-6xl
          font-bold text-white
          mb-4
          bg-gradient-to-br from-white via-white to-white/80
          bg-clip-text text-transparent
          leading-tight
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Tus Entradas
        <br />
        <span className="bg-gradient-to-r from-hunt-blue to-hunt-purple bg-clip-text text-transparent">
          Hunt Tickets
        </span>
      </motion.h1>

    </motion.div>
  )
}