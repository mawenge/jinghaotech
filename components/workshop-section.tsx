import { Card, CardContent } from "@/components/ui/card"
import { Factory, Users, Ruler, Cog, CheckCircle } from "lucide-react"

export function WorkshopSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Workshop</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Jinghao Technology Co., Ltd operates in approximately 4,000 square meters with 18-23 programming and
            operating personnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Factory className="h-12 w-12 text-primary mx-auto" />
              <div className="text-3xl font-bold text-primary">4,000</div>
              <div className="text-sm text-muted-foreground">Square Meters</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <div className="text-3xl font-bold text-primary">18-23</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Cog className="h-12 w-12 text-primary mx-auto" />
              <div className="text-3xl font-bold text-primary">Metal</div>
              <div className="text-sm text-muted-foreground">Manufacturing</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Ruler className="h-12 w-12 text-primary mx-auto" />
              <div className="text-3xl font-bold text-primary">Plastic</div>
              <div className="text-sm text-muted-foreground">Production</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/modern-manufacturing-workshop-with-cnc-machines-an.jpg"
              alt="Manufacturing Workshop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Advanced Manufacturing Facility</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our factory mainly provides metal and plastic rapid prototyping manufacturing and batch production. We
              maintain state-of-the-art equipment and skilled personnel to ensure the highest quality output for our
              clients.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Rapid prototyping capabilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Batch production services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Skilled programming team</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Modern equipment maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
