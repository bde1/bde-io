import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/focus", label: "Active Thesis" },
  { href: "/approach", label: "Philosophy" },
  { href: "/office", label: "Leadership" },
] as const;

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative selection:bg-accent/20 selection:text-accent pb-20">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[50%] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:text-background focus:px-4 focus:py-2 focus:rounded-none focus:outline-none font-sans text-xs uppercase tracking-widest font-bold"
      >
        Skip to content
      </a>

      {/* Top Right Brand (User Requested) */}
      <div className="absolute top-8 right-8 md:right-12 z-40">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-accent font-bold text-xl">&gt;</span>
          <span className="font-sans font-black text-xl tracking-widest uppercase text-white">BDE</span>
        </Link>
      </div>

      {/* Mobile Menu Toggle (Top Left for mobile) */}
      <div className="md:hidden absolute top-8 left-8 z-50">
        <button
          className="text-foreground hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200"
          onClick={closeMobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "text-2xl font-sans font-bold uppercase tracking-widest transition-colors hover:text-accent",
                      location === link.href ? "text-accent" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/office#contact" onClick={closeMobileMenu} className="text-2xl font-sans font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
                  Connect
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-grow relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="pt-16 pb-24 border-t border-border/50 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Footer Brand */}
            <div className="md:col-span-5">
              <h3 className="text-2xl font-black uppercase text-white mb-4 tracking-wider">BDE</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light max-w-md">
                BDE Ventures is a provider of generalist advisory services for founders and operating leadership teams building at the intersection of technology, blockchain, and AI services.
              </p>
            </div>
            
            {/* Footer Links 1 */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Site Map</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Footer Links 2 */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Social</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li>
                  <a href="https://x.com/briandevans" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/briandevansla/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-xs text-muted-foreground font-light">
            <p>&copy; {new Date().getFullYear()} BDE Ventures.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-accent cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-accent cursor-pointer transition-colors">Legal</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-md border-t border-border/50 p-4 z-50">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-2 lg:px-8">
          <Link href="/" className="text-white font-bold text-lg tracking-widest flex items-center hover:opacity-80 transition-opacity">
            <span className="text-accent mr-2">&gt;</span> BDE
          </Link>
          <nav className="hidden md:flex space-x-8 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hover:text-accent transition-colors",
                  location === link.href ? "text-accent" : ""
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/office#contact" className="hover:text-accent transition-colors">
              Connect
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
