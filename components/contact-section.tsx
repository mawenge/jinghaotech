import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Ready to start your next project? Get in touch with our team for a consultation and quote.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>Email</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">hanliu210201@163.com</p>
              <p className="text-muted-foreground">Contact: Liu Han</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">A101, No23 Nanling Road</p>
              <p className="text-muted-foreground">
                Xiner Community, Xinqiao Street
                <br />
                Baoan District, Shenzhen City
                <br />
                Guangdong Province, China
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
