'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const experiences = [
  {
    period: '2022 - Present',
    role: 'Full Stack Developer',
    company: 'Tech Solutions Inc.'
  },
  {
    period: 'Summer 2021',
    role: 'Front-End Developer Intern',
    company: 'Web Design Studio'
  },
  {
    period: '2020 - 2021',
    role: 'Freelance Web Developer',
    company: 'E-commerce Startup'
  },
  {
    period: '2019 - 2020',
    role: 'Teaching Assistant',
    company: 'Tech Academy'
  }
]

const education = [
  {
    period: '2020 - Present',
    degree: 'B.Tech Computer Science',
    school: 'PEC University of Technology'
  },
  {
    period: '2020 - Present',
    degree: 'BS in Data Science',
    school: 'IIT Madras'
  }
]

const skills = [
  { name: 'Machine Learning', level: 90 },
  { name: 'Web Development', level: 85 },
  { name: 'Data Analytics', level: 80 },
  { name: 'Cloud Computing', level: 75 }
]

const aboutMe = {
  description: `I am a passionate developer with a strong foundation in both theoretical and practical aspects of computer science. Currently pursuing dual degrees - B.Tech at PEC and BS in Data Science at IIT Madras, I bring a unique perspective to problem-solving.`,
  highlights: [
    'National Finalist in multiple hackathons',
    'Published research paper on ML applications',
    'Open source contributor',
    'Full-stack development experience'
  ]
}

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState('experience')

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <h2 className="text-4xl font-bold mb-6 relative">
            Why hire me?
            <motion.div
              className="absolute -inset-2 bg-[#00FF9D]/10 blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </h2>
          
          <div className="space-y-4">
            {['Experience', 'Education', 'Skills', 'About me'].map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant={activeSection === section.toLowerCase() ? 'default' : 'outline'}
                  className={`w-full ${
                    activeSection === section.toLowerCase()
                      ? 'bg-[#00FF9D] text-black'
                      : 'hover:border-[#00FF9D] hover:text-[#00FF9D]'
                  }`}
                  onClick={() => setActiveSection(section.toLowerCase())}
                >
                  {section}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <AnimatePresence mode="wait">
            {activeSection === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-4xl font-bold mb-6">My Experience</h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-[#1A1A1A] p-6 rounded-lg hover:border-[#00FF9D]/20 border border-transparent transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-[#00FF9D]">{exp.period}</span>
                      <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-4xl font-bold mb-6">Education</h2>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-[#1A1A1A] p-6 rounded-lg hover:border-[#00FF9D]/20 border border-transparent transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-[#00FF9D]">{edu.period}</span>
                      <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.school}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-4xl font-bold mb-6">Skills</h2>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-lg">{skill.name}</span>
                        <span className="text-[#00FF9D]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#00FF9D]"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'about me' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <div className="bg-[#1A1A1A] p-6 rounded-lg mb-8">
                  <p className="text-gray-300 leading-relaxed mb-6">{aboutMe.description}</p>
                  <h3 className="text-xl font-bold mb-4 text-[#00FF9D]">Highlights</h3>
                  <ul className="space-y-2">
                    {aboutMe.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#00FF9D]">•</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

