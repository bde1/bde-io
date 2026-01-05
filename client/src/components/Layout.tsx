import { Link } from "wouter";
import AnimatedHeader from "./AnimatedHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/focus", label: "Areas of Focus" },
    { href: "/approach", label: "Our Approach" },
    { href: "/insights", label: "Insights" },
    { href: "/office", label: "The Office" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <AnimatedHeader />

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
                <Link href="/office#contact" className="text-sm hover:text-primary transition-colors">hello@bde.io</Link>
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
