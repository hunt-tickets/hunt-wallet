import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface WalletContainerProps {
  children: ReactNode
  className?: string
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  }
}

export const WalletContainer = ({ children, className = '' }: WalletContainerProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`
        max-w-lg mx-auto w-full
        bg-white/5 backdrop-blur-2xl
        border border-white/10
        rounded-3xl
        p-8
        shadow-2xl shadow-black/20
        relative
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-white/10 before:to-transparent 
        before:rounded-3xl before:pointer-events-none
        after:absolute after:inset-0 
        after:bg-gradient-to-t after:from-black/10 after:to-transparent 
        after:rounded-3xl after:pointer-events-none
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}