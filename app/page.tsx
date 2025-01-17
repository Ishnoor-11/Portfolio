'use client'

import Hero from '@/components/hero'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'View Projects',
              description: 'Explore my latest work and projects',
              link: '/projects',
            },
            {
              title: 'My Journey',
              description: 'Check out my experience and skills',
              link: '/journey',
            },
            {
              title: 'Let\'s Connect',
              description: 'Let\'s discuss your next project',
              onClick: () => document.querySelector('[data-contact-trigger]')?.click(),
            },
          ].map((item, index) => (
            item.link ? (
              <Link href={item.link} key={index}>
                <motion.div
                  className={`glass-morphism p-6 rounded-xl group cursor-pointer ${
                    item.title === "Let's Connect" 
                      ? 'hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] relative overflow-hidden'
                      : ''
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {item.title === "Let's Connect" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.2, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 relative z-10">
                    {item.description}
                  </p>
                  <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform relative z-10" />
                </motion.div>
              </Link>
            ) : (
              <motion.div
                key={index}
                onClick={item.onClick}
                className="cursor-pointer"
              >
                <motion.div
                  className={`glass-morphism p-6 rounded-xl group cursor-pointer ${
                    item.title === "Let's Connect" 
                      ? 'hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] relative overflow-hidden'
                      : ''
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {item.title === "Let's Connect" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.2, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 relative z-10">
                    {item.description}
                  </p>
                  <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform relative z-10" />
                </motion.div>
              </motion.div>
            )
          ))}
        </div>
      </motion.div>
    </main>
  )
}

