import { motion, useScroll, useTransform } from 'motion/react';
import { Search, Lightbulb, Code, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Descubrimiento',
    subtitle: 'Research & Strategy',
    description: 'Entendemos tu negocio, objetivos y desafíos técnicos. Definimos KPIs y estrategia.',
    tasks: ['Análisis de mercado', 'Definición de objetivos', 'Research competencia', 'Roadmap técnico'],
    gradient: 'from-cyan-500 to-blue-500',
    duration: '1-2 semanas',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Diseño & Arquitectura',
    subtitle: 'UX/UI & Tech Stack',
    description: 'Creamos prototipos, diseñamos la arquitectura y planificamos sprints con prioridades claras.',
    tasks: ['Wireframes & prototipos', 'Diseño de UI', 'Arquitectura técnica', 'Sprint planning'],
    gradient: 'from-purple-500 to-pink-500',
    duration: '2-3 semanas',
  },
  {
    icon: Code,
    number: '03',
    title: 'Desarrollo Iterativo',
    subtitle: 'Build & Test',
    description: 'Desarrollo ágil con entregas semanales, testing continuo y feedback constante.',
    tasks: ['Desarrollo por sprints', 'Testing automatizado', 'Code reviews', 'Deploy staging'],
    gradient: 'from-emerald-500 to-teal-500',
    duration: '6-12 semanas',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deploy & Optimización',
    subtitle: 'Launch & Scale',
    description: 'Lanzamiento optimizado, monitoreo continuo y mejoras basadas en datos reales.',
    tasks: ['Deploy producción', 'Monitoreo 24/7', 'A/B testing', 'Optimización continua'],
    gradient: 'from-orange-500 to-red-500',
    duration: 'Ongoing',
  },
];

export function Process() {
  const { ref, isInView } = useInView();
  const [activeStep, setActiveStep] = useState(0);

  // Use global scroll — no target needed, eliminates the non-static position warning
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i: number) => (
      <div className={`w-2 h-2 rounded-full transition-all mt-8 ${i === activeStep ? 'bg-cyan-400 w-6' : 'bg-neutral-700'}`} />
    ),
    beforeChange: (_: number, next: number) => setActiveStep(next),
  };

  return (
    <section
      id="proceso"
      className="py-32 lg:py-40 bg-neutral-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] animate-pulse" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <h2 className="mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-300">
              De la idea al lanzamiento
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 animate-gradient mt-2">
              en tiempo récord
            </span>
          </h2>
          <p className="text-2xl text-neutral-300 leading-relaxed">
            Metodología probada que combina agilidad con calidad. Entregas predecibles, sin sorpresas.
          </p>
        </motion.div>

        {/* Layout Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-neutral-800">
              <motion.div
                style={{ scaleY: pathLength }}
                className="w-full h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 origin-top"
              />
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`relative flex items-start gap-8 cursor-pointer group ${
                    activeStep === index ? 'scale-105' : 'scale-100'
                  } transition-transform`}
                >
                  {/* Icon circle */}
                  <div className="relative z-10">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} p-[3px] ${
                      activeStep === index ? 'shadow-[0_0_40px_rgba(34,211,238,0.4)]' : ''
                    } transition-all`}>
                      <div className={`w-full h-full ${
                        activeStep === index ? 'bg-transparent' : 'bg-neutral-950'
                      } rounded-2xl flex items-center justify-center transition-all`}>
                        {(() => {
                          const Icon = step.icon;
                          return <Icon size={36} className={activeStep === index ? 'text-white' : 'text-cyan-400'} />;
                        })()}
                      </div>
                    </div>
                    {/* Number badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-2xl font-bold ${
                        activeStep === index 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400' 
                          : 'text-neutral-200'
                      } transition-all`}>
                        {step.title}
                      </h3>
                      <div className={`px-3 py-1 bg-neutral-800/50 rounded-full text-xs font-medium ${
                        activeStep === index ? 'text-cyan-400' : 'text-neutral-500'
                      }`}>
                        {step.duration}
                      </div>
                    </div>
                    <p className="text-sm text-cyan-400 font-semibold mb-2">{step.subtitle}</p>
                    <p className="text-neutral-400 text-sm mb-4">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Active step detail card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-24"
          >
            <div className="relative group">
              <div className={`absolute -inset-2 bg-gradient-to-br ${steps[activeStep].gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`} />
              
              <div className="relative bg-neutral-900 border-2 border-neutral-800/50 rounded-3xl p-10 backdrop-blur-sm overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].gradient} opacity-5`} />
                
                {/* Huge number background */}
                <div className="absolute -top-10 -right-10 text-[280px] font-black text-neutral-800/20 leading-none select-none">
                  {steps[activeStep].number}
                </div>

                <div className="relative z-10">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${steps[activeStep].gradient} text-white text-sm font-bold rounded-full mb-6`}>
                    Fase {steps[activeStep].number}
                  </div>

                  <h3 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400">
                    {steps[activeStep].title}
                  </h3>

                  <p className={`text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${steps[activeStep].gradient}`}>
                    {steps[activeStep].subtitle}
                  </p>

                  <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                    {steps[activeStep].description}
                  </p>

                  {/* Detailed tasks */}
                  <div className="space-y-4 mb-8">
                    <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">
                      Entregables clave
                    </div>
                    {steps[activeStep].tasks.map((task, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-neutral-800/30 rounded-xl border border-neutral-800/50"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${steps[activeStep].gradient} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 size={20} className="text-white" />
                        </div>
                        <span className="text-neutral-200 font-medium">{task}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Duration badge */}
                  <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Duración estimada</div>
                      <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${steps[activeStep].gradient}`}>
                        {steps[activeStep].duration}
                      </div>
                    </div>
                    <button className={`px-6 py-3 bg-gradient-to-r ${steps[activeStep].gradient} text-white font-bold rounded-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2`}>
                      Ver detalles
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Layout Mobile Slider */}
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {steps.map((step, index) => (
              <div key={index} className="px-2 outline-none">
                <div className="relative bg-neutral-900 border-2 border-neutral-800/50 rounded-3xl p-6 md:p-10 backdrop-blur-sm overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5`} />
                  
                  <div className="absolute -top-5 -right-5 text-7xl font-black text-neutral-800/20 leading-none select-none">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${step.gradient} text-white text-[10px] font-bold rounded-full mb-4`}>
                      Fase {step.number}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                        <step.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400 leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    <p className={`text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                      {step.subtitle}
                    </p>

                    <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {step.tasks.slice(0, 3).map((task, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-800/50">
                          <CheckCircle2 size={16} className="text-cyan-400" />
                          <span className="text-xs text-neutral-300">{task}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-neutral-800">
                      <div className="text-[10px] text-neutral-500 mb-1">Duración</div>
                      <div className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            { label: 'Tiempo promedio MVP', value: '8-10 semanas', gradient: 'from-cyan-500 to-blue-500' },
            { label: 'Entregas por sprint', value: '1-2 features', gradient: 'from-purple-500 to-pink-500' },
            { label: 'Precisión en estimaciones', value: '±10%', gradient: 'from-emerald-500 to-teal-500' },
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`} />
              <div className="relative p-6 md:p-8 bg-neutral-900/80 border border-neutral-800/50 rounded-2xl backdrop-blur-sm text-center">
                <div className={`text-3xl md:text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                  {stat.value}
                </div>
                <div className="text-neutral-400 text-xs md:text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
