import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { ProcessSection } from '@/components/ProcessSection'
import { ToolsSection } from '@/components/ToolsSection'
import { AboutSection } from '@/components/AboutSection'
import { CaseStudiesSection } from '@/components/CaseStudiesSection'
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
      <AboutSection />
      <CaseStudiesSection />
      {/* <N8NShowcase />
      <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}