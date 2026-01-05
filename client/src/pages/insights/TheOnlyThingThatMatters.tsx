import Layout from "@/components/Layout";
import { useEffect } from "react";

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
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-neutral-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/60 to-neutral-950" />
          </div>
          
          <div className="relative h-full container flex flex-col justify-end pb-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 rounded-full border border-yellow-500/30 text-yellow-500 text-xs font-mono uppercase tracking-widest bg-yellow-500/5 backdrop-blur-sm">
                  Strategy
                </span>
                <span className="text-neutral-400 font-mono text-xs uppercase tracking-widest">
                  December 2025
                </span>
                <span className="text-neutral-400 font-mono text-xs uppercase tracking-widest">
                  6 min read
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white mb-8 leading-[1.1]">
                The Only Thing That Matters in the <span className="italic text-yellow-500">AI Gold Rush</span>
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-neutral-800 overflow-hidden border border-white/10">
                  <img 
                    src="/images/brian-d-evans-portrait.webp" 
                    alt="Brian D. Evans" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-serif text-lg">Brian D. Evans</div>
                  <div className="text-neutral-500 text-xs font-mono uppercase tracking-widest">Founder, BDE Ventures</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container max-w-3xl mx-auto px-6">
          
            <p className={pStyle}>
              I once advised a founder who had it all. A brilliant product, a world-class engineering team, and a solution that was objectively, demonstrably better than the competition.
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
              Here’s the thing everyone is missing about AI: the tech is becoming a commodity.
            </p>

            <p className={pStyle}>
              Look, I’m not saying the technology is easy. It’s not. But the gap is closing. Fast. A few years ago, OpenAI looked like they had an untouchable lead. Now? Google, Anthropic, Meta, a dozen other startups… they all have models that are damn good. The gap between the best and the second-best is shrinking every month. Soon, for most practical purposes, the models will be indistinguishable.
            </p>

            <p className={pStyle}>
              Here's an interesting perspective. Why would Meta pay $2 billion for Manus when it's essentially a "wrapper"?
            </p>

            <p className={pStyle}>
              The answer to this question tells you everything about the future of GenAI. (And it isn't larger LLMs).
            </p>

            <p className={pStyle}>
              Manus runs on Claude 3.5 Sonnet. It uses fine-tuned Qwen models. It doesn't have proprietary foundation models. It doesn't have some breakthrough in AI architecture.
            </p>

            <p className={pStyle}>
              By the logic that dominates AI discourse, Manus is "just a wrapper." No moat. Easily replicable. A commodity.
            </p>

            <p className={pStyle}>
              And yet Meta just paid over $2 billion for it, up from a $500 million valuation eight months earlier.
            </p>

            <p className={pStyle}>
              In that same period, Manus hit $100 million in annual recurring revenue and a $125 million run rate.
            </p>

            <p className={pStyle}>
              So either Mark Zuckerberg doesn't understand AI, or the "wrapper" narrative is wrong.
            </p>

            <p className={pStyle}>
              I'll bet on the narrative being wrong.
            </p>

            <p className={pStyle}>
              Here's what Manus actually built: They took Claude, the same Claude anyone can access, and turned it into something that finishes work.
            </p>

            <p className={pStyle}>
              You give it a task. You close your laptop. You come back to a completed deliverable: a research report, a ranked list of job candidates, a deployed website.
            </p>

            <p className={pStyle}>
              Claude is an operating system. Manus built the application.
            </p>

            <p className={pStyle}>
              The technical "secret sauce" isn't a new model. It's multi-agent orchestration. It's asynchronous cloud execution. It's context engineering. It's an actual interface where you can watch it browse, click, and fill forms in real time.
            </p>

            <p className={pStyle}>
              None of this is magic. All of it is product work. The hard, unglamorous work of understanding what users actually need and building the scaffolding that turns a general-purpose AI into a tool that does a job.
            </p>

            <p className={pStyle}>
              Meta didn't pay $2 billion for Claude access. They paid for the application layer that Anthropic didn't build.
            </p>

            <p className={pStyle}>
              This is the future of AI value creation.
            </p>

            <p className={pStyle}>
              The foundation model companies will keep raising billions to build bigger models. Some of that will matter.
            </p>

            <p className={pStyle}>
              But the real opportunity, the place where problems get solved and value gets captured, is in the application layer.
            </p>

            <p className={pStyle}>
              The "wrappers."
            </p>

            <p className={pStyle}>
              The companies that understand a specific workflow, a specific user, a specific job-to-be-done, and build precisely for that.
            </p>

            <p className={pStyle}>
              Manus proved you can build a $2 billion company on top of someone else's model in under a year.
            </p>

            <p className={pStyle}>
              The lesson isn't that wrappers are easy. The lesson is that wrappers are the product. The model is infrastructure. The wrapper is the business.
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
              And something even more important: Trust.
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
              So, if you’re building in the AI space, stop worrying about whether your model is slightly better than the next guy’s. It won’t be for long.
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
