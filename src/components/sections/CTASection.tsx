import React from 'react';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { therapistProfile } from '@/config/therapistProfile';
import { Button } from '../ui/Button';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-sage-700 text-linen-50 relative overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-600/40 rounded-full filter blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-500/20 rounded-full filter blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-600/80 border border-sage-500 text-xs text-terracotta-300 uppercase tracking-widest font-sans font-medium">
          <ShieldCheck className="w-4 h-4" />
          <span>Begin Your Healing Journey</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Slow Down, Reconnect & Build Sustainable Well-Being?
        </h2>

        <p className="font-sans text-base sm:text-lg text-sage-100 max-w-2xl mx-auto leading-relaxed">
          Whether you are looking for practical coping tools, deep trauma reprocessing, or relief from professional burnout—I welcome you to connect.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            onClick={onOpenConsultation}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request Your Consultation
          </Button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-sage-200 font-sans">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-terracotta-400" />
            <span>Santa Monica Practice: {therapistProfile.office.address}</span>
          </span>
          <span>•</span>
          <span>In-Person & Secure Telehealth across California</span>
        </div>

      </div>
    </section>
  );
};
