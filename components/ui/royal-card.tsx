'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface RoyalCardProps extends Omit<HTMLMotionProps<"div">, "className"> {
  gradient?: boolean
  className?: string
}

const RoyalCard = React.forwardRef<HTMLDivElement, RoyalCardProps>(
  ({ className, gradient = false, children, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-xl p-6 royal-card",
        gradient && "bg-gradient-to-br from-[#1A1A1A] to-[#1E1E1E]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
)
RoyalCard.displayName = "RoyalCard"

export { RoyalCard } 