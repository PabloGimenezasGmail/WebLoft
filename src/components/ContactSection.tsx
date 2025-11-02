'use client'
import { useState } from 'react'
import { Mail, Phone, Calendar, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { submitToGoogleSheets } from '@/utils/googleSheets'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const MAX_MESSAGE_LENGTH = 1000

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Validar que los campos no sean solo espacios en blanco
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phone.trim(),
      company: formData.company.trim(),
      message: formData.message.trim()
    }

    // Verificar campos obligatorios
    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }
    
    try {
      const result = await submitToGoogleSheets(trimmedData)
      
      if (result.success) {
        setSubmitStatus('success')
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Limitar caracteres en el campo mensaje
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) {
      return
    }
    
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const remainingChars = MAX_MESSAGE_LENGTH - formData.message.length
  const charCountColor = remainingChars < 100 ? 'text-red-600' : remainingChars < 200 ? 'text-orange-600' : 'text-gray-500'

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hablemos sobre cómo puedo ayudarte a optimizar tus procesos y hacer crecer tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">mgarciasospedra@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+34 600 24 31 22</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Disponibilidad</h4>
                    <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Consulta Gratuita</h3>
              <p className="mb-6 opacity-90">
                Agenda una llamada de 30 minutos para evaluar cómo la automatización 
                puede transformar tu negocio. ¡Completamente gratis!
              </p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Agendar Llamada
              </button>
            </div> */}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  placeholder="+34 600 123 456"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa (Opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Cuéntame sobre tu proyecto
                  </label>
                  <span className={`text-sm ${charCountColor} font-medium`}>
                    {formData.message.length}/{MAX_MESSAGE_LENGTH}
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  placeholder="Describe qué procesos te gustaría automatizar..."
                  required
                ></textarea>
                {remainingChars < 100 && (
                  <p className="text-sm text-orange-600 mt-1">
                    {remainingChars === 0 ? 'Has alcanzado el límite de caracteres' : `Quedan ${remainingChars} caracteres`}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </button>
              
              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div className="flex items-center justify-center text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  ¡Mensaje enviado correctamente! Te contactaré pronto.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center justify-center text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Error al enviar el mensaje. Por favor, completa todos los campos correctamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}