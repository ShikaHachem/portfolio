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

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center p-4">
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

      <section id="reviews" className="space-y-4 mt-12">
        <BlurFade delay={0.9}>
          <h2 className="text-3xl font-bold">Film Analysis & Reviews</h2>
        </BlurFade>
        <BlurFade delay={0.95}>
          <p className="text-lg text-muted-foreground">In-depth breakdowns of movies focusing on symbolism, hidden meanings, directing techniques, character development, and narrative structure. Each review includes critical analysis of cinematography, storytelling, themes, performances, and personal insights.</p>
        </BlurFade>
        <BlurFade delay={1.0}>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <Link href="/blog/its-a-wonderful-life">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src="/wonderful-life-thumbnail.png"
                    alt="It's a Wonderful Life"
                    fill
                    className="object-cover"
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
                  <Image
                    src="/titane-thumbnail.png"
                    alt="Titane"
                    fill
                    className="object-cover"
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
                  <Image
                    src="/vermiglio-thumbnail.png"
                    alt="Vermiglio"
                    fill
                    className="object-cover"
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
            <Link href="/blog/its-a-wonderful-life#film-analysis-its-a-wonderful-life-1946">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src="/wonderful-life-analysis-thumbnail.png"
                    alt="It's a Wonderful Life Analysis"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Film Analysis: It&apos;s a Wonderful Life</CardTitle>
                  <CardDescription>
                    September 8, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Exploring the themes of fate, sacrifice, and human connection in Frank Capra&apos;s timeless classic.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/titane#film-analysis-titane-2021">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src="/titane-analysis-thumbnail.png"
                    alt="Titane Analysis"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Film Analysis: Titane</CardTitle>
                  <CardDescription>
                    September 9, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Dissecting identity, gender, and transformation in Julia Ducournau&apos;s boundary-pushing film.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/vermiglio#film-analysis-vermiglio-2022">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src="/vermiglio-analysis-thumbnail.png"
                    alt="Vermiglio Analysis"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Film Analysis: Vermiglio</CardTitle>
                  <CardDescription>
                    September 10, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Analyzing isolation, memory, and female resilience in Maura Delpero&apos;s haunting post-war drama.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </BlurFade>
      </section>

      <section id="hows_made" className="space-y-4 mt-12">
        <BlurFade delay={1.1}>
          <h2 className="text-3xl font-bold">How It&apos;s Made</h2>
        </BlurFade>
        <BlurFade delay={1.15}>
          <p className="text-lg text-muted-foreground">Deep dives into filmmaking techniques such as editing, lighting, set design, and more. Case studies of great directors and their unique styles.</p>
        </BlurFade>
        <BlurFade delay={1.2}>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <Link href="/blog/its-a-wonderful-life#how-its-a-wonderful-life-was-made">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src="/wonderful-life-making-thumbnail.png"
                    alt="How It's a Wonderful Life Was Made"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>How It&apos;s a Wonderful Life Was Made</CardTitle>
                  <CardDescription>
                    September 8, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Explore the innovative filmmaking techniques behind Frank Capra&apos;s classic, from deep focus cinematography to special effects and improvised moments.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/titane#how-its-made-titane-2021">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src="/titane-making-thumbnail.png"
                    alt="How Titane Was Made"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>How Titane Was Made</CardTitle>
                  <CardDescription>
                    September 9, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Discover the bold filmmaking techniques behind Julia Ducournau&apos;s visceral masterpiece, from striking cinematography to powerful sound design.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/vermiglio#how-vermiglio-2022-was-made">
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src="/vermiglio-making-thumbnail.png"
                    alt="How Vermiglio Was Made"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>How Vermiglio Was Made</CardTitle>
                  <CardDescription>
                    September 10, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Explore the meditative filmmaking approach of Maura Delpero, from static wide shots and natural lighting to the powerful use of silence in storytelling.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </BlurFade>
      </section>

      <section id="blog" className="w-full max-w-4xl space-y-8 mt-12">
        <BlurFade delay={1.2}>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Latest Stories</h2>
            <p className="text-lg text-muted-foreground">
              Explore my latest film analysis, reviews, and behind-the-scenes stories.
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={1.25}>
          <BlogPreview />
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
