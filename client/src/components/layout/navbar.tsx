import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Firm" },
    { href: "#services", label: "Services" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between">
        <a href="#home" onClick={(e) => handleClick(e, "#home")} className="flex flex-col z-50" data-testid="link-logo">
          <span className="font-serif text-xl font-bold text-primary leading-tight tracking-tight">
            MOHIT K DIXIT & ASSOCIATES
          </span>
          <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
            Chartered Accountants
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.href.substring(1)
                  ? "text-primary font-semibold"
                  : "text-muted-foreground",
              )}
              data-testid={`link-${link.href.substring(1)}`}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+919871775302">
            <Button size="sm" className="gap-2" data-testid="button-call">
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
          data-testid="button-menu-toggle"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="fixed top-20 left-0 right-0 bottom-0 z-40 bg-white border-t flex flex-col items-start justify-start p-6 gap-4 md:hidden animate-in slide-in-from-top-2 fade-in duration-200">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary w-full py-3 border-b border-slate-100",
                  activeSection === link.href.substring(1)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
                data-testid={`link-mobile-${link.href.substring(1)}`}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+919871775302" onClick={() => setIsOpen(false)} className="w-full mt-4">
              <Button size="lg" className="w-full gap-2 text-lg h-12 shadow-md" data-testid="button-call-mobile">
                <Phone className="h-5 w-5" />
                +91 98717 75302
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
