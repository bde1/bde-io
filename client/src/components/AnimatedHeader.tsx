import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function AnimatedHeader() {
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
    { href: "/insights", label: "Insights" },
    { href: "/office", label: "The Office" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center",
          isScrolled ? "pt-4" : "pt-6"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-in-out",
            isScrolled
              ? "w-[90%] md:w-[80%] lg:w-[70%] bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-lg shadow-black/20"
              : "w-full container bg-transparent border-transparent py-2"
          )}
        >
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
                  location === link.href || (link.href === "/insights" && location.startsWith("/insights")) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/office#contact">
              <Button
                variant={isScrolled ? "default" : "outline"}
                className={cn(
                  "ml-4 transition-all duration-300 font-mono text-xs tracking-widest uppercase",
                  isScrolled 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-8 px-4" 
                    : "border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                )}
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
                location === link.href || (link.href === "/insights" && location.startsWith("/insights")) ? "text-primary" : "text-muted-foreground"
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
    </>
  );
}
