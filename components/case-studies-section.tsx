"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function CaseStudiesSection() {
  const { language } = useLanguage()
  const t = translations[language].cases

  const caseStudies = [
    { key: 'case1' as const, image: '/images/case-01.png' },
    { key: 'case2' as const, image: '/images/case-02.png' },
    { key: 'case3' as const, image: '/images/case-03.png' },
    { key: 'case4' as const, image: '/images/case-04.png' },
    { key: 'case5' as const, image: '/images/case-05.png' },
  ]

  return (
    <section id="cases" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((item) => {
            const itemData = t.items[item.key]
            return (
              <div
                key={item.key}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={itemData.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{itemData.title}</h3>
                  <p className="text-sm text-muted-foreground">{itemData.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">{t.note}</p>
        </div>
      </div>
    </section>
  )
}
