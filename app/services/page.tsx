'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, Crown } from 'lucide-react'
import { RoyalCard } from '@/components/ui/royal-card'
import { Badge } from '@/components/ui/badge'

const services = [
  {
    id: '01',
    title: 'AI/ML Development',
    description: 'Custom machine learning solutions, model development, and AI integration for your business needs.'
  },
  {
    id: '02',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with Next.js, React, and cutting-edge technologies.'
  },
  {
    id: '03',
    title: 'Data Analytics',
    description: 'Comprehensive data analysis, visualization, and insights to drive business decisions.'
  },
  {
    id: '04',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native and modern mobile frameworks.'
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Crown className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
        <h1 className="text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#00FF9D]">
            Royal Services
          </span>
        </h1>
        <motion.div
          className="h-1 w-20 mx-auto mt-4 rounded-full animate-gradient-royal"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <RoyalCard
            key={service.id}
            gradient
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="royal">
                  {service.id}
                </Badge>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className="bg-gradient-to-r from-[#FFD700] to-[#00FF9D] rounded-full p-2 cursor-pointer"
                >
                  <ArrowDownRight className="w-6 h-6 text-black" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#00FF9D]">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </RoyalCard>
        ))}
      </div>
    </div>
  )
}

