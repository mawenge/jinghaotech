"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function IndustriesSection() {
  const { language } = useLanguage()
  const t = translations[language].industries

  const industries = [
    { key: 'auto' as const, image: '/images/industry-auto.png' },
    { key: 'aerospace' as const, image: '/images/industry-aerospace.png' },
    { key: 'medical' as const, image: '/images/industry-medical.png' },
    { key: 'electronics' as const, image: '/images/industry-electronics.png' },
  ]

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((item) => {
            const itemData = t.items[item.key]
            return (
              <Card key={item.key} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5 aspect-video md:aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={itemData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2">{itemData.title}</h3>
                    <p className="text-muted-foreground mb-4">{itemData.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {itemData.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
