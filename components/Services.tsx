'use client'

import { motion } from 'framer-motion'
import { Code2, TrendingUp, Zap, Check } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: "Développement Next.js",
    description: "Code 100% personnalisé. Pas de templates, pas de limitations. Performance et modernité garanties pour votre entreprise.",
  },
  {
    icon: TrendingUp,
    title: "Visiteurs → Clients",
    description: "Chaque élément pensé pour convertir. CTAs stratégiques, formulaires optimisés, parcours utilisateur fluide.",
  },
  {
    icon: Zap,
    title: "Vitesse & Visibilité",
    description: "Lighthouse 95+, temps de chargement <2s, SEO optimisé. Votre site sera rapide ET visible sur Google.",
  },
]

const bonus = [
  "Hébergement 1 an offert",
  "Google Analytics configuré",
  "Formation à la livraison",
  "Support 30 jours inclus",
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Ce que j'offre
          </h2>
          <p className="text-lg text-dark font-medium max-w-2xl mx-auto leading-relaxed">
            Sites sur-mesure qui convertissent
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl border-2 border-primary/10 hover:border-accent/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-dark leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bonus inclus */}
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-br from-accent/10 via-accent/5 to-primary/5 rounded-2xl p-8 border-2 border-accent/30 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-dark mb-6 text-center">
            Inclus dans chaque projet
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {bonus.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-dark font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
