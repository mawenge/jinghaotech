"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { StaticImage } from "@/components/static-image"

export function EquipmentSection() {
  const { language } = useLanguage()
  const t = translations[language].equipment

  const equipments = [
    { key: 'aluminum' as const, image: 'equipment-aluminum' as const },
    { key: 'steel' as const, image: 'equipment-steel' as const },
    { key: 'lathe' as const, image: 'equipment-lathe' as const },
    { key: 'fiveAxis' as const, image: 'equipment-5axis' as const },
    { key: 'cmm' as const, image: 'equipment-cmm' as const },
    { key: 'other' as const, image: 'equipment-other' as const },
  ]

  return (
    <section id="equipment" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((item) => {
            const itemData = t.items[item.key]
            return (
              <Card key={item.key} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <StaticImage
                    name={item.image}
                    sizes="(min-width: 1536px) 496px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    alt={itemData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{itemData.title}</h3>
                  <p className="text-muted-foreground">{itemData.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
