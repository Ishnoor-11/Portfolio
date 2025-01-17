'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Code, Briefcase } from 'lucide-react'
import { useState } from 'react'

const timeline = {
  education: [
    {
      year: '2021 - Present',
      title: 'B.Tech in Computer Science',
      institution: 'Chandigarh University',
      location: 'Punjab, India',
      description: 'Specializing in AI & ML with a focus on practical applications.',
      achievements: [
        'CGPA: 8.5/10',
        'Member of AI Research Club',
        'Published paper on ML applications'
      ]
    },
    {
      year: '2019 - 2021',
      title: 'Higher Secondary Education',
      institution: 'Delhi Public School',
      location: 'Delhi, India',
      description: 'Science stream with Computer Science as major.',
      achievements: [
        'Percentage: 95%',
        'School topper in Computer Science',
        'Won national coding competition'
      ]
    }
  ],
  experience: [
    {
      year: '2023 - Present',
      title: 'AI Research Intern',
      company: 'Tech Innovation Labs',
      location: 'Remote',
      description: 'Working on cutting-edge AI projects and research papers.',
      achievements: [
        'Developed ML models with 95% accuracy',
        'Published 2 research papers',
        'Led a team of 3 interns'
      ]
    },
    {
      year: '2022 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      location: 'Punjab, India',
      description: 'Built scalable web applications using modern technologies.',
      achievements: [
        'Reduced load time by 40%',
        'Implemented CI/CD pipeline',
        'Mentored junior developers'
      ]
    }
  ]
}

interface TimelineItem {
  year: string
  title: string
  institution?: string
  company?: string
  location: string
  description: string
  achievements: string[]
}

interface TimelineItemProps {
  data: TimelineItem
  index: number
  type: 'education' | 'experience'
  align: 'left' | 'right'
  isActive: boolean
}

export default function JourneyPage() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education')

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <motion.button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeTab === 'education' 
                ? 'bg-[#00F0FF]/10 text-[#00F0FF] text-glow' 
                : 'text-gray-400 hover:text-[#00F0FF]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GraduationCap className="w-6 h-6" />
            Education
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeTab === 'experience' 
                ? 'bg-[#BC13FE]/10 text-[#BC13FE] text-glow' 
                : 'text-gray-400 hover:text-[#BC13FE]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Briefcase className="w-6 h-6" />
            Experience
          </motion.button>
        </div>
        <h1 className="text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]">
            My Journey
          </span>
        </h1>
        <motion.div
          className="h-1 w-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education Timeline */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: activeTab === 'education' ? 1 : 0.3,
            x: 0,
            filter: activeTab === 'education' ? 'blur(0px)' : 'blur(2px)'
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#00F0FF] to-transparent" />
          {timeline.education.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              index={index}
              type="education"
              align="right"
              isActive={activeTab === 'education'}
            />
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: activeTab === 'experience' ? 1 : 0.3,
            x: 0,
            filter: activeTab === 'experience' ? 'blur(0px)' : 'blur(2px)'
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#BC13FE] to-transparent" />
          {timeline.experience.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              index={index}
              type="experience"
              align="left"
              isActive={activeTab === 'experience'}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function TimelineItem({ data, index, type, align, isActive }: TimelineItemProps) {
  const isEducation = type === 'education'
  const color = isEducation ? '#00F0FF' : '#BC13FE'
  const Icon = isEducation ? GraduationCap : Briefcase

  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className={`relative mb-12 ${align === 'right' ? 'pr-8' : 'pl-8'}`}
    >
      <div className="glass-morphism p-6 rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-shadow">
        <div className="flex items-center gap-2 mb-4" style={{ color }}>
          <Icon className="w-5 h-5" />
          <span className="text-glow">{data.year}</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-glow" style={{ color }}>
          {data.title}
        </h3>
        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <MapPin className="w-4 h-4" />
          <span>{isEducation ? data.institution : data.company}, {data.location}</span>
        </div>
        <p className="text-gray-400 mb-4">{data.description}</p>
        <ul className="space-y-2">
          {data.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <Code className="w-4 h-4" style={{ color }} />
              <span className="text-gray-300">{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div 
        className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} top-8 transform ${align === 'right' ? 'translate-x-1/2' : '-translate-x-1/2'}`}
      >
        <div 
          className="w-4 h-4 rounded-full animate-pulse"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  )
} 