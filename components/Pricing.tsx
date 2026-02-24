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
                relative rounded-3xl p-8 flex flex-col border-2
                ${plan.highlighted 
                  ? 'bg-gradient-to-br from-white via-white to-accent/5 text-dark shadow-2xl scale-105 lg:scale-110 z-10 border-accent' 
                  : 'bg-gradient-to-br from-dark/95 to-primary text-white backdrop-blur-sm border-white/10'
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-accent to-accent/80 px-6 py-2 rounded-full text-sm font-black text-white shadow-xl border-2 border-white">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-black mb-2 ${plan.highlighted ? 'text-primary' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 font-medium ${plan.highlighted ? 'text-dark/70' : 'text-white/70'}`}>
                  {plan.description}
                </p>
                <div className={`text-5xl font-black ${plan.highlighted ? 'text-accent' : 'text-accent'}`}>
                  {plan.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check 
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-accent' : 'text-accent'
                      }`}
                      strokeWidth={3}
                    />
                    <span className={`text-sm font-medium ${plan.highlighted ? 'text-dark' : 'text-white'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`
                  block text-center px-6 py-4 rounded-xl font-bold transition-all duration-200 border-2
                  ${plan.highlighted
                    ? 'bg-gradient-to-r from-cta to-cta-hover text-white hover:scale-105 shadow-xl hover:shadow-2xl border-cta'
                    : 'bg-white/10 text-white hover:bg-white/20 border-white/30 hover:border-accent'
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
