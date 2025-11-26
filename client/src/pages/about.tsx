import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CheckCircle2 } from "lucide-react";
import founderImage from "@assets/yupp-generated-image-762265_1764138355504.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">About Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building trust through transparency, expertise, and unwavering commitment to client success.
          </p>
        </div>
      </div>

      {/* Firm Profile */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground leading-relaxed">
            <div className="border-l-4 border-secondary pl-6 py-2 mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">The Firm</h2>
              <p className="text-xl font-medium text-primary/80">
                M/s Mohit K Dixit & Associates
              </p>
            </div>
            
            <p>
              We are a Chartered Accountancy firm established and managed by CA Mohit Kumar Dixit, bringing over 14 years of extensive experience in the fields of audit, taxation, GST, accounting, corporate compliance, and financial advisory.
            </p>
            <p>
              Our firm is deeply committed to providing accurate, ethical, and value-driven professional services to a diverse clientele, including individuals, firms, LLPs, companies, trusts, and small-to-medium businesses. We understand that every client is unique, and we tailor our solutions to meet their specific financial goals and compliance requirements.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {["Quality Assurance", "Ethical Practices", "Professional Integrity", "Client Satisfaction"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 h-full min-h-[400px] md:min-h-full relative">
                <img 
                  src={founderImage} 
                  alt="CA Mohit Kumar Dixit" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block text-secondary font-bold tracking-wider text-sm uppercase mb-2">Founder & Proprietor</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                  CA Mohit Kumar Dixit
                </h2>
                <p className="text-xl text-muted-foreground mb-6">FCA, B.Com | 14+ Years Experience</p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  A seasoned professional with a decade and a half of expertise in statutory audit, tax audit, and financial advisory. CA Mohit Kumar Dixit leads the firm with a vision of delivering excellence and simplifying complex financial regulations for clients.
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-bold text-primary border-b pb-2">Areas of Expertise</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Statutory & Tax Audit</li>
                      <li>Internal & GST Audit</li>
                      <li>Stock Audit</li>
                      <li>Income Tax & GST Law</li>
                      <li>TDS/TCS Compliance</li>
                    </ul>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Financial Statements</li>
                      <li>Accounting Systems (SAP, Tally)</li>
                      <li>MCA/ROC Compliance</li>
                      <li>Annual Filings</li>
                      <li>Financial Advisory</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
