'use client';

import React from 'react';
import { Locale } from '@/types';
import ComponentDetailView from '@/components/ComponentDetailView';

interface OpenSourceComponentViewProps {
  lang: Locale;
}

/**
 * OpenSourceComponentView (Spotlight Card)
 * Unified with ComponentDetailView modular architecture.
 */
export default function OpenSourceComponentView({ lang }: OpenSourceComponentViewProps) {
  return <ComponentDetailView slug="spotlight-card" lang={lang} />;
}
