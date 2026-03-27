import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Approach() {
  return (
    <Layout>
      <SEO
        title="Our Approach | BDE Ventures"
        description="BDE provides hands-on, operator-led advisory. We work with a select group of founders on strategic counsel, ecosystem activation, and capital strategy."
      />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <div className="pt-32 pb-20 relative bg-grid-pattern min-h-screen">
        <div className="absolute inset-0 glow-hero z-0 opacity-30" />
        
        <div className="container relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 mb-8 text-accent font-mono text-sm px-4 py-2 border border-border bg-card/30 uppercase tracking-widest">
            <span>Approach</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-primary uppercase tracking-tighter">
            Hands-on <br /><span className="text-accent">partnership</span>.
          </h1>
          
          <p className="text-xl text-muted-foreground font-mono leading-relaxed mb-20 max-w-3xl border-l-2 border-accent pl-6">
            Our advisory is not theoretical. It is built on years of operational experience. We work with a select group of founders and leadership teams, providing tailored guidance through three interconnected disciplines.
          </p>

          {/* Narrative sequence */}
          <div className="space-y-12">
            {[
              {
                id: "01",
                title: "Strategic Counsel & Narrative Design",
                desc1: "We help you refine your vision and articulate a compelling narrative that resonates with investors, customers, and partners.",
                desc2: "Acting as a strategic sounding board, we pressure-test assumptions and help you navigate pivotal decisions with clarity and conviction. From pitch positioning to market messaging, we help you tell the story that unlocks the next stage of growth."
              },
              {
                id: "02",
                title: "Ecosystem & Go-to-Market Activation",
                desc1: "A great product is not enough. We help you build and activate the ecosystem around it.",
                desc2: "This includes tokenomics design, developer relations, community growth strategies, and forging key partnerships that accelerate your path to market leadership. We bring the network and playbook to turn technology into traction."
              },
              {
                id: "03",
                title: "Capital & Corporate Strategy",
                desc1: "We guide you through the complexities of the capital landscape.",
                desc2: "From fundraising strategy and investor relations to treasury management and corporate structuring, we provide the expertise needed to build a resilient, well-capitalized organization that can weather volatility and seize opportunity."
              }
            ].map((item, index) => (
              <div key={item.id} className="relative border border-border bg-card/30 p-8 md:p-12 group hover:border-accent/50 transition-colors">
                <div className="crosshair-tl" />
                <div className="crosshair-tr" />
                <div className="crosshair-bl" />
                <div className="crosshair-br" />
                
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                
                <div className="flex flex-col gap-6 items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary uppercase tracking-wider">{item.title}</h2>
                    <p className="text-lg text-primary/80 font-mono mb-4">
                      {item.desc1}
                    </p>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      {item.desc2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center relative border border-border bg-card/30 p-12">
            <div className="crosshair-tl" />
            <div className="crosshair-tr" />
            <div className="crosshair-bl" />
            <div className="crosshair-br" />
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-accent font-mono text-xs uppercase tracking-widest">
              Next Steps
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">Ready to build?</h2>
            <Link href="/office#contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-mono uppercase tracking-wider h-14 px-10">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
