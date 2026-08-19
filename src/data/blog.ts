import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  // English-only content; localized *.xx.mdx files are ignored.
  return fs
    .readdirSync(dir)
    .filter(
      (file) =>
        path.extname(file) === ".mdx" && !/\.[a-z]{2}\.mdx$/.test(file)
    );
}

export async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);

  let source: string;
  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }

  const { content, data } = matter(source);

  // The Screening Room header already renders title/date/summary — strip the
  // duplicated in-document title block, mirroring the design's mdToHtml().
  let cleaned = content.replace(
    /<div className="mb-8 text-center">[\s\S]*?<\/div>\s*/,
    ""
  );

  // Raw <iframe> embeds become the design's framed YouTube embed.
  cleaned = cleaned.replace(
    /<iframe[\s\S]*?(?:<\/iframe>|\/>)/g,
    (m) => {
      const src = (m.match(/src="([^"]+)"/) || [])[1] || "";
      const id = (src.match(/embed\/([\w-]+)/) || [])[1];
      return id ? `<YouTubeEmbed id="${id}" />` : "";
    }
  );

  const { content: mdxContent } = await compileMDX({
    source: cleaned,
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
    mdxFiles.map((file) => getPost(path.basename(file, path.extname(file))))
  );

  return posts
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );
}
