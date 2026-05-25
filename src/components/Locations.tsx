import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock, Globe, Navigation } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';

const offices = [
  {
    city: 'San Francisco',
    country: 'USA',
    address: '123 Market Street, Suite 500',
    zipCode: 'CA 94103',
    email: 'sf@freekcode.com',
    phone: '+1 (415) 555-0123',
    hours: 'Mon-Fri: 9AM - 6PM',
    timezone: 'PST (UTC-8)',
    coordinates: { x: 20, y: 45 },
    gradient: 'from-cyan-500 to-blue-500',
    isHQ: true,
    team: 12,
    projects: 45,
  },
  {
    city: 'Madrid',
    country: 'Spain',
    address: 'Paseo de la Castellana 95',
    zipCode: '28046 Madrid',
    email: 'madrid@freekcode.com',
    phone: '+34 910 123 456',
    hours: 'Lun-Vie: 9:00 - 18:00',
    timezone: 'CET (UTC+1)',
    coordinates: { x: 50, y: 35 },
    gradient: 'from-purple-500 to-pink-500',
    isHQ: false,
    team: 8,
    projects: 32,
  },
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    address: 'Av. Corrientes 1234, Piso 8',
    zipCode: 'C1043 CABA',
    email: 'bsas@freekcode.com',
    phone: '+54 11 5555 0123',
    hours: 'Lun-Vie: 9:00 - 18:00',
    timezone: 'ART (UTC-3)',
    coordinates: { x: 35, y: 75 },
    gradient: 'from-emerald-500 to-teal-500',
    isHQ: false,
    team: 10,
    projects: 38,
  },
];

export function Locations() {
  const { ref, isInView } = useInView();
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);
  const [selectedOffice, setSelectedOffice] = useState(0);

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-8">
            <Globe size={16} />
            Presencia Global
          </div>
          <h2 className="mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-300">
              Cerca de ti,
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient mt-2">
              donde sea que estés
            </span>
          </h2>
          <p className="text-2xl text-neutral-300 leading-relaxed">
            Tres continentes, un solo equipo. Cobertura 24/7 para que tu proyecto nunca se detenga.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Interactive World Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative sticky top-24"
          >
            <div className="relative aspect-[4/3] bg-neutral-900/50 border-2 border-neutral-800/50 rounded-3xl overflow-hidden backdrop-blur-sm p-8">
              {/* Map grid */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                {offices.map((office, idx) => {
                  if (idx === 0) return null;
                  return (
                    <motion.line
                      key={idx}
                      x1={`${offices[0].coordinates.x}%`}
                      y1={`${offices[0].coordinates.y}%`}
                      x2={`${office.coordinates.x}%`}
                      y2={`${office.coordinates.y}%`}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: hoveredOffice === idx || selectedOffice === idx ? 0.6 : 0.2 
                      }}
                      transition={{ duration: 2 }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Office pins */}
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  onMouseEnter={() => setHoveredOffice(index)}
                  onMouseLeave={() => setHoveredOffice(null)}
                  onClick={() => setSelectedOffice(index)}
                  style={{
                    position: 'absolute',
                    left: `${office.coordinates.x}%`,
                    top: `${office.coordinates.y}%`,
                  }}
                  className="cursor-pointer group"
                >
                  {/* Pin glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${office.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity`} />
                  
                  {/* Pin */}
                  <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${office.gradient} flex items-center justify-center shadow-2xl ${
                    selectedOffice === index ? 'scale-125' : 'scale-100'
                  } transition-transform`}>
                    <MapPin size={24} className="text-white" />
                    {office.isHQ && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-neutral-900" />
                    )}
                  </div>

                  {/* Pulse animation */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${office.gradient} animate-ping opacity-20`} />

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredOffice === index || selectedOffice === index ? 1 : 0,
                      y: hoveredOffice === index || selectedOffice === index ? 0 : 10
                    }}
                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg whitespace-nowrap shadow-xl"
                  >
                    <div className="text-sm font-bold text-white">{office.city}</div>
                    <div className="text-xs text-neutral-400">{office.country}</div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                {[
                  { label: 'Oficinas', value: '3' },
                  { label: 'Países', value: '3' },
                  { label: 'Timezones', value: '24/7' },
                ].map((stat, idx) => (
                  <div key={idx} className="p-3 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800/50 rounded-xl text-center">
                    <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Office Details */}
          <motion.div
            key={selectedOffice}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Selected office card */}
            <div className="relative group">
              <div className={`absolute -inset-2 bg-gradient-to-r ${offices[selectedOffice].gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`} />
              
              <div className="relative bg-neutral-900/80 border-2 border-neutral-800/50 rounded-3xl p-10 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-400">
                        {offices[selectedOffice].city}
                      </h3>
                      {offices[selectedOffice].isHQ && (
                        <span className={`px-3 py-1 bg-gradient-to-r ${offices[selectedOffice].gradient} text-white text-xs font-bold rounded-full`}>
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="text-neutral-400 text-lg">{offices[selectedOffice].country}</p>
                  </div>
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${offices[selectedOffice].gradient} flex items-center justify-center`}>
                    <MapPin size={32} className="text-white" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-neutral-800/30 rounded-xl">
                    <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${offices[selectedOffice].gradient} mb-1`}>
                      {offices[selectedOffice].team}+
                    </div>
                    <div className="text-sm text-neutral-500">Team members</div>
                  </div>
                  <div className="p-4 bg-neutral-800/30 rounded-xl">
                    <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${offices[selectedOffice].gradient} mb-1`}>
                      {offices[selectedOffice].projects}+
                    </div>
                    <div className="text-sm text-neutral-500">Projects delivered</div>
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-neutral-200">{offices[selectedOffice].address}</p>
                      <p className="text-neutral-500 text-sm">{offices[selectedOffice].zipCode}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-cyan-400 flex-shrink-0" />
                    <a href={`mailto:${offices[selectedOffice].email}`} className="text-neutral-200 hover:text-cyan-400 transition-colors">
                      {offices[selectedOffice].email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-cyan-400 flex-shrink-0" />
                    <a href={`tel:${offices[selectedOffice].phone}`} className="text-neutral-200 hover:text-cyan-400 transition-colors">
                      {offices[selectedOffice].phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-neutral-200">{offices[selectedOffice].hours}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-neutral-200">{offices[selectedOffice].timezone}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className={`w-full py-4 px-6 bg-gradient-to-r ${offices[selectedOffice].gradient} text-white font-bold rounded-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2`}>
                  <Navigation size={20} />
                  Cómo llegar
                </button>
              </div>
            </div>

            {/* Office selector pills */}
            <div className="flex gap-3">
              {offices.map((office, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOffice(index)}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                    selectedOffice === index 
                      ? 'border-transparent bg-gradient-to-r from-neutral-800 to-neutral-900' 
                      : 'border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className={`text-lg font-bold mb-1 ${
                    selectedOffice === index 
                      ? `text-transparent bg-clip-text bg-gradient-to-r ${office.gradient}` 
                      : 'text-neutral-400'
                  }`}>
                    {office.city}
                  </div>
                  <div className="text-xs text-neutral-600">{office.country}</div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Remote work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-neutral-800/50 rounded-3xl p-12 backdrop-blur-sm text-center">
            <Globe size={64} className="mx-auto mb-6 text-cyan-400" />
            <h3 className="text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              ¿Trabajas remoto?
            </h3>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              El 70% de nuestros proyectos son 100% remotos. No importa dónde estés, colaboramos contigo como si estuviéramos en la misma oficina.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl text-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:scale-105 transition-all">
              Comencemos a trabajar juntos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
