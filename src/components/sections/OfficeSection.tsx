"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Sun, Shield, Coffee, CheckCircle2, Sparkles } from 'lucide-react';
import { therapistProfile } from '@/config/therapistProfile';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface OfficeSectionProps {
  onOpenConsultation: () => void;
}

export const OfficeSection: React.FC<OfficeSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="office" className="py-20 md:py-28 bg-white border-y border-linen-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Custom Section Heading */}
        <SectionHeading
          badge="Our Office"
          title="A Quiet, Grounding Sanctuary in Santa Monica"
          subtitle="Designed to feel calm, private, and uncluttered—offering a serene physical space where you can feel at ease from the moment you arrive."
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Dual HD Office Photo Showcase (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 2-Column Side-by-Side Original Office Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Photo 1: Exposed Brick & Window Lounge */}
              <div className="relative rounded-2xl overflow-hidden shadow-subtle border border-linen-200 bg-linen-100 group">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={therapistProfile.office.images.office1}
                    alt="Santa Monica Therapy Office Seating Area with Brick Walls and Window View"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <Badge variant="terracotta" className="text-[10px] py-1 px-2.5">Brick & Sunlight</Badge>
                </div>
              </div>

              {/* Photo 2: Consultation Couch & Bookcase */}
              <div className="relative rounded-2xl overflow-hidden shadow-subtle border border-linen-200 bg-linen-100 group">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={therapistProfile.office.images.office2}
                    alt="Santa Monica Therapy Room Consultation Couch with Olive Tree and Bookcase"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <Badge variant="sage" className="text-[10px] py-1 px-2.5">Serene Consultation</Badge>
                </div>
              </div>

            </div>

            {/* Bottom Caption Overlay Box */}
            <div className="bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 text-white shadow-floating flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-terracotta-400 shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-white font-semibold tracking-wide">
                  Natural Sunlight • Exposed Brick • Uncluttered Sanctuary
                </span>
              </div>
              <span className="text-xs font-sans text-terracotta-300 font-semibold tracking-wide">
                Santa Monica, CA 90401
              </span>
            </div>

            {/* Sub-highlights bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-linen-50 border border-linen-200 flex items-center gap-3">
                <Sun className="w-5 h-5 text-terracotta-500 shrink-0" />
                <span className="text-xs font-sans font-semibold text-slate-900">Abundant Natural Light</span>
              </div>
              <div className="p-4 rounded-2xl bg-linen-50 border border-linen-200 flex items-center gap-3">
                <Shield className="w-5 h-5 text-sage-700 shrink-0" />
                <span className="text-xs font-sans font-semibold text-slate-900">Private & Confidential</span>
              </div>
              <div className="p-4 rounded-2xl bg-linen-50 border border-linen-200 flex items-center gap-3">
                <Coffee className="w-5 h-5 text-terracotta-500 shrink-0" />
                <span className="text-xs font-sans font-semibold text-slate-900">Uncluttered Environment</span>
              </div>
            </div>

          </div>

          {/* Right Side: Copy Details & Address Box (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Thoughtfully Designed for Comfort & Regulation
              </h3>
              <p className="font-sans text-sm text-slate-800 leading-relaxed">
                {therapistProfile.office.description}
              </p>
              <p className="font-sans text-sm text-slate-800 leading-relaxed">
                Clients often share that the space itself helps them slow down, breathe deeper, and feel regulated. Whether attending in-person in Santa Monica or via secure California telehealth, your safety, privacy, and peace of mind come first.
              </p>
            </div>

            {/* Location & Practice Specs Card */}
            <div className="p-6 rounded-3xl bg-sage-50 border border-sage-200/80 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-base">Physical Practice Address</h4>
                  <p className="text-sm font-sans text-slate-900 font-medium">{therapistProfile.office.address}</p>
                  <p className="text-xs text-slate-800 mt-0.5">Central Santa Monica • Convenient Westside Location</p>
                </div>
              </div>

              <div className="pt-3 border-t border-sage-200/60 space-y-2">
                {therapistProfile.office.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-sans text-slate-900 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button variant="primary" size="md" className="w-full sm:w-auto" onClick={onOpenConsultation}>
                Schedule an In-Person Visit
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
