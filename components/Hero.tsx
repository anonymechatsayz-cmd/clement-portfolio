'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient animé background */}
      <div className="absolute inset-0 hero-gradient -z-10" />
      
      {/* Overlay sombre pour meilleur contraste texte */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Votre site professionnel<br />
          qui transforme vos visiteurs en clients
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sites web performants pour PME locales en Île-de-France.<br className="hidden sm:block" />
          Livrés en 7 jours. Résultats garantis.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-cta text-white text-lg font-semibold rounded-lg hover:bg-cta-hover hover:scale-102 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Réserver un appel gratuit
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Voir les résultats
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 text-white/80 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span>Livraison 7 jours</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span>Lighthouse 95+</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span>Support inclus</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-3 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
