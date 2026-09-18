"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { therapistProfile } from '@/config/therapistProfile';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Trust Bar */}
      <div className="bg-sage-700 text-linen-50 text-xs py-2 px-4 sm:px-8 text-center font-sans tracking-wide border-b border-sage-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-terracotta-400 shrink-0" />
            <span className="font-medium text-sage-100">Santa Monica Practice: {therapistProfile.office.address}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sage-200">
            <span>In-Person & Secure Telehealth</span>
            <span>•</span>
            <span className="text-terracotta-300 font-semibold">Accepting New Clients</span>
          </div>
        </div>
      </div>

      {/* Main Agency-Standard Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-linen-50/95 backdrop-blur-md shadow-subtle border-b border-linen-200/90 py-3'
            : 'bg-linen-50 py-4 sm:py-5 border-b border-linen-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          
          {/* Left: Brand Identity Logo */}
          <Link href="/" className="flex flex-col group shrink-0">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-sage-700 transition-colors">
                {therapistProfile.name}
              </span>
              <span className="font-serif text-xl sm:text-2xl font-semibold text-terracotta-500">
                , {therapistProfile.degree}
              </span>
            </div>
            <span className="text-xs font-sans text-slate-800 tracking-normal font-normal -mt-0.5">
              {therapistProfile.title} • Santa Monica, CA
            </span>
          </Link>

          {/* Center: Desktop Nav Links with Balanced Spacing */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans font-medium text-slate-800 hover:text-sage-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-terracotta-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: CTA Action Button */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Button
              variant="primary"
              size="md"
              onClick={onOpenConsultation}
              icon={<Calendar className="w-4 h-4 ml-1 text-terracotta-300" />}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-900 hover:bg-linen-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-700"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-linen-50 shadow-modal p-6 flex flex-col justify-between animate-fadeIn">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-linen-200">
                <span className="font-serif text-xl font-bold text-slate-900">
                  {therapistProfile.name}, <span className="text-terracotta-500">{therapistProfile.degree}</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full text-slate-800 hover:bg-linen-100"
                  aria-label="Close Mobile Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="mt-6 flex flex-col gap-4">
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-sans font-medium text-slate-900 hover:text-sage-700 py-2 border-b border-linen-200/50"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="pt-6 border-t border-linen-200 space-y-4">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
              >
                Schedule Consultation
              </Button>
              <p className="text-xs text-center text-slate-800">
                {therapistProfile.office.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
