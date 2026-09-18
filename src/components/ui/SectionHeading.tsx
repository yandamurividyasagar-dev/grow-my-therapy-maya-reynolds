import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  dark = false,
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn("flex flex-col mb-12 md:mb-16 max-w-3xl mx-auto", alignment[align], className)}>
      {badge && (
        <Badge variant={dark ? 'terracotta' : 'sage'} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className={cn(
        "font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.18]",
        dark ? "text-linen-50" : "text-slate-900"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 font-sans text-base sm:text-lg leading-relaxed max-w-2xl",
          dark ? "text-sage-100" : "text-slate-800"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
