import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Thesis() {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container max-w-4xl mx-auto">
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-6 block">The Manifesto</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
            The future doesn't arrive. <br />
            It's <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">built</span>.
          </h1>
          
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
            <p className="lead text-2xl text-muted-foreground leading-relaxed mb-12 font-light">
              We entered the blockchain space when the infrastructure was primitive and the believers were few. We stayed because we recognized something that most missed: this wasn't just a new asset class. It was a new architecture for trust, ownership, and value creation.
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />

            <h3 className="font-serif text-3xl mb-6">The Shift to Digital Sovereignty</h3>
            <p>
              A decade later, the landscape has transformed. Regulatory clarity has arrived. Institutional infrastructure has matured. The question is no longer whether digital assets belong in sophisticated portfolios—74% of family offices have already answered that question. The question now is who will build the critical infrastructure for the next phase.
            </p>
            <p>
              We believe that the next decade will be defined by the transition from centralized intermediaries to decentralized protocols. This isn't just about currency; it's about identity, governance, and the very fabric of how we organize society.
            </p>

            <h3 className="font-serif text-3xl mb-6 mt-12">Our Operator Advantage</h3>
            <p>
              BDE is not a passive allocator. We are operators. We have built, scaled, and exited companies in this space. We understand the technical challenges, the regulatory hurdles, and the psychological toll of building at the frontier.
            </p>
            <p>
              This "operator DNA" allows us to see value where others see risk. It allows us to support our portfolio companies with more than just capital—we provide the strategic guidance that only comes from having been in the arena.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 my-12 italic text-2xl font-serif text-white/90">
              "True conviction comes from understanding the code, not just the chart."
            </blockquote>

            <h3 className="font-serif text-3xl mb-6 mt-12">The Next Frontier</h3>
            <p>
              We are currently deploying capital into three core areas:
            </p>
            <ul className="list-none pl-0 space-y-6 mt-8">
              <li className="flex gap-4 items-start">
                <span className="font-mono text-primary text-sm pt-1">01</span>
                <div>
                  <strong className="block text-white text-xl mb-2">DeFi Infrastructure</strong>
                  <span className="text-muted-foreground">The rails that will carry the world's financial value.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-mono text-primary text-sm pt-1">02</span>
                <div>
                  <strong className="block text-white text-xl mb-2">Digital Identity</strong>
                  <span className="text-muted-foreground">Sovereign control over personal data and reputation.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-mono text-primary text-sm pt-1">03</span>
                <div>
                  <strong className="block text-white text-xl mb-2">Web3 Consumer</strong>
                  <span className="text-muted-foreground">Applications that bridge the gap between crypto-native and mass adoption.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-serif mb-2">Align with our vision?</h4>
              <p className="text-muted-foreground">We are actively deploying capital for Q1 2026.</p>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
              Contact The Office <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
