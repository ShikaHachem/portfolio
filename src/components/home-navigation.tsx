"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HomeNavigationProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
}

export function HomeNavigation({ sections }: HomeNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Initialize with the first section if it exists
    if (sections.length > 0 && !activeSection) {
      setActiveSection(sections[0].id);
    }

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
        threshold: 0.1
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections, activeSection]);

  // If no sections are provided or sections array is empty, don't render the component
  if (!sections || sections.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update the active section manually
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="hidden lg:block fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
      <div className="relative flex flex-col gap-3 pl-4">
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
              onClick={(e) => handleClick(e, section.id)}
            >
              <div className="flex items-center">
                <div className={cn(
                  "h-2 w-2 rounded-full mr-2",
                  isActive ? "bg-primary" : "bg-muted"
                )}/>
                <span className={cn(
                  "text-sm",
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}>
                  {section.title}
                </span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="active-home-section"
                  className="absolute -left-px top-0 h-full w-px bg-primary"
                />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
} 