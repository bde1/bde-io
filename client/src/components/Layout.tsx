import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/focus", label: "Areas of Focus" },
    { href: "/approach", label: "Our Approach" },
    { href: "/office", label: "The Office" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity">
            BDE<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/office#contact">
              <Button 
                variant="outline" 
                className="ml-4 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 font-mono text-xs tracking-widest uppercase"
              >
                Request Intro
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-3xl font-serif font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/office#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button 
              variant="outline" 
              className="mt-8 border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Request Intro
            </Button>
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/40 py-20 mt-20">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-6">BDE<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Partnering with exceptional founders building the critical infrastructure for the next generation of the internet.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Sitemap</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://x.com/briandevans" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">Twitter / X</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/briandevansla/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:hello@bde.io" className="text-sm hover:text-primary transition-colors">hello@bde.io</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
          <p>© 2026 BDE Ventures. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
