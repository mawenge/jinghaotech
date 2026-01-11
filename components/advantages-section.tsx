"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Target, Shield, Calendar, HeadphonesIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

const advantageIcons = {
  oneOnOne: Users,
  quickQuote: Clock,
  precision: Target,
  quality: Shield,
  delivery: Calendar,
  support: HeadphonesIcon,
}

export function AdvantagesSection() {
  const { language } = useLanguage()
  const t = translations[language].advantages

  const advantages = [
    { key: 'oneOnOne' as const, icon: Users },
    { key: 'quickQuote' as const, icon: Clock },
    { key: 'precision' as const, icon: Target },
    { key: 'quality' as const, icon: Shield },
    { key: 'delivery' as const, icon: Calendar },
    { key: 'support' as const, icon: HeadphonesIcon },
  ]

  return (
    <section id="advantages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => {
            const itemData = t.items[item.key]
            const Icon = item.icon
            return (
              <Card key={item.key} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{itemData.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{itemData.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">{t.slogan}</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.sloganDesc}
          </p>
        </div>
      </div>
    </section>
  )
}
