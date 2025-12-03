import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Shield, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">About Jinghao Technology</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Jinghao Technology Co., Ltd is an ISO9001, IATF 16949, and ISO 13485 certified Chinese rapid prototyping and
            manufacturing company, specializing in rapid prototyping and small batch production of plastic and metal
            parts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Target className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                Committed to the satisfaction and success of every customer
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Zap className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Our Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Fast customer service, cost savings, strict quality control, premium solutions
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                ISO certified quality management system with advanced testing equipment
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Heart className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Core Values</h3>
              <p className="text-sm text-muted-foreground">
                Customer satisfaction, excellence pursuit, innovation exploration, integrity commitment
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Advanced Manufacturing Technology</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With advanced manufacturing technology and highly skilled teams, we provide customized manufacturing
                services based on your specific product design requirements, including CNC machining, 3D printing,
                vacuum casting, injection/die casting, and sheet metal processing.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">ISO 9001</div>
                  <div className="text-sm text-muted-foreground">Quality</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">IATF 16949</div>
                  <div className="text-sm text-muted-foreground">Automotive</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">ISO 13485</div>
                  <div className="text-sm text-muted-foreground">Medical</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/iso-certification-badges-and-quality-control-equip.jpg"
                alt="Quality Certifications"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
