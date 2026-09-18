import React from 'react';
import Image from 'next/image';
import { therapistProfile } from '@/config/therapistProfile';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { HeartHandshake, MapPin, Shield } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white border-y border-linen-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Edge-to-Edge HD Portrait Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-floating border border-linen-200/80 bg-slate-900 group">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <Image
                  src={therapistProfile.office.images.headshot}
                  alt="Dr. Maya Reynolds, PsyD - Santa Monica Psychologist"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  unoptimized
                  className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 contrast-[1.03] brightness-[1.02]"
                />
              </div>

              {/* Glassmorphic Dark Badge Container */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/80 text-white shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage-700/90 flex items-center justify-center shrink-0 text-linen-50 shadow-inner">
                  <Shield className="w-5 h-5 text-terracotta-400" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-sm sm:text-base font-bold text-white tracking-tight">
                      {therapistProfile.name}, {therapistProfile.degree}
                    </h3>
                  </div>
                  <p className="text-xs font-sans text-sage-200 font-medium">
                    {therapistProfile.title} • Santa Monica, CA
                  </p>
                </div>
              </div>
            </div>

            {/* In-Person & Telehealth Box */}
            <div className="p-5 rounded-2xl bg-linen-50 border border-linen-200/80 space-y-3">
              <div className="flex items-center gap-2 text-sage-800 font-semibold text-sm">
                <MapPin className="w-4 h-4 text-terracotta-500" />
                <span>Practice Formats</span>
              </div>
              <p className="text-xs text-slate-900 leading-relaxed">
                • <strong>In-Person:</strong> Quiet, private office at {therapistProfile.office.address}<br />
                • <strong>Telehealth:</strong> {therapistProfile.formats.telehealthScope}
              </p>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <Badge variant="sage">About Dr. Maya Reynolds</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
                A Warm, Collaborative & Grounded Approach to Therapy
              </h2>
            </div>

            <div className="space-y-4 font-sans text-slate-800 text-base leading-relaxed">
              <p>{therapistProfile.bio.intro}</p>
              <p>{therapistProfile.bio.clientPattern}</p>
              <p>{therapistProfile.bio.approach}</p>
              <p>{therapistProfile.bio.burnoutFocus}</p>
            </div>

            {/* Core Philosophy Callout */}
            <div className="p-6 rounded-2xl bg-sage-50 border border-sage-200/60 text-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-sage-800 font-serif font-semibold text-lg">
                <HeartHandshake className="w-5 h-5 text-terracotta-500" />
                <span>Clinical Philosophy</span>
              </div>
              <p className="text-sm font-sans italic leading-relaxed text-slate-800">
                &ldquo;{therapistProfile.bio.philosophy}&rdquo;
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Button variant="primary" size="lg" onClick={onOpenConsultation}>
                Book an Initial Consultation
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
