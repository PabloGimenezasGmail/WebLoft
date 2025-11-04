export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://web-loft.vercel.app/#organization",
        "name": "AutomateFlow",
        "alternateName": "AutomateFlow - Automatización de Procesos",
        "url": "https://web-loft.vercel.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://web-loft.vercel.app/favicon.ico",
          "width": "512",
          "height": "512"
        },
        "image": "https://web-loft.vercel.app/favicon.ico",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34-600-24-31-22",
          "contactType": "customer service",
          "email": "mgarciasospedra@gmail.com",
          "availableLanguage": ["Spanish"]
        },
        "sameAs": [
          "https://linkedin.com/company/automateflow",
          "https://twitter.com/automateflow"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://web-loft.vercel.app/#website",
        "url": "https://web-loft.vercel.app/",
        "name": "AutomateFlow - Automatización de Procesos Empresariales",
        "alternateName": "AutomateFlow",
        "description": "Especialistas en automatización de procesos para autónomos y PYMES",
        "publisher": {
          "@id": "https://web-loft.vercel.app/#organization"
        },
        "inLanguage": "es-ES"
      },
      {
        "@type": "WebPage",
        "@id": "https://web-loft.vercel.app/#webpage",
        "url": "https://web-loft.vercel.app/",
        "name": "AutomateFlow | Automatización de Procesos Empresariales",
        "isPartOf": {
          "@id": "https://web-loft.vercel.app/#website"
        },
        "about": {
          "@id": "https://web-loft.vercel.app/#organization"
        },
        "description": "Especialistas en automatización de procesos para autónomos y PYMES. Creamos landing pages, automatizamos campañas de marketing y optimizamos flujos de trabajo.",
        "inLanguage": "es-ES"
      },
      {
        "@type": "Service",
        "serviceType": "Business Process Automation",
        "provider": {
          "@id": "https://web-loft.vercel.app/#organization"
        },
        "name": "Automatización de Procesos Empresariales",
        "description": "Servicios de automatización de procesos empresariales incluyendo landing pages, marketing automation, sincronización de calendarios y chatbots inteligentes",
        "areaServed": "Spain",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Automatización",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Pages Optimizadas",
                "description": "Creación de páginas de aterrizaje que convierten visitantes en clientes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Campañas de Marketing Automatizadas",
                "description": "Automatización de campañas de marketing multicanal para maximizar conversiones"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sincronización de Calendarios",
                "description": "Integración automática entre calendarios, CRM y herramientas de gestión"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Email Marketing Automation",
                "description": "Campañas de email automatizadas basadas en comportamiento del usuario"
              }
            }
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://web-loft.vercel.app/#localbusiness",
        "name": "AutomateFlow",
        "image": "https://web-loft.vercel.app/favicon.ico",
        "telephone": "+34-600-24-31-22",
        "email": "mgarciasospedra@gmail.com",
        "url": "https://web-loft.vercel.app/",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ES",
          "addressLocality": "España"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.4168",
          "longitude": "-3.7038"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "€€"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}