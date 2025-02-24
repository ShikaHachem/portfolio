"use client";

import { TableOfContents } from "./table-of-contents";
import { useEffect, useState } from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  const [sections, setSections] = useState<Array<{ id: string; title: string }>>([]);

  useEffect(() => {
    // Find all h2 elements in the blog post
    const headings = Array.from(document.querySelectorAll("h2"));
    const extractedSections = headings.map((heading) => ({
      id: heading.id,
      title: heading.textContent || "",
    }));
    setSections(extractedSections);
  }, []);

  return (
    <div className="relative flex">
      <article className="prose prose-zinc dark:prose-invert mx-auto py-8 px-4">
        {children}
      </article>
      <TableOfContents sections={sections} />
    </div>
  );
} 