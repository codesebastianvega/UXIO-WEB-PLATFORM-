'use client';

import React, { useState } from 'react';
import { Play, Video, ExternalLink, Loader2 } from 'lucide-react';
import { VideoProvider } from '@/data/academy/types';

interface VideoPlayerProps {
  provider?: VideoProvider;
  videoUrl?: string;
  title: string;
  poster?: string;
  duration?: string;
  onPlay?: () => void;
}

function getEmbedUrl(url: string, provider: VideoProvider = 'youtube'): string | null {
  if (!url) return null;

  if (provider === 'youtube') {
    // Handle youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&color=white`
      : null;
  }

  if (provider === 'vimeo') {
    const regExp = /(?:vimeo\.com\/)(\d+)/;
    const match = url.match(regExp);
    const videoId = match ? match[1] : null;
    return videoId ? `https://player.vimeo.com/video/${videoId}?dnt=1` : null;
  }

  return url;
}

export default function VideoPlayer({
  provider = 'youtube',
  videoUrl,
  title,
  poster,
  duration,
  onPlay,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const embedUrl = videoUrl ? getEmbedUrl(videoUrl, provider) : null;

  if (!embedUrl) {
    return (
      <div className="relative w-full aspect-video rounded-3xl bg-[#080808] border border-black/[0.12] dark:border-white/[0.1] flex flex-col items-center justify-center p-6 text-center shadow-soft-lg overflow-hidden">
        <div className="w-14 h-14 rounded-2xl bg-white/[0.05] text-[#8E8E93] flex items-center justify-center mb-3 border border-white/[0.08]">
          <Video size={26} />
        </div>
        <h3 className="font-display font-bold text-sm text-white max-w-sm truncate">
          {title}
        </h3>
        <p className="text-xs font-mono text-[#8E8E93] mt-1">
          {duration ? `Duración: ${duration} · ` : ''}Video en preparación
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-3xl bg-[#080808] border border-black/[0.12] dark:border-white/[0.1] shadow-soft-lg overflow-hidden group">
      {!isPlaying ? (
        <div
          onClick={() => {
            setIsPlaying(true);
            onPlay?.();
          }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer bg-gradient-to-t from-black/80 via-black/40 to-black/20 hover:from-black/70 transition-all p-6 text-center"
        >
          {poster && (
            <img
              src={poster}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
            />
          )}

          {/* Large Play Button */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FE385B] text-white flex items-center justify-center shadow-2xl shadow-[#FE385B]/50 group-hover:scale-110 active:scale-95 transition-transform">
            <Play size={28} className="ml-1 fill-white" />
          </div>

          <div className="mt-4 max-w-md z-10">
            <h3 className="font-display font-extrabold text-base sm:text-lg text-white drop-shadow-md">
              {title}
            </h3>
            {duration && (
              <span className="inline-block mt-1 font-mono text-[11px] text-white/80 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                {duration}
              </span>
            )}
          </div>
        </div>
      ) : (
        <iframe
          src={`${embedUrl}&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}
