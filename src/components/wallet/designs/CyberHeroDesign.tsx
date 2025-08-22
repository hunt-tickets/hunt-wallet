import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Download, Eye, Receipt, MessageCircle, Loader2, Shield, Cpu } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import type { TicketData } from '../../../types'

interface CyberHeroDesignProps {
  tickets: TicketData[]
  onViewTickets: () => void
  onContactSupport: () => void
  onViewOrder: () => void
  downloading: boolean
  onDownload: () => void
}

export const CyberHeroDesign = ({ 
  tickets, 
  onViewTickets, 
  onContactSupport, 
  onViewOrder,
  downloading,
  onDownload
}: CyberHeroDesignProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative overflow-hidden perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '20px 20px'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Scanning lines */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(0deg, transparent 0%, rgba(0,255,255,0.1) 50%, transparent 100%)',
              'linear-gradient(180deg, transparent 0%, rgba(0,255,255,0.1) 50%, transparent 100%)',
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Holographic Header */}
      <motion.div
        initial={{ opacity: 0, z: -50 }}
        animate={{ opacity: 1, z: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-center pt-6 pb-8 relative z-10"
        style={{ transform: "translateZ(50px)" }}
      >
        <motion.div
          className="relative inline-block mb-4"
          animate={{ rotateY: isHovered ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0,255,255,0.5)',
                  '0 0 40px rgba(0,255,255,0.8)',
                  '0 0 20px rgba(0,255,255,0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="absolute inset-2 bg-black rounded flex items-center justify-center">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-2"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            backgroundSize: '200% 100%',
            filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.3))'
          }}
        >
          CYBER ACCESS TERMINAL
        </motion.h1>
        
        <motion.div
          className="text-cyan-300 text-sm font-mono"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          USER: JUAN_PEREZ | STATUS: VERIFIED | CLEARANCE: PREMIUM
        </motion.div>
      </motion.div>

      {/* Cyber Interface */}
      <div className="relative z-10 px-6 space-y-4">
        {/* Main Download Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          <motion.button
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(0,255,255,0.4), inset 0 0 30px rgba(0,255,255,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onDownload}
            disabled={downloading}
            className="
              w-full p-6 relative overflow-hidden
              bg-gradient-to-r from-gray-900 via-black to-gray-900
              border-2 border-cyan-400/50 rounded-lg
              text-cyan-100 font-bold text-base
              transition-all duration-300
              group
            "
          >
            {/* Scanning effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            
            <div className="relative z-10 flex items-center justify-center gap-4">
              {downloading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 className="h-6 w-6 text-cyan-400" />
                </motion.div>
              ) : (
                <Download className="h-6 w-6 text-cyan-400" />
              )}
              <div className="text-center">
                <div className="font-mono text-lg">DOWNLOAD_INITIATED.EXE</div>
                <div className="text-cyan-400 text-xs font-mono">QUANTUM_TICKETS.ZIP</div>
              </div>
            </div>
            
            {/* Corner data streams */}
            <div className="absolute top-1 left-1 text-cyan-400 text-xs font-mono opacity-60">
              [001]
            </div>
            <div className="absolute top-1 right-1 text-cyan-400 text-xs font-mono opacity-60">
              [SECURE]
            </div>
            <div className="absolute bottom-1 left-1 text-cyan-400 text-xs font-mono opacity-60">
              {Math.floor(Math.random() * 999).toString().padStart(3, '0')}MB
            </div>
            <div className="absolute bottom-1 right-1 text-cyan-400 text-xs font-mono opacity-60">
              [OK]
            </div>
          </motion.button>
        </motion.div>

        {/* Cyber Grid Interface */}
        <div className="grid grid-cols-4 gap-3">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34,197,94,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewTickets}
            className="
              col-span-2 p-4 relative
              bg-gradient-to-br from-green-900/50 to-green-800/50
              border border-green-400/50 rounded-lg
              text-green-100 font-semibold text-sm
              backdrop-blur-sm
              group overflow-hidden
            "
          >
            <motion.div
              className="absolute inset-0 bg-green-400/10"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <Eye className="h-5 w-5 text-green-400" />
              <span className="font-mono">VIEW_DATA</span>
              <span className="text-green-300 text-xs font-mono">
                [{tickets.length}_FILES]
              </span>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(249,115,22,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewOrder}
            className="
              col-span-2 p-4 relative
              bg-gradient-to-br from-orange-900/50 to-yellow-800/50
              border border-orange-400/50 rounded-lg
              text-orange-100 font-semibold text-sm
              backdrop-blur-sm
              group overflow-hidden
            "
          >
            <motion.div
              className="absolute inset-0 bg-orange-400/10"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <Receipt className="h-5 w-5 text-orange-400" />
              <span className="font-mono">ORDER_LOG</span>
              <span className="text-orange-300 text-xs font-mono">[ACCESS]</span>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 20px rgba(239,68,68,0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactSupport}
            className="
              col-span-4 p-4 relative
              bg-gradient-to-r from-red-900/50 to-pink-900/50
              border border-red-400/50 rounded-lg
              text-red-100 font-medium
              backdrop-blur-sm
              group
            "
          >
            <div className="flex items-center justify-center gap-3">
              <MessageCircle className="h-5 w-5 text-red-400" />
              <span className="font-mono">EMERGENCY_PROTOCOL.COM</span>
              <Cpu className="h-4 w-4 text-red-400" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Cyber Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center pt-6 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 border border-cyan-400/30 rounded font-mono text-xs text-cyan-300">
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-2 bg-cyan-400 rounded-full"
          />
          <span>HUNT_CYBER_SYSTEMS_V2.1.3</span>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            className="w-2 h-2 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}