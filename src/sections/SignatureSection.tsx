import React, { useEffect, useRef } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SignatureSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mainImageContainerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);
  const contentColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Clipping Mask Curtain Reveal on Main Editorial Image
      if (mainImageContainerRef.current) {
        gsap.fromTo(
          mainImageContainerRef.current,
          { clipPath: 'polygon(0% 15%, 100% 15%, 100% 100%, 0% 100%)', opacity: 0.8 },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: mainImageContainerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Subtle Parallax on Main Image
      if (mainImageRef.current && sectionRef.current) {
        gsap.to(mainImageRef.current, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 3. Staggered reveal of Right Content Column
      if (contentColRef.current) {
        gsap.fromTo(
          contentColRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentColRef.current,
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
      id="experience"
      aria-label="Signature HOC Experience"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1F130D] text-[#FFFDF9] border-t border-[#C5A16B]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="The Everyday Ritual"
          title="Little Breaks. Better Days."
          description="In the bustle of Nagpur, HOC is an invitation to slow down, savour warmth in a glass, and share uncomplicated moments."
          theme="dark"
        />

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-12">
          {/* Main Large Editorial Image with Wintech Mask Reveal & Parallax */}
          <div className="lg:col-span-7 relative group">
            <div
              ref={mainImageContainerRef}
              className="relative rounded-3xl overflow-hidden border border-[#C5A16B]/25 shadow-2xl bg-[#241710] will-change-transform"
            >
              <img
                ref={mainImageRef}
                src="/images/editorial-signature.jpg"
                alt="Artisanal barista pouring steaming aromatic chai from a brass kettle into glasses"
                loading="lazy"
                className="w-full h-[380px] sm:h-[460px] md:h-[520px] object-cover scale-105 transition-transform duration-700 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710] via-transparent to-black/30 pointer-events-none" />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#241710]/90 backdrop-blur-md border border-[#C5A16B]/30 max-w-md shadow-lg">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A16B]">
                  Handcrafted Pour
                </span>
                <p className="mt-1 text-xs sm:text-sm text-[#D9C3B0] leading-snug">
                  Fresh crushed adrak brewed patiently in rich milk tea, served piping hot.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Secondary Imagery */}
          <div ref={contentColRef} className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A16B]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The HOC Philosophy</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDF9] leading-tight">
                Honest tea, real coffee, and food that feels like home.
              </h3>
              <p className="text-sm sm:text-base text-[#D9C3B0] leading-relaxed">
                Whether you stop by for a quick cutting chai in between work, enjoy a quiet afternoon with your study notes, or gather friends for late-evening Maggi and bun maska, our space on Mankapur Ring Road is created to be comfortable, unpretentious, and welcoming.
              </p>
            </div>

            {/* Inset Secondary Showcase Frame */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A16B]/20 bg-[#241710] group card-hover-effect">
                <img
                  src="/images/bites-bun-maska.jpg"
                  alt=" मुंबई style warm bun maska with melted butter"
                  loading="lazy"
                  className="w-full h-36 sm:h-44 object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241710] to-transparent opacity-80 pointer-events-none" />
                <span className="absolute bottom-2.5 left-3 text-xs font-serif font-bold text-[#FFFDF9]">
                  Toasted Bun Maska
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#C5A16B]/20 bg-[#241710] group card-hover-effect">
                <img
                  src="/images/coffee-speciality.jpg"
                  alt="Rich espresso and iced coffee"
                  loading="lazy"
                  className="w-full h-36 sm:h-44 object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241710] to-transparent opacity-80 pointer-events-none" />
                <span className="absolute bottom-2.5 left-3 text-xs font-serif font-bold text-[#FFFDF9]">
                  Aromatic Brews
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#C5A16B]/15">
              <p className="text-xs text-[#D9C3B0]/70 italic font-serif">
                “A cup of good tea is an excuse for a good conversation.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
