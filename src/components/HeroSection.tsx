'use client'
import { ArrowRight, Bot, Calendar, Globe } from 'lucide-react'

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Automatiza y gana tiempo</span>
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Enfócate en lo importante</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Especialistas en automatización de procesos para autónomos, pequeñas y medianas empresas.
          </p>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Optimiza tu tiempo y aumenta tu productividad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              Comenzar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            {/* Para un futuro
             <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Ver casos de éxito
            </button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-float">
              <Globe className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-gray-900 text-xl font-semibold mb-2">Landing Pages</h3>
              <p className="text-gray-600 text-center">Creación y optimización de páginas de aterrizaje que convierten</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-float" style={{animationDelay: '2s'}}>
              <Calendar className="h-12 w-12 text-cyan-600 mb-4" />
              <h3 className="text-gray-900 text-xl font-semibold mb-2">Sincronización</h3>
              <p className="text-gray-600 text-center">Calendarios, CRM y herramientas sincronizadas automáticamente</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-float" style={{animationDelay: '4s'}}>
              <Bot className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-gray-900 text-xl font-semibold mb-2">Automatización</h3>
              <p className="text-gray-600 text-center">Workflows inteligentes que trabajan 24/7 por ti</p>
              <p className="text-gray-600 text-center">Respuestas de WhatsApp automatizadas, captación de leads y más</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}