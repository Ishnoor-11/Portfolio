'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Github, ArrowUpRight } from 'lucide-react'
import ProjectCard from '@/components/project-card'

const projects = [
  {
    id: '01',
    title: 'AI Image Recognition',
    description: 'Deep learning model for real-time image classification and object detection.',
    tech: 'Python, TensorFlow, OpenCV',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '02',
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js and Framer Motion.',
    tech: 'Next.js, TypeScript, Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },
  {
    id: '03',
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex data sets with real-time updates.',
    tech: 'React, D3.js, Node.js',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },
  {
    id: '04',
    title: 'Task Management App',
    description: 'Cross-platform mobile application for task management and productivity.',
    tech: 'React Native, Firebase',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02'
  }
]

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Featured Projects
        <motion.div
          className="h-1 w-20 bg-[#00FF9D] mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5 }}
        />
      </motion.h1>

      <motion.div 
        className="grid lg:grid-cols-2 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

