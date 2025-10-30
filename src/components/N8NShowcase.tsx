'use client'
import { Code, Zap, Link, BarChart3 } from 'lucide-react'

export function N8NShowcase() {
  return (
    <section id="n8n" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elijo <span className="text-red-400">N8N</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            N8N es la plataforma de automatización más potente y flexible del mercado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Open Source y Flexible</h3>
                <p className="text-gray-300">
                  N8N es completamente personalizable y no tienes límites en las integraciones. 
                  Libertad total para adaptar cualquier workflow a tus necesidades.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Link className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">800+ Integraciones</h3>
                <p className="text-gray-300">
                  Conecta cualquier herramienta: Google Workspace, Microsoft 365, Slack, 
                  WhatsApp, CRM, bases de datos y mucho más.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sin Límites de Ejecución</h3>
                <p className="text-gray-300">
                  A diferencia de Zapier o Make, con N8N no hay límites en las ejecuciones. 
                  Tus automatizaciones corren 24/7 sin restricciones.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Análisis Detallado</h3>
                <p className="text-gray-300">
                  Monitoreo completo de todos los workflows con logs detallados, 
                  métricas de rendimiento y alertas personalizadas.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Casos de Uso Populares</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2">E-commerce</h4>
                <p className="text-sm text-gray-300">
                  Sincronización automática de inventario, procesamiento de pedidos, 
                  emails de seguimiento y análisis de ventas.
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Servicios Profesionales</h4>
                <p className="text-sm text-gray-300">
                  Gestión de citas, facturación automática, seguimiento de clientes 
                  y reportes de productividad.
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">Marketing Digital</h4>
                <p className="text-sm text-gray-300">
                  Campañas automáticas, lead scoring, social media posting 
                  y análisis de métricas en tiempo real.
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">Gestión de Datos</h4>
                <p className="text-sm text-gray-300">
                  ETL automático, backup de datos, sincronización entre sistemas 
                  y generación de reportes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">¿Quieres ver N8N en acción?</h3>
            <p className="text-lg mb-6 opacity-90">
              Te muestro cómo N8N puede revolucionar tu negocio con una demo personalizada
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}