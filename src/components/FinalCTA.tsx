import { motion } from 'motion/react';
import { ArrowRight, Mail, Calendar, MessageSquare, Sparkles, Rocket, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Respuesta < 24h',
    action: 'hola@freekcode.com',
    gradient: 'from-cyan-500 to-blue-500',
    stat: '24h',
  },
  {
    icon: Calendar,
    title: 'Llamada',
    description: '30 min gratis',
    action: 'Agendar ahora',
    gradient: 'from-purple-500 to-pink-500',
    stat: '30min',
  },
  {
    icon: MessageSquare,
    title: 'Chat',
    description: 'Respuesta inmediata',
    action: 'Iniciar chat',
    gradient: 'from-emerald-500 to-teal-500',
    stat: 'Live',
  },
];

const benefits = [
  { icon: Rocket, text: 'Propuesta en 48h' },
  { icon: Zap, text: 'Sin compromisos' },
  { icon: Sparkles, text: 'Consultoría gratis' },
];

export function FinalCTA() {
  const { ref, isInView } = useInView();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setName('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contacto" className="py-32 lg:py-40 bg-neutral-900 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[150px] animate-pulse" />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-8"
            >
              <Sparkles size={16} className="animate-pulse" />
              <span>Comienza tu proyecto hoy</span>
            </motion.div>

            <h2 className="mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-300">
                Convierte tu visión en
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient mt-3">
                un producto digital exitoso
              </span>
            </h2>

            <p className="text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Hablemos de tu proyecto. Sin presión, sin compromisos. Solo una conversación honesta sobre cómo podemos ayudarte.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700/50 rounded-xl"
                >
                  {(() => {
                    const Icon = benefit.icon;
                    return <Icon size={16} className="text-cyan-400" />;
                  })()}
                  <span className="text-neutral-300 text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Left - Contact methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Elige cómo prefieres contactarnos</h3>
              
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`} />
                  
                  <button className="relative w-full p-6 bg-neutral-950/50 border-2 border-neutral-800/50 rounded-2xl hover:border-transparent transition-all text-left">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {(() => {
                          const Icon = method.icon;
                          return <Icon size={28} className="text-white" />;
                        })()}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                            {method.title}
                          </h4>
                          <span className={`px-3 py-1 bg-gradient-to-r ${method.gradient} text-white text-xs font-bold rounded-full`}>
                            {method.stat}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-400 mb-2">{method.description}</p>
                        <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${method.gradient}`}>
                          {method.action}
                        </p>
                      </div>

                      <ArrowRight size={24} className="text-neutral-600 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all" />
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Right - Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20" />
              
              <div className="relative bg-neutral-950/80 border-2 border-neutral-800/50 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  O escríbenos directamente
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 bg-neutral-900 border-2 border-neutral-800 rounded-xl text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      required
                      className="w-full px-5 py-4 bg-neutral-900 border-2 border-neutral-800 rounded-xl text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Necesito desarrollar una plataforma web para..."
                      required
                      rows={4}
                      className="w-full px-5 py-4 bg-neutral-900 border-2 border-neutral-800 rounded-xl text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="group relative w-full py-5 px-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                      {submitted ? (
                        '¡Mensaje enviado! 🎉'
                      ) : (
                        <>
                          Enviar mensaje
                          <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>

                  <p className="text-xs text-neutral-500 text-center">
                    Al enviar, aceptas que te contactemos sobre tu proyecto. No spam, lo prometemos.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap justify-center gap-8 px-8 py-6 bg-neutral-800/30 border border-neutral-700/50 rounded-2xl backdrop-blur-sm">
              {[
                { label: 'Respuesta', value: '< 24h' },
                { label: 'Primera llamada', value: 'Gratis' },
                { label: 'Propuesta', value: 'En 48h' },
                { label: 'NDA disponible', value: 'Si lo necesitas' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-neutral-500">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
