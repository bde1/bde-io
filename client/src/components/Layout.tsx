import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { LogoMark } from "@/components/LogoMark";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/focus", label: "Areas of Focus" },
  { href: "/approach", label: "Our Approach" },
  { href: "/office", label: "The Office" },
] as const;

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Close mobile menu on ESC key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative selection:bg-accent selection:text-background">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:text-background focus:px-4 focus:py-2 focus:rounded-none focus:outline-none font-mono text-xs uppercase tracking-widest"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
          isScrolled ? "bg-background/90 backdrop-blur-md border-border py-4" : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between relative">
          {isScrolled && (
            <>
              <div className="crosshair-tl" />
              <div className="crosshair-tr" />
              <div className="crosshair-bl" />
              <div className="crosshair-br" />
            </>
          )}
          
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-3">
            <Terminal className="w-5 h-5 text-accent" />
            <span className="font-mono font-bold text-lg tracking-tighter uppercase">BDE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-mono uppercase tracking-widest transition-colors hover:text-accent relative group",
                  location === link.href ? "text-accent" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/office#contact">
              <Button
                variant="outline"
                className="ml-4 border-border hover:bg-accent/10 hover:text-accent hover:border-accent transition-all duration-300 text-xs font-mono tracking-widest uppercase rounded-none"
              >
                Connect
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200 border border-border m-4"
          onClick={closeMobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="crosshair-tl" />
          <div className="crosshair-tr" />
          <div className="crosshair-bl" />
          <div className="crosshair-br" />
          
          

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "text-2xl font-mono uppercase tracking-widest transition-colors hover:text-accent",
                      location === link.href ? "text-accent" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/office#contact" onClick={closeMobileMenu}>
                  <Button
                    variant="outline"
                    className="mt-8 border-border text-primary hover:bg-accent/10 hover:text-accent hover:border-accent px-8 py-6 text-sm font-mono uppercase tracking-widest rounded-none"
                  >
                    Connect
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-grow pt-0 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-20 mt-20 relative z-10">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-accent" />
              <span className="font-mono font-bold text-lg tracking-tighter uppercase">BDE</span>
            </div>
            <p className="text-muted-foreground font-mono text-sm max-w-md leading-relaxed">
              The family office of Brian D. Evans. Partnering with exceptional founders building the critical infrastructure for the next generation of the internet.
            </p>
          </div>

          <nav aria-label="Footer sitemap">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent mb-6">Sitemap</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer connect">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://x.com/briandevans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/briandevansla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/office#contact" className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BDE Ventures.</p>
          <div className="flex gap-8">
            <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
