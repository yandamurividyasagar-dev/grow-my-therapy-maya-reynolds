import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sage' | 'terracotta' | 'outline' | 'pulse';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'sage',
  className,
}) => {
  const baseStyles = "inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-sans font-medium tracking-wide uppercase";

  const variants = {
    sage: "bg-sage-100 text-sage-800 border border-sage-200/60",
    terracotta: "bg-terracotta-100 text-terracotta-800 border border-terracotta-200/60",
    outline: "bg-transparent border border-linen-200 text-slate-800",
    pulse: "bg-sage-100 text-sage-800 border border-sage-200/60 pl-2.5",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {variant === 'pulse' && (
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-700"></span>
        </span>
      )}
      {children}
    </span>
  );
};
