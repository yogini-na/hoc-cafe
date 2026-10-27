import React, { useEffect, useRef } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SITE_CONFIG } from '../data/site';
import { ExternalLink, Camera } from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  image: string;
  caption: string;
  category: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: '/images/coffee-speciality.jpg',
    caption: 'Cold brew and espresso handcrafted fresh at Mankapur Ring Road',
    category: 'Speciality Coffee'
  },
  {
    image: '/images/tea-selection.jpg',
    caption: 'Simmered adrak ginger chai with crushed roots & fragrant rose tea',
    category: 'Artisanal Tea'
  },
  {
    image: '/images/bites-bun-maska.jpg',
    caption: 'Bombay bun maska generously buttered and toasted golden',
    category: 'Signature Buns'
  },
  {
    image: '/images/refreshment-lassi.jpg',
    caption: 'Thick churned lassi in earthen kulhads with saffron and nuts',
    category: 'Chilled Lassi'
  },
  {
    image: '/images/bites-sandwich.jpg',
    caption: 'Golden toasted cheese and vegetable grilled sandwiches',
    category: 'Café Bites'
  },
  {
    image: '/images/cafe-ambience.jpg',
    caption: 'Cozy study and meetup corners in Trimurti Nagar, Nagpur',
    category: 'Café Life'
  }
];

export const CommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !galleryGridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        galleryGridRef.current?.children || [],
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryGridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="community"
      aria-label="Community and Instagram Highlights"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1A100B] text-[#FFFDF9] border-t border-[#C5A16B]/15"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Community & Moments"
          title="From Our Café to Yours"
          description="Everyday sips, savoury bites, and quiet corners shared by patrons at HOC Nagpur."
          theme="dark"
        />

        {/* Official Instagram Profile Connection Bar */}
        <div className="max-w-2xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-[#241710] border border-[#C5A16B]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#A66A3F] to-[#C5A16B] p-0.5 shadow-md">
              <div className="w-full h-full rounded-full bg-[#241710] flex items-center justify-center text-[#C5A16B]">
                <InstagramIcon className="w-5 h-5 text-[#C5A16B]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base text-[#FFFDF9]">
                  {SITE_CONFIG.instagram.handle}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#A66A3F]/20 text-[#C5A16B] border border-[#C5A16B]/30 font-semibold uppercase">
                  Official Page
                </span>
              </div>
              <p className="text-xs text-[#D9C3B0]/70 mt-0.5">
                {SITE_CONFIG.instagram.followers} Followers • {SITE_CONFIG.instagram.posts} Posts • Nagpur, India
              </p>
            </div>
          </div>

          <a
            href={SITE_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#A66A3F] hover:bg-[#8F572F] text-[#FFFDF9] text-xs font-semibold border border-[#C5A16B]/40 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-md focus-visible:ring-2 focus-visible:ring-[#C5A16B]"
          >
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Photography Grid with Wintech-Style Hover Zoom and Overlays */}
        <div
          ref={galleryGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C5A16B]/20 bg-[#241710] shadow-md card-hover-effect"
            >
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A100B] via-[#1A100B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#241710]/85 text-[#C5A16B] border border-[#C5A16B]/30 backdrop-blur-sm shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Bottom Caption & Instagram Callout */}
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <p className="text-xs sm:text-sm text-[#FFFDF9] font-medium leading-snug line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#C5A16B]">
                  <span>Tag #highoncaffeine</span>
                  <InstagramIcon className="w-3.5 h-3.5 text-[#C5A16B]/70" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Community Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#D9C3B0]/60 flex items-center justify-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-[#C5A16B]" />
            <span>Tag <strong>@high__on__caffeine</strong> on Instagram to be featured on our community wall.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
