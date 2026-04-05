import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, Hexagon, Brain, Cog, ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="BDE Ventures | Founded by Brian D. Evans"
        description="BDE Ventures was founded by Brian D. Evans. We provide operator-led advisory for founders building at the intersection of technology, blockchain, and AI."
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 relative z-10">
        {/* Hero Section */}
        <section aria-label="Hero Section" className="mb-24 pt-12 md:pt-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] glow-hero pointer-events-none z-[-1]"></div>
          <div className="max-w-4xl relative z-10">
            <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-black tracking-tight leading-[1.05] mb-6 uppercase">
              <span className="block">Guidance for</span>
              <span className="block">The <span className="text-accent text-glow">Architects</span></span>
              <span className="block">of <span className="text-accent text-glow">Tomorrow.</span></span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
              We provide operator-led advisory for founders and leadership teams building at the intersection of technology, blockchain, AI, and consumer brands.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/focus">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors">
                  Explore Focus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
              <Link href="/approach">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:border-accent transition-colors">
                  Our Approach
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* As Seen In Section */}
        <section aria-label="Logos Section" className="mb-32 border-t border-b border-border/50 py-8 relative">
          <span className="absolute -top-3 left-4 bg-background px-2 text-xs font-semibold text-gray-500 uppercase tracking-widest">As Seen In</span>
          <div className="flex justify-center items-center opacity-60 hover:opacity-100 transition-all duration-500 py-4 w-full">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077684115/nLNx4gEup6hKQEtExgUkNn/combined_logos_v6_c38387c0.png" 
              alt="As Seen In: Forbes, Inc., Entrepreneur, Rolling Stone" 
              className="h-12 md:h-16 object-contain" 
            />
          </div>
        </section>

        {/* Active Thesis Section */}
        <section className="mb-32" id="active-thesis">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-accent mb-10 tracking-tight text-glow">Active Thesis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Thesis Card 1 */}
            <div className="bg-card p-8 border-gradient rounded-sm card-hover group">
              <div className="text-accent mb-6 w-12 h-12">
                <Hexagon className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Web3</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Web3 is an overarching term noted to encompass a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.
              </p>
            </div>
            {/* Thesis Card 2 */}
            <div className="bg-card p-8 border-gradient rounded-sm card-hover group">
              <div className="text-accent mb-6 w-12 h-12">
                <Brain className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">AI</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                AI enables development and foundational capabilities that empower founders and leadership teams to create new paradigms of technology, blockchain, and innovations.
              </p>
            </div>
            {/* Thesis Card 3 */}
            <div className="bg-card p-8 border-gradient rounded-sm card-hover group">
              <div className="text-accent mb-6 w-12 h-12">
                <Cog className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Deep Tech</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Deep tech is often defined as technology based on tangible scientific discoveries or engineering innovations. They try to solve big issues that really affect the world.
              </p>
            </div>
            {/* Thesis Card 4 */}
            <div className="bg-card p-8 border-gradient rounded-sm card-hover group">
              <div className="text-accent mb-6 w-12 h-12">
                <ShoppingCart className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Consumer & AdTech</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                We partner with brands redefining direct-to-consumer (DTC) and consumer packaged goods (CPG), as well as the advertising technologies that scale them.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-32" id="philosophy">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
            <div className="md:w-1/2">
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-accent tracking-tight leading-[1.1] text-glow">
                Capital With<br />Conviction.
              </h2>
            </div>
            <div className="md:w-1/2 flex items-center">
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                BDE Ventures is an emerging thesis-driven advisory firm. We combine operator-led guidance with deep ecosystem knowledge to support founders navigating complex technological landscapes. We build lasting relationships based on trust, mutual respect, and shared vision, focusing on high-impact areas where our expertise can catalyze significant growth.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/50 pt-12">
            <div>
              <h4 className="text-lg font-bold text-accent mb-3 uppercase tracking-wide">Operator DNA</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Operator DNA is the cornerstone of our advisory model. We bring hands-on experience and strategic foresight to every partnership, drawn from real-world operational backgrounds.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-accent mb-3 uppercase tracking-wide">Active Strategy</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Strategy isn't static; it requires dynamic adaptation. We work actively alongside teams to refine approaches, mitigate risks, and seize emerging opportunities in volatile markets.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-accent mb-3 uppercase tracking-wide">Enduring Value</h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Enduring value is created through sustainable business models, robust governance, and a commitment to long-term impact rather than short-term gains.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Bio Section */}
        <section className="mb-32" id="leadership">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Column */}
            <div className="lg:w-1/3 relative">
              <div className="aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden border border-border/50 relative">
                <img 
                  alt="Brian D. Evans" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077684115/nLNx4gEup6hKQEtExgUkNn/Brian_Turtleneck_cropped_17b4b49c.webp"
                />
                <div className="absolute bottom-0 left-0 bg-accent text-accent-foreground px-4 py-2 font-bold uppercase text-sm tracking-wider">
                  Brian D. Evans
                </div>
              </div>
            </div>
            {/* Bio Content Column */}
            <div className="lg:w-2/3 bg-card p-8 md:p-12 border-gradient rounded-sm flex flex-col justify-center">
              <p className="text-base text-gray-300 mb-6 leading-relaxed font-light">
                Brian D. Evans is a marketer who consistently positions himself at the inception of major technological shifts. He founded one of the earliest influencer marketing agencies and scaled it into a top 25 Inc. 500 company.
              </p>
              <p className="text-base text-gray-300 mb-8 leading-relaxed font-light">
                His edge comes from viewing emerging markets through a distinct operator's lens, informed by decades of hands-on experience in building and scaling companies. He identifies how to craft the narrative and drive real adoption early. This approach guided his backing of foundational blockchain projects and his subsequent pioneering investments in AI privacy technology.
              </p>
              <div>
                <Link href="/office">
                  <button className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors">
                    Access Full Bio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Anti-Pitch Section */}
        <section className="mb-12 bg-card p-8 md:p-12 border-gradient rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-8" id="connect">
          <div className="md:w-2/3">
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">The Filter</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight leading-[1.1] mb-4">
              We do not back <br /><span className="text-accent text-glow">tourists.</span>
            </h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xl">
              We partner exclusively with operators building the next iteration of the internet. If you are solving a generational challenge in our areas of focus, we invite you to reach out.
            </p>
          </div>
          <div className="md:w-1/3 flex md:justify-end">
            <Link href="/office#contact">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors whitespace-nowrap">
                Establish Connection
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
