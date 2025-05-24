"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

// Note: Metadata is usually handled in generateMetadata for Server Components,
// but for client components, you might update document.title or use a Head component.
// For this example, we'll focus on fetching and displaying posts in the correct language.

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const { i18n, t } = useTranslation(['common']); // Assuming 'common' might have 'blog_title'
  const [posts, setPosts] = useState<Awaited<ReturnType<typeof getBlogPosts>>>([]);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getBlogPosts(i18n.language);
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, [i18n.language]);
  
  // Update document title dynamically
  useEffect(() => {
    document.title = t('blog_page_title', { ns: 'common', defaultValue: "Blog" });
  }, [t, i18n.language]);

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">{t('blog_page_title', { ns: 'common', defaultValue: "Blog" })}</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`} // Slug should be language-agnostic here if getPost handles it
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
