'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import { Github, ExternalLink, Code } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Badge } from './ui/badge'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  image: string
  github?: string
  demo?: string
}

interface ProjectCard3DProps {
  project: Project
  index: number
}

export default function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const [mounted, setMounted] = useState(false)
  
  // Mouse position
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring animation
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  // Rotate card based on mouse position
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"])

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group"
    >
      <div 
        className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#BC13FE] opacity-75 blur-lg 
          group-hover:opacity-100 transition-opacity rounded-xl"
        style={{
          transform: "translateZ(-10px)",
        }}
      />
      <div className="relative bg-[#0A0A0A] p-1 rounded-xl overflow-hidden">
        <div 
          className="relative aspect-video overflow-hidden rounded-t-lg"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>

        <div 
          className="p-6"
          style={{
            transform: "translateZ(30px)",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-[#00F0FF]" />
            <Badge variant="outline" className="text-[#00F0FF] border-[#00F0FF]/20">
              {project.id}
            </Badge>
          </div>

          <h3 className="text-2xl font-bold mb-2 text-[#00F0FF] text-glow">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.1 }}
                className="text-sm px-2 py-1 rounded-full bg-[#111111] text-[#BC13FE]"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <Button 
                variant="outline" 
                className="flex-1 neon-border group"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 group-hover:rotate-12 transition-transform" />
                  Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button 
                className="flex-1 bg-gradient-to-r from-[#00F0FF] to-[#BC13FE] text-white group"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 group-hover:rotate-12 transition-transform" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
} 