"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import type { Language } from './translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh')

  useEffect(() => {
    const fragment = window.location.hash.slice(1)
    const target = document.getElementById(fragment)
    // Preserve a manual position chosen before hydration restores the saved language.
    const atNativeLanding = target && Math.abs(target.getBoundingClientRect().top) <= 1
    try {
      const saved = localStorage.getItem('language')
      if (saved === 'zh' || saved === 'en') {
        // Storage is unavailable during static rendering; restore it after hydration.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguageState(saved)
      }
    } catch {
      // The in-memory selection still works when the browser blocks storage.
    }
    if (!atNativeLanding) return
    const controller = new window.AbortController()
    const cancel = () => controller.abort()
    for (const event of ['pointerdown', 'keydown', 'wheel', 'touchstart']) {
      window.addEventListener(event, cancel, { once: true, passive: true, signal: controller.signal })
    }
    // Font loading and restored language can move a native fragment target.
    void (document.fonts?.ready ?? Promise.resolve()).then(() => {
      requestAnimationFrame(() => {
        if (!controller.signal.aborted && window.location.hash.slice(1) === fragment) {
          document.getElementById(fragment)?.scrollIntoView()
        }
        cancel()
      })
    })
    return cancel
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {
      // Persistence is optional; do not prevent a language change.
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
