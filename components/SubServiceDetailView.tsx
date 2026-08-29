'use client';

import React, { useState } from 'react';
import { SubService, PricingTier } from '@/data/services';
import { Locale } from '@/types';

// Modular Sub-Components
import SubServiceHero from './services/detail/SubServiceHero';
import SubServicePricingTiers from './services/detail/SubServicePricingTiers';
import SubServiceFaq from './services/detail/SubServiceFaq';
import SubServiceCheckoutModal from './services/detail/SubServiceCheckoutModal';

interface SubServiceDetailViewProps {
  subService: SubService;
  parentSlug: string;
  lang: Locale;
}

export default function SubServiceDetailView({
  subService,
  parentSlug,
  lang,
}: SubServiceDetailViewProps) {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    startDate: 'immediate',
    notes: '',
  });

  const handleOpenCheckout = (tier: PricingTier) => {
    setSelectedTier(tier);
    setIsCheckoutOpen(true);
    setIsSuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-10 md:space-y-12">
        {/* 1. Unified 2-Column Editorial Hero & Deliverables */}
        <SubServiceHero
          subService={subService}
          parentSlug={parentSlug}
          lang={lang}
        />

        {/* 2. Pricing Tiers Cards (Visible immediately without scrolling!) */}
        <SubServicePricingTiers
          pricingTiers={subService.pricingTiers}
          platforms={subService.platforms}
          onSelectTier={handleOpenCheckout}
          lang={lang}
        />

        {/* 3. FAQs Accordion */}
        <SubServiceFaq
          faqs={subService.faqs}
          activeFaq={activeFaq}
          onToggleFaq={(idx) => setActiveFaq(activeFaq === idx ? null : idx)}
          lang={lang}
        />
      </div>

      {/* 4. Booking / Checkout Dialog Modal */}
      <SubServiceCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedTier={selectedTier}
        subService={subService}
        formData={formData}
        setFormData={setFormData}
        isSuccess={isSuccess}
        onSubmit={handleFormSubmit}
        lang={lang}
      />
    </main>
  );
}
