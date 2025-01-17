'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Send, Phone } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function ContactOverlay() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Contact Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative px-6 py-2 bg-background/90 rounded-full font-semibold 
          text-primary hover:text-secondary transition-colors border border-primary/20
          dark:bg-background/80 dark:border-primary/10"
        whileHover={{ y: -2, scale: 1.05 }}
        data-contact-trigger
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 
          rounded-full blur dark:from-primary/20 dark:to-secondary/20" />
        <span className="relative">Let&apos;s Connect</span>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed inset-x-4 bottom-4 top-20 md:inset-auto md:left-1/2 
                md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg 
                bg-card rounded-2xl p-6 shadow-2xl z-50 border border-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 
                to-secondary/5 rounded-2xl" />
              
              <div className="relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-0 top-0 p-2 hover:text-primary transition-colors"
                >
                  <X size={20} />
                </button>

                <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Mail className="w-5 h-5" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Phone className="w-5 h-5" />
                    <span>+1 234 567 890</span>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Textarea placeholder="Your Message" className="min-h-[120px]" />
                  <Button className="w-full group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 