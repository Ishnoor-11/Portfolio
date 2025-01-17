'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCcw } from 'lucide-react'
import { Button } from './ui/button'

interface ErrorScreenProps {
  error: Error
  reset: () => void
}

export default function ErrorScreen({ error, reset }: ErrorScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="cyber-grid absolute inset-0 opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 relative z-10 p-8"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <AlertTriangle className="w-16 h-16 text-destructive mx-auto" />
        </motion.div>
        <h1 className="text-3xl font-bold text-foreground">Oops! Something went wrong</h1>
        <p className="text-muted-foreground max-w-md">{error.message}</p>
        <Button 
          onClick={reset}
          className="group"
        >
          <RefreshCcw className="mr-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          Try Again
        </Button>
      </motion.div>
    </div>
  )
} 