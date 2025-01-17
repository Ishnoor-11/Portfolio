'use client'

import { motion } from 'framer-motion'
import ProjectCard3D from '@/components/project-card-3d'
import { Code, Globe, Brain, Cpu } from 'lucide-react'
import { useState } from 'react'

type ProjectCategory = 'web' | 'ai' | 'data' | 'embedded'

const categories = [
  { id: 'web', label: 'Web Development', icon: Globe, color: '#00F0FF' },
  { id: 'ai', label: 'AI/ML', icon: Brain, color: '#BC13FE' },
  { id: 'data', label: 'Data Analytics', icon: Code, color: '#00F0FF' },
  { id: 'embedded', label: 'Embedded Systems', icon: Cpu, color: '#BC13FE' }
] as const

const projects = {
  web: [
    {
      id: 'WEB-01',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com'
    },
    // Add more web projects
  ],
  ai: [
    {
      id: 'AI-01',
      title: 'AI Image Generator',
      description: 'State-of-the-art AI image generation using stable diffusion models.',
      tech: ['Python', 'PyTorch', 'React', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3',
      github: 'https://github.com/yourusername/ai-image',
      demo: 'https://ai-image-demo.com'
    },
    // Add more AI projects
  ],
  data: [
    {
      id: 'DATA-01',
      title: 'Analytics Dashboard',
      description: 'Real-time data analytics and visualization platform.',
      tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      github: 'https://github.com/yourusername/analytics',
      demo: 'https://analytics-demo.com'
    },
    // Add more data projects
  ],
  embedded: [
    {
      id: 'EMB-01',
      title: 'IoT Smart Home',
      description: 'Smart home automation system using IoT devices.',
      tech: ['C++', 'Arduino', 'ESP32', 'MQTT'],
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f',
      github: 'https://github.com/yourusername/iot-home',
      demo: 'https://iot-demo.com'
    },
    // Add more embedded projects
  ]
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('web')

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Code className="w-12 h-12 mx-auto mb-4 text-[#00F0FF]" />
        <h1 className="text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]">
            Featured Projects
          </span>
        </h1>
        <motion.div
          className="h-1 w-20 mx-auto mt-4 mb-12 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5 }}
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ id, label, icon: Icon, color }) => (
            <motion.button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === id
                  ? `bg-[${color}]/10 text-[${color}] text-glow`
                  : 'text-gray-400 hover:text-[#00F0FF]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects[activeCategory].map((project, index) => (
          <ProjectCard3D
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  )
} 