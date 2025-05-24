import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { TFunction } from "next-i18next";

// Define interfaces for the data structure
interface WorkExperience {
  company: string;
  href: string;
  badges: readonly string[];
  location: string;
  title: string;
  start: string;
  end: string;
  description: string;
  logoUrl?: string; // Optional logo URL
}

interface Education {
  school: string;
  href: string;
  degree: string;
  start: string;
  end: string;
  description?: string;
}

interface Language {
  name: string;
  level: string;
}

export const getResumeData = (t: TFunction) => ({
  name: t("resume:name"),
  initials: t("resume:initials"),
  url: t("resume:url"),
  location: t("resume:location"),
  locationLink: t("resume:location_link"),
  description: t("resume:description"),
  summary: t("resume:summary"),
  avatarUrl: t("resume:avatar_url"),
  skills: (t("resume:skills", { returnObjects: true }) as string[]),
  navbar: [
    { href: "/", icon: HomeIcon, label: t("resume:navbar_home_label") },
    { href: "/blog", icon: NotebookIcon, label: t("resume:navbar_blog_label") },
  ],
  work: [
    {
      company: t("resume:work_hannibal_company"),
      href: "#",
      badges: [], // Badges are not typically translated unless they are full strings
      location: t("resume:work_hannibal_location"),
      title: t("resume:work_hannibal_title"),
      start: t("resume:work_hannibal_start"),
      end: t("resume:work_hannibal_end"),
      logoUrl: "/Logo_Hannibal_TV.gif",
      description: t("resume:work_hannibal_description"),
    },
    {
      company: t("resume:work_radio_ifm_company"),
      href: "#",
      badges: [],
      location: t("resume:work_radio_ifm_location"),
      title: t("resume:work_radio_ifm_title"),
      start: t("resume:work_radio_ifm_start"),
      end: t("resume:work_radio_ifm_end"),
      logoUrl: "/ifm.png",
      description: t("resume:work_radio_ifm_description"),
    },
    {
      company: t("resume:work_sth_company"),
      href: "#",
      badges: [],
      location: t("resume:work_sth_location"),
      title: t("resume:work_sth_title"),
      start: t("resume:work_sth_start"),
      end: t("resume:work_sth_end"),
      logoUrl: "/placeholder-logo.png", 
      description: t("resume:work_sth_description"),
    },
  ] as readonly WorkExperience[],
  education: [
    {
      school: t("resume:education_cft_school"),
      href: "#",
      degree: t("resume:education_cft_degree"),
      start: t("resume:education_cft_start"),
      end: t("resume:education_cft_end"),
      description: t("resume:education_cft_description"),
    },
    {
      school: t("resume:education_fshst_school"),
      href: "#",
      degree: t("resume:education_fshst_degree"),
      start: t("resume:education_fshst_start"),
      end: t("resume:education_fshst_end"),
    },
  ] as readonly Education[],
  languages: [
    {
      name: t("resume:languages_english_name"),
      level: t("resume:languages_english_level"),
    },
    {
      name: t("resume:languages_french_name"),
      level: t("resume:languages_french_level"),
    },
    {
      name: t("resume:languages_arabic_name"),
      level: t("resume:languages_arabic_level"),
    },
    {
      name: t("resume:languages_spanish_name"),
      level: t("resume:languages_spanish_level"),
    },
  ] as readonly Language[],
  contact: {
    social: {
      email: {
        name: t("resume:contact_social_email_name"),
        url: t("resume:contact_social_email_url"),
        icon: Icons.email,
        navbar: true,
      },
    },
  },
} as const);
