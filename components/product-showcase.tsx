import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    title: "Precision CNC Parts",
    image: "/precision-cnc-machined-metal-parts.jpg",
  },
  {
    title: "3D Printed Prototypes",
    image: "/3d-printed-plastic-prototypes.jpg",
  },
  {
    title: "Medical Device Components",
    image: "/medical-device-precision-components.jpg",
  },
  {
    title: "Automotive Parts",
    image: "/automotive-precision-manufactured-parts.jpg",
  },
  {
    title: "Electronic Housings",
    image: "/electronic-device-housings-and-enclosures.jpg",
  },
  {
    title: "Industrial Components",
    image: "/industrial-machinery-precision-components.jpg",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Product Showcase</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Explore our portfolio of precision-manufactured components across various industries and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-center">{product.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
