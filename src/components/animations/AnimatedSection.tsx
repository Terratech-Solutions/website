'use client';

import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type AnimationType = 'fade' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'slideUp';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
}

const animationClasses: Record<AnimationType, string> = {
  fade: 'animate-fade-in',
  fadeUp: 'animate-fade-in-up',
  fadeDown: 'animate-fade-in-down',
  fadeLeft: 'animate-fade-in-left',
  fadeRight: 'animate-fade-in-right',
  scale: 'animate-scale-in',
  slideUp: 'animate-slide-up',
};

export const AnimatedSection = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  threshold = 0.1,
  className = '',
  triggerOnce = true,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold, triggerOnce });

  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';
  const animationClass = animationClasses[animation] || animationClasses.fadeUp;

  return (
    <div
      ref={ref as any}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'} ${delayClass}`}
      style={{ animationFillMode: 'both' }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
