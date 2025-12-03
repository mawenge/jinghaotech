import { Award, Users, Factory } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Precision Manufacturing
                <span className="text-primary block">Since 2016</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                ISO certified rapid prototyping and CNC machining company providing one-stop services from prototype to
                production for plastic and metal components.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">23+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <Factory className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">4000</div>
                <div className="text-sm text-muted-foreground">Sqm Workshop</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/modern-cnc-machining-workshop-with-precision-equip.jpg"
              alt="CNC Machining Workshop"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">8+ Years</div>
              <div className="text-sm">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
