'use client'
import { Sparkles, Target, Heart, Zap } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Sobre Nosotros
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transformamos la Tecnología en tu Mejor Aliado
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700">
              <p className="leading-relaxed">
                Creemos firmemente que la <span className="font-semibold text-blue-600">revolución tecnológica no se está aprovechando lo suficiente</span>. 
                Cada día vemos cómo autónomos y PYMES pierden horas valiosas en tareas repetitivas que podrían automatizarse.
              </p>
              
              <p className="leading-relaxed">
                Es por eso que nuestra misión es clara: <span className="font-semibold text-purple-600">ayudar a empresas como la tuya a aumentar su productividad</span> de 
                forma exponencial. Con la IA y las automatizaciones actuales, todo es posible.
              </p>
              
              <p className="leading-relaxed">
                Queremos que te dediques a lo que realmente importa: <span className="font-semibold">hacer crecer tu negocio</span>. Mientras tanto, 
                las nuevas tecnologías trabajan para ti, gestionando tareas repetitivas, redactando emails, 
                respondiendo WhatsApps, organizando datos... lo que necesites.
              </p>
            </div>

            {/* Tarjeta de presentación */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    M
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Monica García
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    Especialista en Automatización de Procesos
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Con años de experiencia transformando negocios a través de la automatización inteligente, 
                    mi objetivo es hacer que la tecnología trabaje para ti, no al revés. Cada proceso que automatizamos 
                    es un paso más hacia la libertad de enfocarte en lo que realmente amas hacer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjetas de valores */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Democratizar el acceso a la automatización y la IA para que cualquier negocio, 
                sin importar su tamaño, pueda competir en igualdad de condiciones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovación Constante
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nos mantenemos a la vanguardia de las últimas tecnologías de IA y automatización 
                para ofrecerte siempre las mejores soluciones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Compromiso Total
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tu éxito es nuestro éxito. Trabajamos contigo hasta asegurarnos de que cada 
                automatización funciona perfectamente.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Resultados Reales
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No vendemos promesas. Entregamos automatizaciones que realmente ahorran tiempo 
                y aumentan la productividad desde el primer día.
              </p>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        {/*<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <p className="text-gray-600 font-medium">Procesos Automatizados</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-gray-600 font-medium">Clientes Satisfechos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <p className="text-gray-600 font-medium">Horas Ahorradas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-gray-600 font-medium">Soporte Continuo</p>
          </div>
        </div>*/}
      </div>
    </section>
  )
}
