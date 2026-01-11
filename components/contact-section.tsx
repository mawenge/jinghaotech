"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, User } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <User className="h-5 w-5 text-primary" />
                <span>{t.company.label}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{t.company.name}</p>
              <p className="text-muted-foreground">{t.company.en}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <User className="h-5 w-5 text-primary" />
                <span>{t.contact.label}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{t.contact.name}</p>
              <p className="text-muted-foreground">{t.contact.en}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>{t.phone.label}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{t.phone.value}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>{t.email.label}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{t.email.value}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{t.address.label}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{t.address.zh}</p>
              <p className="text-muted-foreground">
                {t.address.en}
                <br />
                {t.address.en2}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
