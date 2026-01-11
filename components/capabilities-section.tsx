"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Ruler, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function CapabilitiesSection() {
  const { language } = useLanguage()
  const t = translations[language].capabilities

  const materials = [
    { key: 'aluminum' as const },
    { key: 'stainless' as const },
    { key: 'steel' as const },
    { key: 'copper' as const },
    { key: 'plastic' as const },
    { key: 'titanium' as const },
  ]

  const surfaceTreatments = t.processing.surface.treatments

  return (
    <section id="capabilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 左侧：材料列表 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Wrench className="h-6 w-6 text-primary" />
              {t.materials.title}
            </h3>
            <div className="space-y-3">
              {materials.map((material) => {
                const matData = t.materials[material.key]
                return (
                  <Card key={material.key} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="font-semibold">{matData.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{matData.types}</span>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* 右侧：加工参数 */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Ruler className="h-6 w-6 text-primary" />
              {t.processing.title}
            </h3>
            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-3">{t.processing.tolerance.title}</h4>
                <div className="text-3xl font-bold text-primary">{t.processing.tolerance.value}</div>
                <p className="text-sm text-muted-foreground mt-2">{t.processing.tolerance.desc}</p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3">{t.processing.surface.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {surfaceTreatments.map((treatment, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {treatment}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3">{t.processing.maxSize.title}</h4>
                <div className="text-3xl font-bold text-primary">{t.processing.maxSize.value}</div>
                <p className="text-sm text-muted-foreground mt-2">{t.processing.maxSize.unit}</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
