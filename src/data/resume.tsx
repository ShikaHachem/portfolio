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
      start: "July 2023",
      end: "Present",
      logoUrl: "/Logo_Hannibal_TV.gif",
      description: [
        "Close collaboration with director to ensure creative and technical quality of teleshopping segments",
        "Assistance with VTR shoots, meticulously selecting angles and compositions",
        "Coordination between production and post-production teams",
        "On-screen appearances as an actress",
        "Management and correction of continuity issues",
        "Mediation between director and editor for voice-over synchronization optimization"
      ].join("\n"),
    },
    {
      company: "RADIO IFM",
      href: "#",
      badges: [],
      location: "Tunisia",
      title: "Production Assistant",
      start: "November 2022",
      end: "July 2023",
      logoUrl: "/ifm.png",
      description: [
        "Participation in casting and selection of hosts/guests",
        "In-depth research for creative concept development and new shows",
        "Logistics coordination, schedule management, and guest briefings",
        "Development of editorial content and show rundowns",
        "Supervision of reports, documentaries, vox pops, and interviews in French and English",
        "Technical direction management and quick resolution of live technical issues"
      ].join("\n"),
    },
    {
      company: "STH",
      href: "#",
      badges: [],
      location: "Tunisia",
      title: "Admin & Communication Assistant",
      start: "July 2017",
      end: "November 2020",
      description: [
        "Assist management with administrative tasks",
        "Ensure internal and external communication"
      ].join("\n"),
    },
  ],
  education: [
    {
      school: "Centre de Formation de Tunis",
      href: "#",
      degree: "BTS: Assistant Director",
      start: "2020",
      end: "2022",
      description: [
        "Cinema History",
        "Cinematography",
        "Scenario and Creative Writing",
        "Esthétique de Film",
        "Editing",
        "Film Production",
        "Visual Storytelling"
      ].join("\n"),
    },
    {
      school: "Faculté des Sciences Humaines et Sociales de Tunis",
      href: "#",
      degree: "License in English Literature and Civilization",
      start: "2017",
      end: "2019",
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
