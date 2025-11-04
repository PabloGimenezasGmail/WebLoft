'use client'
import { Search, Lightbulb, Cog, Rocket } from 'lucide-react'

export function ProcessSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const steps = [
    {
      icon: Search,
      title: "Análisis",
      description: "Evaluamos tus procesos actuales e identificamos oportunidades de automatización",
      details: ["Auditoría de procesos", "Identificación de cuellos de botella", "Análisis de herramientas actuales"]
    },
    {
      icon: Lightbulb,
      title: "Estrategia",
      description: "Diseñamos una estrategia personalizada de automatización",
      details: ["Plan de automatización", "Selección de herramientas", "Cronograma de implementación"]
    },
    {
      icon: Cog,
      title: "Implementación",
      description: "Configuramos y desarrollamos las automatizaciones paso a paso",
      details: ["Configuración de herramientas", "Implementación", "Testing exhaustivo"]
    },
    {
      icon: Rocket,
      title: "Optimización",
      description: "Monitoreamos y optimizamos continuamente para máximo rendimiento",
      details: ["Monitoreo continuo", "Ajustes y mejoras", "Soporte técnico"]
    }
  ]

  return (
    <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proceso de Trabajo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un enfoque sistemático para transformar tu negocio con automatización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="text-center mb-4 flex-grow">
                    <div className="text-sm font-semibold text-indigo-600 mb-2">PASO {index + 1}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <ul className="space-y-2 mt-auto">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-indigo-300"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para automatizar?</h3>
            <p className="text-gray-600 mb-6">
              Cada proyecto es único. Programemos una consulta gratuita para evaluar cómo 
              la automatización puede transformar tu negocio.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}