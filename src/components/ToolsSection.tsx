'use client'
import { Share2 } from 'lucide-react'

export function ToolsSection() {
  const toolsRow1 = [
    { name: 'N8N', logo: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4', category: 'Automatización' },
    { name: 'Google Drive', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg', category: 'Almacenamiento' },
    { name: 'Google Calendar', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg', category: 'Productividad' },
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg', category: 'CRM' },
    { name: 'Gmail', logo: 'https://cdn.worldvectorlogo.com/logos/gmail-icon-1.svg', category: 'Email' },
    { name: 'Outlook', logo: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/microsoft-outlook.svg', category: 'Email' },
    { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg', category: 'Comunicación' },
    { name: 'Microsoft Teams', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg', category: 'Comunicación' },
    { name: 'WhatsApp', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', category: 'Mensajería' },
    { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', category: 'Gestión' },
    { name: 'Airtable', logo: 'https://cdn.worldvectorlogo.com/logos/airtable-1.svg', category: 'Base de Datos' }
  ]

  const toolsRow2 = [
    { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg', category: 'E-commerce' },
    { name: 'WooCommerce', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg', category: 'E-commerce' },
    { name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg', category: 'Pagos' },
    { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg', category: 'Pagos' },
    { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', category: 'CRM' },
    { name: 'Mailchimp', logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg', category: 'Marketing' },
    { name: 'Telegram', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg', category: 'Mensajería' },
    { name: 'Trello', logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg', category: 'Gestión' },
    { name: 'Asana', logo: 'https://cdn.worldvectorlogo.com/logos/asana-logo.svg', category: 'Gestión' },
    { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', category: 'Automatización' },
    { name: 'Make', logo: 'https://cdn.simpleicons.org/make/6D00CC', category: 'Automatización' }
  ]

  // Duplicamos las herramientas para el efecto de loop infinito
  const duplicatedRow1 = [...toolsRow1, ...toolsRow1, ...toolsRow1]
  const duplicatedRow2 = [...toolsRow2, ...toolsRow2, ...toolsRow2]

  return (
    <section id="herramientas" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Herramientas con las que Trabajamos
          </h2>
          <p className="text-lg text-gray-600">
            Integramos las plataformas más populares del mercado
          </p>
        </div>
      </div>

      {/* Carrusel infinito - Primera fila */}
      <div className="relative mb-6">
        <div className="flex gap-4 animate-scroll">
          {duplicatedRow1.map((tool, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 w-40 group"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 flex items-center justify-center p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{tool.name}</h3>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carrusel infinito - Segunda fila (dirección inversa) */}
      <div className="relative">
        <div className="flex gap-4 animate-scroll-reverse">
          {duplicatedRow2.map((tool, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 w-40 group"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 flex items-center justify-center p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{tool.name}</h3>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <button 
          onClick={() => {
            const contactSection = document.getElementById('contacto')
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
        >
          Consultar Integración
          <Share2 className="ml-2 h-5 w-5" />
        </button>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scrollReverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll-reverse {
          animation: scrollReverse 30s linear infinite;
        }
        
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
