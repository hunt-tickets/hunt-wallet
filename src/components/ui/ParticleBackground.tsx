import { motion } from 'framer-motion'
import { useMemo } from 'react'

export const ParticleBackground = () => {
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 5
    })), []
  )

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ width: '100vw', height: '100vh' }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-500/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 border border-white/10 rounded-lg"
        animate={{
          rotate: 360,
          y: [-10, 10],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/3 w-12 h-12 border border-purple-500/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [-180, 180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded"
        animate={{
          x: [-20, 20],
          y: [-15, 15],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}