import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';
import { therapistProfile } from '@/config/therapistProfile';
import { siteConfig } from '@/config/siteConfig';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-slate-900 text-linen-50 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-linen-50">
              {therapistProfile.name}, <span className="text-terracotta-400">{therapistProfile.degree}</span>
            </h3>
            <p className="text-xs font-sans text-sage-200 tracking-wide uppercase">
              {therapistProfile.title}
            </p>
            <p className="text-sm font-sans text-slate-300 leading-relaxed">
              Providing grounded, evidence-based therapy for adults dealing with anxiety, trauma, and burnout in Santa Monica and across California.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs text-sage-200">
              <ShieldCheck className="w-3.5 h-3.5 text-terracotta-400" />
              <span>{therapistProfile.license}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-linen-50">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm font-sans text-slate-300">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-terracotta-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="text-terracotta-400 font-medium hover:underline text-left"
                >
                  Book a Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Areas (SEO Keywords) */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-linen-50">Clinical Specialties</h4>
            <ul className="space-y-2 text-sm font-sans text-slate-300">
              <li>Anxiety & Panic Disorder Therapy</li>
              <li>EMDR Trauma Reprocessing</li>
              <li>Somatic Body-Oriented Healing</li>
              <li>Professional Burnout & Perfectionism</li>
              <li>Single-Incident & Relational Trauma</li>
            </ul>
          </div>

          {/* Location & Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-linen-50">Office & Contact</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                <span>{therapistProfile.office.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>{siteConfig.contact.emailPlaceholder}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>{siteConfig.contact.phonePlaceholder}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 space-y-4 text-xs font-sans text-slate-400">
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> The information provided on this website is for informational and educational purposes only and does not constitute formal medical or psychological advice. If you are experiencing a mental health emergency, please call 988, dial 911, or visit your nearest emergency room.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <p>© {new Date().getFullYear()} {therapistProfile.name}, {therapistProfile.degree}. All Rights Reserved.</p>
            <p className="flex items-center gap-1 text-slate-400">
              <span>Designed with care for mental health professionals</span>
              <Heart className="w-3.5 h-3.5 text-terracotta-400 fill-terracotta-400 inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
