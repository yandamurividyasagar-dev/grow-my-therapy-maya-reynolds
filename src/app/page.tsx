"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBanner } from '@/components/sections/TrustBanner';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { OfficeSection } from '@/components/sections/OfficeSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';
import { ConsultationModal } from '@/components/modals/ConsultationModal';

export default function Home() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* 2. Trust Credentials Banner */}
        <TrustBanner />

        {/* 3. Services Grid Section */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. About Therapist Section */}
        <AboutSection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Therapeutic Modalities & Approach */}
        <ApproachSection />

        {/* 6. Custom "Our Office" Section */}
        <OfficeSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. FAQ Accordion Section */}
        <FAQSection />

        {/* 8. Call to Action Banner */}
        <CTASection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
