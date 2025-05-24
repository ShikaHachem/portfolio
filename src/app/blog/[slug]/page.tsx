import { getBlogPosts, getPost } from "@/data/blog";
import { getResumeData } from "@/data/resume"; // Changed from DATA to getResumeData
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/blog-layout";
import { createTranslation } from "next-i18next"; // For server-side translations
import { i18n } from "../../../../next-i18next.config"; // Path to i18n config

export async function generateStaticParams() {
  // Fetch posts for all supported languages to generate static paths
  const englishPosts = await getBlogPosts('en');
  const frenchPosts = await getBlogPosts('fr');
  
  const params = [
    ...englishPosts.map((post) => ({ lang: 'en', slug: post.slug })),
    ...frenchPosts.map((post) => ({ lang: 'fr', slug: post.slug })),
  ];
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
    lang: string; // Language parameter from URL
  };
}): Promise<Metadata | undefined> {
  const lang = params.lang || i18n.defaultLocale;
  const { t } = await createTranslation(lang, ['resume', 'common']); // Load 'resume' and 'common' namespaces
  const DATA = getResumeData(t); // Get language-specific resume data for URL
  
  let post = await getPost(params.slug, lang);

  if (!post) {
    return {}; // Return empty metadata or handle as needed
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/${lang}/blog/${post.slug}`, // Include language in URL
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

interface BlogPostPageProps {
  params: {
    slug: string;
    lang: string; // Language parameter from URL
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const lang = params.lang || i18n.defaultLocale;
  const post = await getPost(params.slug, lang).catch(() => null);

  if (!post) {
    notFound();
  }
  
  // For "Back to blog" link, we'd ideally use t() here.
  // This requires passing t from generateMetadata or re-creating it.
  // For simplicity, if BlogLayout handles this or if it's static English, it's fine.
  // If BlogLayout needs to be dynamic, it might need to become a client component or receive t.

  return (
    <BlogLayout> 
      {post.source}
    </BlogLayout>
  );
}
