import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Focus() {
  return (
    <Layout>
      <SEO
        title="Active Thesis | BDE Ventures"
        description="BDE Ventures focuses on AI & decentralized infrastructure, tokenization of real-world assets, digital identity, and go-to-market for complex technologies."
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="pt-12 md:pt-24 pb-20 relative min-h-screen">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] glow-hero pointer-events-none z-[-1]"></div>
          
          <div className="max-w-4xl">
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">Active Thesis</span>
            
            <h1 className="text-5xl md:text-7xl font-black mb-12 leading-[1.1] text-white uppercase tracking-tight">
              The future doesn't arrive. <br />
              It's <span className="text-accent text-glow">built</span>.
            </h1>

            <div className="mb-16">
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                We don't just follow the trends; we've been shaping them for over a decade. Our advisory is grounded in a deep, nuanced understanding of the forces that will define the next generation of the internet.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "The Convergence of AI & Decentralized Infrastructure",
                  desc: "The next wave of artificial intelligence will be autonomous, requiring a new financial and computational substrate. We advise on the critical intersection of AI and blockchain, helping partners build the decentralized protocols, machine-to-machine payment rails, and verifiable compute layers that will power the future of intelligent systems."
                },
                {
                  title: "Tokenization of Real-World Assets (RWAs)",
                  desc: "The boundary between physical and digital value is dissolving. We provide strategic guidance on tokenizing real-world assets, from navigating the complex regulatory landscape to designing novel financial instruments. Our expertise helps partners unlock liquidity, create new markets, and build the infrastructure for a tokenized economy."
                },
                {
                  title: "The Future of Digital Identity & Social Platforms",
                  desc: "As digital life becomes central, verifiable identity and user-owned data are no longer optional. We partner with teams building the next generation of social platforms, decentralized identity solutions, and data sovereignty protocols. We help them design sustainable ecosystems that empower users and create long-term value."
                },
                {
                  title: "Go-to-Market for Complex Technologies",
                  desc: "Breakthrough technology requires a breakthrough strategy. We specialize in crafting and executing go-to-market plans for companies with complex products. From developer relations and community building to enterprise sales and narrative design, we provide a playbook for reaching critical adoption and achieving market leadership."
                }
              ].map((item, index) => (
                <div key={index} className="bg-card p-8 md:p-10 border-gradient rounded-sm card-hover group">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{item.title}</h2>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 bg-card p-8 md:p-12 border-gradient rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white uppercase tracking-wider">Building in these areas?</h2>
                <p className="text-sm text-gray-400 font-light">We are actively seeking new partners.</p>
              </div>
              <Link href="/office#contact">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors whitespace-nowrap">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
