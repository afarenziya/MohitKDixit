import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Firm" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col z-50">
          <span className="font-serif text-xl font-bold text-primary leading-tight tracking-tight">
            MOHIT K DIXIT & ASSOCIATES
          </span>
          <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
            Chartered Accountants
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+919871775302">
            <Button size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Book Consultation
            </Button>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="fixed top-20 left-0 right-0 bottom-0 z-40 bg-white/95 backdrop-blur-sm border-t flex flex-col items-start justify-start p-8 gap-6 md:hidden animate-in slide-in-from-top-5 fade-in duration-300">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary w-full py-2 border-b border-slate-100",
                  location === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+919871775302" onClick={() => setIsOpen(false)} className="w-full mt-2">
              <Button size="lg" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                +91 98717 75302
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
