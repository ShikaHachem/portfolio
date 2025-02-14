import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { compileMDX } from 'next-mdx-remote/rsc';
import { mdxComponents } from "@/components/mdx-components";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);
  
  const { content: mdxContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    source: mdxContent,
    metadata: data as Metadata,
    slug,
  };
}

export async function getBlogPosts() {
  const contentDir = path.join(process.cwd(), "content");
  const mdxFiles = getMDXFiles(contentDir);
  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      return getPost(slug);
    })
  );
  
  return posts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - 
           new Date(a.metadata.publishedAt).getTime();
  });
}
