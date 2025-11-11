'use client'
import { TrendingUp, CheckCircle } from 'lucide-react'

export function CaseStudiesSection() {
  const cases = [
    {
      title: 'Clínica estética',
      problem: 'Los leads llegaban desde campañas de Meta y Google, pero no se registraban bien en el CRM y el equipo tardaba horas en contactar.',
      solution: 'Conecté los formularios de anuncios con el CRM mediante Make. Cada lead se clasifica automáticamente por campaña y tratamiento, y recibe un mensaje de WhatsApp y email automático. El equipo ve todo en un panel en tiempo real.',
      result: 'Tiempo de contacto reducido a 45 min, conversión +35 % y 100 % de trazabilidad de leads.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Empresa automoción',
      problem: 'No sabían qué campañas generaban ventas reales ni podían seguir el recorrido de cada lead.',
      solution: 'Diseñé un formulario inteligente que filtra leads según interés y presupuesto. El sistema pre-cualifica por WhatsApp, guarda la información en el CRM y la conecta a un dashboard en Power BI para calcular el ROAS.',
      result: '40 % menos leads no cualificados, +27 % de cierres y visibilidad total de CAC y rentabilidad por modelo.',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Empresa de alimentación canina',
      problem: 'La empresa solo analizaba leads y CPL, sin saber cuántos se convertían en ventas reales.',
      solution: 'Conecté las plataformas publicitarias (Google y Meta) con el CRM mediante Make. Cada lead registra su fuente exacta de campaña y se actualiza con el estado del cliente (cita, venta, importe). En Looker Studio se genera un dashboard con métricas reales: CAC, ROI y LTV por canal y campaña.',
      result: 'Redirección del presupuesto a campañas con mayor rentabilidad. Mejora del 22 % en ROI y visibilidad total del embudo desde el anuncio hasta la venta.',
      gradient: 'from-blue-600 to-purple-600'
    }
  ]

  return (
    <section id="casos-exito" className="py-20 px-4 bg-gradient-to-br from-white via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatización de marketing y CRM
          </p>
        </div>

        {/* Grid de casos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Header con gradiente */}
              <div className={`bg-gradient-to-r ${caseStudy.gradient} p-6 text-white min-h-[100px] flex items-center`}>
                <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                {/* Problema */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Problema:
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                {/* Solución */}
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    Solución:
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Resultado */}
                <div className="rounded-lg p-4 mt-auto min-h-[140px] flex flex-col justify-center border-2 border-indigo-600">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-indigo-600" />
                    Resultado:
                  </h4>
                  <p className="text-gray-900 text-sm font-semibold leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Quieres resultados como estos en tu negocio?
          </h3>
          <p className="text-gray-600 mb-6">
            Cada automatización está diseñada específicamente para resolver los desafíos únicos de tu negocio. 
            Agenda una consulta gratuita y descubre cómo podemos transformar tus procesos.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contacto')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Agenda tu Consulta Gratuita
          </button>
        </div>
      </div>
    </section>
  )
}
