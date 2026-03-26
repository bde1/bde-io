import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { GradientText } from "@/components/GradientText";
import { SectionLabel } from "@/components/SectionLabel";
import { PageWrapper } from "@/components/PageWrapper";
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
      <PageWrapper>
        <div className="container max-w-4xl mx-auto">
          <SectionLabel>Our Approach</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Hands-on <GradientText>partnership</GradientText>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-20 max-w-3xl">
            Our advisory is not theoretical. It is built on years of operational experience. We work with a select group of founders and leadership teams, providing tailored guidance through three interconnected disciplines.
          </p>

          {/* Narrative sequence — numbered steps with large type */}
          <div className="space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start">
              <span className="text-7xl font-serif text-primary/20 leading-none">01</span>
              <div>
                <h2 className="text-3xl font-serif mb-4">Strategic Counsel &amp; Narrative Design</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We help you refine your vision and articulate a compelling narrative that resonates with investors, customers, and partners.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Acting as a strategic sounding board, we pressure-test assumptions and help you navigate pivotal decisions with clarity and conviction. From pitch positioning to market messaging, we help you tell the story that unlocks the next stage of growth.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start">
              <span className="text-7xl font-serif text-primary/20 leading-none">02</span>
              <div>
                <h2 className="text-3xl font-serif mb-4">Ecosystem &amp; Go-to-Market Activation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A great product is not enough. We help you build and activate the ecosystem around it.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This includes tokenomics design, developer relations, community growth strategies, and forging key partnerships that accelerate your path to market leadership. We bring the network and playbook to turn technology into traction.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start">
              <span className="text-7xl font-serif text-primary/20 leading-none">03</span>
              <div>
                <h2 className="text-3xl font-serif mb-4">Capital &amp; Corporate Strategy</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We guide you through the complexities of the capital landscape.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From fundraising strategy and investor relations to treasury management and corporate structuring, we provide the expertise needed to build a resilient, well-capitalized organization that can weather volatility and seize opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <Link href="/office#contact">
              <Button size="lg" className="h-14 px-10 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Connect with Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </PageWrapper>
    </Layout>
  );
}
