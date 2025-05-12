'use client';
import { FiCode, FiCpu, FiSmartphone, FiSearch, FiTool, FiLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

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
          title: "Aplicaciones React/Next.js",
          description: "Desarrollo de aplicaciones modernas y rápidas con las últimas tecnologías del ecosistema JavaScript.",
          icon: <FiCpu className="text-3xl" />
        },
        {
          title: "Diseño Responsivo",
          description: "Garantizamos que tu web se vea perfecta en todos los dispositivos, desde móviles hasta desktop.",
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
          title: "Integración de APIs",
          description: "Conectamos tu sitio web con otros servicios y plataformas para ampliar su funcionalidad.",
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
          icon: <FiLink className="text-3xl" />
        }
      ]
    }
  }

  const services = texts[currentLanguage].services


  /*const services = [
    {
      title: "Desarrollo Web a Medida",
      description: "Creación de sitios web personalizados adaptados a las necesidades específicas de tu negocio.",
      icon: <FiCode className="text-3xl" />
    },
    {
      title: "Aplicaciones React/Next.js",
      description: "Desarrollo de aplicaciones modernas y rápidas con las últimas tecnologías del ecosistema JavaScript.",
      icon: <FiCpu className="text-3xl" />
    },
    {
      title: "Diseño Responsivo",
      description: "Garantizamos que tu web se vea perfecta en todos los dispositivos, desde móviles hasta desktop.",
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
      title: "Integración de APIs",
      description: "Conectamos tu sitio web con otros servicios y plataformas para ampliar su funcionalidad.",
      icon: <FiLink className="text-3xl" />
    }
  ];*/

  return (
    <section id="servicios" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            {texts[currentLanguage].title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300"
          >
            {texts[currentLanguage].sub_title}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-[11px] h-full">
              <div className="text-blue-500 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;