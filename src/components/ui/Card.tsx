import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-6 sm:p-8 border border-linen-200/80 shadow-subtle transition-all duration-300",
        hoverEffect && "hover:shadow-floating hover:-translate-y-1 hover:border-terracotta-300/60",
        className
      )}
    >
      {children}
    </div>
  );
};
