'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import { Github, ArrowUpRight, Code, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Badge } from './ui/badge'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    tech: string
    image: string
    github?: string
    demo?: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group relative"
    >
      <div className="absolute inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#BC13FE] opacity-75 blur-2xl group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-[#0A0A0A] p-1 rounded-xl overflow-hidden">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          {imageLoading && (
            <div className="absolute inset-0 bg-[#111111] animate-pulse" />
          )}
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            onLoadingComplete={() => setImageLoading(false)}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>

        <div className="p-6">
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
            {project.tech.split(',').map((tech, i) => (
              <span
                key={i}
                className="text-sm px-2 py-1 rounded-full bg-[#111111] text-[#BC13FE]"
              >
                {tech.trim()}
              </span>
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