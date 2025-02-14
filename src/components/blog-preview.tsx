import Link from "next/link";
import { getBlogPosts } from "@/data/blog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export async function BlogPreview() {
  const posts = await getBlogPosts();
  
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
            {post.metadata.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{post.metadata.title}</CardTitle>
              <CardDescription>
                {new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.metadata.summary}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
} 