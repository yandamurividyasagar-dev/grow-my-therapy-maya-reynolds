import React from 'react';
import { Eye, Brain, Sparkles, HeartPulse } from 'lucide-react';
import { therapistProfile } from '@/config/therapistProfile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Eye: Eye,
  Brain: Brain,
  Sparkles: Sparkles,
  HeartPulse: HeartPulse,
};

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-16 md:py-20 lg:py-24 bg-linen-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Evidence-Based Methods"
          title="Integrative & Modality-Informed Care"
          subtitle="Combining structured evidence-based methodologies with deep physiological and emotional understanding."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapistProfile.modalities.map((modality, idx) => {
            const IconComponent = iconMap[modality.iconName] || Brain;
            return (
              <Card key={idx} className="flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-sage-700">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-slate-900">
                      {modality.name}
                    </h3>
                    {modality.acronym && (
                      <span className="text-xs font-sans font-medium text-terracotta-500 block">
                        ({modality.acronym})
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-sans text-slate-800 leading-relaxed">
                    {modality.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Pacing & Trauma Note Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-linen-200/80 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h4 className="font-serif text-xl font-bold text-slate-900">
              Paced Carefully for Safety & Stabilization
            </h4>
            <p className="text-sm font-sans text-slate-800 max-w-3xl leading-relaxed">
              {therapistProfile.bio.traumaFocus}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
