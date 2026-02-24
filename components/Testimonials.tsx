'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Clément a créé notre site en une semaine chrono. On a eu 12 demandes de devis le premier mois, alors qu'avant on avait zéro visibilité. Pro, rapide, et dispo quand on a des questions. Je recommande à 100%.",
    author: "Marc L.",
    role: "Gérant",
    company: "L.C. Élagage et Paysage",
    location: "Chilly-Mazarin",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Ce que disent mes clients
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10 md:p-14 text-white shadow-2xl border-2 border-accent/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Quote icon */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote className="w-16 h-16" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="relative">
                <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {testimonial.author.charAt(0)}
                  </div>

                  {/* Author info */}
                  <div>
                    <div className="font-bold text-lg">{testimonial.author}</div>
                    <div className="text-white/80">
                      {testimonial.role} — {testimonial.company}
                    </div>
                    <div className="text-white/60 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            </motion.div>
          ))}

          {/* Note pour futurs témoignages */}
          <motion.p
            className="text-center text-dark/50 mt-8 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Plus de témoignages à venir...
          </motion.p>
        </div>
      </div>
    </section>
  )
}
