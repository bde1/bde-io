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
            It's <span className="italic text-primary">built</span>.
          </h1>
          
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
            <p className="lead text-2xl text-muted-foreground leading-relaxed mb-12 font-light">
              We don't just follow the trends; we've been shaping them for almost two decades. Our advisory is grounded in a deep, nuanced understanding of the forces that will define the next generation of the internet.
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />

            <div className="space-y-20">
              {/* Focus Area 1 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">01</span>
                <h3 className="font-serif text-3xl mb-4 text-white">Blockchain Technology & Web3</h3>
                <p className="text-muted-foreground">
                  We are native to this space. We back the protocols and platforms that are re-architecting the internet's trust layer. From Layer 1 infrastructure to decentralized finance (DeFi) and governance mechanisms, we support the builders who are creating a more open, permissionless, and user-owned web.
                </p>
              </div>

              {/* Focus Area 2 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">02</span>
                <h3 className="font-serif text-3xl mb-4 text-white">The Convergence of AI & Decentralized Infrastructure</h3>
                <p className="text-muted-foreground">
                  The next wave of artificial intelligence will be autonomous, requiring a new financial and computational substrate. We advise on the critical intersection of AI and blockchain, helping partners build the decentralized protocols, machine-to-machine payment rails, and verifiable compute layers that will power the future of intelligent systems.
                </p>
              </div>

              {/* Focus Area 3 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">03</span>
                <h3 className="font-serif text-3xl mb-4 text-white">Tokenization of Real-World Assets (RWAs)</h3>
                <p className="text-muted-foreground">
                  The boundary between physical and digital value is dissolving. We provide strategic guidance on tokenizing real-world assets, from navigating the complex regulatory landscape to designing novel financial instruments. Our expertise helps partners unlock liquidity, create new markets, and build the infrastructure for a tokenized economy.
                </p>
              </div>

              {/* Focus Area 4 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">04</span>
                <h3 className="font-serif text-3xl mb-4 text-white">Consumer & Enterprise SaaS</h3>
                <p className="text-muted-foreground">
                  Software is still eating the world, but the menu has changed. We look for vertical SaaS solutions that solve deep, specific problems for overlooked industries, and consumer applications that leverage new technologies to create delightful, sticky experiences. We value capital efficiency and clear paths to profitability.
                </p>
              </div>

              {/* Focus Area 5 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">05</span>
                <h3 className="font-serif text-3xl mb-4 text-white">Entertainment & Media</h3>
                <p className="text-muted-foreground">
                  The lines between content, gaming, and ownership are blurring. We advise projects at the forefront of this shift, helping them build immersive experiences, creator economies, and new media formats that leverage blockchain and AI to redefine how we consume and interact with culture.
                </p>
              </div>

              {/* Focus Area 6 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">06</span>
                <h3 className="font-serif text-3xl mb-4 text-white">Privacy Technology</h3>
                <p className="text-muted-foreground">
                  In an era of surveillance capitalism, privacy is the ultimate luxury—and a fundamental right. We support the development of zero-knowledge proofs, privacy-preserving computation, and secure communication tools. We believe that privacy is a prerequisite for a free and open digital society.
                </p>
              </div>

              {/* Focus Area 7 */}
              <div>
                <span className="font-mono text-primary text-sm block mb-2">07</span>
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
