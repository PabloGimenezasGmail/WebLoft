'use client'
import { Share2 } from 'lucide-react'

export function ToolsSection() {
  const tools = [
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
    { name: 'Airtable', logo: 'https://cdn.worldvectorlogo.com/logos/airtable-1.svg', category: 'Base de Datos' },
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

  return (
    <section id="herramientas" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Herramientas con las que Trabajamos
          </h2>
          <p className="text-lg text-gray-600">
            Integramos las plataformas más populares del mercado
          </p>
        </div>

        {/* Contenedor central con imagen y órbitas */}
        <div className="relative flex items-center justify-center min-h-[600px] mb-12">
          {/* Imagen central del móvil */}
          <div className="relative z-10">
            <img 
              src="/images/ShowCase.png"
              alt="WhatsApp Automation"
              className="w-64 md:w-80 h-auto drop-shadow-2xl"
            />
          </div>

          {/* Iconos orbitando */}
          <div className="absolute inset-0 flex items-center justify-center">
            {tools.map((tool, index) => {
              const angle = (index * 360) / tools.length
              const radius = 280 // Radio de la órbita
              
              return (
                <div
                  key={tool.name}
                  className="absolute animate-orbit"
                  style={{
                    animationDelay: `${-index * (20 / tools.length)}s`,
                    '--angle': `${angle}deg`,
                    '--radius': `${radius}px`
                  } as React.CSSProperties}
                >
                  <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-16 h-16 flex items-center justify-center group">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-10 h-10 object-contain"
                      title={tool.name}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contacto')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
          >
            Consultar Integración
            <Share2 className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(var(--radius)) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg);
          }
        }
        
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-orbit {
            --radius: 180px !important;
          }
        }
      `}</style>
    </section>
  )
}
