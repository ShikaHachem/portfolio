"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Letterbox chrome: top/bottom bars, live timecode, scroll progress, film grain. */
export function Chrome() {
  const pathname = usePathname();
  const isScreeningRoom = pathname.startsWith("/blog");
  const [tc, setTc] = useState("00:00:00:00");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frames = 0;
    const p = (n: number) => String(n).padStart(2, "0");
    const timer = setInterval(() => {
      frames += 5;
      const f = frames % 24;
      const total = Math.floor(frames / 24);
      const s = total % 60;
      const m = Math.floor(total / 60) % 60;
      const h = Math.floor(total / 3600);
      setTc(`${p(h)}:${p(m)}:${p(s)}:${p(f)}`);
    }, 208);

    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (isScreeningRoom) {
    return (
      <>
        <div
          className="box-top"
          style={{ animation: "none", height: 46 }}
        >
          <div
            className="box-top-inner"
            style={{ animation: "none", opacity: 1 }}
          >
            <Link href="/" style={{ color: "var(--ink)" }}>
              ← Back to the portfolio
            </Link>
            <span style={{ color: "var(--muted)" }}>The Screening Room</span>
            <span style={{ color: "var(--gold)" }}>24 fps · 2.39:1</span>
          </div>
        </div>
        <div className="grain" style={{ opacity: 0.05, animation: "none" }} />
      </>
    );
  }

  return (
    <>
      <div className="box-top">
        <div className="box-top-inner">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              whiteSpace: "nowrap",
            }}
          >
            <span className="rec-dot" />
            <span>Maha — Portfolio</span>
          </div>
          <nav
            style={{
              display: "flex",
              gap: 26,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a href="#intro">Intro</a>
            <a href="#about">About</a>
            <a href="#creations">Creations</a>
            <a href="#reviews">Reviews</a>
            <a href="#featured">Experience</a>
            <a href="#resume">Resume</a>
          </nav>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "var(--gold)" }}>{tc}</span>
            <a href="mailto:lhaddad.maha@gmail.com" className="hire-btn">
              Hire me
            </a>
          </div>
        </div>
      </div>
      <div className="box-bot">
        <div className="box-bot-inner">
          <span>Reel 01 — Through the Film Mirror</span>
          <span>{progress}% · 24 fps · 2.39:1</span>
        </div>
      </div>
      <div className="grain" />
    </>
  );
}
