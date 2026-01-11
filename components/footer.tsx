"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold">{t.brand}</div>
          <p className="text-lg opacity-80">{t.slogan}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-70">
            {t.features.map((feature, index) => (
              <span key={index}>{feature}</span>
            ))}
          </div>
          <div className="pt-8 border-t border-background/20 space-y-2">
            <p className="text-sm opacity-80">{t.company}</p>
            <p className="text-sm opacity-60">{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
