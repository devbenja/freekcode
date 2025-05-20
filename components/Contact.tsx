"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Send, User, Mail, Building2, CheckCircle2, ChevronRight, Sparkles, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['600'],
})

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const Contact = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    tipoProyecto: "",
    mensaje: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: any) => {
    setFormData((prev) => ({ ...prev, tipoProyecto: value }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto py-16 px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-1 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-sm">
            <span className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Conecta con Nosotros</span>
            </span>
          </div>
          <h1 className={`${orbitron.className} text-4xl md:text-5xl font-bold tracking-tight mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600`}>
            Hagamos algo increíble juntos
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Transforma tus ideas en soluciones digitales de vanguardia con nuestro equipo de expertos
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            {!submitted ? (
              <div className="p-1">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                  <div className="flex justify-center mb-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step >= i
                              ? "bg-white text-black"
                              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                          }`}
                        >
                          {step > i ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : i}
                        </div>
                        {i < 3 && (
                          <div className={`h-1 w-12 ${step > i ? "bg-blue-400" : "bg-slate-200 dark:bg-slate-700"}`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h2 className="text-2xl font-bold mb-6">Cuéntanos sobre ti</h2>

                        <div className="space-y-4">
                          <div className="relative">
                            <label htmlFor="nombre" className="text-sm font-medium block mb-1.5">
                              Nombre completo
                            </label>
                            <div className="relative">
                              <Input
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="pl-10"
                                placeholder="Tu nombre"
                                required
                              />
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            </div>
                          </div>

                          <div className="relative">
                            <label htmlFor="email" className="text-sm font-medium block mb-1.5">
                              Correo electrónico
                            </label>
                            <div className="relative">
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="pl-10"
                                placeholder="tu@email.com"
                                required
                              />
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            </div>
                          </div>

                          <div className="relative">
                            <label htmlFor="empresa" className="text-sm font-medium block mb-1.5">
                              Empresa (opcional)
                            </label>
                            <div className="relative">
                              <Input
                                id="empresa"
                                name="empresa"
                                value={formData.empresa}
                                onChange={handleChange}
                                className="pl-10"
                                placeholder="Nombre de tu empresa"
                              />
                              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button type="button" onClick={nextStep} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                            Continuar
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h2 className="text-2xl font-bold mb-6">¿Qué tipo de proyecto necesitas?</h2>

                        <div className="space-y-4">
                          <div>
                            <label htmlFor="tipoProyecto" className="text-sm font-medium block mb-1.5">
                              Selecciona una opción
                            </label>
                            <Select value={formData.tipoProyecto} onValueChange={handleSelectChange}>
                              <SelectTrigger>
                                <SelectValue placeholder="Tipo de proyecto" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="web">Desarrollo Web</SelectItem>
                                <SelectItem value="app">Aplicación Móvil</SelectItem>
                                <SelectItem value="ecommerce">E-commerce</SelectItem>
                                <SelectItem value="ai">Inteligencia Artificial</SelectItem>
                                <SelectItem value="consultoria">Consultoría</SelectItem>
                                <SelectItem value="otro">Otro</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                              { id: "web", label: "Desarrollo Web", icon: "🌐" },
                              { id: "app", label: "App Móvil", icon: "📱" },
                              { id: "ecommerce", label: "E-commerce", icon: "🛒" },
                              { id: "ai", label: "IA", icon: "🤖" },
                              { id: "consultoria", label: "Consultoría", icon: "💼" },
                              { id: "otro", label: "Otro", icon: "✨" },
                            ].map((item) => (
                              <div
                                key={item.id}
                                onClick={() => handleSelectChange(item.id)}
                                className={`
                                  cursor-pointer p-3 rounded-xl border-2 transition-all
                                  ${
                                    formData.tipoProyecto === item.id
                                      ? "border-primary bg-primary/5"
                                      : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                                  }
                                `}
                              >
                                <div className="text-2xl mb-1">{item.icon}</div>
                                <div className="text-sm font-medium">{item.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between pt-4">
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Atrás
                          </Button>
                          <Button type="button" onClick={nextStep}>
                            Continuar
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h2 className="text-2xl font-bold mb-6">Detalles de tu proyecto</h2>

                        <div className="space-y-4">
                          <div>
                            <label htmlFor="mensaje" className="text-sm font-medium block mb-1.5">
                              Cuéntanos más sobre tu proyecto
                            </label>
                            <div className="relative">
                              <Textarea
                                id="mensaje"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                className="min-h-[180px] resize-none"
                                placeholder="Describe tu idea, objetivos, plazos y cualquier detalle relevante..."
                                required
                              />
                              <MessageSquare className="absolute right-3 top-3 h-4 w-4 text-slate-400" />
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between pt-4">
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Atrás
                          </Button>
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                          >
                            Enviar mensaje
                            <Send className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">¡Mensaje enviado con éxito!</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo pronto.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false)
                    setStep(1)
                    setFormData({
                      nombre: "",
                      email: "",
                      empresa: "",
                      tipoProyecto: "",
                      mensaje: "",
                    })
                  }}
                  variant="outline"
                >
                  Enviar otro mensaje
                </Button>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Escríbenos directamente a nuestro correo</p>
              <a href="mailto:contacto@tuempresa.com" className="text-primary hover:underline font-medium">
                contacto@tuempresa.com
              </a>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Chat en vivo</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Habla con nuestro equipo en tiempo real</p>
              <Button variant="outline" size="sm">
                Iniciar chat
              </Button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Llámanos para una atención personalizada</p>
              <a href="tel:+525512345678" className="text-primary hover:underline font-medium">
                +52 (55) 1234 5678
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
