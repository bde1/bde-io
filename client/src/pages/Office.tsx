import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Linkedin, Terminal } from "lucide-react";
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
    toast.success("Message sent successfully. We will respond shortly.");
  };

  return (
    <Layout>
      <SEO
        title="The Office | BDE Ventures"
        description="BDE is the single-family office of Brian D. Evans. Learn about our operator-first philosophy, accolades, and connect with us."
      />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <div className="pt-32 pb-20 relative bg-grid-pattern min-h-screen">
        <div className="absolute inset-0 glow-founder z-0 opacity-50" />
        
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Image/Profile */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="relative aspect-[1651/1700] border border-border p-2 bg-card/50 mb-8 group">
                  <div className="crosshair-tl" />
                  <div className="crosshair-tr" />
                  <div className="crosshair-bl" />
                  <div className="crosshair-br" />
                  
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663077684115/nLNx4gEup6hKQEtExgUkNn/Brian_Turtleneck_cropped_17b4b49c.webp"
                    alt="Brian D. Evans — Founder of BDE Ventures"
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-md border border-border px-3 py-1 font-mono text-xs text-accent uppercase tracking-widest">
                    Brian D. Evans
                  </div>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="https://x.com/briandevans"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Brian on Twitter / X"
                  >
                    <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-accent/10 hover:text-accent hover:border-accent transition-colors">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/briandevansla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Brian on LinkedIn"
                  >
                    <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-accent/10 hover:text-accent hover:border-accent transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#contact" aria-label="Send a message">
                    <Button variant="outline" size="icon" className="rounded-none border-border hover:bg-accent/10 hover:text-accent hover:border-accent transition-colors">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-8 text-accent font-mono text-sm px-4 py-2 border border-border bg-card/30 uppercase tracking-widest">
                <span>Profile</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight text-primary uppercase tracking-tighter">
                Built by an <br /><span className="text-accent">operator</span>.
              </h1>

              <div className="space-y-8 text-muted-foreground font-mono text-sm leading-relaxed">
                <p className="text-lg text-primary border-l-2 border-accent pl-4">
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

                <div className="mt-16 mb-8">
                  <div className="flex items-center gap-2 mb-6 text-accent font-mono text-sm uppercase tracking-widest">
                    <span>Accolades</span>
                  </div>
                  <ul className="space-y-4 list-none pl-0">
                    {[
                      { title: "Inc. 500", desc: "Named one of the fastest-growing private companies in America." },
                      { title: "Forbes", desc: "Top Digital Marketer & Influencer." },
                      { title: "Entrepreneur", desc: "Regular contributor and thought leader." },
                      { title: "CoinDesk", desc: "Featured voice in blockchain and digital asset strategy." },
                      { title: "40 Under 40", desc: "Recognized among the top young entrepreneurs and innovators." }
                    ].map((item, i) => (
                      <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-4 border border-border bg-card/30 hover:border-accent/50 transition-colors relative group">
                        <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                        <span className="font-bold text-xl text-primary uppercase tracking-wider min-w-[140px]">{item.title}</span>
                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-16 mb-8">
                  <div className="flex items-center gap-2 mb-6 text-accent font-mono text-sm uppercase tracking-widest">
                    <span>Philosophy</span>
                  </div>
                  <blockquote className="p-6 border border-border bg-card/30 text-primary/90 italic relative">
                    <div className="crosshair-tl" />
                    <div className="crosshair-br" />
                    "I believe that the most valuable asset in the digital age is attention, but the most enduring asset is trust. We invest in protocols and platforms that are rebuilding the trust layer of the internet."
                  </blockquote>
                </div>
              </div>

              <div ref={contactRef} id="contact" className="mt-24 pt-16 border-t border-border scroll-mt-32 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-accent font-mono text-xs uppercase tracking-widest">
                  Contact
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-primary uppercase tracking-tighter">Establish Connection</h2>
                <p className="text-muted-foreground mb-8 font-mono text-sm">
                  We partner with a select number of teams each year. If you are a founder or leader working on a generational challenge in our areas of focus, we invite you to reach out.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-widest text-accent">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="w-full bg-card/30 border border-border rounded-none px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-primary font-mono text-sm"
                      />
                      {errors.name && <p className="text-destructive text-xs font-mono">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-widest text-accent">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="w-full bg-card/30 border border-border rounded-none px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-primary font-mono text-sm"
                      />
                      {errors.email && <p className="text-destructive text-xs font-mono">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-widest text-accent">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full bg-card/30 border border-border rounded-none px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-primary font-mono text-sm resize-none"
                    />
                    {errors.message && <p className="text-destructive text-xs font-mono">{errors.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-mono uppercase tracking-wider h-14 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
