"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { useTranslation } from 'next-i18next';
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getResumeData } from "@/data/resume";
import { ScrollButton } from "@/components/scroll-button";
import { BlogPreview } from "@/components/blog-preview";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { HomeNavigation } from "@/components/home-navigation";
import { ExperienceShowcase } from "@/components/experience-timeline";
import { FEATURED_EXPERIENCES } from "@/data/featured-experiences";

export default function Page() {
  const { t } = useTranslation(['common', 'resume']);
  const DATA = getResumeData(t);

  // Define the homepage sections for navigation
  const homeSections = [
    { id: "intro", title: t('common:home_nav_intro') },
    { id: "about", title: t('common:home_nav_about_me') },
    { id: "creations", title: t('common:home_nav_my_creations') },
    { id: "reviews", title: t('common:home_nav_film_analysis') },
    { id: "featured", title: t('common:home_nav_featured') },
    { id: "resume", title: t('common:home_nav_experience') }
  ];

  return (
    <main className="flex min-h-[100dvh] flex-col items-center p-4">
      <div className="relative w-full max-w-6xl lg:flex lg:gap-x-12"> {/* Increased max-w for wider layout */}
        {/* Main content area */}
        <div className="flex-grow max-w-2xl mx-auto lg:mx-0 lg:max-w-none space-y-8 text-center lg:text-left"> {/* Adjusted max-w and margins */}
          <div className="lg:hidden"> {/* Mobile: HomeNavigation at the top (or could be placed differently) */}
            <HomeNavigation sections={homeSections} />
          </div>
          
          <div className="space-y-8 text-center"> {/* Original content centering div, kept for hero section */}
            <BlurFade delay={0.1}>
              <div>
            <Avatar className="mx-auto size-48 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </BlurFade>
        
        <div className="space-y-4">
          <BlurFadeText
            delay={0.2}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
            text={t('common:hero_greeting')}
          />
          
          <BlurFadeText
            delay={0.3}
            className="text-xl text-muted-foreground text-right"
            text={t('common:hero_bio')}
          />
        </div>
      </div>

      <section id="intro" className="space-y-4 mt-12">
        <BlurFade delay={0.5}>
          <h2 className="text-3xl font-bold">{t('common:intro_title')}</h2>
        </BlurFade>
        <BlurFade delay={0.55}>
          <p className="text-lg text-muted-foreground">{t('common:intro_p1')}</p>
        </BlurFade>
        <BlurFade delay={0.6}>
          <p className="text-lg text-muted-foreground">{t('common:intro_p2')}</p>
        </BlurFade>
        <BlurFade delay={0.65}>
          <p className="text-lg text-muted-foreground">{t('common:intro_p3')}</p>
        </BlurFade>
      </section>

      <section id="about" className="space-y-4 mt-12">
        <BlurFade delay={0.7}>
          <h2 className="text-3xl font-bold">{t('common:about_me_title')}</h2>
        </BlurFade>
        <BlurFade delay={0.75}>
          <p className="text-lg text-muted-foreground">{t('common:about_me_p1')}</p>
        </BlurFade>
        <BlurFade delay={0.8}>
          <p className="text-lg text-muted-foreground">{t('common:about_me_p2')}</p>
        </BlurFade>
        <BlurFade delay={0.85}>
          <p className="text-lg text-muted-foreground">{t('common:about_me_p3')}</p>
        </BlurFade>
        <BlurFade delay={0.9}>
          <div className="flex justify-center mt-6">
            <ScrollButton />
          </div>
        </BlurFade>
      </section>

      <section id="creations" className="space-y-4 mt-12">
        <BlurFade delay={0.9}>
          <h2 className="text-3xl font-bold">{t('common:my_creations_title')}</h2>
        </BlurFade>
        <BlurFade delay={0.95}>
          <p className="text-lg text-muted-foreground">{t('common:my_creations_p1')}</p>
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
                  <CardTitle>{t('common:my_creations_sugar_deal_title')}</CardTitle>
                  <CardDescription>
                    {t('common:my_creations_sugar_deal_date')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('common:my_creations_sugar_deal_desc')}</p>
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
                  <CardTitle>{t('common:my_creations_rick_morty_title')}</CardTitle>
                  <CardDescription>
                    {t('common:my_creations_rick_morty_date')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('common:my_creations_rick_morty_desc')}</p>
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
                  <CardTitle>{t('common:my_creations_through_window_title')}</CardTitle>
                  <CardDescription>
                    {t('common:my_creations_through_window_date')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('common:my_creations_through_window_desc')}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </BlurFade>
      </section>

      <section id="reviews" className="space-y-4 mt-12">
        <BlurFade delay={1.1}>
          <h2 className="text-3xl font-bold">{t('common:film_analysis_title')}</h2>
        </BlurFade>
        <BlurFade delay={1.15}>
          <p className="text-lg text-muted-foreground">{t('common:film_analysis_p1')}</p>
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
                  <CardTitle>{t('common:film_analysis_wonderful_life_title')}</CardTitle>
                  <CardDescription>
                    {t('common:film_analysis_wonderful_life_date')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('common:film_analysis_wonderful_life_desc')}</p>
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
                  <CardTitle>{t('common:film_analysis_titane_title')}</CardTitle>
                  <CardDescription>
                    {t('common:film_analysis_titane_date')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('common:film_analysis_titane_desc')}</p>
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
                  <CardTitle>{t('common:film_analysis_vermiglio_title')}</CardTitle>
                  <CardDescription>
                    {t('common:film_analysis_vermiglio_date')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('common:film_analysis_vermiglio_desc')}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </BlurFade>
      </section>

      {/* Featured Experiences */}
      <section id="featured" className="space-y-4 mt-16 scroll-mt-16">
        <BlurFade delay={1.25}>
          <h2 className="text-3xl font-bold">{t('common:featured_experiences_title')}</h2>
        </BlurFade>
        <BlurFade delay={1.3}>
          <p className="text-lg text-muted-foreground">{t('common:featured_experiences_p1')}</p>
        </BlurFade>
        <BlurFade delay={1.35}>
          <ExperienceShowcase items={FEATURED_EXPERIENCES} />
        </BlurFade>
      </section>

      <Separator className="my-16" />

      <section id="resume" className="space-y-12 scroll-mt-16">
        <div className="text-center space-y-4">
          <BlurFade delay={1.15}>
            <h2 className="text-4xl font-bold tracking-tight">{t('common:professional_experience_title')}</h2>
          </BlurFade>
          <BlurFade delay={1.2}>
            <p className="text-lg text-muted-foreground">
              {t('common:professional_experience_p1')}
            </p>
          </BlurFade>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <BlurFade delay={1.2}>
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold">{t('common:work_experience_title')}</h3>
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
                <h3 className="text-2xl font-bold">{t('common:education_title')}</h3>
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
                  <h3 className="text-2xl font-bold">{t('common:skills_title')}</h3>
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
                  <h3 className="text-2xl font-bold">{t('common:languages_title')}</h3>
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
        </div> {/* End of main content area */}

        {/* Sticky Navigation for large screens */}
        <aside className="hidden lg:block lg:w-1/4 lg:sticky lg:top-8 h-screen"> {/* Added h-screen for sticky parent */}
          <HomeNavigation sections={homeSections} />
        </aside>
      </div>
    </main>
  );
}
