import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description: string;
}

/**
 * Lightweight head manager — sets document.title and meta description
 * without adding a dependency. For SSR/prerendering, consider react-helmet-async.
 */
export function SEO({ title, description }: SEOProps) {
  const [location] = useLocation();

  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    // OG tags
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:url": `${window.location.origin}${location}`,
      "og:type": "website",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, [title, description, location]);

  return null;
}
