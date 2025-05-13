'use client'
import { Logo } from './Logo'
import { motion } from "framer-motion"
import { FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: <FaLinkedin size={24} />, url: "#" },
    { icon: <FaFacebook size={24} />, url: "#" },
    { icon: <FaEnvelope size={24} />, url: "mailto:contacto@freekcode.com" }
  ]

  const texts = {
    es: {
      phrase: "Transformamos ideas en soluciones digitales excepcionales.",
      rights: "Todos los derechos reservados.",
      policy: "Politica de Privacidad",
      terms: "Términos de Servicios"
    },
    en: {
      phrase: "We transform ideas into exceptional digital solutions.",
      rights: "All rights reserved.",
      policy: "Privacy Policy",
      terms: "Terms of Services"
    }
  }

  return (
    <footer className=" text-gray-800 dark:text-gray-200 py-8 px-10">
      <div className="max-w-8xl mx-auto">
        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo y descripción */}
          <div className="text-center md:text-left order-1 md:order-1">
            <div className="flex justify-center md:justify-start">
              <Logo variant="default" />
            </div>
            <p className="mt-2 text-gray-800 dark:text-gray-200 text-sm">
              {texts[currentLanguage].phrase}
            </p>
          </div>

          {/* Redes sociales - Derecha */}
          <div className="flex space-x-6 order-2 md:order-3">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label={`Red social ${index}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divisor mejorado */}
        <div className="my-8 relative">
          <motion.div
            className="h-px w-full bg-gray-500 dark:bg-gray-700"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-blue-500 rounded-full"
            animate={{
              x: ["-47vw", "47vw", "-47vw"],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Fila inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-800 dark:text-gray-200 text-sm order-2 md:order-1">
          © {currentYear} <span className="text-blue-600 dark:text-blue-500">FreekCode</span>. {texts[currentLanguage].rights}
          </div>

          {/* Enlaces legales */}
          <div className="flex space-x-4 text-sm order-3">
            <a href="/privacidad" className="text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">
              {texts[currentLanguage].policy}
            </a>
            <a href="/terminos" className="text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">
              {texts[currentLanguage].terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer