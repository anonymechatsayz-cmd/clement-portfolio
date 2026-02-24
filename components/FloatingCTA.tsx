'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X } from 'lucide-react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Afficher le bouton après scroll
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex items-center gap-3 bg-cta text-white pl-6 pr-6 py-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 transition-all duration-300"
          >
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-cta animate-pulse-slow opacity-75" />
            
            {/* Content */}
            <span className="relative flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span className="font-bold whitespace-nowrap">
                Appel Gratuit
              </span>
            </span>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cta to-cta-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
