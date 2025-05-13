'use client'
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Orbitron } from "next/font/google"
import { FiCode, FiCpu, FiSmartphone, FiSearch, FiTool, FiLink, FiBarChart2, FiZap } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
})

interface Service {
  title: string
  description: string
  icon: React.ReactNode
  details?: string[]
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl opacity-80"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.1 : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="p-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl h-full shadow-lg"
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="bg-white dark:bg-gray-800 p-8 rounded-[10px] h-full flex flex-col">
          <div className="text-blue-600 dark:text-blue-400 mb-5 flex items-center justify-center w-14 h-14 bg-blue-50 dark:bg-gray-700 rounded-lg">
            {service.icon}
          </div>

          <h3 className={`${orbitron.className} text-xl font-bold mb-3 text-gray-800 dark:text-white`}>
            {service.title}
          </h3>

          <p className="text-gray-800 dark:text-gray-300 mb-3">{service.description}</p>
          
          {service.details && (
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-400">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

const ServicesSection = () => {
  
    const { currentLanguage } = useLanguage();
  
    const texts = {
        es: {
          title: "Nuestros Servicios",
          sub_title: "Soluciones tecnológicas diseñadas para impulsar tu presencia en línea y hacer crecer tu negocio.",

          services: [
            {
              title: "Desarrollo Web a Medida",
              description: "Creación de sitios web personalizados adaptados a las necesidades específicas de tu negocio.",
              icon: <FiCode className="text-3xl" />
            },
            {
              title: "Automatización de Procesos",
              description: "Implementamos soluciones de RPA para automatizar tareas repetitivas y procesos empresariales mediante bots software, reduciendo costos operativos y eliminando errores humanos.",
              icon: <FiZap className="text-3xl" />
            },
            {
              title: "Aplicaciones Móviles",
              description: "Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android que ofrecen experiencias excepcionales a tus usuarios y potencian tu presencia en dispositivos móviles.",
              icon: <FiSmartphone className="text-3xl" />
            },
            {
              title: "Optimización SEO",
              description: "Mejoramos la visibilidad de tu sitio en los motores de búsqueda para atraer más clientes.",
              icon: <FiSearch className="text-3xl" />
            },
            {
              title: "Mantenimiento Web",
              description: "Servicios continuos para mantener tu sitio actualizado, seguro y funcionando sin problemas.",
              icon: <FiTool className="text-3xl" />
            },
            {
              title: "Marketing Digital",
              description: "Implementamos estrategias integrales de marketing digital que incluyen redes sociales, email marketing, publicidad online y análisis de datos para impulsar tu crecimiento.",
              icon: <FiLink className="text-3xl" />
            }
          ]
        },
        en: {
          title: "Our Services",
          sub_title: "Technology solutions designed to boost your online presence and grow your business.",

          services: [
            {
              title: "Custom Web Development",
              description: "Creation of customized websites adapted to the specific needs of your business.",
              icon: <FiCode className="text-3xl" />
            },
            {
              title: "Apps React/Next.js",
              description: "Development of modern and fast applications with the latest technologies of the JavaScript ecosystem.",
              icon: <FiCpu className="text-3xl" />
            },
            {
              title: "Responsive Design",
              description: "We guarantee that your website looks perfect on all devices, from mobile to desktop.",
              icon: <FiSmartphone className="text-3xl" />
            },
            {
              title: "SEO Optimization",
              description: " We improve your site's visibility in search engines to attract more customers.",
              icon: <FiSearch className="text-3xl" />
            },
            {
              title: "Web Maintenance",
              description: "Ongoing services to keep your site up to date, secure and running smoothly.",
              icon: <FiTool className="text-3xl" />
            },
            {
              title: "APIs Integration",
              description: "We connect your website with other services and platforms to extend its functionality.",
              icon: <FiBarChart2 className="text-3xl" />
            }
          ]
        }
  
      const services = texts[currentLanguage].services
    

  return (
    <section id="servicios" className="py-24 relative overflow-hidden px-10">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-[size:40px_40px] bg-[image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] opacity-[0.15] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${orbitron.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-6`}
          >
            {texts[currentLanguage].title}

            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 bg-[size:200%_200%] animate-gradient">
              Servicios
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-800 dark:text-gray-400 max-w-3xl mx-auto"
          >         
            {texts[currentLanguage].sub_title}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
