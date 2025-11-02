'use client'
import { Globe, Calendar, Bot, Database, Mail, Megaphone } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Landing Pages Optimizadas",
      description: "Creación de páginas de aterrizaje que convierten visitantes en clientes. Diseño responsive y optimizado para conversión.",
      features: ["Diseño responsive", "Optimización SEO", "Formularios integrados", "Análisis de conversión"]
    },
    {
      icon: Megaphone,
      title: "Campañas de Marketing",
      description: "Automatización de campañas de marketing multicanal para maximizar el alcance y optimizar la conversión.",
      features: ["Marketing automation", "Análisis de audiencia", "Campañas personalizadas", "ROI tracking"]
    },
    {
      icon: Calendar,
      title: "Sincronización de Calendarios",
      description: "Integración automática entre calendarios, CRM y herramientas de gestión para una coordinación perfecta.",
      features: ["Google Calendar", "Outlook integration", "CRM sync", "Notificaciones automáticas"]
    },
    {
      icon: Database,
      title: "Gestión de Datos",
      description: "Automatización de la recopilación, procesamiento y sincronización de datos entre diferentes plataformas.",
      features: ["Import/Export automático", "Limpieza de datos", "Sincronización CRM", "Reportes automáticos"]
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      description: "Campañas de email automatizadas basadas en comportamiento del usuario y triggers personalizados.",
      features: ["Secuencias automáticas", "Segmentación", "A/B testing", "Métricas detalladas"]
    },
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description: "Implementación de chatbots para atención al cliente 24/7 y generación de leads automatizada.",
      features: ["Respuestas inteligentes", "Integración WhatsApp", "Lead qualification", "Soporte multicanal"]
    }
  ]

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios de Automatización
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas para automatizar y optimizar los procesos de tu negocio con N8N, MCP y otras herramientas líderes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <IconComponent className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}