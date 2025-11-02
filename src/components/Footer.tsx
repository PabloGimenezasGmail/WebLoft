'use client'
import { Zap, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold">AutomateFlow</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas en automatización de procesos empresariales. 
              Ayudamos a autónomos y PYMES a optimizar su tiempo, automatizar flujos de trabajo 
              y aumentar su productividad mediante soluciones personalizadas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios de Automatización</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicios" className="hover:text-white transition-colors">Landing Pages Optimizadas</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Campañas Automatizadas de Marketing</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Sincronización de Calendarios</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Gestión Automática de Datos</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Email Marketing Automation</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Chatbots Inteligentes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>mgarciasospedra@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+34 600 24 31 22</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AutomateFlow. Todos los derechos reservados. | Automatización de Procesos Empresariales
            </p>
            {/*<div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  )
}