import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Car, Bot, Heart, Gamepad2, Home } from "lucide-react"

const applications = [
  {
    icon: Smartphone,
    title: "Electronics",
    description: "Precision components for electronic devices and consumer products",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "High-quality parts for automotive industry applications",
  },
  {
    icon: Bot,
    title: "Industrial Robots",
    description: "Custom components for industrial automation and robotics",
  },
  {
    icon: Heart,
    title: "Medical Devices",
    description: "ISO 13485 certified manufacturing for medical equipment",
  },
  {
    icon: Gamepad2,
    title: "Toys",
    description: "Safe and durable components for toy manufacturing",
  },
  {
    icon: Home,
    title: "Furniture & Kitchenware",
    description: "Custom parts for furniture and kitchen appliance industries",
  },
]

export function ApplicationsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Industry Applications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We serve diverse industries with precision manufacturing solutions tailored to specific requirements and
            quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <app.icon className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">{app.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
