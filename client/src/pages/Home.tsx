import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { GradientText } from "@/components/GradientText";
import { SectionLabel } from "@/components/SectionLabel";
import { StatusPulse } from "@/components/StatusPulse";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="BDE Ventures | Family Office of Brian D. Evans"
        description="BDE is the family office of Brian D. Evans. We provide operator-led advisory for founders building at the intersection of technology, blockchain, and culture."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 z-10" />
          <img
            src="/images/hero-glow.jpg"
            alt=""
            role="presentation"
            className="w-full h-full object-cover opacity-60"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-20" />
        </div>

        <div className="container relative z-30 flex flex-col items-center text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-1000">
            <StatusPulse />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Strategic Advisory Active</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] mb-8 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-1000 motion-safe:delay-200">
            Guidance for the <span className="italic text-muted-foreground">architects</span> of <GradientText>tomorrow</GradientText>.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-1000 motion-safe:delay-400">
            We provide operator-led advisory for founders and leadership teams building at the intersection of technology, blockchain, and culture. Our experience becomes your strategic advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/focus">
              <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Explore Our Focus <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/approach">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/10 hover:bg-white/5 hover:text-white rounded-full">
                Our Approach
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator — static line, no bounce */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>
      </section>

      {/* Philosophy — asymmetric 2-column instead of identical card grid */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Our Philosophy</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Capital with <GradientText>conviction</GradientText>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most capital is passive. Ours is active. We bring decades of operational experience — building a media empire that reached over 100 million people, navigating emerging markets since their earliest days, and advising some of the world's most ambitious teams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When we partner with a founder, we bring the scars, the network, and the playbook of someone who has actually built.
              </p>
            </div>

            <div className="space-y-6 lg:pt-16">
              <div className="p-6 border-l-2 border-primary/40">
                <h3 className="text-xl font-serif mb-2">Operator DNA</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Born from the trenches of building, not just advising. Every recommendation is grounded in direct experience scaling companies.
                </p>
              </div>
              <div className="p-6 border-l-2 border-white/10">
                <h3 className="text-xl font-serif mb-2">Active Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't follow markets; we help you define them. Our guidance is grounded in high conviction and deep domain expertise.
                </p>
              </div>
              <div className="p-6 border-l-2 border-white/10">
                <h3 className="text-xl font-serif mb-2">Enduring Value</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building for the next decade, not the next quarter. We help structure your narrative and operations for long-term resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/brian-turtleneck.jpg"
                alt="Brian D. Evans — Founder of BDE Ventures"
                loading="lazy"
                width={600}
                height={800}
                className="w-full h-full object-cover object-top grayscale"
              />
            </div>
            <div>
              <SectionLabel>The Founder</SectionLabel>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Brian D. Evans</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                "For over two decades, I've operated at the forefront of emerging tech, blending digital marketing mastery with human psychology. Technology is easily replicated, but attention is not. In this era, the final moat is distribution."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                As an Inc. 500 entrepreneur and lifelong builder, Brian brings a unique operator's perspective to every project. His approach combines deep marketing understanding with a genuine commitment to long-term value creation.
              </p>
              <Link href="/office">
                <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-primary rounded-full px-8">
                  Read Full Bio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50 mb-10">As Featured In</p>
          <div className="flex flex-wrap items-center gap-12 md:gap-20 opacity-40">
            <span className="text-2xl md:text-3xl font-serif italic text-muted-foreground">Forbes</span>
            <span className="text-3xl md:text-4xl font-serif font-black italic text-muted-foreground leading-none">Inc.</span>
            <span className="text-xl md:text-2xl font-sans font-light tracking-wide text-muted-foreground">Entrepreneur</span>
            <span className="text-xl md:text-2xl font-sans font-bold text-muted-foreground tracking-tight">CoinDesk</span>
          </div>
        </div>
      </section>

      {/* Focus Teaser */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.03]" />
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Areas of Focus</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Where technology meets <GradientText>transformation</GradientText>.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                From the convergence of AI and decentralized infrastructure to the tokenization of real-world assets, we concentrate our expertise where the impact is highest and the opportunity is most enduring.
              </p>
              <p>
                We advise teams navigating the complex intersection of breakthrough technology, regulatory frameworks, and market adoption.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/focus">
                <Button variant="link" className="text-primary p-0 text-lg hover:text-primary/80">
                  Explore our focus areas <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/abstract-network.jpg"
              alt=""
              role="presentation"
              loading="lazy"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/beam-accent.jpg"
            alt=""
            role="presentation"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to <GradientText>connect</GradientText>?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            We work with a small number of exceptional teams each year. If you're building something that matters, we'd like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/office#contact">
              <Button size="lg" className="h-14 px-10 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Request Introduction
              </Button>
            </Link>
            <Link href="/office">
              <Button size="lg" variant="outline" className="h-14 px-10 text-base border-white/20 hover:bg-white/10 rounded-full">
                About The Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
