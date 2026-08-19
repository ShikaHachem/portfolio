import React from "react";

export const YouTubeEmbed = ({ id }: { id: string }) => {
  return (
    <div className="embed-frame">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

/** Raw <iframe> tags inside MDX get wrapped in the design's 16:9 frame. */
const Iframe = (props: React.IframeHTMLAttributes<HTMLIFrameElement>) => {
  const { width, height, frameBorder, ...rest } = props;
  return (
    <div className="embed-frame">
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe {...rest} />
    </div>
  );
};

export const mdxComponents = {
  YouTubeEmbed,
  iframe: Iframe,
};
