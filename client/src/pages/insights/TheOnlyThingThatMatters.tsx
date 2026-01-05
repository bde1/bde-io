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
              Remember Yahoo? For a while, they were the internet. They had everything. Search, email, news, a massive global audience. They had more distribution than almost anyone. But what happened? A series of catastrophic data breaches. First 500 million users. Then it turned out to be 3 billion. All of their users. Their trust was completely vaporized. The company, once a titan, became a cautionary tale. Their brand, once synonymous with the internet itself, is now a punchline. All that distribution meant nothing when trust was gone.
            </p>

            <p className={pStyle}>
              Contrast that with a company like DuckDuckGo. They’re tiny compared to Google. Their search algorithm is probably not as “advanced.” But they have one thing Google is bleeding: trust. They built their entire brand on privacy. And they’re growing. Slowly, but surely. They’re building a real moat, one user at a time.
            </p>

            <p className={pStyle}>
              Or look at Apple. Say what you will about them, but they understood this early. They made privacy a selling point. A differentiator. While everyone else was racing to collect more data, Apple was running ads about how they don’t. That’s not just marketing. That’s a moat.
            </p>

            <p className={pStyle}>
              I can hear the counterargument already. “But Brian, a truly superior AI will just create better, more personalized experiences. It will know what I want before I do. That will win my trust.”
            </p>

            <p className={pStyle}>
              Fair question.
            </p>

            <p className={pStyle}>
              But that’s a dangerous game. That’s the siren song of convenience. It’s the idea that we’ll trade our privacy for a slightly better recommendation engine. And for a while, maybe we will. But it’s a short-term play. Because eventually, there will be a breach. There will be a scandal. There will be a moment when the curtain is pulled back, and we see just how much we’ve given away.
            </p>

            <p className={pStyle}>
              And in that moment, trust will be shattered. And it will be almost impossible to get back.
            </p>

            <p className={pStyle}>
              I’ve seen this play out. I advised another startup that had incredible personalization tech. They knew everything about their users. Shopping habits. Location data. Browsing history. The whole nine yards. And their recommendations were scary good. Users loved it. For a while.
            </p>

            <p className={pStyle}>
              Then they had a data breach. Nothing catastrophic. No credit cards stolen. Just emails and some behavioral data. But it was enough. Users fled. The company never recovered. All that tech, all that personalization, meant nothing when trust was gone.
            </p>

            <p className={pStyle}>
              I’m not saying AI isn’t a powerful tool. It is. But it’s a tool. It’s not the product. The product is the relationship you have with your audience. The product is the trust you’ve earned over time.
            </p>

            <p className={pStyle}>
              The real winners in the AI era won’t be the companies with the best algorithms. They’ll be the ones with the biggest hearts. The ones who see their users as people, not data points. The ones who understand that trust is the only thing that matters.
            </p>

            <p className={pStyle}>
              Steve Jobs understood this. He didn’t just sell computers. He sold a relationship. A promise. When you bought an Apple product, you were buying into a vision. You trusted that they had your back. That’s why people lined up around the block. That’s why they still do.
            </p>

            <p className={pStyle}>
              So what does this mean for you? It means you need to stop chasing the latest shiny object. Stop worrying about whether you’re using the “best” AI model. And start focusing on what actually matters.
            </p>

            <p className={pStyle}>
              Building your own distribution. Your own audience. Your own email list. Your own community. That means understanding marketing. It means understanding people. It means understanding culture. These are the skills that will matter in the age of AI. Not your ability to code.
            </p>

            <p className={pStyle}>
              And earning their trust. Every single day.
            </p>

            <p className={pStyle}>
              That means being transparent about how you use data. It means giving people control. It means treating privacy not as a legal requirement, but as a core value. It means showing up consistently, even when no one is watching.
            </p>

            <p className={pStyle}>
              That’s the real work. That’s the hard part. And that’s the only thing that’s going to protect you when the AI tsunami hits.
            </p>

            <p className={pStyle}>
              I learned this lesson by watching a brilliant team go down in flames. You don't have to learn it the same way.
            </p>

            <p className={pStyle}>
              Great tech still matters. But great tech without distribution is just an expensive hobby. Distribution is the final moat.
            </p>
            
            <div className="mt-24 pt-12 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-serif text-xl mb-2">Written by Brian D. Evans</h4>
                  <p className="text-neutral-400 font-mono text-sm">Founder, BDE Ventures</p>
                </div>
                <img 
                  src="/images/signature.png" 
                  alt="Brian D. Evans Signature" 
                  className="h-16 opacity-50 invert"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              </div>
            </div>

        </div>
      </article>
    </Layout>
  );
}
