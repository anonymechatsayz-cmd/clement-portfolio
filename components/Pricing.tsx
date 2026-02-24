// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: "Essentiel",
    price: "490€",
    description: "Perfect pour démarrer",
    features: [
      "Landing page 4 sections",
      "Design moderne & responsive",
      "Performance optimisée (Lighthouse 90+)",
      "Formulaire de contact",
      "Livraison 7 jours",
    ],
    cta: "Réserver un appel",
    highlighted: false,
  },
  {
    name: "Professionnel",
    price: "790€",
    description: "Idéal pour la plupart des PME",
    features: [
      "Landing page 6 sections complète",
      "Animations premium",
      "SEO optimisé + Google Analytics",
      "Hébergement inclus (1 an)",
      "2 rounds de révisions",
      "Formation 1h",
      "Support 30 jours",
      "Livraison 7 jours",
    ],
    cta: "Réserver un appel",
    highlighted: true,
    badge: "Recommandé",
  },
  {
    name: "Premium",
    price: "1290€",
    description: "Pour aller plus loin",
    features: [
      "Tout Professionnel +",
      "Multi-pages (jusqu'à 7 pages)",
      "Animations avancées + parallax",
      "Intégrations (Calendly, Maps, etc.)",
      "Copywriting professionnel",
      "Photos optimisées AI",
      "Support prioritaire 30 jours",
    ],
    cta: "Réserver un appel",
    highlighted: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tarifs Transparents
          </h2>
          <p className="text-lg text-white/70 mb-2">
            Pas de frais cachés. Paiement en 2 fois (50% début, 50% livraison).
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                relative rounded-3xl p-8 flex flex-col
                ${plan.highlighted 
                  ? 'bg-white text-dark shadow-2xl scale-105 lg:scale-110 z-10' 
                  : 'bg-white/5 backdrop-blur-sm border border-white/10'
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-accent px-4 py-1.5 rounded-full text-sm font-semibold text-dark">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-dark' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-dark/60' : 'text-white/60'}`}>
                  {plan.description}
                </p>
                <div className={`text-5xl font-bold ${plan.highlighted ? 'text-primary' : 'text-white'}`}>
                  {plan.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check 
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-accent' : 'text-accent/80'
                      }`}
                      strokeWidth={3}
                    />
                    <span className={`text-sm ${plan.highlighted ? 'text-dark/80' : 'text-white/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`
                  block text-center px-6 py-4 rounded-xl font-semibold transition-all duration-200
                  ${plan.highlighted
                    ? 'bg-cta text-white hover:bg-cta-hover hover:scale-102 shadow-lg hover:shadow-xl'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }
                `}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Note garantie */}
        <motion.p
          className="text-center text-white/60 mt-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Garantie satisfait ou remboursé • Paiement flexible en 2 fois
        </motion.p>
      </div>
    </section>
  )
}
