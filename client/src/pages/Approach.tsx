import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Approach() {
  return (
    <Layout>
      <SEO
        title="Philosophy | BDE Ventures"
        description="BDE provides hands-on, operator-led advisory. We work with a select group of founders on strategic counsel, ecosystem activation, and capital strategy."
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="pt-12 md:pt-24 pb-20 relative min-h-screen">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] glow-hero pointer-events-none z-[-1]"></div>
          
          <div className="max-w-4xl">
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">Philosophy</span>
            
            <h1 className="text-5xl md:text-7xl font-black mb-12 leading-[1.1] text-white uppercase tracking-tight">
              Hands-on <br /><span className="text-accent text-glow">partnership</span>.
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light mb-20 max-w-3xl">
              Our advisory is not theoretical. It is built on years of operational experience. We work with a select group of founders and leadership teams, providing tailored guidance through three interconnected disciplines.
            </p>

            {/* Narrative sequence */}
            <div className="space-y-8">
              {[
                {
                  title: "Strategic Counsel & Narrative Design",
                  desc1: "We help you refine your vision and articulate a compelling narrative that resonates with investors, customers, and partners.",
                  desc2: "Acting as a strategic sounding board, we pressure-test assumptions and help you navigate pivotal decisions with clarity and conviction. From pitch positioning to market messaging, we help you tell the story that unlocks the next stage of growth."
                },
                {
                  title: "Ecosystem & Go-to-Market Activation",
                  desc1: "A great product is not enough. We help you build and activate the ecosystem around it.",
                  desc2: "This includes tokenomics design, developer relations, community growth strategies, and forging key partnerships that accelerate your path to market leadership. We bring the network and playbook to turn technology into traction."
                },
                {
                  title: "Capital & Corporate Strategy",
                  desc1: "We guide you through the complexities of the capital landscape.",
                  desc2: "From fundraising strategy and investor relations to treasury management and corporate structuring, we provide the expertise needed to build a resilient, well-capitalized organization that can weather volatility and seize opportunity."
                }
              ].map((item, index) => (
                <div key={index} className="bg-card p-8 md:p-12 border-gradient rounded-sm card-hover group">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{item.title}</h2>
                    <p className="text-base text-gray-300 font-medium">
                      {item.desc1}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {item.desc2}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 bg-card p-8 md:p-12 border-gradient rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white uppercase tracking-wider">Ready to build?</h2>
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
