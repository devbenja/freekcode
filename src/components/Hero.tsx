import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap, Sparkles, Code2, Rocket, TrendingUp, Play } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -150]);
  
  const opacity = useTransform(scrollY, [0, 1000], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingCodeSnippets = useMemo(() =>
    ['</>','{}','[]','()','fn()','const'].map((symbol, i) => ({
      symbol,
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      delay: i * 0.5,
      duration: 5 + Math.random() * 3,
    })),
  []);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Code2, label: 'Clean Code', gradient: 'from-cyan-500 to-blue-500' },
    { icon: Zap, label: 'Ultra Fast', gradient: 'from-yellow-500 to-orange-500' },
    { icon: TrendingUp, label: 'Scalable', gradient: 'from-emerald-500 to-teal-500' },
    { icon: Rocket, label: 'Launch Ready', gradient: 'from-purple-500 to-pink-500' },  
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      
      {/* Dynamic orbs with parallax */}
      <motion.div
        style={{ x: mousePosition.x, y: mousePosition.y }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ x: -mousePosition.x, y: -mousePosition.y }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ x: mousePosition.x * 0.5, y: -mousePosition.y * 0.5 }}
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px]"
      />
      
      {/* Animated grid with perspective */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      {/* Floating code snippets */}
      {floatingCodeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400/10 font-mono text-sm"
          initial={{
            x: snippet.x,
            y: snippet.y,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: snippet.duration,
            repeat: Infinity,
            delay: snippet.delay,
          }}
        >
          {snippet.symbol}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div style={{ opacity, scale }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Left side - Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-8 backdrop-blur-sm">
                  <Sparkles size={18} className="animate-pulse" />
                  <span className="font-semibold">Transformamos ideas en productos digitales exitosos</span>
                  <Zap size={18} className="text-yellow-400" />
                </div>

                <h1 className="mb-6 md:mb-8">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-200">
                    Software que
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient mt-2 md:mt-3">
                    impulsa negocios
                  </span>
                </h1>

                <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed max-w-xl">
                  Desarrollo de aplicaciones web y móviles con{' '}
                  <span className="text-cyan-400 font-semibold">performance extremo</span>,{' '}
                  <span className="text-purple-400 font-semibold">SEO optimizado</span> y{' '}
                  <span className="text-pink-400 font-semibold">código enterprise</span>.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="group relative"
                    >
                      <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity`} />
                      <div className="relative flex items-center gap-2 px-4 py-2.5 bg-neutral-900/80 border border-neutral-800/50 rounded-xl backdrop-blur-sm group-hover:border-transparent transition-all">
                        {(() => {
                          const Icon = feature.icon;
                          return <Icon size={18} className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`} />;
                        })()}
                        <span className="text-sm font-semibold text-neutral-300">{feature.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <button
                    onClick={scrollToContact}
                    className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                      Iniciar proyecto
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  
                  <button
                    onClick={() => {
                      const element = document.getElementById('proyectos');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group px-10 py-5 border-2 border-neutral-700 text-neutral-200 font-bold rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-lg"
                  >
                    <Play size={20} className="group-hover:scale-110 transition-transform" />
                    Ver showcase
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - 3D Stats Cards */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Main card - large */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                
                <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800/50 rounded-3xl p-10 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

                  <div className="relative z-10 space-y-8">
                    {/* Stat 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-3">
                        <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                          {'<2s'}
                        </div>
                        <div className="sm:pb-3">
                          <div className="text-xl md:text-2xl font-bold text-neutral-200">Carga promedio</div>
                          <div className="text-xs md:text-sm text-neutral-500">3x más rápido que la competencia</div>
                        </div>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '95%' }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        />
                      </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

                    {/* Stat 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-3">
                        <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                          100+
                        </div>
                        <div className="sm:pb-3">
                          <div className="text-xl md:text-2xl font-bold text-neutral-200">Proyectos exitosos</div>
                          <div className="text-xs md:text-sm text-neutral-500">Desde startups a Fortune 500</div>
                        </div>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                      </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

                    {/* Stat 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-3">
                        <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                          98%
                        </div>
                        <div className="sm:pb-3">
                          <div className="text-xl md:text-2xl font-bold text-neutral-200">Satisfacción</div>
                          <div className="text-xs md:text-sm text-neutral-500">Clientes que regresan</div>
                        </div>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '98%' }}
                          transition={{ duration: 1.5, delay: 1.2 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating mini cards - Hidden on mobile to avoid overflow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                style={{ y: y1 }}
                className="absolute -left-6 md:-left-12 top-1/4 w-32 md:w-48 p-4 md:p-6 bg-neutral-900/90 border border-neutral-800/50 rounded-2xl backdrop-blur-sm shadow-2xl hidden sm:block"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Zap size={16} className="text-white md:hidden" />
                    <Zap size={20} className="text-white hidden md:block" />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-black text-yellow-400">24/7</div>
                  </div>
                </div>
                <div className="text-[10px] md:text-xs text-neutral-400">Soporte global</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ duration: 0.7, delay: 1.4 }}
                style={{ y: y1 }}
                className="absolute -right-6 md:-right-12 bottom-1/4 w-32 md:w-48 p-4 md:p-6 bg-neutral-900/90 border border-neutral-800/50 rounded-2xl backdrop-blur-sm shadow-2xl hidden sm:block"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Rocket size={16} className="text-white md:hidden" />
                    <Rocket size={20} className="text-white hidden md:block" />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-black text-emerald-400">8-10</div>
                  </div>
                </div>
                <div className="text-[10px] md:text-xs text-neutral-400">Semanas MVP</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-500 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}