"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal controller: fades elements marked [data-reveal] up into view,
 * matching the design's IntersectionObserver behavior. Elements already in
 * the initial viewport are left untouched.
 */
export function RevealController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("reveal-hidden");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) return;
      el.classList.add("reveal-hidden");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
