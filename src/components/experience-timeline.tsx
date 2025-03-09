"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { YoutubeIcon } from 'lucide-react';

interface ExperienceSection {
  title: string;
  content: string;
}

export interface ExperienceItemProps {
  title: string;
  role: string;
  period: string;
  logo: string;
  logoAlt: string;
  introduction: string;
  sections: ExperienceSection[];
  imageSources?: string[];
  youtubeUrl?: string;
}

export const ExperienceItem = ({
  title,
  role,
  period,
  logo,
  logoAlt,
  introduction,
  sections,
  imageSources = [],
  youtubeUrl
}: ExperienceItemProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="mb-16">
      <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-primary/10">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border">
              <Image 
                src={logo} 
                alt={logoAlt} 
                fill 
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{role} • {period}</p>
            </div>
          </div>
          
          <blockquote className="italic border-l-2 border-primary/50 pl-4 text-muted-foreground my-6">
            &ldquo;{introduction}&rdquo;
          </blockquote>
          
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section, i) => (
              <AccordionItem key={i} value={`section-${i}`}>
                <AccordionTrigger className="text-base font-medium">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{section.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {youtubeUrl && (
            <div className="mt-6 mb-4">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                <iframe 
                  src={`https://www.youtube.com/embed/${youtubeUrl.split('v=')[1]}`} 
                  title={`${title} YouTube Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <YoutubeIcon className="h-4 w-4 text-red-500" />
                <span>My Minutes of Fame</span>
              </div>
            </div>
          )}
          
          {imageSources.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {imageSources.map((src, i) => (
                <div key={i} className="relative h-48 w-full overflow-hidden rounded-md">
                  <Image 
                    src={src} 
                    alt={`${title} image ${i+1}`} 
                    fill 
                    className="object-cover"
                    onLoad={i === 0 ? handleImageLoad : undefined}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export const ExperienceShowcase = ({ items }: { items: ExperienceItemProps[] }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <ExperienceItem 
          key={index}
          {...item}
        />
      ))}
    </div>
  );
}; 