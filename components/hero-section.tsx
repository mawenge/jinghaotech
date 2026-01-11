"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section id="home" className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                {t.title}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{t.features.iso}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{t.features.quote}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{t.features.precision}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t.cta.consult}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#equipment"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t.cta.learn}
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/equipment-aluminum.png"
              alt="CNC精密加工设备"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm opacity-90">{t.experience}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
