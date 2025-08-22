import { motion, useAnimationFrame } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2, Star, Zap } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import type { TicketData } from '../../../types'

interface HorizonSpaceDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const HorizonSpaceDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: HorizonSpaceDesignProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef(0)

  useAnimationFrame(() => {
    timeRef.current += 0.02
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-[600px] overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 40% 40%, #f59e0b 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 20% 80%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 60% 60%, #f59e0b 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 40% 40%, #f59e0b 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-30 blur-3xl"
        />
        
        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Interactive Gradient that follows mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}
      />

      {/* Space Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-8 pb-6 relative z-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5"
        >
          <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
            <Zap className="w-6 h-6 text-white" />
          </div>
        </motion.div>
        
        <motion.h1
          className="text-3xl font-black text-white mb-2 tracking-wider"
          style={{
            textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(139,92,246,0.3)'
          }}
        >
          HUNT HORIZON
        </motion.h1>
        
        <motion.p
          className="text-white/70 text-sm font-light"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Welcome to the future, Juan
        </motion.p>
      </motion.div>

      {/* Quantum Action Grid */}
      <div className="relative z-10 px-6 space-y-4">
        {/* Primary Download Button */}
        <motion.button
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.2)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={onDownload}
          disabled={downloading}
          className="
            w-full p-6 relative overflow-hidden
            bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600
            border border-white/30 rounded-2xl
            text-white font-bold text-lg
            transition-all duration-500
            group
          "
          style={{
            backgroundSize: '200% 100%',
            animation: 'gradient-shift 3s ease infinite'
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          
          <div className="relative z-10 flex items-center justify-center gap-4">
            {downloading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="h-6 w-6" />
              </motion.div>
            ) : (
              <Download className="h-6 w-6" />
            )}
            <span>DOWNLOAD QUANTUM TICKETS</span>
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/50 group-hover:border-white transition-colors" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/50 group-hover:border-white transition-colors" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/50 group-hover:border-white transition-colors" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/50 group-hover:border-white transition-colors" />
        </motion.button>

        {/* Matrix Grid */}
        <div className="grid grid-cols-3 gap-3">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              boxShadow: "0 0 20px rgba(6,182,212,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewTickets}
            className="
              col-span-2 p-5 relative
              bg-gradient-to-br from-cyan-600/20 to-cyan-800/20
              border border-cyan-400/30 rounded-xl
              text-white font-semibold
              backdrop-blur-xl
              group overflow-hidden
            "
          >
            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <Eye className="h-5 w-5 text-cyan-400" />
              <span className="text-sm">VIEW MATRIX</span>
              <span className="text-cyan-300 text-xs">({tickets.length} ENTITIES)</span>
            </div>
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 border border-cyan-400/50 rounded-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              rotateY: -10,
              boxShadow: "0 0 20px rgba(245,158,11,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewOrder}
            className="
              p-5 relative
              bg-gradient-to-br from-yellow-600/20 to-orange-600/20
              border border-yellow-400/30 rounded-xl
              text-white font-semibold
              backdrop-blur-xl
              group overflow-hidden
            "
          >
            <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <Receipt className="h-5 w-5 text-yellow-400" />
              <span className="text-xs">ORDER</span>
              <span className="text-xs">NEXUS</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 20px rgba(239,68,68,0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactSupport}
            className="
              col-span-3 p-4 relative
              bg-gradient-to-r from-red-600/20 to-pink-600/20
              border border-red-400/30 rounded-xl
              text-white font-medium
              backdrop-blur-xl
              group
            "
          >
            <div className="flex items-center justify-center gap-3">
              <MessageCircle className="h-5 w-5 text-red-400" />
              <span>QUANTUM SUPPORT PORTAL</span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Space Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center pt-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="h-3 w-3 text-white fill-current" />
          </motion.div>
          <span className="text-white/70 text-xs font-light tracking-wide">
            POWERED BY HUNT QUANTUM TECHNOLOGY
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Star className="h-3 w-3 text-white fill-current" />
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  )
}