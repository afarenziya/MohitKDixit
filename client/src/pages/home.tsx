import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, FileText, BarChart3, Users } from "lucide-react";
import heroImage from "@assets/generated_images/modern_accounting_office_background.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-12">
          <div className="max-w-2xl space-y-6 animate-in slide-in-from-bottom-10 fade-in duration-700">
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm text-secondary backdrop-blur-sm">
              <span className="font-medium">Established & Trusted Since 2010</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Expert Financial <br />
              <span className="text-secondary">Guidance</span> You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              Accurate, ethical, and value-driven professional services for individuals, firms, and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="text-base px-8 h-12 bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 border-white text-white hover:bg-white hover:text-primary">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="py-20 bg-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              M/s Mohit K Dixit & Associates
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We are a Chartered Accountancy firm established and managed by CA Mohit Kumar Dixit, having 14+ years of experience in audit, taxation, GST, accounting, corporate compliance, and financial advisory.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our firm is committed to providing accurate, ethical, and value-driven professional services to individuals, firms, LLPs, companies, trusts, and small-to-medium businesses. We focus on quality, integrity, professionalism, and client satisfaction.
            </p>
            <Link href="/about">
              <Button variant="link" className="p-0 text-primary font-semibold text-lg gap-2 mt-2">
                Read More About Us <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl text-primary mb-1">14+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow translate-y-8">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl text-primary mb-1">500+</h3>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl text-primary mb-1">100%</h3>
              <p className="text-sm text-muted-foreground">Compliance</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow translate-y-8">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl text-primary mb-1">24/7</h3>
              <p className="text-sm text-muted-foreground">Advisory Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-muted-foreground">
              Comprehensive financial and compliance solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Audit & Assurance",
                desc: "Statutory Audit, Tax Audit, Internal Audit, GST Audit, and Stock & Revenue Audit services.",
                icon: ShieldCheck
              },
              {
                title: "Taxation Services",
                desc: "Income Tax Return Filing, Tax Planning, Advisory, and Assessment Representation.",
                icon: FileText
              },
              {
                title: "GST Compliance",
                desc: "GST Registration, Return Filing, Annual Returns, and Reconciliation services.",
                icon: BarChart3
              },
              {
                title: "Company Law",
                desc: "Company & LLP Incorporation, MCA/ROC Compliance, and Annual Filings.",
                icon: Users
              },
              {
                title: "Accounting",
                desc: "Bookkeeping, Financial Statements, Payroll Management, and MIS Reporting.",
                icon: FileText
              },
              {
                title: "Advisory",
                desc: "Financial Advisory, Certifications, and Corporate Legal Documentation.",
                icon: ShieldCheck
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="h-14 w-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href="/services">
                  <span className="text-sm font-semibold text-secondary hover:text-secondary/80 flex items-center gap-2 cursor-pointer">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg h-auto">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
           <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Optimize Your Finances?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Get expert advice from seasoned professionals. Let us handle the complexities of finance while you focus on growth.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-10 py-7 h-auto font-bold">
              Get in Touch Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
