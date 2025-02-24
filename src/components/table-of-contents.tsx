"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden lg:block sticky top-4 ml-4 h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] min-w-[150px] overflow-auto">
      <div className="relative flex flex-col gap-2 pl-4 text-sm">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
        {sections.map((section) => {
          const isActive = section.id === activeSection;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "relative pl-4 -ml-px border-l transition-colors duration-200 hover:text-foreground",
                isActive
                  ? "text-foreground border-primary font-medium"
                  : "text-muted-foreground border-transparent"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-section"
                  className="absolute -left-px top-0 h-full w-px bg-primary"
                />
              )}
              {section.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
} 