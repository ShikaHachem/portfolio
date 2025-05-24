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

function getMDXFiles(dir: string, locale: string = 'en') {
  const files = fs.readdirSync(dir);
  if (locale === 'en') {
    // For English, get files that don't have a .fr.mdx suffix
    return files.filter(
      (file) => path.extname(file) === ".mdx" && !file.endsWith(".fr.mdx")
    );
  }
  // For other locales, get files with the specific locale suffix e.g. .fr.mdx
  return files.filter(
    (file) => path.extname(file) === ".mdx" && file.endsWith(`.${locale}.mdx`)
  );
}

export async function getPost(slug: string, locale: string = 'en') {
  const filename = locale === 'en' ? `${slug}.mdx` : `${slug}.${locale}.mdx`;
  const filePath = path.join(process.cwd(), "content", filename);

  let source;
  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    // If localized file doesn't exist, fall back to English
    if (locale !== 'en') {
      const fallbackFilePath = path.join(process.cwd(), "content", `${slug}.mdx`);
      try {
        source = fs.readFileSync(fallbackFilePath, "utf-8");
      } catch (fallbackError) {
        console.error(`Error reading file for slug ${slug} (locale ${locale} and fallback):`, fallbackError);
        return null; // Or throw an error, or return a specific "not found" object
      }
    } else {
      console.error(`Error reading file for slug ${slug} (locale ${locale}):`, error);
      return null; // Or throw an error
    }
  }

  const { content, data } = matter(source);
  
  const { content: mdxContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false, // Frontmatter is already parsed by gray-matter
    },
  });

  return {
    source: mdxContent,
    metadata: data as Metadata,
    slug: locale === 'en' ? slug : slug.replace(`.${locale}`, ''), // Ensure slug is consistent
  };
}

export async function getBlogPosts(locale: string = 'en') {
  const contentDir = path.join(process.cwd(), "content");
  const mdxFiles = getMDXFiles(contentDir, locale);
  
  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      // Remove locale suffix from slug if present (e.g., 'my-post.fr' becomes 'my-post')
      if (locale !== 'en' && slug.endsWith(`.${locale}`)) {
        slug = slug.substring(0, slug.length - `.${locale}`.length);
      }
      return getPost(slug, locale);
    })
  );

  // Filter out any null posts (e.g., if a file read failed)
  const validPosts = posts.filter(post => post !== null) as Array<{ source: any; metadata: Metadata; slug: string; }>;
  
  return validPosts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - 
           new Date(a.metadata.publishedAt).getTime();
  });
}
