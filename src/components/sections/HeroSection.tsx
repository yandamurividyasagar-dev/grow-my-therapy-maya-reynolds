import React from 'react';
import Image from 'next/image';
import { ArrowRight, Shield, CheckCircle, MapPin } from 'lucide-react';
import { therapistProfile } from '@/config/therapistProfile';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-10 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-linen-50">
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100/50 rounded-full filter blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-100/40 rounded-full filter blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="pulse">Accepting New Clients</Badge>
              <Badge variant="outline">
                <MapPin className="w-3.5 h-3.5 inline mr-1 text-terracotta-500" />
                Santa Monica, CA & Telehealth
              </Badge>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15] max-w-2xl">
              Therapy for Anxiety, Trauma & Burnout in Santa Monica, CA
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-800 leading-relaxed max-w-2xl font-normal">
              A warm, collaborative space for high-achieving adults, professionals, and creatives who internally feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-slate-900 font-sans font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sage-700 shrink-0" />
                <span>Licensed Clinical Psychologist (PsyD)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sage-700 shrink-0" />
                <span>Evidence-Based (CBT, EMDR, Somatic)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sage-700 shrink-0" />
                <span>In-Person Santa Monica Office</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sage-700 shrink-0" />
                <span>California-Wide Telehealth</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenConsultation}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule a Consultation
              </Button>
              <a href="#services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Specialties
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Seamless Edge-to-Edge HD Portrait Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Subtle Accent Ring */}
              <div className="absolute -inset-3 rounded-[2rem] border border-terracotta-200/60 -rotate-1 pointer-events-none"></div>

              {/* Edge-to-Edge Seamless Card Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-linen-200/80 bg-slate-900 group">
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                  <Image
                    src={therapistProfile.office.images.headshot}
                    alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                    unoptimized
                    className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 contrast-[1.03] brightness-[1.02]"
                  />
                </div>

                {/* Overlaid Bottom Credential Glassmorphic Badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-xl bg-sage-700/90 flex items-center justify-center shrink-0 text-linen-50 shadow-inner">
                    <Shield className="w-5 h-5 text-terracotta-400" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-serif font-bold text-white text-sm sm:text-base leading-snug">
                      {therapistProfile.name}, {therapistProfile.degree}
                    </h3>
                    <p className="text-xs font-sans text-sage-200 font-medium">
                      Licensed Clinical Psychologist • Santa Monica, CA
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
