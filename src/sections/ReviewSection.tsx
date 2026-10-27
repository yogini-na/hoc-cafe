import React, { useEffect, useRef } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SITE_CONFIG } from '../data/site';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ReviewSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { y: 25, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      aria-label="Customer Feedback and Reviews"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EBDD] text-[#35251D] border-y border-[#35251D]/10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Community Voice"
          title="What Visitors Appreciate"
          description="A summary of feedback themes shared by café patrons on Mankapur Ring Road, Nagpur."
          theme="light"
        />

        {/* Rating Score Banner with Explicit Truthful Transparency Notice */}
        <div
          ref={bannerRef}
          className="max-w-2xl mx-auto mb-14 p-6 rounded-2xl bg-[#FAF5EE] border border-[#35251D]/15 shadow-sm text-center"
        >
          <div className="inline-flex items-center justify-center gap-1.5 mb-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
            ))}
            <div className="relative w-6 h-6">
              <Star className="w-6 h-6 text-amber-500" />
              <div className="absolute inset-0 overflow-hidden w-1/5">
                <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
            </div>
          </div>

          <div className="font-serif text-3xl sm:text-4xl font-bold text-[#35251D] mt-1">
            {SITE_CONFIG.ratingInfo.score}{' '}
            <span className="text-lg font-sans font-normal text-[#6A564A]">/ 5.0</span>
          </div>

          <p className="mt-1 text-sm font-medium text-[#A66A3F]">
            Based on {SITE_CONFIG.ratingInfo.totalReviews} community reviews
          </p>

          <div className="mt-4 pt-4 border-t border-[#35251D]/10 flex items-start sm:items-center justify-center gap-2 text-xs text-[#6A564A] text-left sm:text-center">
            <CheckCircle className="w-4 h-4 text-[#A66A3F] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Transparency Note:</strong> {SITE_CONFIG.ratingInfo.disclaimer}
            </span>
          </div>
        </div>

        {/* Thematic Feedback Cards (Grounded in Verified Customer Themes) */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SITE_CONFIG.verifiedThemes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAF5EE] border border-[#35251D]/10 hover:border-[#A66A3F]/50 transition-all duration-400 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#A66A3F]/15 text-[#A66A3F] border border-[#A66A3F]/25">
                    {item.tag}
                  </span>
                  <MessageSquareQuote className="w-5 h-5 text-[#A66A3F]/40 group-hover:text-[#A66A3F] transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#35251D] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6A564A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#35251D]/10 text-xs text-[#6A564A] flex items-center justify-between">
                <span>Verified Feedback Theme</span>
                <span className="text-[#A66A3F] font-medium">Nagpur Community</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps search & reviews action */}
        <div className="mt-12 text-center">
          <a
            href={SITE_CONFIG.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#35251D] hover:bg-[#241710] text-[#FFFDF9] border border-[#A66A3F]/40 shadow-sm transition-all hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#A66A3F]"
          >
            <span>View Business Listing on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-[#C5A16B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
