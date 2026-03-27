import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="BDE Ventures | Family Office of Brian D. Evans"
        description="BDE is the family office of Brian D. Evans. We provide operator-led advisory for founders building at the intersection of technology, blockchain, and culture."
      />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-grid-pattern">
        <div className="absolute inset-0 glow-hero z-0" />
        
        <div className="container relative z-10 flex flex-col items-start max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-border bg-card/50 backdrop-blur-sm mb-12 relative">
            <div className="crosshair-tl" />
            <div className="crosshair-tr" />
            <div className="crosshair-bl" />
            <div className="crosshair-br" />
            <div className="w-2 h-2 bg-accent rounded-none animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-accent uppercase">Strategic Advisory Active</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 text-primary max-w-5xl">
            Guidance for the <br />
            <span className="text-accent">architects</span> of tomorrow.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-mono">
            &gt; We provide operator-led advisory for founders and leadership teams building at the intersection of technology, blockchain, and culture.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/focus">
              <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-mono uppercase tracking-wider">
                Explore Focus <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/approach">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-border hover:bg-accent/10 hover:text-accent hover:border-accent rounded-none font-mono uppercase tracking-wider transition-colors">
                Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section className="py-12 border-y border-border bg-card/30 backdrop-blur-sm relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground">As Seen In // </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl md:text-3xl font-serif italic text-primary">Forbes</span>
              <span className="text-3xl md:text-4xl font-serif font-black italic text-primary leading-none">Inc.</span>
              <span className="text-xl md:text-2xl font-sans font-light tracking-wide text-primary">Entrepreneur</span>
              <span className="text-xl md:text-2xl font-sans font-bold text-primary tracking-tight">Rolling Stone</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 relative bg-grid-pattern">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative p-8 border border-border bg-card/50 backdrop-blur-sm">
              <div className="crosshair-tl" />
              <div className="crosshair-tr" />
              <div className="crosshair-bl" />
              <div className="crosshair-br" />
              
              <div className="flex items-center gap-2 mb-8 text-accent font-mono text-sm">
                <Terminal className="w-4 h-4" />
                <span>SYS.PHILOSOPHY</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-primary">
                Capital with <br /><span className="text-accent">conviction.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-mono text-sm">
                Most capital is passive. Ours is active. We bring decades of operational experience — building a media empire that reached over 100 million people, navigating emerging markets since their earliest days, and advising some of the world's most ambitious teams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-mono text-sm">
                When we partner with a founder, we bring the scars, the network, and the playbook of someone who has actually built.
              </p>
            </div>

            <div className="space-y-6 lg:pt-12">
              <div className="p-6 border border-border bg-card/30 hover:border-accent/50 transition-colors relative group">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <h3 className="text-xl font-bold mb-2 text-primary font-mono uppercase tracking-wide">Operator DNA</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-mono">
                  Born from the trenches of building, not just advising. Every recommendation is grounded in direct experience scaling companies.
                </p>
              </div>
              <div className="p-6 border border-border bg-card/30 hover:border-accent/50 transition-colors relative group">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <h3 className="text-xl font-bold mb-2 text-primary font-mono uppercase tracking-wide">Active Strategy</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-mono">
                  We don't follow markets; we help you define them. Our guidance is grounded in high conviction and deep domain expertise.
                </p>
              </div>
              <div className="p-6 border border-border bg-card/30 hover:border-accent/50 transition-colors relative group">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <h3 className="text-xl font-bold mb-2 text-primary font-mono uppercase tracking-wide">Enduring Value</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-mono">
                  Building for the next decade, not the next quarter. We help structure your narrative and operations for long-term resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-32 relative">
        <div className="absolute inset-0 glow-founder z-0" />
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[1651/1700] max-w-md mx-auto lg:mx-0 border border-border p-2 bg-card/50">
              <div className="crosshair-tl" />
              <div className="crosshair-tr" />
              <div className="crosshair-bl" />
              <div className="crosshair-br" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077684115/nLNx4gEup6hKQEtExgUkNn/Brian_Turtleneck_cropped_17b4b49c.webp"
                alt="Brian D. Evans — Founder of BDE Ventures"
                loading="lazy"
                className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md border border-border px-3 py-1 font-mono text-xs text-accent">
                ID: BDE_FOUNDER
              </div>
            </div>
            
            <div className="relative p-8 border border-border bg-card/30 backdrop-blur-sm">
              <div className="crosshair-tl" />
              <div className="crosshair-tr" />
              <div className="crosshair-bl" />
              <div className="crosshair-br" />
              
              <div className="flex items-center gap-2 mb-8 text-accent font-mono text-sm">
                <Terminal className="w-4 h-4" />
                <span>DIR.LEADERSHIP</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-primary uppercase tracking-tighter">Brian D. Evans</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-mono text-sm border-l-2 border-accent pl-4">
                "For over two decades, I've operated at the forefront of emerging tech, blending digital marketing mastery with human psychology. Technology is easily replicated, but attention is not. In this era, the final moat is distribution."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-mono text-sm">
                As an Inc. 500 entrepreneur and lifelong builder, Brian brings a unique operator's perspective to every project. His approach combines deep marketing understanding with a genuine commitment to long-term value creation.
              </p>
              <Link href="/office">
                <Button variant="outline" className="border-border hover:bg-accent/10 hover:text-accent hover:border-accent rounded-none px-8 font-mono uppercase tracking-wider transition-colors">
                  Access Full Bio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 flex items-center justify-center relative overflow-hidden border-t border-border bg-grid-pattern">
        <div className="absolute inset-0 bg-background/90 z-0" />
        
        <div className="container relative z-10 text-center max-w-3xl px-4">
          <div className="inline-block relative p-12 border border-border bg-card/50 backdrop-blur-sm">
            <div className="crosshair-tl" />
            <div className="crosshair-tr" />
            <div className="crosshair-bl" />
            <div className="crosshair-br" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary uppercase tracking-tighter">Ready to <span className="text-accent">connect</span>?</h2>
            <p className="text-lg text-muted-foreground mb-10 font-mono text-sm max-w-xl mx-auto">
              &gt; We work with a small number of exceptional teams each year. If you're building something that matters, we'd like to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/office#contact">
                <Button size="lg" className="h-14 px-10 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-mono uppercase tracking-wider">
                  Initialize Contact
                </Button>
              </Link>
              <Link href="/office">
                <Button size="lg" variant="outline" className="h-14 px-10 text-base border-border hover:bg-accent/10 hover:text-accent hover:border-accent rounded-none font-mono uppercase tracking-wider transition-colors">
                  View Office Specs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
