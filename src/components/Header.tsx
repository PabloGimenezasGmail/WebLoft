'use client'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">AutomateFlow</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-indigo-600 font-medium">Servicios</a>
            <a href="#proceso" className="text-gray-700 hover:text-indigo-600 font-medium">Proceso</a>
            {/*<a href="#n8n" className="text-gray-700 hover:text-indigo-600 font-medium">N8N</a>
            <a href="#testimonios" className="text-gray-700 hover:text-indigo-600 font-medium">Testimonios</a>*/}
            <a href="#contacto" className="text-gray-700 hover:text-indigo-600 font-medium">Contacto</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-gray-900 h-6 w-6" /> : <Menu className="text-gray-900 h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <a href="#servicios" className="text-gray-700 hover:text-indigo-600 font-medium py-2">Servicios</a>
              <a href="#proceso" className="text-gray-700 hover:text-indigo-600 font-medium py-2">Proceso</a>
              {/*<a href="#n8n" className="text-gray-700 hover:text-indigo-600 font-medium py-2">N8N</a>
              <a href="#testimonios" className="text-gray-700 hover:text-indigo-600 font-medium py-2">Testimonios</a>*/}
              <a href="#contacto" className="text-gray-700 hover:text-indigo-600 font-medium py-2">Contacto</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}