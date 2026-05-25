import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Smartphone, Workflow, TrendingUp, Cloud, Shield } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web escalables con React, Next.js y tecnologías modernas. Performance y SEO garantizados.',
    keywords: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-cyan-500 to-blue-500',
    size: 'large',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Experiencias nativas y multiplataforma que los usuarios aman.',
    keywords: ['React Native', 'iOS', 'Android'],
    gradient: 'from-purple-500 to-pink-500',
    size: 'medium',
  },
  {
    icon: Workflow,
    title: 'Automatización',
    description: 'Workflows inteligentes que ahorran tiempo y dinero.',
    keywords: ['APIs', 'CI/CD', 'DevOps'],
    gradient: 'from-emerald-500 to-teal-500',
    size: 'small',
  },
  {
    icon: TrendingUp,
    title: 'Consultoría',
    description: 'Estrategia tecnológica para escalar tu negocio.',
    keywords: ['Architecture', 'Strategy'],
    gradient: 'from-orange-500 to-red-500',
    size: 'medium',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infraestructura',
    description: 'Arquitecturas cloud seguras, escalables y optimizadas.',
    keywords: ['AWS', 'Kubernetes', 'Terraform'],
    gradient: 'from-blue-500 to-indigo-500',
    size: 'large',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Auditorías y optimización de seguridad.',
    keywords: ['Pentest', 'Monitoring'],
    gradient: 'from-violet-500 to-purple-500',
    size: 'small',
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  // Use global scroll — no target needed, eliminates the non-static position warning
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;

  return (
    <section
      id="servicios"
      className="py-32 lg:py-40 bg-neutral-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Servicios Premium
          </div>
          <h2 className="mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 via-cyan-300 to-neutral-50 animate-gradient">
              Todo lo que necesitas
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient mt-2">
              para dominar el mercado
            </span>
          </h2>
          <p className="text-2xl text-neutral-300 leading-relaxed">
            Desde el concepto hasta el deployment. Construimos productos digitales que generan impacto real.
          </p>
        </motion.div>

        {/* Bento grid layout - asimétrico y dinámico */}
        <div className="grid grid-cols-12 gap-8">
          {/* Large card 1 - spans top left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ y: isMobile ? 0 : y1 }}
            className="col-span-12 lg:col-span-7 row-span-2 group relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-br ${services[0].gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
            <div className="relative h-full min-h-[500px] p-10 bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border-2 border-neutral-800/50 rounded-3xl backdrop-blur-sm overflow-hidden group-hover:border-transparent transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${services[0].gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              {/* Floating number */}
              <div className="absolute top-4 right-4 text-7xl md:text-[150px] font-black text-neutral-800/30 leading-none select-none">01</div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-gradient-to-br ${services[0].gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    {(() => {
                      const Icon = services[0].icon;
                      return <Icon size={32} className="text-white md:hidden" />;
                    })()}
                    {(() => {
                      const Icon = services[0].icon;
                      return <Icon size={40} className="text-white hidden md:block" />;
                    })()}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400">
                    {services[0].title}
                  </h3>
                  <p className="text-lg md:text-xl text-neutral-400 mb-6 md:mb-8 max-w-md leading-relaxed">
                    {services[0].description}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-3">
                    {services[0].keywords.map((keyword, idx) => (
                      <span key={idx} className="px-4 py-2 bg-neutral-800/50 text-neutral-300 rounded-xl border border-neutral-700/50 text-sm font-medium">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium card 1 - top right */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 lg:col-span-5 group relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-br ${services[1].gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
            <div className="relative h-full min-h-[240px] p-8 bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border-2 border-neutral-800/50 rounded-3xl backdrop-blur-sm overflow-hidden group-hover:border-transparent transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${services[1].gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="absolute top-4 right-4 text-6xl md:text-8xl font-black text-neutral-800/30 leading-none select-none">02</div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${services[1].gradient} flex items-center justify-center transform group-hover:rotate-12 transition-transform`}>
                  {(() => {
                    const Icon = services[1].icon;
                    return <Icon size={28} className="text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-black mb-3">{services[1].title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{services[1].description}</p>
                <div className="flex gap-2">
                  {services[1].keywords.slice(0, 2).map((keyword, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-800/50 text-neutral-400 rounded-lg text-xs">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small card 1 (Automatización) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 group relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-br ${services[2].gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
            <div className="relative h-full min-h-[200px] p-8 bg-neutral-900/50 border border-neutral-800/50 rounded-2xl backdrop-blur-sm group-hover:border-transparent transition-all overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl font-black text-neutral-800/30 leading-none select-none">03</div>
              <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${services[2].gradient} flex items-center justify-center`}>
                {(() => {
                  const Icon = services[2].icon;
                  return <Icon size={20} className="text-white" />;
                })()}
              </div>
              <h3 className="text-xl font-bold mb-2">{services[2].title}</h3>
              <p className="text-neutral-400 text-sm">{services[2].description}</p>
            </div>
          </motion.div>

          {/* Large card 2 - bottom section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ y: isMobile ? 0 : y2 }}
            className="col-span-12 lg:col-span-7 row-span-2 group relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-br ${services[4].gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
            <div className="relative h-full min-h-[500px] p-10 bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border-2 border-neutral-800/50 rounded-3xl backdrop-blur-sm overflow-hidden group-hover:border-transparent transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${services[4].gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="absolute top-4 right-4 text-7xl md:text-[150px] font-black text-neutral-800/30 leading-none select-none">05</div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-gradient-to-br ${services[4].gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-transform`}>
                    {(() => {
                      const Icon = services[4].icon;
                      return <Icon size={32} className="text-white md:hidden" />;
                    })()}
                    {(() => {
                      const Icon = services[4].icon;
                      return <Icon size={40} className="text-white hidden md:block" />;
                    })()}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400">
                    {services[4].title}
                  </h3>
                  <p className="text-lg md:text-xl text-neutral-400 mb-6 md:mb-8 max-w-md leading-relaxed">
                    {services[4].description}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-3">
                    {services[4].keywords.map((keyword, idx) => (
                      <span key={idx} className="px-4 py-2 bg-neutral-800/50 text-neutral-300 rounded-xl border border-neutral-700/50 text-sm font-medium">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="col-span-12 lg:col-span-5 group relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-br ${services[3].gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
            <div className="relative h-full min-h-[240px] p-8 bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border-2 border-neutral-800/50 rounded-3xl backdrop-blur-sm overflow-hidden group-hover:border-transparent transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${services[3].gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="absolute top-4 right-4 text-6xl md:text-8xl font-black text-neutral-800/30 leading-none select-none">04</div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${services[3].gradient} flex items-center justify-center transform group-hover:-rotate-12 transition-transform`}>
                  {(() => {
                    const Icon = services[3].icon;
                    return <Icon size={28} className="text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-black mb-3">{services[3].title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{services[3].description}</p>
                <div className="flex gap-2">
                  {services[3].keywords.map((keyword, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-800/50 text-neutral-400 rounded-lg text-xs">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="col-span-12 lg:col-span-5 group relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-br ${services[5].gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
            <div className="relative h-full min-h-[200px] p-8 bg-neutral-900/50 border border-neutral-800/50 rounded-2xl backdrop-blur-sm group-hover:border-transparent transition-all overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl font-black text-neutral-800/30 leading-none select-none">06</div>
              <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${services[5].gradient} flex items-center justify-center`}>
                {(() => {
                  const Icon = services[5].icon;
                  return <Icon size={20} className="text-white" />;
                })()}
              </div>
              <h3 className="text-xl font-bold mb-2">{services[5].title}</h3>
              <p className="text-neutral-400 text-sm">{services[5].description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
