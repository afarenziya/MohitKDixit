import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  BarChart3, 
  Users,
  CheckCircle2,
  FileCheck,
  Calculator,
  Building2,
  BadgeIndianRupee,
  Briefcase,
  ScrollText,
  Scale,
  Landmark,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import heroImage from "@assets/generated_images/modern_accounting_office_background.png";
import founderImage from "@assets/yupp-generated-image-762265_1764138355504.png";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  const serviceCategories = [
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

  const clients = [
    { name: "Canara Bank", type: "Statutory Audit", color: "text-[#f4a024]" },
    { name: "Punjab & Sind Bank", type: "Statutory Audit", color: "text-[#ed1c24]" },
    { name: "United Bank of India", type: "Statutory Audit", color: "text-[#005a9c]" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
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
              <a href="#contact">
                <Button size="lg" className="text-base px-8 h-12 bg-secondary hover:bg-secondary/90 text-primary font-semibold" data-testid="button-book-consultation">
                  Book Consultation
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="text-base px-8 h-12 border-white text-white hover:bg-white hover:text-primary" data-testid="button-explore-services">
                  Explore Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {["Quality Assurance", "Ethical Practices", "Professional Integrity", "Client Satisfaction"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
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

      {/* Founder Profile */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 h-full min-h-[400px] md:min-h-full relative">
                <img 
                  src={founderImage} 
                  alt="CA Mohit Kumar Dixit" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white scroll-mt-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive financial solutions designed to ensure compliance, mitigate risk, and foster growth for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {serviceCategories.map((category, idx) => (
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

          {/* How We Work */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-16">How We Work</h3>
            
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
                  <h4 className="font-bold text-lg text-primary mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Valued Clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We are honored to serve distinguished financial institutions and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-10 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[250px]"
                data-testid={`card-client-${idx}`}
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
            <h3 className="text-2xl font-bold text-primary mb-6">And many more...</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We also serve numerous small-to-medium businesses, LLPs, private limited companies, and individuals across various sectors for their audit, tax, and compliance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white scroll-mt-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get in touch with our team for professional assistance and queries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you have a question about our services, pricing, or need expert advice, our team is ready to answer all your questions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <MapPin className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Our Office</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        1st Floor, 568, Niti Khand-3,<br />
                        Indirapuram, Ghaziabad – 201014<br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <Phone className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Call Us</h4>
                      <a href="tel:+919871775302" className="text-muted-foreground text-sm hover:text-primary transition-colors block" data-testid="link-phone">
                        +91 98717 75302
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <Mail className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Email Us</h4>
                      <a href="mailto:mohit@mohitkdixit.com" className="text-muted-foreground text-sm hover:text-primary transition-colors block" data-testid="link-email-1">
                        mohit@mohitkdixit.com
                      </a>
                      <a href="mailto:mohitkdixitca@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors block" data-testid="link-email-2">
                        mohitkdixitca@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Service Inquiry" {...field} data-testid="input-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements..." 
                            className="min-h-[120px]"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg h-12" data-testid="button-submit-contact">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.965643565068!2d77.3784!3d28.6328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzU4LjEiTiA3N8KwMjInNDIuMiJF!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Office Location"
        />
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
          <a href="#contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-10 py-7 h-auto font-bold" data-testid="button-get-in-touch">
              Get in Touch Today
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
