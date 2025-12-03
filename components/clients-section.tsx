import { Card, CardContent } from "@/components/ui/card"

export function ClientsSection() {
  const clientData = [
    { region: "USA", percentage: 40, color: "bg-cyan-500" },
    { region: "Europe", percentage: 30, color: "bg-amber-500" },
    { region: "Japan", percentage: 20, color: "bg-slate-600" },
    { region: "Other", percentage: 10, color: "bg-slate-400" },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Clients</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Serving customers worldwide with our precision manufacturing services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {clientData.map((client) => (
              <Card key={client.region} className="text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 ${client.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-lg">{client.percentage}%</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{client.region}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Client distribution bar */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Client Distribution</h3>
            <div className="flex rounded-lg overflow-hidden h-12">
              {clientData.map((client) => (
                <div
                  key={client.region}
                  className={`${client.color} flex items-center justify-center text-white font-medium`}
                  style={{ width: `${client.percentage}%` }}
                >
                  {client.region}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
