'use client'

import { motion } from 'framer-motion'
import { Cog } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// SIDD & ISHNOOR - Futuristic Gear Loading Animation
export default function GearLoading() {
  const [show, setShow] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="cyber-grid absolute inset-0 opacity-20 dark:opacity-20 light:opacity-10" />
      
      <div className="relative">
        {/* Main Gear */}
        <motion.div
          className="w-48 h-48 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: 1, ease: "linear" }}
        >
          <Cog className="w-full h-full text-primary" />
          
          {/* Smaller Gears */}
          {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${rotation}deg) translate(80px, -50%)`,
              }}
              animate={{ rotate: -360 * 2 }}
              transition={{ duration: 5, repeat: 1, ease: "linear" }}
            >
              <Cog className="w-full h-full text-secondary" />
            </motion.div>
          ))}

          {/* Center Text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-primary text-2xl font-semibold text-primary tracking-wider">
              SC
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <motion.div
          className={`font-primary text-xl font-semibold tracking-wider ${
            theme === 'light' 
              ? 'text-[#8B4513]' 
              : 'bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'
          }`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {theme === 'light' ? 'PREPARING BATTLE' : 'ROYAL INTERFACE LOADING'}
        </motion.div>
        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
} 