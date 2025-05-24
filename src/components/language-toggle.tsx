"use client";

import * as React from "react";
import { useTranslation } from "next-i18next";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react"; // Assuming these are used elsewhere, or can be replaced by language icons

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-1">
      <Button
        variant={i18n.language === "en" ? "default" : "ghost"}
        size="icon"
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </Button>
      <Button
        variant={i18n.language === "fr" ? "default" : "ghost"}
        size="icon"
        onClick={() => changeLanguage("fr")}
        aria-label="Switch to French"
      >
        FR
      </Button>
    </div>
  );
}
