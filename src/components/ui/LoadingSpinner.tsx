import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
}

const spinVariants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

export const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  return (
    <motion.div
      variants={spinVariants}
      animate="spin"
      className={`
        ${sizeClasses[size]}
        border-2 border-hunt-text-secondary 
        border-t-hunt-blue 
        rounded-full 
        ${className}
      `}
    />
  )
}