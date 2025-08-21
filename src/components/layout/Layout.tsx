import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { AuroraBackground } from '../ui/aurora-background'
import { ThemeToggle } from '../ui/theme-toggle'

interface LayoutProps {
  children: ReactNode
  className?: string
  showAurora?: boolean
}

const layoutVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}

export const Layout = ({ children, className = '', showAurora = true }: LayoutProps) => {
  if (showAurora) {
    return (
      <AuroraBackground className={className}>
        {/* Theme Toggle - Fixed position */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        
        <motion.div 
          variants={layoutVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-10 w-full h-full overflow-y-auto"
        >
          {children}
        </motion.div>
      </AuroraBackground>
    )
  }

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
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Subtle gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 z-[1]" />
      
      {/* Content overlay */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        {children}
      </div>
    </motion.div>
  )
}