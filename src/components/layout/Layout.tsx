import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Scene } from '../ui/hero-section'
import { ParticleBackground } from '../ui/ParticleBackground'

interface LayoutProps {
  children: ReactNode
  className?: string
  showBackground3D?: boolean
}

const layoutVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}

export const Layout = ({ children, className = '', showBackground3D = true }: LayoutProps) => {
  return (
    <motion.div 
      variants={layoutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`
        h-screen w-screen
        bg-gradient-to-br from-hunt-bg via-gray-900 to-hunt-bg
        text-hunt-text-primary
        relative overflow-hidden
        fixed inset-0
        ${className}
      `}
    >
      {/* 3D Animated Background */}
      {showBackground3D && (
        <div className="absolute inset-0 w-full h-full z-0" style={{ width: '100%', height: '100%' }}>
          <Scene />
        </div>
      )}
      
      {/* Subtle gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 z-[1]" />
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        {children}
      </div>
    </motion.div>
  )
}