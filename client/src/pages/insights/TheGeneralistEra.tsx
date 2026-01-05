import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";
import Layout from "@/components/Layout";

export default function TheGeneralistEra() {
  useEffect(() => {
    document.title = "The Generalist Era Is Here | BDE Ventures";
    // Add meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Specialists are in trouble. The ones who'll make it are already pivoting toward knowing more things, not just one thing better. The Generalist Era is here.");
    }
  }, []);

  return (
    <Layout>
      <article className="min-h-screen bg-neutral-950 text-white selection:bg-yellow-500/30 pb-20">
        {/* Hero Header */}
        <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-neutral-900">
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop" 
              alt="The Generalist Era Is Here" 
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
                <span>Market Thesis</span>
                <span className="w-12 h-px bg-yellow-500/30" />
                <span>December 2025</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8">
                The Generalist Era Is Here
              </h1>

              <div className="flex items-center justify-between border-t border-white/10 pt-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden border border-white/10">
                    <img src="/images/brian-evans-grayscale.jpg" alt="Brian D. Evans" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-serif text-lg">Brian D. Evans</div>
                    <div className="text-sm text-neutral-500 font-mono uppercase tracking-wider">Founder & CEO</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-mono">5 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-invert prose-xl max-w-none prose-headings:font-serif prose-headings:font-medium prose-p:text-neutral-300 prose-p:leading-loose prose-p:mb-16 prose-a:text-yellow-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-yellow-500 prose-blockquote:text-white prose-blockquote:font-serif prose-blockquote:italic prose-strong:text-white prose-strong:font-medium">
            
            <p className="lead text-2xl md:text-3xl font-serif text-white leading-relaxed mb-20">
              Look, I'm going to tell you something that goes against basically everything you've heard about career advice.
            </p>

            <p>
              Early in my career, someone I respected told me to pick one thing and get really, really good at it.
            </p>

            <p>
              Specialize. Go deep. That was the path.
            </p>

            <p>
              And honestly? It made sense at the time. Still makes sense for a lot of people.
            </p>

            <p>
              But I couldn't do it. Something felt off.
            </p>

            <p>
              I kept wanting to learn about product. Then development. Then marketing. Then how communities actually work. Finance. Operations. All of it.
            </p>

            <p>
              People definitely thought I was unfocused. Scattered, even. I get it. From the outside, it probably looked that way.
            </p>

            <p>
              Turns out I was onto something. I just didn't have the words for it yet.
            </p>

            <p>
              So here's what's actually happening right now.
            </p>

            <p>
              AI got good. Like, really good. And fast. Faster than most of us expected.
            </p>

            <p>
              That copywriter who spent years getting great at their craft? AI writes stuff that's maybe 85% as good. In seconds.
            </p>

            <p>
              The designer who put in a decade? AI makes designs that are close. Not perfect, but close.
            </p>

            <p>
              Engineers with 15 years of experience? Same story.
            </p>

            <p>
              And that gap? It's shrinking. Every few months, it shrinks more.
            </p>

            <p>
              I'm not trying to be dramatic here, but specialists are in trouble. Not "disrupted" trouble. Replaced trouble.
            </p>

            <p>
              The ones who'll make it are already pivoting toward knowing more things, not just one thing better.
            </p>

            <p>
              People push back on this. They say, okay, but can't AI also be a generalist? Can't it learn across a bunch of different areas too?
            </p>

            <p>
              Yeah. It can. But here's what it can't do.
            </p>

            <p>
              It can't choose.
            </p>

            <hr className="border-white/10 my-20" />

            <p>
              I ran an experiment last month. Had GPT look at fifty different investment opportunities for a fund I work with.
            </p>

            <p>
              Every single analysis it gave me was solid. Logical. Well-argued. Looked great on paper.
            </p>

            <p>
              But it couldn't tell me which founder actually had that thing. You know what I mean? That fire. The one who's going to push through when everything falls apart.
            </p>

            <p>
              It couldn't pick up on the fact that a certain market was about to shift because of conversations I'd had that week with people in the space.
            </p>

            <p>
              It couldn't feel which opportunity had real edge versus which one was just... fine.
            </p>

            <p>
              Here's the thing. AI doesn't lie awake at night wondering if it made the right call. It doesn't have anything on the line. No reputation. No consequences.
            </p>

            <p>
              It just processes stuff and spits out answers.
            </p>

            <p>
              You actually have to live with your decisions. And that changes how you think about them.
            </p>

            <p>
              There's another piece people miss.
            </p>

            <p>
              AI learns from what's out there. What's been written. Published. Documented.
            </p>

            <p>
              But what about the stuff that's so specific, so niche, that it barely exists online? Maybe it's been mentioned five times total on the entire internet.
            </p>

            <p>
              AI can't learn from what isn't there.
            </p>

            <p>
              Someone who's spent ten years deep in a specific market knows things that have never been written down anywhere. The unspoken rules. The weird edge cases. The lessons from screwing up that only exist in their head.
            </p>

            <p>
              AI will never have access to that. It literally can't.
            </p>

            <hr className="border-white/10 my-20" />

            <p>
              I didn't really get this next part until recently.
            </p>

            <p>
              It's not just about knowing a bunch of stuff across different areas. It's about how fast you can pick up something new when you need to.
            </p>

            <p>
              Think about Elon and The Boring Company. He had zero background in tunneling. Zero.
            </p>

            <p>
              Within months he was questioning assumptions that the industry had accepted for decades. Same thing happened with batteries at Tesla. With rockets at SpaceX.
            </p>

            <p>
              That's the actual skill. Not what you already know. How quickly you can get dangerous in something new.
            </p>

            <p>
              And here's the cool part. It compounds.
            </p>

            <p>
              The more different things you learn, the faster you learn the next thing. You start seeing patterns. Principles that work across domains. You build this mental framework that speeds everything up.
            </p>

            <p>
              The way I think about it now is this.
            </p>

            <p>
              The question isn't whether AI can beat a person at strategy, etc. The question is whether a person using AI can beat a person not using AI.
            </p>

            <p>
              Obviously yes.
            </p>

            <p>
              So the real game is being great at using AI as a tool. And that means knowing enough about different areas to know what to ask for. To know when AI is giving you garbage. To actually direct it well.
            </p>

            <p>
              Someone who understands multiple domains and uses AI? That's a multiplier.
            </p>

            <p>
              A specialist using AI is just a slightly faster specialist. Still getting replaced.
            </p>

            <p>
              I keep coming back to Elon as an example because it's so clear.
            </p>

            <p>
              He's deep in engineering. Manufacturing. Physics. Business. He looks at a rocket problem and sees how it connects to cars. He sees a constraint in one industry and solves it using something from a completely different one.
            </p>

            <p>
              Put AI against him in a strategic decision. AI generates a thousand options. Elon looks at them and knows which one actually matters.
            </p>

            <p>
              Because he's been through manufacturing disasters. He understands the physics in ways that aren't in any dataset. He's built multiple companies across totally different industries.
            </p>

            <p>
              He has made decisions that were seemingly "odd" at the time, that AI wouldn't necessarily be able to choose.
            </p>

            <p>
              Plus his network. He can call the best engineers in the world. Get information that isn't public.
            </p>

            <p>
              But it's not just about information. It's about being able to run teams on rockets, cars, and brain interfaces all at the same time. Because he understands all of them well enough to actually direct them.
            </p>

            <p>
              AI loses that matchup every time. Not because it's dumb. Because Elon has stuff it can never have.
            </p>

            <hr className="border-white/10 my-20" />

            <p>
              I know what you're thinking. Cool, but I'm not Elon. What about normal people?
            </p>

            <p>
              Fair.
            </p>

            <p>
              You don't need to be world-class at forty five things. You need to be genuinely good at a few things.
            </p>

            <p>
              Good enough to have real judgment. Good enough to catch when AI is wrong. Good enough to point it in the right direction.
            </p>

            <p>
              The bar isn't genius across everything. It's being dangerous in three or four areas. Enough to see connections other people miss. Enough to make calls other people can't.
            </p>

            <p>
              That's doable. It just takes being intentional about it.
            </p>

            <p>
              I've been watching two companies in the same space this year. It's been interesting.
            </p>

            <p>
              <strong>Company A</strong> went all in on specialists. Best paid ads person they could find. Best SEO person. Best product designer. Everyone excellent at their one thing. They use AI to optimize within their lanes.
            </p>

            <p>
              <strong>Company B</strong> has fewer people. But each person gets product, growth, sales, customer psychology. None of them are the absolute best at any single thing. But they see how everything connects.
            </p>

            <p>
              Company B spotted an opportunity that required putting together insights from product, marketing, and sales all at once. Company A's specialists never saw it. It existed in the gaps between their areas.
            </p>

            <p>
              Company B is growing three times faster.
            </p>

            <blockquote>
              "Specialists optimize what exists. Generalists see what's possible."
            </blockquote>

            <p>
              If you're building something right now, look for people who are strong across multiple areas. People who don't just do what AI tells them. People who learn fast. People who actually care about outcomes.
            </p>

            <p>
              If you're building your own career, start getting good at more than one thing. Focus on learning faster.
            </p>

            <p>
              The goal isn't knowing a little about everything. It's being dangerous in several areas. Use AI to learn quicker, but don't let it replace your actual understanding.
            </p>

            <p>
              Don't just read about marketing. Run something. Don't just read about product. Build something. Don't just read about sales. Actually close something.
            </p>

            <p>
              Every era rewards a different kind of person.
            </p>

            <p>
              The specialist era is winding down. The generalist era is starting.
            </p>

            <p>
              Not because generalists know more than AI. But because they have real stakes. They learn fast. They have judgment and taste. They have knowledge from actually doing the work that doesn't exist anywhere else.
            </p>

            <p>
              That's something no algorithm is going to replicate.
            </p>

            <p>
              This is happening now.
            </p>
          </div>

          {/* Author Bio Footer */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="h-24 w-24 rounded-full overflow-hidden border border-white/10 shrink-0">
                <img src="/images/brian-evans-grayscale.jpg" alt="Brian D. Evans" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif mb-2">About the Author</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Brian D. Evans is the founder of BDE Ventures, an Inc. 500 entrepreneur, and a strategic advisor to some of the world's fastest-growing technology companies. He writes about the intersection of technology, psychology, and market dynamics.
                </p>
                <Link href="/office">
                  <button className="text-yellow-500 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider">
                    More about Brian
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
