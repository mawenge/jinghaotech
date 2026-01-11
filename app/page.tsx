import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EquipmentSection } from "@/components/equipment-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { IndustriesSection } from "@/components/industries-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EquipmentSection />
        <CapabilitiesSection />
        <AdvantagesSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
