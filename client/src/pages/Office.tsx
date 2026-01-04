import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Linkedin } from "lucide-react";

export default function Office() {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Image/Profile */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 mb-8 group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                  <img 
                    src="/images/brian-d-evans-portrait.webp" 
                    alt="Brian D. Evans" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-8 left-8 z-20">
                    <h2 className="text-3xl font-serif font-bold text-white mb-1">Brian D. Evans</h2>
                    <p className="font-mono text-sm text-primary tracking-widest uppercase">Founder</p>
                  </div>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5 hover:text-primary">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5 hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5 hover:text-primary">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs text-primary tracking-widest uppercase mb-6 block">The Office</span>
              <h1 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">
                Built by an <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">operator</span>.
              </h1>

              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                <p className="lead text-xl text-white/90 mb-8">
                  BDE is the investment vehicle of Brian D. Evans. We are operators first, investors second.
                </p>
                
                <p>
                  Most capital is passive. Ours is active. Brian has spent almost two decades in the trenches—building a media empire that reached over 100 million people, building and exiting numerous tech and e-commerce companies, and navigating the volatility of emerging markets since the early days.
                </p>
                <p>
                  His work has influenced millions, running massive marketing campaigns for some of the world's biggest brands in their early stages. He didn't just watch the industry evolve; he helped shape it.
                </p>
                <p>
                  We don't just read the whitepaper; we understand the go-to-market. We don't just look at the cap table; we look at the community. When we partner with a founder, we bring the scars, the network, and the playbook of someone who has actually built.
                </p>

                <h3 className="text-white font-serif text-2xl mt-12 mb-6">Accolades & Recognition</h3>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="font-serif text-2xl text-primary font-bold">Inc. 500</span>
                    <span className="text-sm">Named one of the fastest-growing private companies in America.</span>
                  </li>
                  <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="font-serif text-2xl text-primary font-bold">Forbes</span>
                    <span className="text-sm">Top Digital Marketer & Influencer.</span>
                  </li>
                  <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="font-serif text-2xl text-primary font-bold">Entrepreneur</span>
                    <span className="text-sm">Regular contributor and thought leader.</span>
                  </li>
                </ul>

                <h3 className="text-white font-serif text-2xl mt-12 mb-6">Philosophy</h3>
                <p>
                  "I believe that the most valuable asset in the digital age is attention, but the most enduring asset is trust. We invest in protocols and platforms that are rebuilding the trust layer of the internet."
                </p>
              </div>

              <div className="mt-16 pt-16 border-t border-white/10">
                <h3 className="text-3xl font-serif mb-6">Let's build the future.</h3>
                <p className="text-muted-foreground mb-8">
                  We partner with a limited number of teams each year. If you are a founder or leader working on a generational challenge in our areas of focus, we invite you to connect.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"></textarea>
                  </div>
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
                    Request Introduction
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
