import { getPost } from "@/data/blog";
import { CATALOG, CATALOG_ORDER, nextScreening } from "@/data/catalog";
import { STORIES } from "@/data/stories";
import { YouTubeEmbed } from "@/components/mdx-components";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CATALOG_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const entry = CATALOG[params.slug];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.summary,
    openGraph: {
      title: entry.title,
      description: entry.summary,
      type: "article",
      ...(entry.hero ? { images: [{ url: entry.hero }] } : {}),
    },
  };
}

function StoryBody({ slug }: { slug: string }) {
  const s = STORIES[slug];
  return (
    <>
      <p
        className="font-serif-display"
        style={{
          fontSize: 21,
          lineHeight: 1.6,
          color: "var(--ink)",
          margin: "0 0 26px",
        }}
      >
        {s.introduction}
      </p>
      {s.youtube && <YouTubeEmbed id={s.youtube} />}
      {s.images.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(s.images.length, 3)}, 1fr)`,
            gap: 10,
            margin: "34px 0",
          }}
        >
          {s.images.map((i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={i}
              alt="Production still"
              style={{
                width: "100%",
                aspectRatio: s.images.length === 1 ? "2 / 1.1" : "4 / 3",
                objectFit: "cover",
                display: "block",
                border: "1px solid var(--line)",
                filter: "grayscale(15%) contrast(1.05)",
                margin: 0,
              }}
            />
          ))}
        </div>
      )}
      {s.sections.map((sec) => (
        <section key={sec.title}>
          <h2>{sec.title}</h2>
          <p>{sec.content}</p>
          {sec.video && (
            <figure style={{ margin: "34px 0" }}>
              <div className="embed-frame" style={{ margin: 0 }}>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  src={sec.video}
                  controls
                  preload="metadata"
                  playsInline
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    background: "var(--bg-deep)",
                  }}
                />
              </div>
              {sec.videoCaption && (
                <figcaption
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginTop: 12,
                    lineHeight: 1.9,
                  }}
                >
                  {sec.videoCaption}
                </figcaption>
              )}
            </figure>
          )}
        </section>
      ))}
    </>
  );
}

export default async function ScreeningRoomPage({
  params,
}: {
  params: { slug: string };
}) {
  const entry = CATALOG[params.slug];
  if (!entry) notFound();

  let essayBody: React.ReactNode = null;
  if (entry.type === "essay") {
    const post = await getPost(params.slug);
    if (!post) notFound();
    essayBody = post.source;
  }

  const next = nextScreening(params.slug);

  return (
    <article
      style={{
        maxWidth: 780,
        margin: "0 auto",
        padding: "84px clamp(20px, 4vw, 40px) 60px",
        animation: "fadeUp .8s .1s both",
      }}
    >
      <div
        className="mono"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 11,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "var(--gold)" }}>{entry.kicker}</span>
        <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
        <span style={{ color: "var(--muted)" }}>{entry.date}</span>
      </div>
      <h1
        className="font-serif-display"
        style={{
          fontSize: "clamp(38px, 5.4vw, 62px)",
          lineHeight: 1.05,
          margin: "24px 0 10px",
          textWrap: "balance",
        }}
      >
        {entry.title}
      </h1>
      <p
        className="font-serif-display"
        style={{
          fontStyle: "italic",
          fontSize: 19,
          lineHeight: 1.55,
          color: "var(--muted)",
          margin: "0 0 8px",
          textWrap: "pretty",
        }}
      >
        {entry.summary}
      </p>
      {entry.hero && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={entry.hero}
          alt={entry.title}
          style={{
            width: "100%",
            aspectRatio: "2.39 / 1",
            objectFit: "cover",
            display: "block",
            margin: "30px 0 8px",
            border: "1px solid var(--line)",
            filter: "contrast(1.05)",
          }}
        />
      )}
      <div className="article-body" style={{ marginTop: 26 }}>
        {entry.type === "story" ? (
          <StoryBody slug={params.slug} />
        ) : (
          essayBody
        )}
      </div>

      <div
        style={{
          borderTop: "1px solid var(--line)",
          marginTop: 64,
          paddingTop: 36,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            className="mono"
            style={{
              fontSize: 10.5,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 10,
            }}
          >
            Next screening
          </div>
          <Link
            href={`/blog/${next.slug}`}
            className="font-serif-display"
            style={{
              fontSize: 28,
              lineHeight: 1.15,
              color: "var(--ink)",
            }}
          >
            {next.title} →
          </Link>
        </div>
        <a
          href="mailto:lhaddad.maha@gmail.com"
          className="mono"
          style={{
            border: "1px solid rgba(216, 164, 74, 0.5)",
            padding: "13px 22px",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}
        >
          Work with Maha
        </a>
      </div>
      <div
        className="mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--muted-deep)",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Maha — Portfolio · The Screening Room
      </div>
    </article>
  );
}
