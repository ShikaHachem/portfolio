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
      company: "CINEMA",
      href: "#",
      badges: [],
      location: "Tunisia",
      title: "Poste de Distribution",
      start: "November 2022",
      end: "November 2024",
      description: [
        "Distribution et gestion des films",
        "Coordination avec les cinémas",
        "Suivi des projections"
      ].join("\n"),
    },
    {
      company: "HANNIBAL TV",
      href: "#",
      badges: [],
      location: "Tunisia",
      title: "Assistante en Réalisation",
      start: "August 2022",
      end: "August 2022",
      description: [
        "Collaboration étroite avec le réalisateur pour assurer la qualité créative et technique des segments téléachat",
        "Assistance sur le tournage des VTRs, en choisissant minutieusement les angles et compositions",
        "Coordination entre l'équipe de production et la post-production",
        "Apparition à l'écran en tant qu'actrice",
        "Gestion et correction des problèmes de continuité",
        "Médiation entre le réalisateur et le monteur pour l'optimisation de la synchronisation du voice-over"
      ].join("\n"),
    },
    {
      company: "RADIO IFM",
      href: "#",
      badges: [],
      location: "Tunisia",
      title: "Assistante en Production",
      start: "August 2021",
      end: "August 2021",
      description: [
        "Participation au casting et à la sélection des animateurs/invités",
        "Recherche approfondie pour le développement de concepts créatifs et de nouvelles émissions",
        "Coordination logistique, gestion des plannings et briefing des invités",
        "Élaboration des contenus éditoriaux et des déroulés d'émission",
        "Supervision de la production de reportages, documentaires, micro-trottoirs et interviews en français et en anglais",
        "Gestion de la régie technique et résolution rapide des problèmes techniques en direct"
      ].join("\n"),
    },
    {
      company: "STH",
      href: "#",
      badges: [],
      location: "Tunisia",
      title: "Assistante Admin & Communication",
      start: "July 2017",
      end: "November 2020",
      description: [
        "Assister la direction à la gestion administrative",
        "Assurer la communication interne et externe"
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
