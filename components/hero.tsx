'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Code, Zap, ExternalLink } from 'lucide-react'
import ParticleEffect from './particle-effect'

export default function Hero() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 gap-12 items-center pt-20 relative overflow-hidden">
      <ParticleEffect />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 lg:pl-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-6 h-6 text-[#00F0FF] animate-pulse" />
          <h2 
            className="text-xl relative inline-block text-glow"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Digital Innovator & AI Engineer
          </h2>
        </div>

        <h1 className="text-5xl font-bold mb-6 relative">
          Hello I&apos;m{' '}
          <span className="relative inline-block">
            <Typewriter
              options={{
                strings: ['Siddharth Chauhan', 'AI Developer', 'Data Scientist'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                wrapperClassName: 'text-[#00F0FF] text-glow',
              }}
            />
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-[#00F0FF]/20 to-[#BC13FE]/20 blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </span>
        </h1>

        <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
          Pioneering the future of digital experiences through AI innovation 
          and cutting-edge web development. National Finalist in multiple hackathons, 
          pursuing dual degrees in Computer Science.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/Siddharth_Resume.pdf" target="_blank">
            <Button 
              variant="outline" 
              className="neon-border group"
            >
              <Code className="mr-2 group-hover:rotate-12 transition-transform" />
              View Resume
            </Button>
          </Link>
          
          {[
            { Icon: Github, url: 'https://github.com/SIDDHARTH1-1CHAUHAN', label: 'GitHub' },
            { Icon: Linkedin, url: 'https://www.linkedin.com/in/siddharth-chauhan-225803252', label: 'LinkedIn' },
            { Icon: ExternalLink, url: '#', label: 'Portfolio' }
          ].map(({ Icon, url, label }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 neon-border rounded-lg group"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-[#00F0FF] group-hover:text-[#BC13FE] transition-colors" />
            </motion.a>
          ))}
        </div>

        <div className="flex gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse" />
            Available for projects
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#BC13FE] rounded-full animate-pulse" />
            Based in India
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 lg:pr-8 flex justify-center"
      >
        <div className="relative w-[300px] h-[300px] animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20" />
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="rounded-full object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-full border border-primary/20" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/30"
          />
        </div>

        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [-10, 10] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="text-[#00F0FF] text-glow opacity-50"
          >
            ▼
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
