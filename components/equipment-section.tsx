"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function EquipmentSection() {
  const { language } = useLanguage()
  const t = translations[language].equipment

  const equipments = [
    { key: 'aluminum' as const, image: '/images/equipment-aluminum.png' },
    { key: 'steel' as const, image: '/images/equipment-steel.png' },
    { key: 'lathe' as const, image: '/images/equipment-lathe.png' },
    { key: 'fiveAxis' as const, image: '/images/equipment-5axis.png' },
    { key: 'cmm' as const, image: '/images/equipment-cmm.png' },
    { key: 'other' as const, image: '/images/equipment-other.png' },
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
                  <img
                    src={item.image}
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
