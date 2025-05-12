"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Orbitron } from 'next/font/google'
import { useLanguage } from "@/context/LanguageContext"

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['600'],
})

export const Hero = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const { currentLanguage } = useLanguage();

  /*const inspiringPhrases = [
    "Impulsamos tu negocio",
    "Tecnología para tu crecimiento",
    "Resultados extraordinarios",
  ]*/

  // JSON textos en inglés y español
  const texts = {
    es: {
      title1: "Desarrollo de Software Innovador",

      title2_1: "Impulsamos",
      title2_2: "tu Negocio con Software",
      title2_3: "a la Medida",

      b_schedule: "Agenda una consulta gratuita",
      b_services: "Conoce nuestros servicios",

      inspiringPhrases: [
            "Impulsamos tu negocio",
            "Tecnología para tu crecimiento",
            "Resultados extraordinarios",
      ]
      
    },
    en: {
      title1: "Innovative Software Development",

      title2_1: "We boost",
      title2_2: "your Business with",
      title2_3: "Custom Software",

      b_schedule: "Schedule free consultation",
      b_services: "Learn about our services",

            inspiringPhrases: [
            "We boost your business",
            "Technology for your growth",
            "Extraordinary results",
      ]
    }
  }

  const inspiringPhrasesTyping = texts[currentLanguage].inspiringPhrases;

  // Efecto de typing para frases inspiradoras
  useEffect(() => {
    const phrase = inspiringPhrasesTyping[currentPhraseIndex]
    let index = 0
    let typingInterval: NodeJS.Timeout

    if (isTyping) {
      typingInterval = setInterval(() => {
        setDisplayText(phrase.substring(0, index))
        index++

        if (index > phrase.length) {
          clearInterval(typingInterval)
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            setCurrentPhraseIndex((prev) => (prev + 1) % inspiringPhrasesTyping.length)
            setDisplayText("")
          }, 2000)
        }
      }, 100)
    }

    return () => clearInterval(typingInterval)
  }, [currentPhraseIndex, isTyping])

  // Animación de partículas de código
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const handleResize = () => {
      canvas!.width = container.clientWidth
      canvas!.height = container.clientHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    const ctx = canvas!.getContext("2d")
    if (!ctx) return

    // Crear partículas de código
    const particles: Particle[] = []
    const codeSnippets = [
      "const",
      "let",
      "function",
      "=>",
      "await",
      "async",
      "import",
      "export",
      "return",
      "{}",
      "[]",
      "</>",
      "interface",
      "type",
      "class",
      "extends",
      "implements",
    ]

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      text: string
      color: string
      alpha: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 12 + 8
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]

        const colors = ["#3B82F6", "#8B5CF6", "#6366F1"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = Math.random() * 0.6 + 0.1
      }

      update(mouseX: number, mouseY: number) {
        // Movimiento básico
        this.x += this.speedX
        this.y += this.speedY

        // Rebote en los bordes
        if (this.x > canvas!.width || this.x < 0) this.speedX *= -1
        if (this.y > canvas!.height || this.y < 0) this.speedY *= -1

        // Interacción con el mouse
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          const force = (100 - distance) / 1500
          this.speedX -= Math.cos(angle) * force
          this.speedY -= Math.sin(angle) * force
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.size}px monospace`
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.fillText(this.text, this.x, this.y)
        ctx.globalAlpha = 1
      }
    }

    // Inicializar partículas
    for (let i = 0; i < 40; i++) {
      particles.push(new Particle())
    }

    // Animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update(mousePosition.x, mousePosition.y)
        particle.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // movimiento del mouse xd
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.15] z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-purple-100/30 blur-3xl opacity-50 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-0"></div>

      {/* Canvas para animación de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-1 pointer-events-none" />

      <div className="px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0 w-full">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero content */}
          <div className="inline-flex items-center px-3 py-1 mt-10 mb-10 md:mb-12 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
            <Sparkles className="mr-2 h-4 w-4" />
            {texts[currentLanguage].title1}
          </div>
          <div className="animate-fade-in-up">

            <h1 className={`${orbitron.className} text-4xl md:text-5xl lg:text-7xl font-display font-extrabold mb-8 tracking-wide`}>
              <span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">
                  {texts[currentLanguage].title2_1}
                </span> {texts[currentLanguage].title2_2} </span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">
                {texts[currentLanguage].title2_3}
              </span>
            </h1>

            {/* Efecto de Escritura */}
            <div className="h-12 mb-4">
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-400 font-mono flex justify-center items-center">
                <span className="inline-block w-2 h-5 bg-blue-600 animate-blink mr-1"></span>
                {displayText}
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              
              
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="#contacto"
                className="p-3.5 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-xs hover:bg-primary/90 cursor-pointer"
              >
                <span>{texts[currentLanguage].b_schedule}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#servicios"
                className="p-3.5 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-xs hover:bg-primary/90 cursor-pointer"
              >
                {texts[currentLanguage].b_services}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
