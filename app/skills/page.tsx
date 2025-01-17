'use client'

import { motion } from 'framer-motion'
import { Code, Cpu, Database, Globe, Layers, Terminal } from 'lucide-react'

const skills = {
  'Programming Languages': {
    icon: Code,
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
    color: '#00F0FF'
  },
  'Web Technologies': {
    icon: Globe,
    items: ['React.js', 'Next.js', 'Node.js', 'TailwindCSS', 'GraphQL'],
    color: '#BC13FE'
  },
  'AI & ML': {
    icon: Cpu,
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK'],
    color: '#00F0FF'
  },
  'Databases': {
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Supabase'],
    color: '#BC13FE'
  },
  'DevOps': {
    icon: Terminal,
    items: ['Docker', 'Git', 'AWS', 'CI/CD', 'Linux'],
    color: '#00F0FF'
  },
  'Others': {
    icon: Layers,
    items: ['Agile', 'REST APIs', 'System Design', 'UI/UX', 'Testing'],
    color: '#BC13FE'
  }
}

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Cpu className="w-12 h-12 mx-auto mb-4 text-[#00F0FF]" />
        <h1 className="text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]">
            Technical Arsenal
          </span>
        </h1>
        <motion.div
          className="h-1 w-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, { icon: Icon, items, color }], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-morphism p-6 rounded-xl group hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-6 h-6" style={{ color }} />
              <h3 className="text-xl font-bold text-glow" style={{ color }}>
                {category}
              </h3>
            </div>
            <div className="space-y-3">
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 