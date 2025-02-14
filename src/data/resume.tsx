import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Maha",
  initials: "MA",
  url: "https://maha.io",
  location: "Tunisia",
  locationLink: "https://www.google.com/maps/place/tunisia",
  description:
    "Film Analyst and Assistant Director exploring the art of storytelling through cinema.",
  summary:
    "A passionate cinephile with a background in film production and directing. Through my work in television and radio, I've developed a deep understanding of storytelling, visual composition, and the technical aspects of production. My analysis focuses on uncovering the layers of meaning in cinema, from symbolism to directorial techniques.",
  avatarUrl: "/me.png",
  skills: [
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
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  work: [
    {
      company: "HANNIBAL TV",
      href: "#",
      badges: [],
      location: "Tunisia",
      title: "Assistant Director",
      start: "2023",
      end: "2024",
      description:
        "Close collaboration with director for creative and technical quality of teleshopping segments. Directed VTR shoots, carefully selecting angles and compositions. Coordinated between production and post-production teams. Versatile role including camera operation, slate management, team coordination, and on-screen appearances. Managed continuity issues and mediated between director and editor for voice-over synchronization.",
    },
    {
      company: "Radio IFM",
      href: "#",
      badges: [],
      location: "Tunisia",
      title: "Production Assistant",
      start: "2022",
      end: "2023",
      description:
        "Participated in casting and selection of hosts/guests. Conducted research for creative concept development and new shows. Managed logistics, schedules, and guest briefings. Developed editorial content and show rundowns. Supervised production of reports, documentaries, and interviews in French and English. Managed technical direction and quick problem resolution during live broadcasts.",
    },
  ],
  education: [
    {
      school: "Centre de Formation de Tunis",
      href: "#",
      degree: "BTS: Assistant Director",
      start: "2020",
      end: "2022",
    },
    {
      school: "Faculté des Sciences Humaines et Sociales de Tunis",
      href: "#",
      degree: "License 1 in English Literature and Civilization",
      start: "2019",
      end: "2020",
    },
  ],
  languages: [
    {
      name: "English",
      level: "Bilingual",
    },
    {
      name: "French",
      level: "Bilingual",
    },
    {
      name: "Arabic",
      level: "Native",
    },
    {
      name: "Spanish",
      level: "Beginner",
    },
  ],
  contact: {
    social: {
      email: {
        name: "Email",
        url: "mailto:lhaddad.maha@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
} as const;
