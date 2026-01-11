"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 text-muted-foreground" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
        className="font-semibold"
      >
        {language === 'zh' ? 'EN' : '中文'}
      </Button>
    </div>
  )
}
