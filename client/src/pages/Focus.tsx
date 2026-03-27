import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "wouter";

export default function Focus() {
  return (
    <Layout>
      <SEO
        title="Areas of Focus | BDE Ventures"
        description="BDE Ventures focuses on AI & decentralized infrastructure, tokenization of real-world assets, digital identity, and go-to-market for complex technologies."
      />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <div className="pt-32 pb-20 relative bg-grid-pattern min-h-screen">
        <div className="absolute inset-0 glow-hero z-0 opacity-30" />
        
        <div className="container relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 mb-8 text-accent font-mono text-sm px-4 py-2 border border-border bg-card/30">
            <Terminal className="w-4 h-4" />
            <span>SYS.FOCUS_AREAS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight text-primary uppercase tracking-tighter">
            The future doesn't arrive. <br />
            It's <span className="text-accent">built</span>.
          </h1>

          <div className="mb-16">
            <p className="text-xl text-muted-foreground font-mono leading-relaxed border-l-2 border-accent pl-6">
              &gt; We don't just follow the trends; we've been shaping them for over a decade. Our advisory is grounded in a deep, nuanced understanding of the forces that will define the next generation of the internet.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                id: "01",
                title: "The Convergence of AI & Decentralized Infrastructure",
                desc: "The next wave of artificial intelligence will be autonomous, requiring a new financial and computational substrate. We advise on the critical intersection of AI and blockchain, helping partners build the decentralized protocols, machine-to-machine payment rails, and verifiable compute layers that will power the future of intelligent systems."
              },
              {
                id: "02",
                title: "Tokenization of Real-World Assets (RWAs)",
                desc: "The boundary between physical and digital value is dissolving. We provide strategic guidance on tokenizing real-world assets, from navigating the complex regulatory landscape to designing novel financial instruments. Our expertise helps partners unlock liquidity, create new markets, and build the infrastructure for a tokenized economy."
              },
              {
                id: "03",
                title: "The Future of Digital Identity & Social Platforms",
                desc: "As digital life becomes central, verifiable identity and user-owned data are no longer optional. We partner with teams building the next generation of social platforms, decentralized identity solutions, and data sovereignty protocols. We help them design sustainable ecosystems that empower users and create long-term value."
              },
              {
                id: "04",
                title: "Go-to-Market for Complex Technologies",
                desc: "Breakthrough technology requires a breakthrough strategy. We specialize in crafting and executing go-to-market plans for companies with complex products. From developer relations and community building to enterprise sales and narrative design, we provide a playbook for reaching critical adoption and achieving market leadership."
              }
            ].map((item) => (
              <div key={item.id} className="relative border border-border bg-card/30 p-8 group hover:border-accent/50 transition-colors">
                <div className="crosshair-tl" />
                <div className="crosshair-tr" />
                <div className="crosshair-bl" />
                <div className="crosshair-br" />
                
                <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="font-mono text-accent/50 font-bold text-2xl group-hover:text-accent transition-colors">
                    [{item.id}]
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-primary uppercase tracking-wider">{item.title}</h2>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 relative border border-border bg-card/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="crosshair-tl" />
            <div className="crosshair-tr" />
            <div className="crosshair-bl" />
            <div className="crosshair-br" />
            
            <div>
              <h2 className="text-2xl font-bold mb-2 text-primary uppercase tracking-wider">Building in these areas?</h2>
              <p className="text-muted-foreground font-mono text-sm">&gt; We are actively seeking new partners.</p>
            </div>
            <Link href="/office#contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-mono uppercase tracking-wider h-14 px-8 whitespace-nowrap">
                Establish Connection <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
