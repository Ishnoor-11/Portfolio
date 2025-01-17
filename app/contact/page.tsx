'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Code, Mail, MapPin, Send } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ContactPage() {
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
            Let&apos;s Connect
          </span>
        </h1>
        <motion.div
          className="h-1 w-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-morphism p-8 rounded-xl"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input 
                placeholder="First name" 
                className="bg-[#111111]/50 border-[#00F0FF]/20 focus:border-[#00F0FF] transition-colors"
              />
              <Input 
                placeholder="Last name" 
                className="bg-[#111111]/50 border-[#00F0FF]/20 focus:border-[#00F0FF] transition-colors"
              />
            </div>
            <Input 
              placeholder="Email address" 
              className="bg-[#111111]/50 border-[#00F0FF]/20 focus:border-[#00F0FF] transition-colors"
            />
            <Select>
              <SelectTrigger className="bg-[#111111]/50 border-[#00F0FF]/20">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-[#0A0A0A] border-[#00F0FF]/20">
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="ai">AI/ML Development</SelectItem>
                <SelectItem value="data">Data Analytics</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
              </SelectContent>
            </Select>
            <Textarea 
              placeholder="Tell me about your project"
              className="bg-[#111111]/50 border-[#00F0FF]/20 focus:border-[#00F0FF] min-h-[150px] transition-colors"
            />
            <Button className="w-full bg-gradient-to-r from-[#00F0FF] to-[#BC13FE] text-white group">
              <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="glass-morphism p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-[#00F0FF] text-glow">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#111111]/50">
                  <Mail className="w-6 h-6 text-[#00F0FF]" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-[#00F0FF]">your.email@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#111111]/50">
                  <MapPin className="w-6 h-6 text-[#BC13FE]" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-[#BC13FE]">Punjab, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-[#00F0FF] text-glow">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-400 mb-6">
              Available for freelance opportunities and collaborations.
              Let&apos;s create something amazing together.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 neon-border">
                View Resume
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-[#00F0FF] to-[#BC13FE] text-white">
                Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

