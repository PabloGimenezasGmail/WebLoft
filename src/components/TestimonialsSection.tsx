'use client'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      company: "Estudio Jurídico González",
      role: "Abogada y Fundadora",
      content: "Gracias a las automatizaciones con N8N, ahora mi estudio funciona de forma mucho más eficiente. Los clientes reciben respuestas automáticas, las citas se programan solas y tengo más tiempo para lo importante.",
      rating: 5,
      savings: "15 horas/semana"
    },
    {
      name: "Carlos Ruiz",
      company: "TechSolutions",
      role: "CEO",
      content: "La integración de nuestro CRM con el sistema de facturación ha sido un game-changer. Los reportes se generan automáticamente y nuestro equipo puede enfocarse en vender en lugar de tareas administrativas.",
      rating: 5,
      savings: "40% reducción errores"
    },
    {
      name: "Ana Martín",
      company: "Boutique Online",
      role: "E-commerce Manager",
      content: "Desde que implementamos la automatización del inventario y emails de marketing, nuestras ventas aumentaron un 60%. Todo funciona solo, incluso mientras duermo.",
      rating: 5,
      savings: "60% aumento ventas"
    },
    {
      name: "Roberto Silva",
      company: "Consultoría RS",
      role: "Consultor Independiente",
      content: "Las automatizaciones me permiten manejar 3 veces más clientes con el mismo tiempo. Los calendarios sincronizados y los follow-ups automáticos son increíbles.",
      rating: 5,
      savings: "3x más clientes"
    }
  ]

  return (
    <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reales de negocios que han transformado sus procesos con automatización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-indigo-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-medium text-indigo-600">{testimonial.company}</p>
                </div>
                
                <div className="text-right">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.savings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
            <div className="text-gray-600">Proyectos Completados</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Horas Ahorradas</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfacción Cliente</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
            <div className="text-gray-600">Soporte Técnico</div>
          </div>
        </div>
      </div>
    </section>
  )
}