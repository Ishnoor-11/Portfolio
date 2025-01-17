'use client'

import { motion } from 'framer-motion'
import { Code, Terminal } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function LoadingScreen() {
  const { theme } = useTheme()

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.5 }}
    >
      <div className="cyber-grid absolute inset-0 opacity-20" />
      <div className="relative">
        <motion.div
          className="w-32 h-32 rounded-xl bg-gradient-to-r from-primary to-secondary"
          animate={{ 
            rotate: 360,
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50%"],
          }}
          transition={{ 
            duration: 2, 
            repeat: 2,
            ease: "linear",
            borderRadius: {
              duration: 2,
              repeat: 2,
              repeatType: "reverse",
            }
          }}
        />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: 2 }}
        >
          <Code className="w-12 h-12 text-background mb-4" />
          <Terminal className="w-8 h-8 text-background" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-foreground/80 text-sm mb-2">Initializing</div>
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

