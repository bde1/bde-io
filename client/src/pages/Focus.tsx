import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Focus() {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container max-w-4xl mx-auto">
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-6 block">Areas of Focus</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
            The future doesn't arrive. <br />
            It's <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">built</span>.
          </h1>
          
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
            <p className="lead text-2xl text-muted-foreground leading-relaxed mb-12 font-light">
              We don't just follow the trends; we've been shaping them for over a decade. Our advisory is grounded in a deep, nuanced understanding of the forces that will define the next generation of the internet.
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />

            <div className="space-y-20">
              {/* Focus Area 1 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">01</span>
                <h3 className="font-serif text-3xl mb-4 text-white">The Convergence of AI & Decentralized Infrastructure</h3>
                <p className="text-muted-foreground">
                  The next wave of artificial intelligence will be autonomous, requiring a new financial and computational substrate. We advise on the critical intersection of AI and blockchain, helping partners build the decentralized protocols, machine-to-machine payment rails, and verifiable compute layers that will power the future of intelligent systems.
                </p>
              </div>

              {/* Focus Area 2 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">02</span>
                <h3 className="font-serif text-3xl mb-4 text-white">Tokenization of Real-World Assets (RWAs)</h3>
                <p className="text-muted-foreground">
                  The boundary between physical and digital value is dissolving. We provide strategic guidance on tokenizing real-world assets, from navigating the complex regulatory landscape to designing novel financial instruments. Our expertise helps partners unlock liquidity, create new markets, and build the infrastructure for a tokenized economy.
                </p>
              </div>

              {/* Focus Area 3 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">03</span>
                <h3 className="font-serif text-3xl mb-4 text-white">The Future of Digital Identity & Social Platforms</h3>
                <p className="text-muted-foreground">
                  As digital life becomes central, verifiable identity and user-owned data are no longer optional. We partner with teams building the next generation of social platforms, decentralized identity solutions, and data sovereignty protocols. We help them design sustainable ecosystems that empower users and create long-term value.
                </p>
              </div>

              {/* Focus Area 4 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">04</span>
                <h3 className="font-serif text-3xl mb-4 text-white">Go-to-Market for Complex Technologies</h3>
                <p className="text-muted-foreground">
                  Breakthrough technology requires a breakthrough strategy. We specialize in crafting and executing go-to-market plans for companies with complex products. From developer relations and community building to enterprise sales and narrative design, we provide a playbook for reaching critical adoption and achieving market leadership.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-serif mb-2">Building in these areas?</h4>
              <p className="text-muted-foreground">We are actively seeking partners for Q1 2026.</p>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
              Connect with Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
