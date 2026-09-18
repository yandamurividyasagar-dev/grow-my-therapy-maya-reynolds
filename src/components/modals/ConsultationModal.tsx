"use client";

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { therapistProfile } from '@/config/therapistProfile';
import { Button } from '../ui/Button';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredFormat: 'in-person',
    focusArea: 'anxiety',
    message: '',
  });

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-linen-50 rounded-3xl shadow-modal overflow-hidden border border-linen-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 bg-white border-b border-linen-200/80 flex items-center justify-between">
          <div>
            <h3 id="modal-title" className="font-serif text-2xl font-semibold text-slate-900">
              Schedule a Consultation
            </h3>
            <p className="text-xs font-sans text-slate-800 mt-0.5">
              With {therapistProfile.name}, {therapistProfile.degree} • Santa Monica, CA
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-800 hover:bg-linen-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-semibold text-slate-900">Consultation Request Received</h4>
              <p className="text-sm font-sans text-slate-800 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Dr. Maya Reynolds’ practice will review your message and contact you within 24 business hours to arrange an initial call.
              </p>
              <div className="pt-4">
                <Button variant="primary" onClick={handleReset}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-800 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-linen-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-linen-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-800 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(310) 555-0192"
                    className="w-full px-4 py-2.5 rounded-xl border border-linen-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-800 mb-1">Preferred Format</label>
                  <select
                    value={formData.preferredFormat}
                    onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-linen-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-700"
                  >
                    <option value="in-person">In-Person (Santa Monica)</option>
                    <option value="telehealth">Telehealth (California)</option>
                    <option value="either">Either / Undecided</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-800 mb-1">Primary Area of Interest</label>
                  <select
                    value={formData.focusArea}
                    onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-linen-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-700"
                  >
                    <option value="anxiety">Anxiety & Panic</option>
                    <option value="trauma">Trauma & EMDR</option>
                    <option value="burnout">Professional Burnout</option>
                    <option value="other">General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-800 mb-1">Briefly share what brings you to therapy</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any goals, symptoms, or questions you have..."
                  className="w-full px-4 py-2.5 rounded-xl border border-linen-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-700"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 p-3 bg-sage-50 rounded-xl border border-sage-100 text-xs text-sage-800">
                <ShieldCheck className="w-4 h-4 shrink-0 text-sage-700" />
                <span>Your privacy is paramount. Information sent is strictly confidential.</span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button type="button" variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Submit Request
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
