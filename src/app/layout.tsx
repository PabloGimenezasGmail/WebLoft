import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Automatización N8N - Optimiza tu Negocio',
  description: 'Especialista en automatización de procesos para autónomos, pequeñas y medianas empresas. Creación de landing pages, mejora de sitios web, sincronización de calendarios y más con N8N.',
  keywords: 'automatización, N8N, landing pages, sincronización calendarios, pequeñas empresas, autónomos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}