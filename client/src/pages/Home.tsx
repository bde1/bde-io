import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Activity, ShieldCheck } from "lucide-react";
import { Link } from "wouter";


import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "BDE Ventures | Strategic Advisory & Investment";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-city-metropolis.jpg" 
            alt="City Skyline" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)]" />
        </div>

        <div className="container relative z-30 flex flex-col items-center text-center max-w-5xl mx-auto px-4">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-primary/90 uppercase border-b border-primary/20 pb-2">
              Strategic Advisory & Investment
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Guidance for the <span className="italic text-muted-foreground">architects</span> of <span className="italic text-primary">tomorrow</span>.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            We provide operator-led advisory for founders and leadership teams building at the intersection of technology, blockchain, and culture. With a global presence and deep roots in key innovation hubs, our experience becomes your strategic advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <Link href="/focus">
              <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(255,215,0,0.3)]">
                Explore Our Focus <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/approach">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/10 hover:bg-white/5 hover:text-white rounded-full transition-all">
                Our Approach
              </Button>
            </Link>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-2000 text-muted-foreground/50">
          {/* Vertical line removed as requested */}
        </div>
      </section>

      {/* Trust Indicators / Marquee */}
      <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container overflow-hidden">
          <div className="flex justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-serif font-bold">STRATEGY</span>
            <span className="text-xl font-serif font-bold">NARRATIVE</span>
            <span className="text-xl font-serif font-bold">ECOSYSTEM</span>
            <span className="text-xl font-serif font-bold">CAPITAL</span>
            <span className="text-xl font-serif font-bold">GROWTH</span>
          </div>
        </div>
      </section>

      {/* Features / Philosophy Grid */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Operator DNA</h3>
              <p className="text-muted-foreground leading-relaxed">
                Born from the trenches of building, not just advising. We bring decades of operational experience to every partnership.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Active Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't follow trends; we help you shape them. Our guidance is grounded in high conviction and deep market intelligence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Enduring Value</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building for the next decade, not the next quarter. We help structure your narrative and operations for long-term resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 relative">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 group bg-neutral-900">
              <img 
                src="/images/brian-evans-grayscale.jpg" 
                alt="Brian D. Evans" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xs text-primary tracking-widest uppercase mb-4 block">The Founder</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Brian D. Evans
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                "For over two decades, I've operated at the forefront of emerging tech, blending digital marketing mastery with human psychology. Technology is easily replicated, but attention is not. In this era, the final moat is distribution."
              </p>
              <p>
                As an Inc. 500 entrepreneur and lifelong builder, Brian brings a unique operator's perspective to every project. His approach combines deep marketing understanding with a genuine commitment to long-term value creation.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/office">
                <Button variant="outline" className="border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300">
                  Read Full Bio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Teaser (Updated with Impact Imagery) */}
      <section className="py-32 relative overflow-hidden bg-white/[0.02]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 opacity-30" />
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase mb-4 block">Our Impact</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Investing in a <span className="italic text-primary">better</span> future.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We believe that the most successful companies of tomorrow will be those that solve real-world problems. Our thesis goes beyond financial returns to consider the broader impact on society and the environment.
              </p>
              <p>
                From sustainable infrastructure to inclusive financial systems, we back founders who are building technology that empowers people and communities.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/focus">
                <Button variant="link" className="text-primary p-0 text-lg hover:text-primary/80">
                  Explore our focus areas <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* As Featured In (Moved here) */}
            <div className="mt-16 pt-10 border-t border-white/5">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">As Featured In</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6 md:gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <img src="/images/logo-forbes.png" alt="Forbes" className="h-7 md:h-8 w-auto object-contain brightness-0 invert" />
                <img src="/images/logo-inc.png" alt="Inc." className="h-6 md:h-7 w-auto object-contain brightness-0 invert" />
                <img src="/images/logo-entrepreneur.png" alt="Entrepreneur" className="h-7 md:h-8 w-auto object-contain brightness-0 invert" />
                <img src="/images/logo-coindesk.svg" alt="CoinDesk" className="h-5 md:h-6 w-auto object-contain brightness-0 invert" />
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 group">
            <img 
              src="/images/impact-investing.jpg" 
              alt="Impact Investing" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Floating Data Card */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">GLOBAL REACH</span>
                <span className="flex items-center gap-2 text-xs font-mono text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  ACTIVE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-2 rounded bg-white/5 border border-white/5">
                  <div className="text-lg font-serif font-bold text-white">100M+</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">Audience</div>
                </div>
                <div className="text-center p-2 rounded bg-white/5 border border-white/5">
                  <div className="text-lg font-serif font-bold text-white">20+</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">Years</div>
                </div>
                <div className="text-center p-2 rounded bg-white/5 border border-white/5">
                  <div className="text-lg font-serif font-bold text-white">∞</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="/images/beam-accent.jpg" 
            alt="Beam Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Let's build the <span className="italic text-primary">future</span>.</h2>
          <p className="text-xl text-muted-foreground mb-10">
            We partner with a limited number of teams each year. If you are a founder or leader working on a generational challenge, we invite you to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/office#contact">
              <Button size="lg" className="h-14 px-10 text-base bg-white text-black hover:bg-white/90 rounded-full">
                Request Intro
              </Button>
            </Link>
            <Link href="/office">
              <Button size="lg" variant="outline" className="h-14 px-10 text-base border-white/20 hover:bg-white/10 rounded-full">
                Explore The Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
