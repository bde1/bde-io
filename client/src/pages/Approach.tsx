import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Approach() {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mb-20 mx-auto text-center">
            <span className="font-mono text-xs text-primary tracking-widest uppercase mb-6 block">Our Approach</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Hands-on <span className="italic text-primary">partnership</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our advisory is not theoretical. It is a hands-on partnership built on years of operational experience. We work with a select group of founders and leadership teams, providing tailored guidance to solve their most critical challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1 */}
            <div className="group p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">Strategic Counsel & Narrative Design</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                We help you refine your vision and articulate a compelling narrative that resonates with investors, customers, and partners. We act as a strategic sounding board, pressure-testing assumptions and helping you navigate pivotal decisions with clarity and conviction.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full">
              <div className="h-14 w-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-blue-400 transition-colors">Distribution as a Moat</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                In a noisy world, attention is the scarcest asset. Leveraging Brian's background in building media empires that reach hundreds of millions, we help you engineer distribution advantages that competitors can't copy. We turn your narrative into a distribution engine, ensuring your product doesn't just launch—it lands.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full">
              <div className="h-14 w-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-8 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-purple-400 transition-colors">Capital & Corporate Strategy</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                We guide you through the complexities of the capital landscape. From fundraising strategy and investor relations to treasury management and corporate structuring, we provide the expertise needed to build a resilient, well-capitalized organization.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link href="/office#contact">
              <Button size="lg" className="h-14 px-10 text-base bg-white text-black hover:bg-white/90 rounded-full">
                Request Intro <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
