"use client"
//
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Badge } from "./ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { Orbitron } from 'next/font/google'
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['600'],
})

// Datos de ejemplo de proyectos - puedes reemplazarlos con tus propios proyectos



export default function Portfolio() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const { currentLanguage } = useLanguage();

  const texts = {
    es: {
      maintitle1: "Nuestros",
      maintitle2: "Projectos",
      subtitle: "Una colección de proyectos que he desarrollado, mostrando mis habilidades y experiencia.",
      b_code: "Código",

      projects: [
        {
          id: 1,
          title: "Aplicación de Comercio Electrónico",
          description: "Una aplicación de comercio electrónico completa con carrito de compras y pasarela de pagos.",
          image: "/assets/ecommerce_app.png",
          technologies: ["React", "Node.js", "MongoDB"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: false
        },
        {
          id: 2,
          title: "Dashboard Analyticooss",
          description: "Panel de control para visualización de datos con gráficos interactivos y reportes en tiempo real.",
          image: "/assets/analytics.jpg",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: true
        },
        {
          id: 3,
          title: "App de Gestión de Tareas",
          description: "Aplicación para gestionar tareas con funcionalidades de arrastrar y soltar, etiquetas y recordatorios.",
          image: "/assets/gestion.jpg",
          technologies: ["Vue.js", "Firebase", "Vuetify"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: true
        },
        {
          id: 4,
          title: "Plataforma Educativa",
          description: "Plataforma para cursos en línea con sistema de gestión de contenido y seguimiento de progreso.",
          image: "/assets/educativo.jpg",
          technologies: ["React", "Express", "PostgreSQL"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: true
        },
        {
          id: 5,
          title: "Aplicación de Clima",
          description: "Aplicación que muestra el pronóstico del tiempo en tiempo real con datos de múltiples fuentes.",
          image: "/assets/clima.jpg",
          technologies: ["React Native", "Redux", "API REST"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: false
        },
        {
          id: 6,
          title: "Red Social",
          description: "Plataforma de red social con perfiles, mensajería y compartición de contenido.",
          image: "/assets/network.jpg",
          technologies: ["Angular", "Firebase", "Material UI"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: true
        },
      ]
    },
    en: {
      maintitle1: "Our", 
      maintitle2: "Projects",
      subtitle: "A collection of projects I have developed, showing my skills and experience.",
      b_code: "Code",

      projects: [
        {
          id: 1,
          title: "E-commerce App",
          description: "A complete e-commerce application with shopping cart and payment gateway.",
          image: "/assets/ecommerce_app.png",
          technologies: ["React", "Node.js", "MongoDB"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: false
        },
        {
          id: 2,
          title: "Tablero de Análisis",
          description: "Control panel for data visualization with interactive graphics and real time reports.",
          image: "/assets/analytics.jpg",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: true
        },
        {
          id: 3,
          title: "App Task Management",
          description: "Task management application with drag-and-drop functionality, labels and reminders.",
          image: "/assets/gestion.jpg",
          technologies: ["Vue.js", "Firebase", "Vuetify"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: true
        },
        {
          id: 4,
          title: "Learning Platform",
          description: "Platform for online courses with content management system and progress tracking.",
          image: "/assets/educativo.jpg",
          technologies: ["React", "Express", "PostgreSQL"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: true
        },
        {
          id: 5,
          title: "Weather App",
          description: "Application that displays real-time weather forecast with data from multiple sources.",
          image: "/assets/clima.jpg",
          technologies: ["React Native", "Redux", "API REST"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: false
        },
        {
          id: 6,
          title: "Red Social",
          description: "Social networking platform with profiles, messaging and content sharing.",
          image: "/assets/network.jpg",
          technologies: ["Angular", "Firebase", "Material UI"],
          demoUrl: "https://example.com/demo",
          githubUrl: "https://github.com/username/project",
          b_github: true
        },        
      ]
    }
  }
  const projects = texts[currentLanguage].projects

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Calcular el número de grupos (cada grupo tiene 2 proyectos)
  const groupCount = Math.ceil(projects.length / 2)

  return (
    <section id="porfolio" className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${orbitron.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-6`}
        >
          {texts[currentLanguage].maintitle1}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 bg-[size:200%_200%] animate-gradient">
            {texts[currentLanguage].maintitle2}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-800 dark:text-gray-400 max-w-3xl mx-auto"
        >
          {texts[currentLanguage].subtitle}
        </motion.p>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4 rounded-[10px]">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
              <Card className="h-full flex flex-col dark:bg-gray-800">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/assets/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="rounded-lg  flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  {project.b_github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {texts[currentLanguage].b_code}
                    </a>
                  </Button>                    
                  )}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="relative static" />
          <CarouselNext className="relative static" />
        </div>
      </Carousel>

      {/* Indicador visual sin números */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: groupCount }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                current === index * 2 || current === index * 2 + 1
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted hover:bg-primary/50",
              )}
              onClick={() => api?.scrollTo(index * 2)}
              aria-label={`Ir al grupo de proyectos ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
