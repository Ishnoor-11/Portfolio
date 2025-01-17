'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface Skill {
  name: string
  level: number
  color: string
}

export default function SkillBubbles() {
  const controls = useAnimation()

  const skills: Skill[] = [
    { name: 'React', level: 90, color: '#00F0FF' },
    { name: 'Next.js', level: 85, color: '#BC13FE' },
    { name: 'TypeScript', level: 80, color: '#00F0FF' },
    { name: 'Node.js', level: 75, color: '#BC13FE' },
    { name: 'Python', level: 85, color: '#00F0FF' },
    { name: 'TensorFlow', level: 70, color: '#BC13FE' },
  ]

  useEffect(() => {
    controls.start(i => ({
      scale: [1, 1.1, 1],
      transition: {
        delay: i * 0.1,
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }))
  }, [controls])

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          custom={i}
          animate={controls}
          whileHover={{ scale: 1.2 }}
          className="relative group"
        >
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
            style={{ backgroundColor: skill.color }}
          />
          <div 
            className="relative glass-morphism px-4 py-2 rounded-full border border-opacity-20"
            style={{ borderColor: skill.color }}
          >
            <span className="text-glow" style={{ color: skill.color }}>
              {skill.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 