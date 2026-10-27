import React, { useEffect, useRef } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { MapPin, Heart, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Clipping Mask Reveal on Ambience Photo
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { clipPath: 'polygon(0% 12%, 100% 12%, 100% 100%, 0% 100%)', opacity: 0.8 },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Subtle Parallax on Ambience Photo
      if (imageRef.current && sectionRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 3. Staggered reveal of Right Text Column
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current.children,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textColRef.current,
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
      id="about"
      aria-label="About HOC"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#241710] text-[#FFFDF9]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Cafe Ambience Image with Curtain Reveal */}
          <div className="lg:col-span-6 relative">
            <div
              ref={imageContainerRef}
              className="relative rounded-3xl overflow-hidden border border-[#C5A16B]/30 shadow-2xl bg-[#35251D] will-change-transform"
            >
              <img
                ref={imageRef}
                src="/images/cafe-ambience.jpg"
                alt="Cozy interior of HOC cafe in Nagpur with timber furniture, warm lights, and guests studying and chatting"
                loading="lazy"
                className="w-full h-[360px] sm:h-[440px] object-cover scale-105 will-change-transform transition-transform duration-700 hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#241710]/90 border border-[#C5A16B]/25 backdrop-blur-md shadow-md">
                <p className="text-xs text-[#D9C3B0] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A16B] shrink-0" />
                  <span>Mankapur Ring Road, Trimurti Nagar, Nagpur</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Truthful Brand Narrative */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col justify-center">
            <SectionHeading
              eyebrow="Our Story"
              title="A Genuine Neighbourhood Stop"
              centered={false}
              theme="dark"
              className="mb-8"
            />

            <div className="space-y-4 text-sm sm:text-base text-[#D9C3B0] leading-relaxed">
              <p>
                <strong className="text-[#FFFDF9]">HOC – High on Caffeine</strong> was created with a straightforward desire: to provide our local Nagpur neighbourhood with a comforting, reliable destination for handcrafted teas, freshly brewed coffee, and simple, satisfying bites.
              </p>
              <p>
                Situated along Mankapur Ring Road near Axis Bank in Gayatri Nagar, our café serves as an everyday meeting ground. Whether you are stepping in for a brisk morning cup of ginger chai, sitting with a book over afternoon lassi, or sharing an evening plate of Maggi with close friends, our focus is always on warm hospitality and uncomplicated comfort.
              </p>
            </div>

            {/* Core Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#C5A16B]/20">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#35251D]/40 border border-[#C5A16B]/15 hover:border-[#C5A16B]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#35251D] border border-[#C5A16B]/30 flex items-center justify-center text-[#C5A16B] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-[#C5A16B]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#FFFDF9]">
                    Made Fresh Daily
                  </h4>
                  <p className="text-xs text-[#D9C3B0]/80 mt-0.5">
                    Fresh ginger, brewed chai, and warm buns served hot to order.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#35251D]/40 border border-[#C5A16B]/15 hover:border-[#C5A16B]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#35251D] border border-[#C5A16B]/30 flex items-center justify-center text-[#C5A16B] shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-[#C5A16B]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#FFFDF9]">
                    Community First
                  </h4>
                  <p className="text-xs text-[#D9C3B0]/80 mt-0.5">
                    An open, easy-going atmosphere welcoming students, professionals & families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
