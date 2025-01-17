'use client'

import { useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SoundController() {
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const audio = new Audio('/hover.mp3') // You'll need to add these sound files
    const clickAudio = new Audio('/click.mp3')

    const handleMouseEnter = () => {
      if (!isMuted) audio.play()
    }

    const handleClick = () => {
      if (!isMuted) clickAudio.play()
    }

    const elements = document.querySelectorAll('a, button')
    elements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('click', handleClick)
    })

    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('click', handleClick)
      })
    }
  }, [isMuted])

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsMuted(!isMuted)}
      className="fixed bottom-8 right-8 z-50 bg-[#1A1A1A] p-4 rounded-full text-[#00FF9D]"
    >
      {isMuted ? <VolumeX /> : <Volume2 />}
    </motion.button>
  )
}

