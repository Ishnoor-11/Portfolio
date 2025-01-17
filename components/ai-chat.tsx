'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X } from 'lucide-react'
import { Button } from './ui/button'

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I\'m your AI assistant. How can I help you learn more about Siddharth?'
    }
  ])

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 bg-[#1A1A1A] border border-[#00FF9D]/20 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-4 border-b border-[#00FF9D]/20">
              <h3 className="text-[#00FF9D] font-bold">AI Assistant</h3>
            </div>
            <div className="h-96 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.type === 'bot' 
                      ? 'bg-[#1E1E1E] p-3 rounded-lg' 
                      : 'text-right'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[#00FF9D] text-black hover:bg-[#00FF9D]/80 relative"
      >
        {isOpen ? <X /> : <MessageSquare />}
        <motion.div
          className="absolute -inset-1 bg-[#00FF9D]/20 rounded-full z-[-1]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </Button>
    </div>
  )
} 