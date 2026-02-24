'use client'

import { motion } from 'framer-motion'
import { MessageCircle, FileText, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Premier Contact",
    description: "Vous me contactez via formulaire, email ou appel. J'audite gratuitement votre présence actuelle. Appel découverte 30 min offert pour valider le match.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Proposition",
    description: "Devis personnalisé sous 24h + mockup de votre homepage. Contrat transparent et clair. On valide ensemble avant de démarrer.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Développement",
    description: "7 jours de création intensive. Validation de la maquette complète à J+3. 2 rounds de révisions inclus pour peaufiner chaque détail.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Livraison",
    description: "Site mis en ligne sur votre domaine. Formation 1h pour devenir autonome. 30 jours de support email inclus pour toute question.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-dark/60 max-w-2xl mx-auto">
            Du premier contact au site en ligne en 7 jours
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1

            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex gap-6 md:gap-8 pb-12">
                  {/* Icône et ligne */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl border-2 border-accent/30">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                    </div>
                    {!isLast && (
                      <div className="w-1 h-full bg-gradient-to-b from-accent via-primary to-accent/30 mt-4 rounded-full" />
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-6xl font-black text-accent/20 leading-none">
                        {step.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-dark">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-dark font-medium leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-cta text-white text-lg font-semibold rounded-lg hover:bg-cta-hover hover:scale-102 hover:shadow-lg transition-all duration-200"
          >
            Démarrons votre projet
          </a>
        </motion.div>
      </div>
    </section>
  )
}
