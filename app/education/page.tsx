'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Code } from 'lucide-react'

const education = [
  {
    year: '2021 - Present',
    degree: 'B.Tech in Computer Science',
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
    degree: 'Higher Secondary Education',
    institution: 'Delhi Public School',
    location: 'Delhi, India',
    description: 'Science stream with Computer Science as major.',
    achievements: [
      'Percentage: 95%',
      'School topper in Computer Science',
      'Won national coding competition'
    ]
  }
]

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <GraduationCap className="w-12 h-12 mx-auto mb-4 text-[#00F0FF]" />
        <h1 className="text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]">
            Education Journey
          </span>
        </h1>
        <motion.div
          className="h-1 w-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#00F0FF] to-[#BC13FE]" />
        
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
              index % 2 === 0 ? 'md:text-right' : ''
            }`}
          >
            <div className={`glass-morphism p-6 rounded-xl ${
              index % 2 === 0 ? 'md:order-1' : 'md:order-2'
            }`}>
              <div className="flex items-center gap-2 mb-4 text-[#00F0FF]">
                <Calendar className="w-5 h-5" />
                <span className="text-glow">{item.year}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#00F0FF] text-glow">
                {item.degree}
              </h3>
              <div className="flex items-center gap-2 mb-4 text-[#BC13FE]">
                <MapPin className="w-5 h-5" />
                <span>{item.institution}, {item.location}</span>
              </div>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#00F0FF]" />
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-[#00F0FF] animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 