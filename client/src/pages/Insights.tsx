import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Layout from "@/components/Layout";

export default function Insights() {
  return (
    <Layout>
      <div className="min-h-screen bg-neutral-950 text-white selection:bg-yellow-500/30">
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="mb-20 max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-8">
                Insights
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                Perspectives on the convergence of technology, psychology, and market dynamics.
              </p>
            </div>

            {/* Featured Article (Hero Style) */}
            <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-white/10 pt-12">
              {/* Image Side */}
              <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto lg:h-[600px] overflow-hidden rounded-sm bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop" 
                  alt="The Generalist Era Is Here" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Content Side */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-yellow-500 mb-6 font-mono tracking-wider uppercase">
                  <span>Featured Analysis</span>
                  <span className="w-12 h-px bg-yellow-500/30" />
                  <span>Market Thesis</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 group-hover:text-yellow-500 transition-colors duration-300">
                  <Link href="/insights/the-generalist-era-is-here">
                    The Generalist Era Is Here
                  </Link>
                </h2>
                
                <p className="text-lg text-neutral-400 leading-relaxed mb-8 line-clamp-3">
                  Specialists are in trouble. Not "disrupted" trouble. Replaced trouble. The ones who'll make it are already pivoting toward knowing more things, not just one thing better.
                </p>

                <div className="flex items-center gap-6 text-sm text-neutral-500 mb-10 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>December 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>5 min read</span>
                  </div>
                </div>

                <Link href="/insights/the-generalist-era-is-here">
                  <button className="inline-flex items-center gap-2 text-white border-b border-yellow-500/30 pb-1 hover:border-yellow-500 transition-colors group/btn">
                    <span className="font-mono uppercase tracking-wider text-sm">Read Full Article</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
