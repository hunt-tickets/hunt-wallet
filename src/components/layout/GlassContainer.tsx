import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassContainerProps {
  children: ReactNode
  className?: string
  variant?: 'panel' | 'card' | 'modal'
}

const containerVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

export const GlassContainer = ({ 
  children, 
  className = '', 
  variant = 'panel' 
}: GlassContainerProps) => {
  const baseClasses = {
    panel: 'glass-panel p-6',
    card: 'glass-card p-4',
    modal: 'glass-panel p-8 shadow-2xl'
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${baseClasses[variant]} ${className}`}
    >
      {children}
    </motion.div>
  )
}