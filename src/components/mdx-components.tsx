import React from 'react';

export const YouTubeEmbed = ({ id }: { id: string }) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden max-w-full my-8 rounded-lg">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className="absolute top-0 left-0 w-full h-full"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export const mdxComponents = {
  YouTubeEmbed,
}; 