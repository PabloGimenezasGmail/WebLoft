import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { StructuredData } from '@/components/StructuredData'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Variables de configuración SEO
const SITE_NAME = 'AutomateFlow'
const SITE_URL = 'https://web-loft.vercel.app/'
const SITE_TITLE = 'AutomateFlow | Automatización de Procesos Empresariales'
const SITE_DESCRIPTION = 'Especialistas en automatización de procesos para autónomos y PYMES. Creamos landing pages, automatizamos campañas de marketing, sincronizamos calendarios y optimizamos flujos de trabajo con N8N. Consulta gratuita disponible.'
//const SITE_IMAGE = '/images/AutomateFlow_Logo.png'
const SITE_ICON = '/favicon.ico'
const GOOGLE_VERIFICATION = '2VwQna6pMQle1PbLfO2Zo_TFBWmgVcpJkQjfoYNZ9AQ'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: SITE_ICON,
    shortcut: SITE_ICON,
    apple: SITE_ICON,
  },
  keywords: [
    'Automate Flow',
    'AutomateFlow',
    'automatización de negocios',
    'automatización de procesos empresariales',
    'automatización para PYMES',
    'automatización para autónomos',
    'automatización de procesos empresariales',
    'automatización de procesos para autónomos',
    'N8N',
    'automatización de procesos',
    'N8N automatización',
    'landing pages optimizadas', 
    'marketing automation',
    'sincronización calendarios',
    'CRM automatización',
    'email marketing automation',
    'chatbots inteligentes',
    'pequeñas empresas',
    'autónomos',
    'PYMES',
    'optimización procesos',
    'workflow automation',
    'consultoría automatización',
    'España automatización'
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: 'Especialistas en automatización de procesos para autónomos y PYMES. Optimiza tu tiempo y aumenta tu productividad con nuestras soluciones de automatización.',
    images: [
      {
        url: SITE_ICON,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Automatización de Procesos Empresariales`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: 'Especialistas en automatización de procesos para autónomos y PYMES. Optimiza tu tiempo y aumenta tu productividad.',
    images: [SITE_ICON],
    creator: '@automateflow',
    site: '@automateflow',
  },
  verification: {
    google: GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}