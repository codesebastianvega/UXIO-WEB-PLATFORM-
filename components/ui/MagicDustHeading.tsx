'use client';

import React, { useMemo } from 'react';

export interface MagicDustHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  className?: string;
  staggerMs?: number;
  initialDelayMs?: number;
  glowColor?: string;
  keyTrigger?: string | number;
}

export default function MagicDustHeading({
  text,
  as: Component = 'h1',
  className = '',
  staggerMs = 16,
  initialDelayMs = 0,
  glowColor,
  keyTrigger,
}: MagicDustHeadingProps) {
  // Split text into words and chars to prevent mid-word wrapping breaks
  const words = useMemo(() => {
    return text.split(' ');
  }, [text]);

  let globalCharIndex = 0;

  return (
    <Component
      key={keyTrigger || text}
      className={`inline-block select-none ${className}`}
      style={glowColor ? ({ '--dust-glow-color': glowColor } as React.CSSProperties) : undefined}
    >
      {words.map((word, wordIdx) => {
        const wordChars = Array.from(word);
        const startIndex = globalCharIndex;
        globalCharIndex += wordChars.length + 1;

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const charPosition = startIndex + charIdx;
              const delay = initialDelayMs + charPosition * staggerMs;

              return (
                <span
                  key={charIdx}
                  className="dust-char"
                  style={{
                    animationDelay: `${delay}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
            {wordIdx < words.length - 1 && (
              <span className="inline-block" style={{ width: '0.28em' }}>
                &nbsp;
              </span>
            )}
          </span>
        );
      })}
    </Component>
  );
}
