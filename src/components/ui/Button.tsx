import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary: "bg-sage-700 text-linen-50 hover:bg-sage-800 shadow-subtle hover:shadow-floating hover:-translate-y-0.5",
    secondary: "bg-terracotta-500 text-white hover:bg-terracotta-600 shadow-subtle hover:shadow-floating hover:-translate-y-0.5",
    outline: "border-1.5 border-sage-700 text-sage-700 hover:bg-linen-100 hover:text-sage-800",
    ghost: "text-sage-700 hover:bg-linen-100 hover:text-sage-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5 min-h-[38px]",
    md: "px-6 py-3 text-sm gap-2 min-h-[44px]",
    lg: "px-8 py-4 text-base gap-2.5 min-h-[52px]",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
