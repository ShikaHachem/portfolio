import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
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

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  
  try {
    post = await getPost(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4">
      <article className="prose prose-zinc dark:prose-invert mx-auto max-w-4xl prose-img:rounded-lg prose-a:text-primary">
        <div className="mb-8 text-center">
          <h1 className="mb-2 mt-8">{post.metadata.title}</h1>
          <time className="text-muted-foreground">
            {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        {post.source}
      </article>
    </main>
  );
}
