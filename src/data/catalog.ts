export interface CatalogEntry {
  type: "essay" | "story";
  title: string;
  kicker: string;
  date: string;
  summary: string;
  hero?: string;
}

/** Screening Room catalog — ordering drives the "Next screening" link. */
export const CATALOG_ORDER = [
  "the-sugar-deal",
  "rick-and-morty-birthday",
  "through-the-window",
  "its-a-wonderful-life",
  "titane",
  "vermiglio",
  "hannibal-tv",
  "radio-ifm",
] as const;

export const CATALOG: Record<string, CatalogEntry> = {
  "the-sugar-deal": {
    type: "essay",
    title: "The Sugar Deal",
    kicker: "Short Film",
    date: "March 9, 2024",
    summary:
      "A deep dive into a satirical short film that mirrors Tunisia's real sugar shortage crisis, blending dark humor with social commentary.",
  },
  "rick-and-morty-birthday": {
    type: "essay",
    title: "Personalized Rick and Morty Birthday Video",
    kicker: "Animation",
    date: "March 10, 2025",
    summary:
      "A custom Rick and Morty animation created as a birthday gift, showcasing storytelling and audio-visual production skills.",
  },
  "through-the-window": {
    type: "essay",
    title: "Through the Window",
    kicker: "Screenplay",
    date: "March 10, 2024",
    summary:
      "A short film script about observation, silence, and the disconnect between perception and understanding.",
  },
  "its-a-wonderful-life": {
    type: "essay",
    title: "It's a Wonderful Life",
    kicker: "Film Analysis",
    date: "September 8, 2024",
    hero: "/wonderful_thumbnail.jpg",
    summary:
      "An in-depth analysis of Frank Capra's 1946 masterpiece that explores the profound impact of one person's life on an entire community.",
  },
  titane: {
    type: "essay",
    title: "Titane",
    kicker: "Film Analysis",
    date: "September 9, 2024",
    hero: "/Titane_thumbnail.jpg",
    summary:
      "An analysis of Julia Ducournau's provocative film that challenges our understanding of identity, body autonomy, and human connection.",
  },
  vermiglio: {
    type: "essay",
    title: "Vermiglio",
    kicker: "Film Analysis",
    date: "September 10, 2024",
    hero: "/Vermiglio_thumbnail.jpg",
    summary:
      "An analysis of Maura Delpero's meditative film set in post-WWII Italy that explores isolation, memory, and female resilience.",
  },
  "hannibal-tv": {
    type: "story",
    title: "Hannibal TV",
    kicker: "Featured Experience",
    date: "July 2023 – Present",
    summary:
      "Assistant Director — stories from the telemarketing production floor.",
  },
  "radio-ifm": {
    type: "story",
    title: "Radio IFM",
    kicker: "Featured Experience",
    date: "November 2022 – July 2023",
    summary:
      "Assistant Director & Producer — inside the fast-paced world of live radio.",
  },
};

export function nextScreening(slug: string) {
  const idx = CATALOG_ORDER.indexOf(slug as (typeof CATALOG_ORDER)[number]);
  const nextKey = CATALOG_ORDER[(idx + 1) % CATALOG_ORDER.length];
  return { slug: nextKey, title: CATALOG[nextKey].title };
}
