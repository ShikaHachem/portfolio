import Link from "next/link";
import { RevealController } from "@/components/reveal";

const THUMBS = [
  "/sugar_thumbnail.png",
  "/wonderful_thumbnail.jpg",
  "/rick-morty-thumbnail.png",
  "/Titane_thumbnail.jpg",
  "/through-the-window-thumbnail.png",
  "/Vermiglio_thumbnail.jpg",
];

const CREATIONS_2 = [
  {
    href: "/blog/rick-and-morty-birthday",
    img: "/rick-morty-thumbnail.png",
    tag: "SCN 02 — Animation",
    title: "Personalized Rick and Morty Birthday Video",
    date: "March 10, 2025",
    desc: "A custom Rick and Morty animation created as a birthday gift, showcasing storytelling and audio-visual production skills.",
  },
  {
    href: "/blog/through-the-window",
    img: "/through-the-window-thumbnail.png",
    tag: "SCN 03 — Screenplay",
    title: "Through the Window: A Short Film Script",
    date: "March 10, 2024",
    desc: "A short film script about observation, silence, and the disconnect between perception and understanding.",
  },
];

const REVIEWS = [
  {
    href: "/blog/its-a-wonderful-life",
    img: "/wonderful_thumbnail.jpg",
    title: "It's a Wonderful Life",
    date: "September 8, 2024",
    desc: "An in-depth analysis of Frank Capra's 1946 masterpiece that explores the profound impact of one person's life on an entire community.",
  },
  {
    href: "/blog/titane",
    img: "/Titane_thumbnail.jpg",
    title: "Titane",
    date: "September 9, 2024",
    desc: "An analysis of Julia Ducournau's provocative film that challenges our understanding of identity, body autonomy, and human connection.",
  },
  {
    href: "/blog/vermiglio",
    img: "/Vermiglio_thumbnail.jpg",
    title: "Vermiglio",
    date: "September 10, 2024",
    desc: "An analysis of Maura Delpero's meditative film set in post-WWII Italy that explores isolation, memory, and female resilience.",
  },
];

const WORK = [
  {
    company: "Hannibal TV",
    title: "Assistant Director",
    period: "July 2023 – Present",
    location: "Tunisia",
    bullets: [
      "Close collaboration with director to ensure creative and technical quality of teleshopping segments",
      "Assistance with VTR shoots, meticulously selecting angles and compositions",
      "Coordination between production and post-production teams",
      "On-screen appearances as an actress",
      "Management and correction of continuity issues",
      "Mediation between director and editor for voice-over synchronization optimization",
    ],
  },
  {
    company: "Radio IFM",
    title: "Production Assistant",
    period: "Nov 2022 – July 2023",
    location: "Tunisia",
    bullets: [
      "Participation in casting and selection of hosts/guests",
      "In-depth research for creative concept development and new shows",
      "Logistics coordination, schedule management, and guest briefings",
      "Development of editorial content and show rundowns",
      "Supervision of reports, documentaries, vox pops, and interviews in French and English",
      "Technical direction management and quick resolution of live technical issues",
    ],
  },
  {
    company: "STH",
    title: "Admin & Communication Assistant",
    period: "July 2017 – Nov 2020",
    location: "Tunisia",
    bullets: [
      "Assist management with administrative tasks",
      "Ensure internal and external communication",
    ],
  },
];

const SKILLS = [
  "Creative Direction",
  "Production Management",
  "Film Analysis",
  "Team Leadership",
  "Problem Solving",
  "Adobe Suite",
  "Premiere Pro",
  "Photoshop",
  "After Effects",
  "Bilingual (EN/FR)",
  "Arabic Native",
];

const LANGUAGES = [
  "English — Bilingual",
  "French — Bilingual",
  "Arabic — Native",
  "Spanish — Beginner",
];

const SKILLS_LOOP = [
  "Creative Direction",
  "Production Management",
  "Film Analysis",
  "Team Leadership",
  "Problem Solving",
  "Premiere Pro",
  "After Effects",
  "Photoshop",
];

function ActRow({
  act,
  scene,
  tc,
}: {
  act: string;
  scene: string;
  tc: string;
}) {
  return (
    <div className="act-row" data-reveal>
      <span style={{ color: "var(--gold)" }}>{act}</span>
      <span style={{ color: "var(--muted)" }}>{scene}</span>
      <span className="act-rule" />
      <span style={{ color: "var(--muted)" }}>{tc}</span>
    </div>
  );
}

export default function Page() {
  const stripItems = [...THUMBS, ...THUMBS];

  return (
    <>
      <RevealController />

      {/* Opening titles */}
      <section
        style={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "80px 6vw 56px 6vw" }}>
          <div
            className="mono"
            style={{
              fontSize: 11.5,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "var(--gold)",
              animation: "fadeUp .9s 1.7s both",
            }}
          >
            Tunis · A portfolio in six acts
          </div>
          <h1
            className="font-serif-display"
            style={{
              fontSize: "clamp(96px, 19vw, 290px)",
              lineHeight: 0.86,
              margin: "18px 0 0 -0.04em",
              animation: "fadeUp 1s 1.9s both",
            }}
          >
            Maha
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 22,
              marginTop: 26,
              animation: "fadeUp .9s 2.15s both",
            }}
          >
            <span
              style={{
                fontWeight: 600,
                fontSize: 13.5,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Film Analyst &amp; Assistant Director
            </span>
            <span
              style={{ flex: 1, height: 1, background: "var(--line)" }}
            />
            <span
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "var(--muted)",
                whiteSpace: "nowrap",
              }}
            >
              EST. TUNISIA
            </span>
          </div>
          <p
            className="font-serif-display"
            style={{
              fontStyle: "italic",
              fontSize: "clamp(20px, 2.2vw, 27px)",
              lineHeight: 1.45,
              color: "var(--ink-soft)",
              maxWidth: "56ch",
              margin: "20px 0 0",
              animation: "fadeUp .9s 2.3s both",
              textWrap: "pretty",
            }}
          >
            A cinephile exploring the art of storytelling through the lens of
            film analysis and cinematography
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginTop: 34,
              animation: "fadeUp .9s 2.45s both",
            }}
          >
            <a href="mailto:lhaddad.maha@gmail.com" className="btn-gold">
              Start a conversation
            </a>
            <a href="#creations" className="btn-ghost">
              View the work ↓
            </a>
          </div>
        </div>

        {/* Filmstrip marquee */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            background: "var(--bg-deep)",
            padding: "7px 0",
            animation: "fadeIn 1.2s 2.7s both",
          }}
        >
          <div className="sprockets" style={{ marginBottom: 6 }} />
          <div style={{ overflow: "hidden" }}>
            <div className="strip-track">
              {stripItems.map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: 232,
                    height: 128,
                    overflow: "hidden",
                    marginRight: 12,
                    flex: "none",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s}
                    alt="film still"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "grayscale(30%) contrast(1.06) sepia(8%)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="sprockets" style={{ marginTop: 6 }} />
        </div>
      </section>

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 80px)",
        }}
      >
        {/* Act I — Through the Film Mirror */}
        <section id="intro" style={{ padding: "130px 0 30px" }}>
          <ActRow act="Act I" scene="Scene 01 · Philosophy" tc="TC 00:04:12:08" />
          <h2
            data-reveal
            className="font-serif-display"
            style={{
              fontSize: "clamp(44px, 6vw, 84px)",
              lineHeight: 1.02,
              margin: "26px 0 44px",
            }}
          >
            Through the Film Mirror
          </h2>
          <div
            className="grid-intro"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr .9fr",
              gap: "clamp(32px, 5vw, 72px)",
            }}
          >
            <p
              data-reveal
              className="font-serif-display"
              style={{
                fontSize: "clamp(21px, 2vw, 26px)",
                lineHeight: 1.55,
                color: "var(--ink)",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              {
                "Film is more than just moving images—it's a mirror reflecting human nature, society, and the subconscious. My approach to film analysis blends a passion for storytelling with a search for deeper meaning, uncovering the layers of symbolism, character development, and directorial intent that make cinema an art form."
              }
            </p>
            <div>
              <p
                data-reveal
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.85,
                  color: "var(--ink-soft)",
                  margin: "0 0 22px",
                  textWrap: "pretty",
                }}
              >
                {
                  "Drawing from my love for immersive narratives, self-development themes, and the power of visual metaphors, I explore how films shape emotions, challenge perceptions, and leave lasting imprints on the mind."
                }
              </p>
              <p
                data-reveal
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.85,
                  color: "var(--ink-soft)",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                {
                  "Through this platform, I aim to dissect cinema with depth and clarity, offering insights that go beyond the screen and into the essence of storytelling."
                }
              </p>
            </div>
          </div>
        </section>

        {/* Act II — About Me */}
        <section id="about" style={{ padding: "130px 0 30px" }}>
          <ActRow act="Act II" scene="Scene 02 · The Analyst" tc="TC 00:11:47:03" />
          <div
            className="grid-about"
            style={{
              display: "grid",
              gridTemplateColumns: "380px 1fr",
              gap: "clamp(36px, 5vw, 80px)",
              alignItems: "start",
              marginTop: 48,
            }}
          >
            <figure
              data-reveal
              style={{
                margin: 0,
                background: "var(--bg-deep)",
                border: "1px solid var(--line)",
                padding: 14,
                transform: "rotate(-1.4deg)",
              }}
            >
              <div className="sprockets" style={{ height: 8, marginBottom: 10 }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpeg"
                alt="Maha"
                style={{
                  width: "100%",
                  aspectRatio: "4 / 5",
                  objectFit: "cover",
                  display: "block",
                  filter: "sepia(12%) contrast(1.04)",
                }}
              />
              <figcaption
                className="mono"
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginTop: 12,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Still 01 — Maha</span>
                <span style={{ color: "var(--gold)" }}>Tunis</span>
              </figcaption>
            </figure>
            <div>
              <h2
                data-reveal
                className="font-serif-display"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: 1.05,
                  margin: "0 0 30px",
                }}
              >
                About Me
              </h2>
              <p
                data-reveal
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.85,
                  color: "var(--ink-soft)",
                  margin: "0 0 22px",
                  textWrap: "pretty",
                }}
              >
                {
                  "I'm Maha, a film enthusiast with a deep love for storytelling, symbolism, and the art of cinema. Whether it's the psychological depth of Shutter Island, the poetic beauty of In the Mood for Love, or the complex character arcs of Breaking Bad, I'm drawn to films that leave a lasting impact."
                }
              </p>
              <p
                data-reveal
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.85,
                  color: "var(--ink-soft)",
                  margin: "0 0 26px",
                  textWrap: "pretty",
                }}
              >
                {
                  "With a background in filmmaking and a passion for analysis, I created this platform to explore cinema beyond the surface—diving into themes, cinematography, and the nuances that make each film unique. This space is not just about reviews but about understanding the essence of storytelling and its power to shape perception."
                }
              </p>
              <p
                data-reveal
                className="font-serif-display"
                style={{
                  fontStyle: "italic",
                  fontSize: 22,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                  margin: 0,
                  borderLeft: "2px solid var(--gold)",
                  paddingLeft: 22,
                }}
              >
                This journey is a step toward refining my voice as a film
                analyst and storyteller.
              </p>
            </div>
          </div>
        </section>

        {/* Act III — My Creations */}
        <section id="creations" style={{ padding: "130px 0 30px" }}>
          <ActRow act="Act III" scene="Scene 03 · Original Works" tc="TC 00:26:05:19" />
          <h2
            data-reveal
            className="font-serif-display"
            style={{
              fontSize: "clamp(44px, 6vw, 84px)",
              lineHeight: 1.02,
              margin: "26px 0 14px",
            }}
          >
            My Creations
          </h2>
          <p
            data-reveal
            style={{ fontSize: 16.5, color: "var(--muted)", margin: "0 0 44px" }}
          >
            Explore my creative projects and storytelling efforts.
          </p>
          <Link
            data-reveal
            href="/blog/the-sugar-deal"
            className="cine-card grid-sugar"
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr",
            }}
          >
            <div style={{ overflow: "hidden", background: "var(--bg-deep)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sugar_thumbnail.png"
                alt="The Sugar Deal"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: 320,
                  objectFit: "cover",
                  display: "block",
                  filter: "contrast(1.05)",
                }}
              />
            </div>
            <div
              style={{
                padding: "clamp(24px, 3vw, 44px)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                SCN 01 — Short Film
              </span>
              <span
                className="font-serif-display"
                style={{ fontSize: "clamp(30px, 3vw, 42px)", lineHeight: 1.08 }}
              >
                The Sugar Deal
              </span>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  color: "var(--muted)",
                }}
              >
                MARCH 9, 2024
              </span>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  color: "var(--ink-soft)",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                Exploring the complex dynamics and ethical questions in an
                unconventional relationship arrangement.
              </p>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginTop: "auto",
                }}
              >
                Read the story →
              </span>
            </div>
          </Link>
          <div
            className="grid-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 24,
            }}
          >
            {CREATIONS_2.map((c) => (
              <Link
                key={c.href}
                data-reveal
                href={c.href}
                className="cine-card"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ overflow: "hidden", background: "var(--bg-deep)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    style={{
                      width: "100%",
                      height: 236,
                      objectFit: "cover",
                      display: "block",
                      filter: "contrast(1.05)",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: 26,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    flex: 1,
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {c.tag}
                  </span>
                  <span
                    className="font-serif-display"
                    style={{ fontSize: 27, lineHeight: 1.12 }}
                  >
                    {c.title}
                  </span>
                  <span
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.date}
                  </span>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.75,
                      color: "var(--ink-soft)",
                      margin: 0,
                      textWrap: "pretty",
                    }}
                  >
                    {c.desc}
                  </p>
                  <span
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginTop: "auto",
                    }}
                  >
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Act IV — Film Analysis */}
        <section id="reviews" style={{ padding: "130px 0 30px" }}>
          <ActRow act="Act IV" scene="Scene 04 · Criticism" tc="TC 00:52:33:11" />
          <div
            className="grid-reviews-head"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 5vw, 72px)",
              alignItems: "end",
              margin: "26px 0 44px",
            }}
          >
            <h2
              data-reveal
              className="font-serif-display"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                lineHeight: 1.02,
                margin: 0,
              }}
            >
              Film Analysis <em>&amp;</em> Reviews
            </h2>
            <p
              data-reveal
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "var(--muted)",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              In-depth breakdowns of movies focusing on symbolism, hidden
              meanings, directing techniques, character development, and
              narrative structure. Each review includes critical analysis of
              cinematography, storytelling, themes, performances, and personal
              insights.
            </p>
          </div>
          <div
            className="grid-reviews"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {REVIEWS.map((r) => (
              <Link
                key={r.href}
                data-reveal
                href={r.href}
                className="cine-card review-card"
                style={{
                  position: "relative",
                  display: "block",
                  overflow: "hidden",
                  background: "transparent",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.img}
                  alt={r.title}
                  style={{
                    width: "100%",
                    height: 430,
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(15%) contrast(1.05)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(5,4,3,.1) 30%, rgba(5,4,3,.94) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {r.date}
                  </span>
                  <span
                    className="font-serif-display"
                    style={{ fontSize: 31, lineHeight: 1.08 }}
                  >
                    {r.title}
                  </span>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.7,
                      color: "var(--ink-soft)",
                      margin: 0,
                      textWrap: "pretty",
                    }}
                  >
                    {r.desc}
                  </p>
                  <span
                    className="mono"
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    Read analysis →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Act V — Featured Experiences */}
        <section id="featured" style={{ padding: "130px 0 30px" }}>
          <ActRow act="Act V" scene="Scene 05 · Behind the Scenes" tc="TC 01:14:58:02" />
          <h2
            data-reveal
            className="font-serif-display"
            style={{
              fontSize: "clamp(44px, 6vw, 84px)",
              lineHeight: 1.02,
              margin: "26px 0 14px",
            }}
          >
            Featured Experiences
          </h2>
          <p
            data-reveal
            style={{ fontSize: 16.5, color: "var(--muted)", margin: "0 0 44px" }}
          >
            Stories from my most formative professional journeys
          </p>
          <div
            data-reveal
            className="grid-featured"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "var(--panel)",
              border: "1px solid var(--line)",
            }}
          >
            <div
              style={{
                padding: "clamp(28px, 4vw, 52px)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logo_Hannibal_TV.gif"
                alt="Hannibal TV logo"
                style={{ width: 64, filter: "grayscale(20%)" }}
              />
              <span
                className="mono"
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                Assistant Director · July 2023 – Present
              </span>
              <span
                className="font-serif-display"
                style={{ fontSize: "clamp(32px, 3.4vw, 46px)", lineHeight: 1.05 }}
              >
                Hannibal TV
              </span>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.85,
                  color: "var(--ink-soft)",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                {
                  "I still can't believe how much I learned during my time as Assistant Director for the Telemarketing team at Hannibal TV. It wasn't just a job – it was a crash course in creativity, adaptability, and working under pressure that I'll never forget."
                }
              </p>
              <Link
                href="/blog/hannibal-tv"
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginTop: "auto",
                }}
              >
                Watch the full story →
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: 2,
                background: "var(--bg-deep)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hannibal1.jpg"
                alt="On set at Hannibal TV"
                style={{
                  gridRow: "1 / span 2",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "grayscale(20%) contrast(1.05)",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hannibal2.jpg"
                alt="Behind the scenes"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "grayscale(20%) contrast(1.05)",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hannibal3.jpg"
                alt="Production still"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "grayscale(20%) contrast(1.05)",
                }}
              />
            </div>
          </div>
          <div
            data-reveal
            className="grid-featured"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "var(--panel)",
              border: "1px solid var(--line)",
              borderTop: "none",
            }}
          >
            <div
              style={{
                padding: "clamp(28px, 4vw, 52px)",
                borderRight: "1px solid var(--line-soft)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                className="font-serif-display"
                style={{
                  fontStyle: "italic",
                  fontSize: "clamp(19px, 1.8vw, 24px)",
                  lineHeight: 1.55,
                  color: "var(--ink)",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                <span style={{ color: "var(--gold)" }}>“</span>
                {
                  "My time as an Assistant Director and Assistant Producer at Radio IFM was an unforgettable deep dive into the fast-paced world of live broadcasting. Every day brought a new challenge—juggling schedules, coordinating with guests, and making sure the show ran seamlessly behind the scenes. But beyond the logistics, it was about storytelling, precision, and the thrill of live radio."
                }
                <span style={{ color: "var(--gold)" }}>”</span>
              </p>
            </div>
            <div
              style={{
                padding: "clamp(28px, 4vw, 52px)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ifm.png" alt="Radio IFM logo" style={{ width: 56 }} />
              <span
                className="mono"
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                Assistant Director &amp; Producer · Nov 2022 – July 2023
              </span>
              <span
                className="font-serif-display"
                style={{ fontSize: "clamp(32px, 3.4vw, 46px)", lineHeight: 1.05 }}
              >
                Radio IFM
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ifm-interview-shoot.jpg"
                alt="Filming an interview in the Radio IFM studio"
                style={{
                  width: "100%",
                  flex: 1,
                  minHeight: 200,
                  objectFit: "cover",
                  display: "block",
                  border: "1px solid var(--line)",
                  filter: "grayscale(20%) contrast(1.05)",
                }}
              />
              <Link
                href="/blog/radio-ifm"
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginTop: "auto",
                }}
              >
                Read the full story →
              </Link>
            </div>
          </div>
        </section>

        {/* Final Act — Professional Experience */}
        <section id="resume" style={{ padding: "130px 0 110px" }}>
          <ActRow act="Final Act" scene="Scene 06 · Credentials" tc="TC 01:38:20:14" />
          <h2
            data-reveal
            className="font-serif-display"
            style={{
              fontSize: "clamp(44px, 6vw, 84px)",
              lineHeight: 1.02,
              margin: "26px 0 14px",
            }}
          >
            Professional Experience
          </h2>
          <p
            data-reveal
            style={{ fontSize: 16.5, color: "var(--muted)", margin: "0 0 20px" }}
          >
            My journey in film production and analysis
          </p>
          <div>
            {WORK.map((w) => (
              <div
                key={w.company}
                data-reveal
                className="grid-work"
                style={{
                  display: "grid",
                  gridTemplateColumns: "230px 1fr",
                  gap: "clamp(24px, 4vw, 56px)",
                  borderTop: "1px solid var(--line)",
                  padding: "36px 0",
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    lineHeight: 2,
                  }}
                >
                  {w.period}
                  <br />
                  {w.location}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 18,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      className="font-serif-display"
                      style={{ fontSize: 32 }}
                    >
                      {w.company}
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: 12,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                      }}
                    >
                      {w.title}
                    </span>
                  </div>
                  <ul
                    style={{
                      margin: "16px 0 0",
                      paddingLeft: 18,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      listStyle: "disc",
                    }}
                  >
                    {w.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: "var(--ink-soft)",
                        }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div
            className="grid-resume-cols"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 5vw, 72px)",
              marginTop: 60,
            }}
          >
            <div data-reveal>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: 12,
                  marginBottom: 24,
                }}
              >
                Education
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 26 }}
              >
                <div>
                  <div
                    className="font-serif-display"
                    style={{ fontSize: 24 }}
                  >
                    Centre de Formation de Tunis
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginTop: 6,
                    }}
                  >
                    BTS: Assistant Director · 2020 – 2022
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: "var(--ink-soft)",
                      margin: "10px 0 0",
                    }}
                  >
                    Cinema History · Cinematography · Scenario and Creative
                    Writing · Esthétique de Film · Editing · Film Production ·
                    Visual Storytelling
                  </p>
                </div>
                <div>
                  <div
                    className="font-serif-display"
                    style={{ fontSize: 24 }}
                  >
                    Faculté des Sciences Humaines et Sociales de Tunis
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginTop: 6,
                    }}
                  >
                    License in English Literature and Civilization · 2017 –
                    2019
                  </div>
                </div>
              </div>
            </div>
            <div data-reveal>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: 12,
                  marginBottom: 24,
                }}
              >
                Skills
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {SKILLS.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: 12,
                  margin: "36px 0 24px",
                }}
              >
                Languages
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {LANGUAGES.map((l) => (
                  <span key={l} className="chip">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* End credits */}
      <section
        id="contact"
        style={{
          background: "var(--bg-deep)",
          borderTop: "1px solid var(--line-soft)",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            borderBottom: "1px solid var(--line-soft)",
            padding: "16px 0",
          }}
        >
          <div className="strip-track-skills">
            {[...SKILLS_LOOP, ...SKILLS_LOOP].map((s, i) => (
              <span key={i} style={{ padding: "0 26px" }}>
                {s}{" "}
                <span style={{ color: "var(--gold)", paddingLeft: 26 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "130px clamp(24px, 5vw, 80px) 100px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 26,
          }}
        >
          <span
            data-reveal
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            End credits
          </span>
          <h2
            data-reveal
            className="font-serif-display"
            style={{
              fontSize: "clamp(40px, 5.6vw, 78px)",
              lineHeight: 1.05,
              margin: 0,
              textWrap: "balance",
            }}
          >
            Every great production starts with a conversation.
          </h2>
          <p
            data-reveal
            className="mono"
            style={{
              fontSize: 11.5,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: 0,
              lineHeight: 2,
            }}
          >
            Open to production, direction &amp; analysis work
            <br />
            Tunisia · English / French / Arabic / Spanish
          </p>
          <a
            data-reveal
            href="mailto:lhaddad.maha@gmail.com"
            className="btn-gold"
            style={{ padding: "17px 34px", fontSize: 12 }}
          >
            lhaddad.maha@gmail.com
          </a>
          <div
            data-reveal
            className="font-serif-display"
            style={{
              fontStyle: "italic",
              fontSize: 60,
              color: "var(--ink)",
              marginTop: 40,
            }}
          >
            Fin.
          </div>
          <div
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted-deep)",
            }}
          >
            Maha — Portfolio · 2026 · Projected at 24 fps
          </div>
        </div>
      </section>
    </>
  );
}
