'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import Image from 'next/image'

const featuredProject = {
  title: "L.C. Élagage et Paysage",
  type: "Paysagiste",
  location: "Chilly-Mazarin (91)",
  challenge: "Site existant ne convertissait pas. Pas de CTAs clairs, design vieillot, zéro optimisation mobile.",
  solution: [
    "Design premium (palette vert/or)",
    "CTAs 'Devis Gratuit' à chaque section",
    "Responsive parfait (70% trafic mobile)",
    "SEO local optimisé (Essonne, Île-de-France)"
  ],
  results: [
    { label: "Demandes de devis", value: "12 en 1 mois" },
    { label: "Temps de chargement", value: "1.2s (vs 4.5s avant)" },
    { label: "Score Lighthouse", value: "98/100" }
  ],
  image: "/images/lc-elagage-mockup.jpg",
  url: "https://lc-elagage.fr",
  featured: true
}

const otherProjects = [
  {
    title: "Bistrot Le Marais",
    type: "Restaurant français",
    location: "Paris 4e",
    conceptual: true
  },
  {
    title: "Cabinet Dr. Rousseau",
    type: "Dentiste",
    location: "Paris 15e",
    conceptual: true
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Réalisations Récentes
          </h2>
          <p className="text-lg text-dark font-medium max-w-2xl mx-auto leading-relaxed">
            Sites performants pour PME locales
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
              {/* Image */}
              <div className="relative group">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-dark/20">
                    {/* Placeholder pour screenshot L.C. Élagage */}
                    <div className="text-center px-8">
                      <div className="text-6xl font-bold mb-2">L.C.</div>
                      <div className="text-xl">Élagage et Paysage</div>
                      <div className="text-sm mt-4 text-dark/40">Screenshot disponible après mise en ligne</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-2xl transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-accent font-semibold mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Projet Featured</span>
                </div>

                <h3 className="text-3xl font-bold text-dark mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-lg text-dark font-medium mb-6">
                  {featuredProject.type} • {featuredProject.location}
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Challenge</h4>
                    <p className="text-dark font-medium text-sm leading-relaxed">
                      {featuredProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-dark mb-2">Solution</h4>
                    <ul className="space-y-2">
                      {featuredProject.solution.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-dark font-medium">
                          <span className="text-accent mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-dark mb-3">Résultats</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {featuredProject.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-dark/80 font-semibold">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cta font-semibold hover:gap-3 transition-all duration-200 group"
                >
                  <span>Voir le site</span>
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-dark/5 hover:border-primary/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-surface to-primary/5 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center px-6 text-dark font-medium">
                  <div className="text-2xl font-bold mb-1">{project.title}</div>
                  <div className="text-sm text-dark/80">Mockup à venir</div>
                </div>
              </div>

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-dark">
                  {project.title}
                </h3>
                {project.conceptual && (
                  <span className="text-xs px-3 py-1 bg-dark/5 text-dark/80 font-semibold rounded-full">
                    Conceptuel
                  </span>
                )}
              </div>

              <p className="text-dark text-sm font-medium mb-4">
                {project.type} • {project.location}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
