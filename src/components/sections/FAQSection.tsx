"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { therapistProfile } from '@/config/therapistProfile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 md:py-20 lg:py-24 bg-linen-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Clear Answers About Therapy & Practice Details"
          subtitle="Everything you need to know about working with Dr. Maya Reynolds in Santa Monica or via California telehealth."
        />

        <div className="space-y-4">
          {therapistProfile.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-linen-200/80 shadow-subtle overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-sage-700"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-serif text-lg font-semibold text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-linen-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-sage-100 text-sage-700' : 'text-slate-800'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-0 font-sans text-slate-800 text-sm leading-relaxed border-t border-linen-100/60 mt-1 animate-fadeIn"
                  >
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
