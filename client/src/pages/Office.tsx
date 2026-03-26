import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { GradientText } from "@/components/GradientText";
import { SectionLabel } from "@/components/SectionLabel";
import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

export default function Office() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to contact section if hash is #contact
  useEffect(() => {
    if (window.location.hash === "#contact" && contactRef.current) {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate a short delay for form submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    setErrors({});
    toast.success("Thank you. We'll be in touch soon.");
  };

  return (
    <Layout>
      <SEO
        title="The Office | BDE Ventures"
        description="BDE is the single-family office of Brian D. Evans. Learn about our operator-first philosophy, accolades, and connect with us."
      />
      <PageWrapper>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Image/Profile */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 mb-8 group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                  <img
                    src="/images/brian-turtleneck.jpg"
                    alt="Brian D. Evans — Founder of BDE Ventures"
                    loading="lazy"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-8 left-8 z-20">
                    <h2 className="text-3xl font-serif font-bold text-white mb-1">Brian D. Evans</h2>
                    <p className="text-sm text-primary tracking-widest uppercase font-semibold">Founder</p>
                  </div>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="https://x.com/briandevans"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Brian on Twitter / X"
                  >
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5 hover:text-primary">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/briandevansla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Brian on LinkedIn"
                  >
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5 hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#contact" aria-label="Send a message">
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5 hover:text-primary">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7">
              <SectionLabel>The Office</SectionLabel>
              <h1 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">
                Built by an <GradientText>operator</GradientText>.
              </h1>

              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                <p className="lead text-xl text-white/90 mb-8">
                  BDE is the single-family office of Brian D. Evans. We are operators first, investors second.
                </p>

                <p>
                  Most capital is passive. Ours is active. Brian has spent over two decades in the trenches—building a media empire that reached over 100 million people, building and exiting numerous tech and e-commerce companies, and navigating the volatility of emerging markets since the early days.
                </p>
                <p>
                  His work has influenced millions, running massive marketing campaigns for some of the world's biggest brands in their early stages. He didn't just watch the industry evolve; he helped shape it.
                </p>
                <p>
                  We don't just read the whitepaper; we understand the go-to-market. We don't just look at the cap table; we look at the community. When we partner with a founder, we bring the scars, the network, and the playbook of someone who has actually built.
                </p>

                <h2 className="text-white font-serif text-2xl mt-12 mb-6">Accolades &amp; Recognition</h2>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="font-serif text-2xl text-primary font-bold">Inc. 500</span>
                    <span className="text-sm">Named one of the fastest-growing private companies in America.</span>
                  </li>
                  <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="font-serif text-2xl text-primary font-bold">Forbes</span>
                    <span className="text-sm">Top Digital Marketer &amp; Influencer.</span>
                  </li>
                  <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="font-serif text-2xl text-primary font-bold">Entrepreneur</span>
                    <span className="text-sm">Regular contributor and thought leader.</span>
                  </li>
                  <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="font-serif text-2xl text-primary font-bold">CoinDesk</span>
                    <span className="text-sm">Featured voice in blockchain and digital asset strategy.</span>
                  </li>
                  <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="font-serif text-2xl text-primary font-bold whitespace-nowrap">40 Under 40</span>
                    <span className="text-sm">Recognized among the top young entrepreneurs and innovators.</span>
                  </li>
                </ul>

                <h2 className="text-white font-serif text-2xl mt-12 mb-6">Philosophy</h2>
                <blockquote className="border-l-2 border-primary/40 pl-6 italic text-white/80">
                  "I believe that the most valuable asset in the digital age is attention, but the most enduring asset is trust. We invest in protocols and platforms that are rebuilding the trust layer of the internet."
                </blockquote>
              </div>

              <div ref={contactRef} id="contact" className="mt-16 pt-16 border-t border-white/10 scroll-mt-32">
                <h2 className="text-3xl font-serif mb-6">Get in touch.</h2>
                <p className="text-muted-foreground mb-8">
                  We partner with a select number of teams each year. If you are a founder or leader working on a generational challenge in our areas of focus, we invite you to reach out.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-colors text-foreground"
                      />
                      {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-colors text-foreground"
                      />
                      {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-colors text-foreground"
                    />
                    {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Request Introduction"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </Layout>
  );
}
