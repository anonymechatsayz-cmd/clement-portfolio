'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
              Qui suis-je ?
            </h2>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl md:text-2xl font-semibold text-dark mb-6 leading-relaxed">
                Clément Franjou — Étudiant-entrepreneur passionné par la tech et le design
              </p>

              <p className="text-lg text-dark/80 leading-relaxed mb-6">
                J'ai combiné ces deux univers pour me spécialiser dans la création de sites web 
                qui ont un <strong className="text-primary">réel impact sur le chiffre d'affaires</strong> des 
                entreprises locales que j'accompagne.
              </p>

              <p className="text-lg text-dark/80 leading-relaxed mb-6">
                Mon approche ? Simple : vous ne devez pas <em>subir</em> le numérique, mais <strong>en profiter</strong>.
              </p>

              <div className="bg-primary/5 rounded-2xl p-6 mb-6 border-l-4 border-primary">
                <p className="text-dark/80 leading-relaxed mb-4">
                  <strong className="text-primary">Contrairement aux agences traditionnelles :</strong>
                </p>
                <ul className="space-y-2 text-dark/70">
                  <li>• Pas de jargon technique incompréhensible</li>
                  <li>• Pas de frais de structure démesurés</li>
                  <li>• Pas de délais de 6 semaines</li>
                </ul>
              </div>

              <p className="text-lg text-dark/80 leading-relaxed mb-8">
                Je crée des sites qui <strong className="text-primary">convertissent</strong>, je livre en{' '}
                <strong className="text-primary">7 jours</strong>, et je reste{' '}
                <strong className="text-primary">disponible</strong> après la livraison.
              </p>

              <p className="text-lg text-dark/80 leading-relaxed">
                Basé en Île-de-France, je travaille avec des <strong>artisans</strong>, <strong>restaurants</strong>,{' '}
                <strong>professions libérales</strong> et <strong>espaces bien-être</strong> qui veulent un site 
                professionnel sans le prix d'agence.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-dark/10">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="text-center px-6 py-3 bg-primary/5 rounded-xl">
                  <div className="text-sm text-dark/60 mb-1">Résultats</div>
                  <div className="text-lg font-bold text-primary">Garantis</div>
                </div>
                <div className="text-center px-6 py-3 bg-primary/5 rounded-xl">
                  <div className="text-sm text-dark/60 mb-1">Transparence</div>
                  <div className="text-lg font-bold text-primary">Totale</div>
                </div>
                <div className="text-center px-6 py-3 bg-primary/5 rounded-xl">
                  <div className="text-sm text-dark/60 mb-1">Disponibilité</div>
                  <div className="text-lg font-bold text-primary">24/7</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-dark text-white text-lg font-semibold rounded-lg hover:bg-primary hover:scale-102 transition-all duration-200"
              >
                Discutons de votre projet
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
