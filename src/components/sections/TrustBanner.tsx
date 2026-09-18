import React from 'react';
import { therapistProfile } from '@/config/therapistProfile';
import { Shield, Brain, HeartPulse, Sparkles } from 'lucide-react';

export const TrustBanner: React.FC = () => {
  const highlights = [
    { icon: Shield, title: "Licensed PsyD", subtitle: "Doctoral Clinical Psychologist" },
    { icon: Brain, title: "EMDR & CBT", subtitle: "Evidence-Based Protocols" },
    { icon: HeartPulse, title: "Somatic Healing", subtitle: "Nervous System Regulation" },
    { icon: Sparkles, title: "In-Person & Virtual", subtitle: "Santa Monica & CA Statewide" },
  ];

  return (
    <section className="bg-sage-700 text-linen-50 py-8 border-y border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center space-y-1.5 p-2">
                <div className="w-10 h-10 rounded-full bg-sage-600/80 flex items-center justify-center text-terracotta-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-linen-50">{item.title}</h3>
                <p className="text-xs font-sans text-sage-200">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
