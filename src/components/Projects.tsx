import { motion } from 'motion/react';
import { ArrowUpRight, Play, TrendingUp, Users, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const projects = [
  {
    title: 'FinTech Dashboard',
    subtitle: 'Análisis financiero en tiempo real',
    category: 'Aplicación Web',
    client: 'InvestPro',
    year: '2024',
    description: 'Plataforma completa de gestión de inversiones procesando $50M+ diarios. Sistema de alertas en tiempo real, análisis predictivo con ML y visualización de datos avanzada.',
    image: 'https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcwODM0NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: [
      { icon: Users, label: 'Usuarios activos', value: '50K+' },
      { icon: Zap, label: 'Mejora performance', value: '40%' },
      { icon: TrendingUp, label: 'Aumento conversión', value: '2.3x' },
    ],
    results: ['99.9% uptime garantizado', 'Procesamiento sub-segundo', 'SOC 2 Type II compliant'],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSockets'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'HealthTech Platform',
    subtitle: 'Telemedicina del futuro',
    category: 'App Móvil + Web',
    client: 'MediConnect',
    year: '2024',
    description: 'Sistema completo de telemedicina con video HD, historiales médicos cifrados, recetas digitales y AI para triaje inicial. HIPAA compliant desde día uno.',
    image: 'https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwODYxODgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: [
      { icon: Users, label: 'Descargas', value: '100K+' },
      { icon: TrendingUp, label: 'Rating App Store', value: '4.8★' },
      { icon: Zap, label: 'Consultas/día', value: '2K+' },
    ],
    results: ['Certificación HIPAA', 'Latencia < 100ms video', '24/7 uptime médico'],
    tech: ['React Native', 'Node.js', 'AWS', 'WebRTC', 'MongoDB'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'E-Commerce B2B',
    subtitle: 'Marketplace inteligente',
    category: 'Plataforma',
    client: 'SupplyChain Pro',
    year: '2023',
    description: 'Marketplace B2B con inventario en tiempo real, predicción de demanda con ML, automatización de órdenes y analytics avanzados para vendedores.',
    image: 'https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDg4MjA5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: [
      { icon: TrendingUp, label: 'GMV mensual', value: '$2M+' },
      { icon: Zap, label: 'Tiempo de carga', value: '<1.5s' },
      { icon: Users, label: 'Tráfico móvil', value: '85%' },
    ],
    results: ['3000+ transacciones/día', 'Checkout en 47 segundos', '96% satisfacción'],
    tech: ['React', 'GraphQL', 'Kubernetes', 'Stripe', 'Algolia'],
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export function Projects() {
  const { ref, isInView } = useInView();
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="proyectos" className="py-32 lg:py-40 bg-neutral-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-8">
                <Play size={14} className="fill-purple-400" />
                Casos de Éxito
              </div>
              <h2 className="mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-300">
                  De startups que levantaron
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient mt-2">
                  millones a Fortune 500
                </span>
              </h2>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Cada proyecto es una prueba de que la excelencia técnica genera resultados reales de negocio.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-colors">
                Ver todos
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all">
                Empezar proyecto
              </button>
            </div>
          </div>
        </motion.div>

        {/* Featured project - Large showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative group">
            <div className={`absolute -inset-2 bg-gradient-to-r ${projects[activeProject].gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`} />
            
            <div className="relative bg-neutral-950 border-2 border-neutral-800/50 rounded-3xl overflow-hidden group-hover:border-transparent transition-all">
              <div className="grid lg:grid-cols-2">
                {/* Left - Image */}
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                  <ImageWithFallback
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/50 to-transparent" />
                  
                  {/* Floating play button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${projects[activeProject].gradient} flex items-center justify-center shadow-2xl`}>
                      <Play size={36} className="fill-white text-white ml-1" />
                    </div>
                  </motion.div>

                  {/* Year badge */}
                  <div className="absolute top-8 left-8 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-lg border border-white/10">
                    <span className="text-white font-bold">{projects[activeProject].year}</span>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="p-12 flex flex-col justify-between">
                  <div>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${projects[activeProject].gradient} text-white text-sm font-bold rounded-full mb-6`}>
                      {projects[activeProject].category}
                    </div>
                    
                    <h3 className="text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400">
                      {projects[activeProject].title}
                    </h3>
                    
                    <p className="text-2xl text-cyan-400 mb-4 font-semibold">
                      {projects[activeProject].subtitle}
                    </p>

                    <div className="flex items-center gap-4 mb-8 text-neutral-400">
                      <span>Cliente: {projects[activeProject].client}</span>
                      <span>•</span>
                      <span>{projects[activeProject].year}</span>
                    </div>

                    <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                      {projects[activeProject].description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {projects[activeProject].stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-4 bg-neutral-900/50 rounded-xl border border-neutral-800/50">
                          <stat.icon size={24} className={`mx-auto mb-2 text-transparent bg-clip-text bg-gradient-to-r ${projects[activeProject].gradient}`} />
                          <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${projects[activeProject].gradient} mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-neutral-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-3 mb-8">
                      {projects[activeProject].results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${projects[activeProject].gradient}`} />
                          <span className="text-neutral-300 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {projects[activeProject].tech.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-neutral-800/50 text-neutral-300 rounded-lg text-sm font-medium border border-neutral-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className={`w-full py-5 px-6 bg-gradient-to-r ${projects[activeProject].gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-lg`}>
                    Ver caso completo
                    <ArrowUpRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project selector */}
        <div className="flex flex-col md:flex-row gap-6">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onClick={() => setActiveProject(index)}
              className={`flex-1 group relative p-6 bg-neutral-950/50 border-2 rounded-2xl transition-all text-left ${
                activeProject === index 
                  ? 'border-transparent' 
                  : 'border-neutral-800/50 hover:border-neutral-700'
              }`}
            >
              {activeProject === index && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-30`} />
              )}
              <div className="relative">
                <div className={`text-sm font-bold mb-2 ${activeProject === index ? `text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}` : 'text-neutral-500'}`}>
                  0{index + 1}
                </div>
                <h4 className={`font-bold mb-1 ${activeProject === index ? 'text-white' : 'text-neutral-400'}`}>
                  {project.title}
                </h4>
                <p className="text-sm text-neutral-500">{project.client}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
