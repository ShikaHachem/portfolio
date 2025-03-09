import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import { ScrollButton } from "@/components/scroll-button";
import { BlogPreview } from "@/components/blog-preview";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { HomeNavigation } from "@/components/home-navigation";

// Define the homepage sections for navigation
const homeSections = [
  { id: "intro", title: "Intro" },
  { id: "about", title: "About Me" },
  { id: "creations", title: "My Creations" },
  { id: "reviews", title: "Film Analysis" },
  { id: "resume", title: "Experience" }
];

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center p-4">
      <HomeNavigation sections={homeSections} />
      
      <div className="max-w-2xl space-y-8 text-center">
        <BlurFade delay={0.1}>
          <div>
            <Avatar className="mx-auto size-48 border">
              <AvatarImage alt="Maha" src="/avatar.jpeg" />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </div>
        </BlurFade>
        
        <div className="space-y-4">
          <BlurFadeText
            delay={0.2}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
            text="Hi, I&apos;m Maha 👋"
          />
          
          <BlurFadeText
            delay={0.3}
            className="text-xl text-muted-foreground text-right"
            text="A cinephile exploring the art of storytelling through the lens of film analysis and cinematography"
          />
        </div>
      </div>

      <section id="intro" className="space-y-4 mt-12">
        <BlurFade delay={0.5}>
          <h2 className="text-3xl font-bold">Through the Film Mirror</h2>
        </BlurFade>
        <BlurFade delay={0.55}>
          <p className="text-lg text-muted-foreground">Film is more than just moving images—it&apos;s a mirror reflecting human nature, society, and the subconscious. My approach to film analysis blends a passion for storytelling with a search for deeper meaning, uncovering the layers of symbolism, character development, and directorial intent that make cinema an art form.</p>
        </BlurFade>
        <BlurFade delay={0.6}>
          <p className="text-lg text-muted-foreground">Drawing from my love for immersive narratives, self-development themes, and the power of visual metaphors, I explore how films shape emotions, challenge perceptions, and leave lasting imprints on the mind.</p>
        </BlurFade>
        <BlurFade delay={0.65}>
          <p className="text-lg text-muted-foreground">Through this platform, I aim to dissect cinema with depth and clarity, offering insights that go beyond the screen and into the essence of storytelling.</p>
        </BlurFade>
      </section>

      <section id="about" className="space-y-4 mt-12">
        <BlurFade delay={0.7}>
          <h2 className="text-3xl font-bold">About Me</h2>
        </BlurFade>
        <BlurFade delay={0.75}>
          <p className="text-lg text-muted-foreground">I&apos;m Maha, a film enthusiast with a deep love for storytelling, symbolism, and the art of cinema. Whether it&apos;s the psychological depth of Shutter Island, the poetic beauty of In the Mood for Love, or the complex character arcs of Breaking Bad, I&apos;m drawn to films that leave a lasting impact.</p>
        </BlurFade>
        <BlurFade delay={0.8}>
          <p className="text-lg text-muted-foreground">With a background in filmmaking and a passion for analysis, I created this platform to explore cinema beyond the surface—diving into themes, cinematography, and the nuances that make each film unique. This space is not just about reviews but about understanding the essence of storytelling and its power to shape perception.</p>
        </BlurFade>
        <BlurFade delay={0.85}>
          <p className="text-lg text-muted-foreground">This journey is a step toward refining my voice as a film analyst and storyteller.</p>
        </BlurFade>
        <BlurFade delay={0.9}>
          <div className="flex justify-center mt-6">
            <ScrollButton />
          </div>
        </BlurFade>
      </section>

      <section id="creations" className="space-y-4 mt-12">
        <BlurFade delay={0.9}>
          <h2 className="text-3xl font-bold">My Creations</h2>
        </BlurFade>
        <BlurFade delay={0.95}>
          <p className="text-lg text-muted-foreground">Explore my creative projects and storytelling efforts.</p>
        </BlurFade>
        <BlurFade delay={1.0}>
          {/* Sugar Deal - Full Width */}
          <div className="grid gap-4 mt-6">
            <Link href="/blog/the-sugar-deal">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-64 w-full">
                  <img
                    src="/sugar_thumbnail.png"
                    alt="The Sugar Deal"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>The Sugar Deal</CardTitle>
                  <CardDescription>
                    March 9, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Exploring the complex dynamics and ethical questions in an unconventional relationship arrangement.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
          
          {/* Rick and Morty + Through the Window - 2 Columns */}
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <Link href="/blog/rick-and-morty-birthday">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <img
                    src="/rick-morty-thumbnail.png"
                    alt="Rick and Morty Birthday Video"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Personalized Rick and Morty Birthday Video</CardTitle>
                  <CardDescription>
                    March 10, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">A custom Rick and Morty animation created as a birthday gift, showcasing storytelling and audio-visual production skills.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/through-the-window">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <img
                    src="/through-the-window-thumbnail.png"
                    alt="Through the Window: A Short Film Script"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Through the Window: A Short Film Script</CardTitle>
                  <CardDescription>
                    March 10, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">A short film script about observation, silence, and the disconnect between perception and understanding.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </BlurFade>
      </section>

      <section id="reviews" className="space-y-4 mt-12">
        <BlurFade delay={1.1}>
          <h2 className="text-3xl font-bold">Film Analysis & Reviews</h2>
        </BlurFade>
        <BlurFade delay={1.15}>
          <p className="text-lg text-muted-foreground">In-depth breakdowns of movies focusing on symbolism, hidden meanings, directing techniques, character development, and narrative structure. Each review includes critical analysis of cinematography, storytelling, themes, performances, and personal insights.</p>
        </BlurFade>
        <BlurFade delay={1.2}>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            <Link href="/blog/its-a-wonderful-life">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <img
                    src="/wonderful_thumbnail.jpg"
                    alt="It's a Wonderful Life"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>It&apos;s a Wonderful Life Review</CardTitle>
                  <CardDescription>
                    September 8, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">An in-depth analysis of Frank Capra&apos;s 1946 masterpiece that explores the profound impact of one person&apos;s life on an entire community.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/titane">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <img
                    src="/Titane_thumbnail.jpg"
                    alt="Titane"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Titane Review</CardTitle>
                  <CardDescription>
                    September 9, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">An analysis of Julia Ducournau&apos;s provocative film that challenges our understanding of identity, body autonomy, and human connection.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/vermiglio">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <img
                    src="/Vermiglio_thumbnail.jpg"
                    alt="Vermiglio"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Vermiglio Review</CardTitle>
                  <CardDescription>
                    September 10, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">An analysis of Maura Delpero&apos;s meditative film set in post-WWII Italy that explores isolation, memory, and female resilience.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </BlurFade>
      </section>

      <Separator className="my-16" />

      <section id="resume" className="space-y-12 scroll-mt-16">
        <div className="text-center space-y-4">
          <BlurFade delay={1.15}>
            <h2 className="text-4xl font-bold tracking-tight">Professional Experience</h2>
          </BlurFade>
          <BlurFade delay={1.2}>
            <p className="text-lg text-muted-foreground">
              My journey in film production and analysis
            </p>
          </BlurFade>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <BlurFade delay={1.2}>
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold">Work Experience</h3>
                <Separator className="flex-grow" />
              </div>
            </BlurFade>
            <div className="space-y-4">
              {DATA.work.map((job, index) => (
                <BlurFade key={job.company} delay={1.2 + (index * 0.1)}>
                  <ResumeCard
                    title={job.company}
                    subtitle={job.title}
                    period={`${job.start} - ${job.end}`}
                    description={job.description}
                    logoUrl={job.logoUrl || "/placeholder-logo.png"}
                    altText={job.company}
                    badges={job.badges}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <BlurFade delay={1.4}>
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold">Education</h3>
                <Separator className="flex-grow" />
              </div>
            </BlurFade>
            <div className="space-y-4">
              {DATA.education.map((edu, index) => (
                <BlurFade key={edu.school} delay={1.4 + (index * 0.1)}>
                  <ResumeCard
                    title={edu.school}
                    subtitle={edu.degree}
                    period={`${edu.start} - ${edu.end}`}
                    logoUrl="/placeholder-logo.png"
                    altText={edu.school}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <BlurFade delay={1.6}>
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold">Skills</h3>
                  <Separator className="flex-grow" />
                </div>
              </BlurFade>
              <BlurFade delay={1.65}>
                <div className="flex flex-wrap gap-2">
                  {DATA.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
            </div>

            <div className="space-y-6">
              <BlurFade delay={1.7}>
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold">Languages</h3>
                  <Separator className="flex-grow" />
                </div>
              </BlurFade>
              <BlurFade delay={1.75}>
                <div className="flex flex-wrap gap-2">
                  {DATA.languages.map((lang) => (
                    <Badge key={lang.name} variant="secondary">
                      {lang.name} - {lang.level}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
