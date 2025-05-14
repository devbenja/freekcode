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

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['600'],
})

// Datos de ejemplo de proyectos - puedes reemplazarlos con tus propios proyectos
const projects = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Una aplicación de comercio electrónico completa con carrito de compras y pasarela de pagos.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Panel de control para visualización de datos con gráficos interactivos y reportes en tiempo real.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 3,
    title: "App de Gestión de Tareas",
    description:
      "Aplicación para gestionar tareas con funcionalidades de arrastrar y soltar, etiquetas y recordatorios.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 4,
    title: "Plataforma Educativa",
    description: "Plataforma para cursos en línea con sistema de gestión de contenido y seguimiento de progreso.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Express", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 5,
    title: "Aplicación de Clima",
    description: "Aplicación que muestra el pronóstico del tiempo en tiempo real con datos de múltiples fuentes.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React Native", "Redux", "API REST"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 6,
    title: "Red Social",
    description: "Plataforma de red social con perfiles, mensajería y compartición de contenido.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Angular", "Firebase", "Material UI"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/project",
  },
]

export default function Portfolio() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

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
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className={`${orbitron.className} text-3xl font-bold tracking-tight mb-2`}>Mi Portafolio</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Una colección de proyectos que he desarrollado, mostrando mis habilidades y experiencia.
        </p>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
              <Card className="h-full flex flex-col">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
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
