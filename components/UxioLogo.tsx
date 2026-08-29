import React from 'react';
import Image from 'next/image';

interface UxioLogoProps {
  className?: string;
  alt?: string;
  priority?: boolean;
}

export default function UxioLogo({
  className = "h-8 w-auto",
  alt = "UXIO",
  priority = true
}: UxioLogoProps) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Embedded direct SVG for crisp rendering on any DPI */}
      <img
        src="/uxio-logo.svg"
        alt={alt}
        className="w-full h-full object-contain select-none"
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}
