import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { QualitySection } from "@/components/quality-section"
import { WorkshopSection } from "@/components/workshop-section"
import { ApplicationsSection } from "@/components/applications-section"
import { ClientsSection } from "@/components/clients-section"
import { ProductShowcase } from "@/components/product-showcase"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <QualitySection />
        <WorkshopSection />
        <ApplicationsSection />
        <ClientsSection />
        <ProductShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
