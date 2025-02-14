'use client';

import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export function ScrollButton() {
  const scrollToResume = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="group"
      onClick={scrollToResume}
    >
      View My Professional Journey
      <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
    </Button>
  );
} 