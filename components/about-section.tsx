"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, DollarSign, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

const valueIcons = {
  quick: Clock,
  quality: Shield,
  price: DollarSign,
  custom: Users,
}

export function AboutSection() {
  const { language } = useLanguage()
  const t = translations[language].about

  const values = [
    { key: 'quick' as const, icon: Clock },
    { key: 'quality' as const, icon: Shield },
    { key: 'price' as const, icon: DollarSign },
    { key: 'custom' as const, icon: Users },
  ]

  const features = [
    t.features.experience,
    t.features.iso,
    t.features.workshop,
    t.features.equipment,
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value) => {
            const valueData = t.values[value.key]
            const Icon = value.icon
            return (
              <Card key={value.key} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <Icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold">{valueData.title}</h3>
                  <p className="text-sm font-medium text-primary">{valueData.desc}</p>
                  <p className="text-xs text-muted-foreground">{valueData.detail}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-muted rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t.advantages}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.advantagesDesc}
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/equipment-5axis.png"
                alt={t.workshopAlt}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
