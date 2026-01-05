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

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              
              {/* Article 1: The Generalist Era */}
              <Link href="/insights/the-generalist-era-is-here" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-sm bg-neutral-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop" 
                    alt="The Generalist Era Is Here" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full border border-white/10 text-white text-xs font-mono uppercase tracking-widest bg-black/50 backdrop-blur-sm">
                      Market Thesis
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-neutral-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>December 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-serif text-white group-hover:text-yellow-500 transition-colors leading-tight">
                    The Generalist Era Is Here
                  </h3>
                  
                  <p className="text-neutral-400 line-clamp-3 leading-relaxed">
                    Specialists are in trouble. Not "disrupted" trouble. Replaced trouble. The ones who'll make it are already pivoting toward knowing more things, not just one thing better.
                  </p>
                  
                  <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium pt-2">
                    <span className="font-mono uppercase tracking-wider text-xs">Read Article</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Article 2: The Only Thing That Matters */}
              <Link href="/insights/the-only-thing-that-matters" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-sm bg-neutral-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop" 
                    alt="The Only Thing That Matters in the AI Gold Rush" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full border border-white/10 text-white text-xs font-mono uppercase tracking-widest bg-black/50 backdrop-blur-sm">
                      Strategy
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-neutral-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>December 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>6 min read</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-serif text-white group-hover:text-yellow-500 transition-colors leading-tight">
                    The Only Thing That Matters in the AI Gold Rush
                  </h3>
                  
                  <p className="text-neutral-400 line-clamp-3 leading-relaxed">
                    Capital is a commodity. Attention is not. In a world where anyone can spin up a powerful AI, the only thing that matters is your ability to get that AI in front of people.
                  </p>
                  
                  <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium pt-2">
                    <span className="font-mono uppercase tracking-wider text-xs">Read Article</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
