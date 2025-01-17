'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Crown } from 'lucide-react'

const stats = [
  { number: 11, label: 'Years of experience', icon: Crown },
  { number: 24, label: 'Projects completed', icon: Crown },
  { number: 7, label: 'Technologies mastered', icon: Crown },
  { number: 453, label: 'Code commits', icon: Crown }
]

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 relative">
      <div className="absolute inset-0 bg-[#1A1A1A] rounded-xl border border-[#FFD700]/10" />
      
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: index * 0.1 }}
          className="text-center relative p-6"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#00FF9D]/5 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          
          <motion.h3
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ 
              delay: index * 0.1 + 0.2, 
              type: "spring",
              damping: 10
            }}
            className="text-4xl font-bold mb-2 relative bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#00FF9D]"
          >
            {isVisible && (
              <>
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2}
                  separator=","
                />
                <motion.span
                  className="absolute -inset-2 bg-gradient-to-r from-[#FFD700]/10 to-[#00FF9D]/10 blur-lg rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </>
            )}
          </motion.h3>
          <p className="text-gray-300 text-sm relative z-10">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

