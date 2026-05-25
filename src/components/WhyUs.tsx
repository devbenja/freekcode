import { motion, useScroll, useTransform } from 'motion/react';
import { Gauge, Rocket, Shield, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function WhyUs() {
  const { ref, isInView } = useInView();

  // Use global scroll — no target needed, eliminates the non-static position warning
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      className="py-32 lg:py-40 bg-neutral-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-purple-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <h2 className="mb-8 px-4">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-300">
              No somos una agencia más
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient mt-2">
              Somos tu ventaja competitiva
            </span>
          </h2>
          <p className="text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Mientras otros prometen, nosotros entregamos. Resultados medibles, código impecable, deadlines respetados.
          </p>
        </motion.div>

        {/* Split layout - texto a la izquierda, visual a la derecha */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left side - stats with visual impact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Circular rotating decoration */}
            <motion.div
              style={{ rotate, scale }}
              className="absolute -top-20 -left-20 w-64 h-64 opacity-20"
            >
              <div className="w-full h-full border-2 border-dashed border-cyan-500/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-dashed border-purple-500/30 rounded-full" />
            </motion.div>

            <div className="relative space-y-8">
              {/* Big stat 1 */}
              <div className="group">
                <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4">
                  <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    2s
                  </div>
                  <div className="pb-2 md:pb-4">
                    <div className="text-xl md:text-2xl font-bold">Tiempo de carga</div>
                    <div className="text-neutral-400 text-sm md:text-base">Promedio en producción</div>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '95%' } : {}}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </div>
              </div>

              {/* Big stat 2 */}
              <div className="group">
                <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4">
                  <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    98%
                  </div>
                  <div className="pb-2 md:pb-4">
                    <div className="text-xl md:text-2xl font-bold">Satisfacción</div>
                    <div className="text-neutral-400 text-sm md:text-base">Clientes que regresan</div>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '98%' } : {}}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              </div>

              {/* Big stat 3 */}
              <div className="group">
                <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4">
                  <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                    3.5x
                  </div>
                  <div className="pb-2 md:pb-4">
                    <div className="text-xl md:text-2xl font-bold">ROI promedio</div>
                    <div className="text-neutral-400 text-sm md:text-base">Retorno en 12 meses</div>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '85%' } : {}}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - key differentiators stacked */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              {
                icon: Gauge,
                title: 'Velocidad que vende',
                description: 'Cada 100ms de delay cuesta un 1% de conversión. Nuestras apps cargan 3x más rápido que el promedio de la industria.',
                gradient: 'from-cyan-500 to-blue-500',
              },
              {
                icon: Shield,
                title: 'Seguridad empresarial',
                description: 'Auditorías de seguridad, penetration testing y compliance con estándares internacionales. Tu datos están seguros.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: Rocket,
                title: 'Escalabilidad probada',
                description: 'De 100 a 1M de usuarios sin reescribir código. Arquitecturas que crecen con tu negocio.',
                gradient: 'from-emerald-500 to-teal-500',
              },
              {
                icon: Award,
                title: 'Equipo senior',
                description: '100% developers senior con +8 años de experiencia. Cero juniors experimentando con tu proyecto.',
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-6 bg-neutral-900/80 border border-neutral-800/50 rounded-2xl backdrop-blur-sm group-hover:border-transparent transition-all">
                  <div className="flex gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                        {item.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom testimonial banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20" />
          <div className="relative p-12 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800/50 rounded-3xl backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 text-[200px] font-black text-neutral-800/20 leading-none select-none">"</div>
            <div className="relative z-10 max-w-4xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500" />
                ))}
              </div>
              <p className="text-3xl font-bold mb-6 leading-relaxed">
                "FreekCode transformó completamente nuestra plataforma. De 8 segundos a menos de 2. Las conversiones aumentaron 142% en el primer mes."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500" />
                <div>
                  <div className="font-bold text-lg">Sarah Chen</div>
                  <div className="text-neutral-400">CTO @ TechCorp (YC S21)</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
