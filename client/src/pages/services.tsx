import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  FileCheck, 
  Calculator, 
  Building2, 
  BadgeIndianRupee, 
  ScrollText, 
  Briefcase,
  Scale,
  Landmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const categories = [
    {
      title: "Audit & Assurance",
      icon: FileCheck,
      services: [
        "Statutory Audit",
        "Tax Audit",
        "Internal Audit",
        "GST Audit",
        "Stock & Revenue Audit",
        "Certifications & Attestations"
      ]
    },
    {
      title: "Taxation (Direct & Indirect)",
      icon: Calculator,
      services: [
        "Income Tax Return Filing",
        "GST Return Filing & Annual Return",
        "GST Reconciliation",
        "Tax Planning & Advisory",
        "Assessment Representation",
        "TDS/TCS Compliance"
      ]
    },
    {
      title: "Accounting & Financials",
      icon: BadgeIndianRupee,
      services: [
        "Accounting & Bookkeeping",
        "Financial Statements & Finalisation",
        "Cash Flow Management",
        "MIS Reporting",
        "Payroll Management",
        "Accounting Systems Setup"
      ]
    },
    {
      title: "Corporate Compliance",
      icon: Building2,
      services: [
        "MCA/ROC Compliance",
        "Company & LLP Incorporation",
        "Corporate Legal Documentation",
        "Annual Filings",
        "Director Identification Number (DIN)",
        "Digital Signature Certificates (DSC)"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Services</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Comprehensive financial solutions designed to ensure compliance, mitigate risk, and foster growth for your business.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <Card key={idx} className="border-t-4 border-t-secondary shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-serif font-bold text-primary">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-16">How We Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, title: "Consultation", desc: "Understanding your business needs and challenges." },
              { icon: ScrollText, title: "Analysis", desc: "Deep dive into financial records and compliance requirements." },
              { icon: Scale, title: "Strategy", desc: "Developing a tailored plan for tax efficiency and growth." },
              { icon: Landmark, title: "Execution", desc: "Timely filing, reporting, and ongoing support." }
            ].map((step, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10" />
                )}
                <div className="h-16 w-16 bg-white border-2 border-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 container">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Every business is unique. Schedule a consultation to discuss your specific financial requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
