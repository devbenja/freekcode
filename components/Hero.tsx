import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid opacity-[0.15] z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-purple-100/30 blur-3xl opacity-50 z-0"></div>
  
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-72 h-72 bg-freek-blue/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-freek-purple/10 rounded-full blur-3xl z-0"></div>
  
        <div className="px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            {/* Hero content */}
            <div className="flex-1 text-center lg:text-left animate-fade-in-left">
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-freek-blue bg-blue-100 rounded-full">
                Desarrollo de Software Innovador
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                <span>Impulsamos tu negocio con</span>{' '}
                <span className="text-gradient">software a medida</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Transformamos ideas en soluciones tecnológicas que impulsan el crecimiento de tu empresa y mejoran la experiencia de tus usuarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contacto" className="btn-secondary flex items-center justify-center border">
                  <span>Agenda una consulta gratuita</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#servicios" className="btn-secondary">
                  Conoce nuestros servicios
                </a>
              </div>
            </div>
  
            {/* Hero image */}
            <div className="flex-1 animate-fade-in-right hidden lg:block">
              <div className="relative">
  
                <div className="p-6 relative animate-float">
                  <div className="relative aspect-[4/3]">
                    {/* Code elements */}
                    <div className="absolute top-10 left-10 glass-card px-4 py-2 text-xs font-mono text-gray-800">
                      <span className="text-blue-500">const</span> solution = <span className="text-purple-500">await</span> freekCode.develop(yourIdea);
                    </div>
                    <div className="absolute bottom-10 right-10 glass-card px-4 py-2 text-xs font-mono text-gray-800">
                      <span className="text-green-500">// Código de calidad que impulsa tu negocio</span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-card px-6 py-3 text-sm font-medium text-freek-blue">
                      FreekCode Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}