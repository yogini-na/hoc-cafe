import React, { useEffect, useRef } from 'react';
import { SITE_CONFIG } from '../data/site';
import { Coffee, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial entrance timeline inspired by Wintech's editorial reveal
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Background subtle scale & fade
      if (bgImgRef.current) {
        tl.fromTo(
          bgImgRef.current,
          { scale: 1.18, opacity: 0.6 },
          { scale: 1.05, opacity: 1, duration: 1.6, ease: 'power2.out' },
          0
        );
      }

      // Badge entrance
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { y: -15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.3
        );
      }

      // Headline line-by-line reveal
      if (headlineLine1Ref.current && headlineLine2Ref.current) {
        tl.fromTo(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          { yPercent: 105, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' },
          0.4
        );
      }

      // Subtitle reveal
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.7
        );
      }

      // CTA Buttons entrance
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
          0.85
        );
      }

      // Stats boxes staggered reveal
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current.children,
          { y: 25, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1 },
          0.95
        );
      }

      // 2. Subtle background parallax on scroll
      if (bgImgRef.current && sectionRef.current) {
        gsap.to(bgImgRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Welcome to HOC"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#241710]"
    >
      {/* Background Image with Dark Vignette and Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={bgImgRef}
          src="/images/hero-spread.jpg"
          alt="Overhead spread of artisanal coffee, Indian chai, and warm bakery items on dark timber table"
          className="w-full h-full object-cover object-center will-change-transform"
        />
        {/* Layered dark gradients ensuring text contrast meets WCAG AAA standards */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241710] via-[#241710]/80 to-[#241710]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#241710]/50 to-[#241710]/95" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Restrained decorative badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#35251D]/80 border border-[#C5A16B]/40 text-[#C5A16B] text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-6 shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A16B]" />
          <span>Mankapur Ring Road • Nagpur</span>
        </div>

        {/* Headline with Wintech-Style Overflow Masks */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFDF9] leading-[1.15] max-w-3xl">
          <span className="block overflow-hidden py-1">
            <span ref={headlineLine1Ref} className="block will-change-transform">
              Good Coffee.
            </span>
          </span>
          <span className="block overflow-hidden py-1">
            <span
              ref={headlineLine2Ref}
              className="block italic font-normal gold-gradient-text will-change-transform"
            >
              Great Company.
            </span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          ref={subtitleRef}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#D9C3B0] max-w-2xl leading-relaxed font-normal"
        >
          {SITE_CONFIG.heroSubtitle}
        </p>

        {/* Call to Actions with Magnetic Hover */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => scrollTo('#menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#A66A3F] hover:bg-[#8F572F] text-[#FFFDF9] font-medium text-sm sm:text-base border border-[#C5A16B]/50 shadow-lg shadow-black/40 transition-all hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#C5A16B] cursor-pointer"
          >
            <span>Explore Our Menu</span>
            <ArrowRight className="w-4 h-4 text-[#FFFDF9]" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('#location')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#35251D]/80 hover:bg-[#35251D] text-[#FFFDF9] font-medium text-sm sm:text-base border border-[#C5A16B]/30 hover:border-[#C5A16B]/60 backdrop-blur-sm transition-all hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#C5A16B] cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#C5A16B]" />
            <span>Find Us in Nagpur</span>
          </button>
        </div>

        {/* Highlight Stats / Verified Fact Badges */}
        <div
          ref={statsRef}
          className="mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl text-left"
        >
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#35251D]/60 border border-[#C5A16B]/20 backdrop-blur-md transition-all hover:border-[#C5A16B]/40 hover:-translate-y-0.5">
            <div className="flex items-center gap-1.5 text-amber-400 text-sm font-semibold">
              <span>★ 4.2 / 5</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#D9C3B0]/75 mt-1">
              From 150 community reviews
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#35251D]/60 border border-[#C5A16B]/20 backdrop-blur-md transition-all hover:border-[#C5A16B]/40 hover:-translate-y-0.5">
            <div className="flex items-center gap-1.5 text-[#C5A16B] text-sm font-semibold">
              <Coffee className="w-4 h-4" />
              <span>Chai & Coffee</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#D9C3B0]/75 mt-1">
              Ginger, Rose & Artisanal Roasts
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3.5 sm:p-4 rounded-xl bg-[#35251D]/60 border border-[#C5A16B]/20 backdrop-blur-md transition-all hover:border-[#C5A16B]/40 hover:-translate-y-0.5">
            <div className="flex items-center gap-1.5 text-[#C5A16B] text-sm font-semibold">
              <MapPin className="w-4 h-4" />
              <span>Gayatri Nagar</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#D9C3B0]/75 mt-1">
              Trimurti Nagar, Nagpur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
