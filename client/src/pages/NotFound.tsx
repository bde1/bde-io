import Layout from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <Layout>
      <SEO title="404 — Page Not Found | BDE Ventures" description="The page you're looking for doesn't exist." />
      <div className="pt-32 pb-20 min-h-[80vh] flex items-center justify-center">
        <div className="container text-center max-w-2xl">
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-6">Error 404</p>
          <h1 className="text-6xl md:text-8xl font-serif font-medium mb-6">
            Page not found.
          </h1>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Button
            onClick={() => setLocation("/")}
            size="lg"
            className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </Layout>
  );
}
