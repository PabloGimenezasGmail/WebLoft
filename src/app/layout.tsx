import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { StructuredData } from '@/components/StructuredData'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://web-loft.vercel.app/'),
  title: 'Automatización de Procesos Empresariales | AutomateFlow',
  description: 'Especialistas en automatización de procesos para autónomos y PYMES. Creamos landing pages, automatizamos campañas de marketing, sincronizamos calendarios y optimizamos flujos de trabajo con N8N. Consulta gratuita disponible.',
  keywords: [
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
  authors: [{ name: 'AutomateFlow' }],
  creator: 'AutomateFlow',
  publisher: 'AutomateFlow',
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
    url: 'https://web-loft.vercel.app/',
    siteName: 'AutomateFlow',
    title: 'Automatización de Procesos Empresariales | AutomateFlow',
    description: 'Especialistas en automatización de procesos para autónomos y PYMES. Optimiza tu tiempo y aumenta tu productividad con nuestras soluciones de automatización.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AutomateFlow - Automatización de Procesos Empresariales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatización de Procesos Empresariales con N8N | AutomateFlow',
    description: 'Especialistas en automatización de procesos para autónomos y PYMES. Optimiza tu tiempo y aumenta tu productividad.',
    images: ['/og-image.jpg'],
    creator: '@automateflow',
  },
  verification: {
    google: '2VwQna6pMQle1PbLfO2Zo_TFBWmgVcpJkQjfoYNZ9AQ',
  },
  alternates: {
    canonical: 'https://web-loft.vercel.app/',
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