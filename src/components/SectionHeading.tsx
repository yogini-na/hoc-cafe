import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  centered = true,
  theme = 'dark',
  className = '',
}) => {
  const isLight = theme === 'light';
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    if (prefersReducedMotion || !container) return;

    const ctx = gsap.context(() => {
      // Line draw effect
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: centered ? 'center' : 'left' },
          {
            scaleX: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Heading elements subtle fade up
      gsap.fromTo(
        container.children,
        { y: 18, opacity: 0.8 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [centered]);

  return (
    <div
      ref={containerRef}
      className={`max-w-3xl mb-12 md:mb-16 ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div
          className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors"
          style={{
            backgroundColor: isLight ? 'rgba(166, 106, 63, 0.12)' : 'rgba(197, 161, 107, 0.12)',
            color: isLight ? '#A66A3F' : '#C5A16B',
            border: isLight ? '1px solid rgba(166, 106, 63, 0.25)' : '1px solid rgba(197, 161, 107, 0.25)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight ${
          isLight ? 'text-[#35251D]' : 'text-[#FFFDF9]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-[#6A564A]' : 'text-[#D9C3B0]'
          }`}
        >
          {description}
        </p>
      )}
      <div
        ref={lineRef}
        className={`w-20 h-0.5 mt-5 rounded-full will-change-transform ${centered ? 'mx-auto' : ''} ${
          isLight ? 'bg-[#A66A3F]/50' : 'bg-[#C5A16B]/60'
        }`}
      />
    </div>
  );
};
