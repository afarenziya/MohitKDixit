import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Building2 } from "lucide-react";

export default function Clients() {
  const clients = [
    { name: "Canara Bank", type: "Statutory Audit", color: "text-[#f4a024]" },
    { name: "Punjab & Sind Bank", type: "Statutory Audit", color: "text-[#ed1c24]" },
    { name: "United Bank of India", type: "Statutory Audit", color: "text-[#005a9c]" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Valued Clients</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We are honored to serve distinguished financial institutions and businesses.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-10 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[250px]"
              >
                <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className={`h-10 w-10 ${client.color}`} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
                  {client.name}
                </h3>
                <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wide rounded-full">
                  {client.type}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">And many more...</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We also serve numerous small-to-medium businesses, LLPs, private limited companies, and individuals across various sectors for their audit, tax, and compliance needs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
