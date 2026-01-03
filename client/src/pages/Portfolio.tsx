import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    name: "Animoca Brands",
    category: "Gaming / Metaverse",
    description: "Delivering digital property rights to the world's gamers and internet users, thereby creating a new asset class, play-to-earn economies, and a more equitable digital framework.",
    status: "Unicorn",
  },
  {
    name: "Polygon",
    category: "Infrastructure",
    description: "The leading platform for Ethereum scaling and infrastructure development. Polygon SDK aims to turn Ethereum into a multi-chain system.",
    status: "Liquid",
  },
  {
    name: "Kraken",
    category: "Exchange",
    description: "One of the largest and oldest Bitcoin exchanges in the world. Kraken is consistently named one of the best places to buy and sell crypto online.",
    status: "Late Stage",
  },
  {
    name: "Dapper Labs",
    category: "Consumer",
    description: "The company behind CryptoKitties and NBA Top Shot. Dapper Labs uses blockchain technology to bring new forms of digital engagement to fans around the world.",
    status: "Unicorn",
  },
  {
    name: "Chainlink",
    category: "Infrastructure",
    description: "A decentralized oracle network that enables smart contracts to securely access off-chain data feeds, web APIs, and traditional bank payments.",
    status: "Liquid",
  },
  {
    name: "OpenSea",
    category: "Marketplace",
    description: "The world's first and largest web3 marketplace for NFTs and crypto collectibles. Browse, create, buy, sell, and auction NFTs.",
    status: "Unicorn",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mb-20">
            <span className="font-mono text-xs text-primary tracking-widest uppercase mb-6 block">The Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Backing the <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">builders</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We invest in founders who are building the critical infrastructure for the decentralized web. Our portfolio represents a high-conviction bet on the future of the internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-xl font-serif font-bold group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    {item.name.charAt(0)}
                  </div>
                  <span className="font-mono text-xs px-2 py-1 rounded border border-white/10 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 block">{item.category}</span>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">INVESTED 202X</span>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-muted-foreground mb-6">And 40+ other category-defining companies.</p>
            <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5">
              Request Full Portfolio Access
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
