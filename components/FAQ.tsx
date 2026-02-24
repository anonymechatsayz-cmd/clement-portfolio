'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Pourquoi vos tarifs sont si accessibles ?",
    answer: "Je travaille seul, sans frais de structure. Pas de bureaux à financer, pas d'intermédiaires. Vous payez mon expertise, pas mes coûts fixes. C'est aussi simple que ça.",
  },
  {
    question: "7 jours, c'est pas trop rapide ?",
    answer: "Non. J'utilise Next.js et un process optimisé qui me permet de livrer vite SANS compromis qualité. Vous validez la maquette à J+3, donc zéro surprise. Et j'offre 2 rounds de révisions inclus pour peaufiner.",
  },
  {
    question: "Comment je sais que mon site va convertir ?",
    answer: "Stratégie de conversion intégrée dans chaque projet : CTAs optimisés, formulaires simplifiés, parcours utilisateur fluide. Google Analytics inclus pour mesurer vos résultats en temps réel.",
  },
  {
    question: "Qu'est-ce qui se passe après la livraison ?",
    answer: "Formation 1h pour que vous soyez autonome. 30 jours de support email inclus pour toute question. Option maintenance disponible (100€/mois, modifications texte/images illimitées) si vous voulez déléguer.",
  },
  {
    question: "Vous travaillez dans toute la France ?",
    answer: "Principalement Île-de-France (rencontre physique possible si besoin). Mais je travaille aussi en remote partout en France avec mes clients. L'essentiel, c'est les résultats.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Questions Fréquentes
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border-2 border-primary/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/5 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-dark pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  strokeWidth={3}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 border-t-2 border-primary/10">
                      <p className="text-dark font-medium leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-dark font-semibold mb-6 text-lg">
            Une autre question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-primary-light text-white text-lg font-bold rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 border-2 border-accent/20"
          >
            Contactez-moi
          </a>
        </motion.div>
      </div>
    </section>
  )
}
