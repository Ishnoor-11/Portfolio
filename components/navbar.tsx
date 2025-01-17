'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Code, Zap } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import ContactOverlay from './contact-overlay'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Journey', path: '/journey' },
    { name: 'Skills', path: '/skills' },
    { name: 'Let\'s Connect', path: '/contact' }
  ]

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false)
    router.push(path)
  }

  return (
    <nav className="fixed top-0 w-full z-40">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold flex items-center gap-2"
          >
            <Zap className="w-6 h-6 text-primary" />
            <button 
              onClick={() => handleNavigation('/')}
              className="font-primary text-2xl font-semibold text-primary hover:text-primary/80 transition-colors tracking-wider"
            >
              Siddharth Chauhan
            </button>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.slice(0, -1).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`hover:text-primary transition-colors relative group ${
                    pathname === item.path ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  <div className="absolute -inset-2 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                </button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <ContactOverlay />
            </motion.div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

