"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface MomentOnAirProps {
  src: string;
  label?: string;
  caption?: string;
}

/**
 * "A Moment On Air" — a video tile that opens a cinema-styled lightbox:
 * dimmed theatre, sprocket strips, mono slate header, ESC / backdrop to close.
 */
export function MomentOnAir({
  src,
  label = "A Moment On Air",
  caption,
}: MomentOnAirProps) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {/* Tile */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="onair-tile"
        aria-label={`Play video: ${label}`}
      >
        <video
          src={`${src}#t=0.7`}
          preload="metadata"
          muted
          playsInline
          aria-hidden
          tabIndex={-1}
        />
        <span className="onair-tile-shade" aria-hidden />
        <span className="onair-tile-ui" aria-hidden>
          <span className="onair-play">▶</span>
          <span className="onair-tile-label">
            <span className="onair-dot" /> {label}
          </span>
        </span>
      </button>

      {/* Cinema lightbox */}
      {open && (
        <div
          className="onair-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="onair-screen">
            <div className="onair-slate mono">
              <span>
                <span className="onair-dot" /> Now screening — {label}
              </span>
              <button
                type="button"
                className="onair-close mono"
                onClick={close}
                aria-label="Close"
              >
                Close ✕
              </button>
            </div>
            <div className="sprockets" />
            <div className="onair-frame">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video ref={videoRef} src={src} controls autoPlay playsInline />
            </div>
            <div className="sprockets" />
            {caption && (
              <div className="onair-caption mono">{caption}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
