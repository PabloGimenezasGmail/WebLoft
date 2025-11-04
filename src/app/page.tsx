import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { ProcessSection } from '@/components/ProcessSection'
import { ToolsSection } from '@/components/ToolsSection'
{/*import { N8NShowcase } from '@/components/N8NShowcase'
import { TestimonialsSection } from '@/components/TestimonialsSection'*/}
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ToolsSection />
      {/* <N8NShowcase />
      <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}