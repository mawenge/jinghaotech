import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Search, FileCheck } from "lucide-react"

export function QualitySection() {
  return (
    <section id="quality" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Quality Assurance</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We strictly follow the ISO 9001 certified quality management system, establish a series of standardized
              production processes and work instructions, and use advanced testing equipment to measure and inspect each
              production step.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <CardContent className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">ISO Certified</div>
                    <div className="text-sm text-muted-foreground">Quality System</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4">
                <CardContent className="flex items-center space-x-3">
                  <Search className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Advanced Testing</div>
                    <div className="text-sm text-muted-foreground">Equipment</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4">
                <CardContent className="flex items-center space-x-3">
                  <FileCheck className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Standard Process</div>
                    <div className="text-sm text-muted-foreground">Documentation</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4">
                <CardContent className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Full Inspection</div>
                    <div className="text-sm text-muted-foreground">Every Step</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <img src="/quality-control-inspection-equipment-and-measureme.jpg" alt="Quality Control Equipment" className="rounded-lg shadow-lg" />
            <div className="bg-secondary text-secondary-foreground p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Comprehensive Inspection</h3>
              <p className="opacity-90">
                Every project undergoes rigorous quality inspection to ensure compliance with strict quality
                specifications and customer requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
