import Layout from "@/components/Layout";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";

export default function TheOnlyThingThatMatters() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Add 'dark' class to html element to ensure dark mode
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Shared paragraph style for consistency
  const pStyle = "text-xl md:text-2xl font-serif text-neutral-200 leading-relaxed mb-14";

  return (
    <Layout>
      <article className="min-h-screen bg-neutral-950 text-white selection:bg-yellow-500/30 pb-40">
        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden mb-20">
          <div className="absolute inset-0 bg-neutral-900">
            <img 
              src="/images/abstract-gold-rush.jpg" 
              alt="The Only Thing That Matters in the AI Gold Rush" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-end pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <Link href="/insights">
                <button className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-neutral-400 hover:text-yellow-500 transition-colors mb-8">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Back to Insights
                </button>
              </Link>

              <div className="flex items-center gap-4 text-sm text-yellow-500 mb-6 font-mono tracking-wider uppercase">
                <span>Strategy</span>
                <span className="w-12 h-px bg-yellow-500/30" />
                <span>January 2026</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8">
                The Only Thing That Matters in the <span className="italic text-yellow-500">AI Gold Rush</span>
              </h1>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden border border-white/10">
                    <img src="/images/brian-d-evans-portrait.webp" alt="Brian D. Evans" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-serif text-lg">Brian D. Evans</div>
                    <div className="text-sm text-neutral-500 font-mono uppercase tracking-wider">Founder, BDE Ventures</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-mono">6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container max-w-3xl mx-auto px-6">
          
            <p className={pStyle}>
              I once advised a founder who had it all. A brilliant product, a world-class engineering team, and a solution that was objectively better than the competition.
            </p>

            <p className={pStyle}>
              He asked for my opinion. I told him to focus on building an audience. An email list. A community. Something.
            </p>

            <p className={pStyle}>
              He smiled, nodded, and went right back to tweaking his algorithm.
            </p>

            <p className={pStyle}>
              Six months later, his company was dead.
            </p>

            <p className={pStyle}>
              It was a brutal lesson. The founders were some of the smartest people I’ve ever met. Their tech was flawless. They had the data, the benchmarks, the charts that went up and to the right. They were so sure they were going to win. They were the smart ones.
            </p>

            <p className={pStyle}>
              And they got absolutely obliterated.
            </p>

            <p className={pStyle}>
              Their main competitor, a company with what they considered “inferior” tech, had spent the last two years building a massive, loyal email list. While the founders I advised were perfecting their code, their rivals were writing newsletters. While they were optimizing servers, their rivals were building relationships.
            </p>

            <p className={pStyle}>
              The competitor launched their “inferior” product to a million people on day one. The founders I advised launched their “genius” product to the sound of crickets.
            </p>

            <p className={pStyle}>
              That failure was a painful, expensive lesson. It was the tuition they paid to the market for being naive. And it’s a lesson I’ve never forgotten.
            </p>

            <p className={pStyle}>
              Here’s the thing everyone is missing about AI. The tech is becoming a commodity.
            </p>

            <p className={pStyle}>
              Look, I’m not saying the technology is easy. It isn't. But the gap is closing fast. A few years ago, OpenAI looked like they had an untouchable lead. Now? Google, Anthropic, Meta, a dozen other startups. They all have models that are damn good. The gap between the best and the second-best is shrinking every month. Soon, for most practical purposes, the models will be indistinguishable.
            </p>

            <p className={pStyle}>
              Consider the recent acquisition of Manus by Meta. The headline number was $2 billion. The reaction from the technical elite was predictable. "It's just a wrapper."
            </p>

            <p className={pStyle}>
              They missed the point entirely.
            </p>

            <p className={pStyle}>
              Under the hood, Manus relies on the same foundation models available to any developer. They didn't train a better LLM. They didn't discover a new transformer architecture. By the standard definition of "deep tech," they shouldn't have a moat.
            </p>

            <p className={pStyle}>
              Yet they built a business generating nine figures in revenue in less than a year.
            </p>

            <p className={pStyle}>
              Why? Because they understood the difference between raw intelligence and completed work.
            </p>

            <p className={pStyle}>
              Foundation models are engines. They are powerful, loud, and increasingly commoditized. But you cannot drive an engine to work. You need a chassis, a transmission, a steering wheel, and a comfortable seat. You need a car.
            </p>

            <p className={pStyle}>
              Manus didn't try to build a better engine. They just built a better car.
            </p>

            <p className={pStyle}>
              They focused on the "last mile" of AI. The messy, complex orchestration required to take a vague human instruction and translate it into a tangible result. They built the infrastructure that allows the AI to browse the web, manage files, and execute multi-step workflows without human hand-holding.
            </p>

            <p className={pStyle}>
              I know the counter-argument. "What happens when Claude or GPT-5 does this natively? Won't they just Sherlock the wrappers?"
            </p>

            <p className={pStyle}>
              It's a fair question. But it misunderstands the DNA of these companies. Foundation model labs are research organizations. They build for builders. They build for engineers who live in terminals.
            </p>

            <p className={pStyle}>
              I don't care what anyone says. Currently having to run Claude Code from a terminal is not user friendly. It's powerful, yes. But it's not a product for the 99% of people who just want the job done.
            </p>

            <p className={pStyle}>
              Manus is.
            </p>

            <p className={pStyle}>
              Meta didn't spend $2 billion for another model. They have Llama. They bought Manus because they solved the product problem. They bought the interface that bridges the gap between "artificial intelligence" and "actual utility."
            </p>

            <p className={pStyle}>
              This is the reality of the application layer. As models converge in capability, the value shifts to the companies that can harness that power to solve specific, high-value problems.
            </p>

            <p className={pStyle}>
              We need to retire "wrapper" as an insult. The wrapper is the product. The wrapper is the workflow. The wrapper is the business.
            </p>

            <p className={pStyle}>
              So if the tech isn’t the moat, what is?
            </p>

            <p className={pStyle}>
              It’s the same thing that crushed the company I advised.
            </p>

            <p className={pStyle}>
              Distribution.
            </p>

            <p className={pStyle}>
              But let's be real. In an AI world, distribution itself is about to be commoditized. We are about to be flooded with infinite content, infinite emails, infinite noise.
            </p>

            <p className={pStyle}>
              So distribution isn't enough. You need a filter. You need something that cuts through the noise.
            </p>

            <p className={pStyle}>
              You need Trust.
            </p>

            <blockquote className="border-l-4 border-yellow-500 pl-6 my-14 italic text-2xl md:text-3xl text-white font-serif">
              "Capital is a commodity. Attention is not."
            </blockquote>

            <p className={pStyle}>
              Here's what I've come to believe. Capital is a commodity. Attention is not. In a world where anyone can spin up a powerful AI, the only thing that matters is your ability to get that AI in front of people. To build an audience. To earn their trust. That’s the final moat.
            </p>

            <p className={pStyle}>
              Think about it. When every company can spin up a chatbot that sounds human, who do you listen to? When every marketing agency can generate a thousand photorealistic images, which one do you hire? When AI can write a thousand articles, which one do you read?
            </p>

            <p className={pStyle}>
              You read the one you trust. You hire the one you trust. You listen to the one you trust.
            </p>

            <p className={pStyle}>
              Trust is the final moat. It’s the only thing that can’t be copied and pasted. It can’t be automated. It has to be earned. And in the age of AI, it’s going to be more valuable than ever.
            </p>

            <p className={pStyle}>
              And how do you build trust? You start by respecting privacy.
            </p>

            <p className={pStyle}>
              Privacy isn’t a feature. It’s the foundation. It’s the new currency. In a world of data breaches and surveillance capitalism, the companies that protect their users’ privacy will be the ones that win their trust. The ones that see privacy as a box to be checked, or worse, as an obstacle to be overcome, are going to get left behind.
            </p>

            <p className={pStyle}>
              So if you’re building in the AI space, stop worrying about whether your model is slightly better than the next guy’s. It won’t be for long.
            </p>

            <p className={pStyle}>
              Start worrying about your distribution. Start worrying about your brand. Start worrying about earning the trust of your users.
            </p>

            <p className={pStyle}>
              Because in the end, that’s the only thing that matters.
            </p>

            <div className="mt-24 pt-12 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 rounded-full bg-neutral-800 overflow-hidden border border-white/10">
                  <img 
                    src="/images/brian-d-evans-portrait.webp" 
                    alt="Brian D. Evans" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-serif text-xl mb-1">Brian D. Evans</div>
                  <div className="text-neutral-400 text-sm font-mono uppercase tracking-widest">
                    Founder, BDE Ventures
                  </div>
                </div>
              </div>
            </div>
        </div>
      </article>
    </Layout>
  );
}
