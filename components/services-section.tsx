import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, Printer, Wrench, Layers, Zap, Settings } from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "CNC Machining",
    description: "Precision CNC milling and turning for complex metal and plastic parts",
  },
  {
    icon: Printer,
    title: "3D Printing",
    description: "Rapid prototyping with advanced 3D printing technologies",
  },
  {
    icon: Layers,
    title: "Vacuum Casting",
    description: "Low-volume production using silicone molds and polyurethane materials",
  },
  {
    icon: Settings,
    title: "Injection Molding",
    description: "High-volume production with precision injection molding",
  },
  {
    icon: Wrench,
    title: "Sheet Metal",
    description: "Custom sheet metal fabrication and processing",
  },
  {
    icon: Zap,
    title: "5-Axis CNC",
    description: "Advanced 5-axis machining for complex geometries",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Manufacturing Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            From prototype to production, we provide comprehensive manufacturing solutions with advanced technology and
            strict quality control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">One-Stop Manufacturing Solution</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty leading-relaxed">
              We provide customized manufacturing services based on your specific product design requirements,
              delivering from prototype to production with guaranteed quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
