import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { therapistProfile } from '@/config/therapistProfile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-linen-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Specialized Services"
          title="Clinical Support Tailored to Your Needs"
          subtitle="Combining evidence-based techniques with depth-oriented therapy for thoughtful adults navigating anxiety, trauma, or internal pressure."
        />

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {therapistProfile.services.map((service) => (
            <Card key={service.id} className="flex flex-col justify-between h-full group">
              <div className="space-y-6">
                
                {/* Service Image with Crisp Centered Framing */}
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-linen-100 border border-linen-200/80">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    quality={95}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 contrast-[1.03]"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="terracotta">{service.badge}</Badge>
                  </div>
                </div>

                {/* Service Title & Desc */}
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-slate-900 group-hover:text-sage-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-sans text-slate-800 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Symptoms List */}
                <div className="space-y-2 pt-2 border-t border-linen-200/80">
                  <p className="text-xs font-sans font-semibold uppercase text-sage-800 tracking-wider">
                    Common Experiences:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-800">
                    {service.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-700 shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Action Button */}
              <div className="pt-6 mt-6 border-t border-linen-200/60">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between group-hover:bg-sage-700 group-hover:text-white transition-all"
                  onClick={onOpenConsultation}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Learn More & Book
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
