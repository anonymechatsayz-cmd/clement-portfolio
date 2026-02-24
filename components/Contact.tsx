'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

type FormData = {
  name: string
  email: string
  projectType: string
  message: string
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulation envoi (en production, remplacer par vraie API)
    try {
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // Simulation délai
      await new Promise(resolve => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      reset()

      // Reset après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Erreur envoi:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Prêt à démarrer ?
          </h2>
          <p className="text-lg text-dark/60">
            Réponse sous 24h garantie
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Formulaire */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">
                  Message envoyé !
                </h3>
                <p className="text-dark/70">
                  Je vous réponds sous 24h. À très vite !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="space-y-6">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                      Nom complet *
                    </label>
                    <input
                      {...register('name', { required: 'Le nom est requis' })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-surface border border-dark/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', {
                        required: "L'email est requis",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email invalide',
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-surface border border-dark/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                      placeholder="jean.dupont@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Type de projet */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-dark mb-2">
                      Type de projet *
                    </label>
                    <select
                      {...register('projectType', { required: 'Le type de projet est requis' })}
                      id="projectType"
                      className="w-full px-4 py-3 bg-surface border border-dark/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="artisan">Artisan</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="liberal">Profession libérale</option>
                      <option value="wellness">Espace bien-être</option>
                      <option value="autre">Autre</option>
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Le message est requis' })}
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-surface border border-dark/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all resize-none"
                      placeholder="Parlez-moi de votre projet..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-cta text-white text-lg font-semibold rounded-xl hover:bg-cta-hover hover:scale-102 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer ma demande</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Infos contact */}
          <motion.div
            <div className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/10 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Email</h3>
                  <a
                    href="mailto:contact@clementfranjou.fr"
                    className="text-dark font-medium hover:text-accent transition-colors"
                  >
                    contact@clementfranjou.fr
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-primary/10 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Localisation</h3>
                  <p className="text-dark font-medium">Paris, Île-de-France</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-primary/10 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Disponibilité</h3>
                  <p className="text-dark font-medium">Lun-Ven, 9h-19h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
