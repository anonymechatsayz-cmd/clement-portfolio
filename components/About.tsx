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
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-primary/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl md:text-2xl font-bold text-dark mb-6 leading-relaxed">
                Clément Franjou — Étudiant-entrepreneur passionné par la tech et le design
              </p>

              <p className="text-lg text-dark mb-6 leading-relaxed font-medium">
                J'ai combiné ces deux univers pour me spécialiser dans la création de sites web 
                qui ont un <strong className="text-primary font-bold">réel impact sur le chiffre d'affaires</strong> des 
                entreprises locales que j'accompagne.
              </p>

              <p className="text-lg text-dark mb-6 leading-relaxed font-medium">
                Mon approche ? Simple : vous ne devez pas <em>subir</em> le numérique, mais <strong className="text-accent font-bold">en profiter</strong>.
              </p>

              <div className="bg-primary/5 rounded-2xl p-6 mb-6 border-l-4 border-accent">
                <p className="text-dark mb-4 font-semibold text-lg">
                  <strong className="text-primary">Contrairement aux agences traditionnelles :</strong>
                </p>
                <ul className="space-y-2 text-dark font-medium">
                  <li>• Pas de jargon technique incompréhensible</li>
                  <li>• Pas de frais de structure démesurés</li>
                  <li>• Pas de délais de 6 semaines</li>
                </ul>
              </div>

              <p className="text-lg text-dark mb-8 leading-relaxed font-medium">
                Je crée des sites qui <strong className="text-primary font-bold">convertissent</strong>, je livre en{' '}
                <strong className="text-accent font-bold">7 jours</strong>, et je reste{' '}
                <strong className="text-primary font-bold">disponible</strong> après la livraison.
              </p>

              <p className="text-lg text-dark leading-relaxed font-medium">
                Basé en Île-de-France, je travaille avec des <strong className="font-bold">artisans</strong>, <strong className="font-bold">restaurants</strong>,{' '}
                <strong className="font-bold">professions libérales</strong> et <strong className="font-bold">espaces bien-être</strong> qui veulent un site 
                professionnel sans le prix d'agence.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t-2 border-primary/10">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="text-center px-8 py-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border-2 border-accent/20">
                  <div className="text-sm text-dark/80 font-semibold mb-1">Résultats</div>
                  <div className="text-xl font-black text-accent">Garantis</div>
                </div>
                <div className="text-center px-8 py-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border-2 border-accent/20">
                  <div className="text-sm text-dark/80 font-semibold mb-1">Transparence</div>
                  <div className="text-xl font-black text-accent">Totale</div>
                </div>
                <div className="text-center px-8 py-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border-2 border-accent/20">
                  <div className="text-sm text-dark/80 font-semibold mb-1">Disponibilité</div>
                  <div className="text-xl font-black text-accent">24/7</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-primary-light text-white text-lg font-bold rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 border-2 border-accent/20"
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
