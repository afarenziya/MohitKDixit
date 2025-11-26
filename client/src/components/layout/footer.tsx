import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-white leading-tight">
              MOHIT K DIXIT & ASSOCIATES
            </span>
            <span className="text-xs font-medium text-primary-foreground/70 tracking-widest uppercase mt-1">
              Chartered Accountants
            </span>
          </div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
            Providing accurate, ethical, and value-driven professional services to individuals and businesses for over 14 years.
          </p>
        </div>

        <div>
          <h3 className="font-serif font-semibold text-lg mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">About Firm</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Our Services</Link>
            </li>
            <li>
              <Link href="/clients" className="hover:text-white transition-colors">Clients</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif font-semibold text-lg mb-6 text-white">Our Services</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>Statutory & Tax Audit</li>
            <li>GST Compliance</li>
            <li>Income Tax Filing</li>
            <li>Company Incorporation</li>
            <li>Financial Advisory</li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif font-semibold text-lg mb-6 text-white">Contact Us</h3>
          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
              <span>
                1st Floor, 568, Niti Khand-3,<br />
                Indirapuram, Ghaziabad – 201014<br />
                Uttar Pradesh, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-secondary" />
              <a href="tel:+919871775302" className="hover:text-white transition-colors">
                +91 98717 75302
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-secondary" />
              <div className="flex flex-col">
                <a href="mailto:mohit@mohitkdixit.com" className="hover:text-white transition-colors">mohit@mohitkdixit.com</a>
                <a href="mailto:mohitkdixitca@gmail.com" className="hover:text-white transition-colors">mohitkdixitca@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Mohit K Dixit & Associates. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
