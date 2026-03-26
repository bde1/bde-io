import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { GradientText } from "@/components/GradientText";
import { SectionLabel } from "@/components/SectionLabel";
import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Focus() {
  return (
    <Layout>
      <SEO
        title="Areas of Focus | BDE Ventures"
        description="BDE Ventures focuses on AI & decentralized infrastructure, tokenization of real-world assets, digital identity, and go-to-market for complex technologies."
      />
      <PageWrapper>
        <div className="container max-w-4xl mx-auto">
          <SectionLabel>Areas of Focus</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
            The future doesn't arrive. <br />
            It's <GradientText>built</GradientText>.
          </h1>

          <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
            <p className="lead text-2xl text-muted-foreground leading-relaxed mb-12 font-light">
              We don't just follow the trends; we've been shaping them for over a decade. Our advisory is grounded in a deep, nuanced understanding of the forces that will define the next generation of the internet.
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />

            <div className="space-y-20">
              <div>
                <span className="font-mono text-primary text-sm block mb-2">01</span>
                <h2 className="font-serif text-3xl mb-4 text-white">The Convergence of AI &amp; Decentralized Infrastructure</h2>
                <p className="text-muted-foreground">
                  The next wave of artificial intelligence will be autonomous, requiring a new financial and computational substrate. We advise on the critical intersection of AI and blockchain, helping partners build the decentralized protocols, machine-to-machine payment rails, and verifiable compute layers that will power the future of intelligent systems.
                </p>
              </div>

              <div>
                <span className="font-mono text-primary text-sm block mb-2">02</span>
                <h2 className="font-serif text-3xl mb-4 text-white">Tokenization of Real-World Assets (RWAs)</h2>
                <p className="text-muted-foreground">
                  The boundary between physical and digital value is dissolving. We provide strategic guidance on tokenizing real-world assets, from navigating the complex regulatory landscape to designing novel financial instruments. Our expertise helps partners unlock liquidity, create new markets, and build the infrastructure for a tokenized economy.
                </p>
              </div>

              <div>
                <span className="font-mono text-primary text-sm block mb-2">03</span>
                <h2 className="font-serif text-3xl mb-4 text-white">The Future of Digital Identity &amp; Social Platforms</h2>
                <p className="text-muted-foreground">
                  As digital life becomes central, verifiable identity and user-owned data are no longer optional. We partner with teams building the next generation of social platforms, decentralized identity solutions, and data sovereignty protocols. We help them design sustainable ecosystems that empower users and create long-term value.
                </p>
              </div>

              <div>
                <span className="font-mono text-primary text-sm block mb-2">04</span>
                <h2 className="font-serif text-3xl mb-4 text-white">Go-to-Market for Complex Technologies</h2>
                <p className="text-muted-foreground">
                  Breakthrough technology requires a breakthrough strategy. We specialize in crafting and executing go-to-market plans for companies with complex products. From developer relations and community building to enterprise sales and narrative design, we provide a playbook for reaching critical adoption and achieving market leadership.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-serif mb-2">Building in these areas?</h2>
              <p className="text-muted-foreground">We are actively seeking new partners.</p>
            </div>
            <Link href="/office#contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                Connect with Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </PageWrapper>
    </Layout>
  );
}
