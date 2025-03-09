"use client";

import { TableOfContents } from "./table-of-contents";
import { useEffect, useState } from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  const [sections, setSections] = useState<Array<{ id: string; title: string }>>([]);

  useEffect(() => {
    // Give a small delay to ensure the content is fully rendered
    const timer = setTimeout(() => {
      // Find all h2 elements in the blog post
      const headings = Array.from(document.querySelectorAll("h2, h3"));
      
      // Process each heading to ensure it has an ID
      const extractedSections = headings.map((heading, index) => {
        // If heading doesn't have an ID, generate one based on the text content
        if (!heading.id) {
          const title = heading.textContent || `Section ${index + 1}`;
          const id = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          heading.id = id || `section-${index}`;
        }
        
        return {
          id: heading.id,
          title: heading.textContent || `Section ${index + 1}`,
        };
      });
      
      setSections(extractedSections);
    }, 100); // Small delay to ensure content is rendered
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex">
      <article className="prose prose-zinc dark:prose-invert mx-auto py-8 px-4 max-w-3xl">
        {children}
      </article>
      <TableOfContents sections={sections} />
    </div>
  );
} 