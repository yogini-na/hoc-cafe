import React, { useEffect, useRef } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Coffee, UtensilsCrossed, Armchair, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: Coffee,
    title: "Tea & Coffee",
    description: "Comforting drinks for every mood, from slow-simmered ginger adrak chai to freshly prepared coffees."
  },
  {
    icon: UtensilsCrossed,
    title: "Flavourful Bites",
    description: "Crispy grilled sandwiches, steaming vegetable masala Maggi, and classic buttery bun maska."
  },
  {
    icon: Armchair,
    title: "Relaxed Ambience",
    description: "A welcoming, unhurried neighbourhood space to read, study, unwind, or meet friends."
  },
  {
    icon: Clock,
    title: "Your Everyday Stop",
    description: "A reliable corner on Mankapur Ring Road for routine morning rituals or spontaneous evening breaks."
  }
];

export const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="features"
      aria-label="Why choose HOC"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EBDD] text-[#35251D] border-y border-[#35251D]/10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="The Neighbourhood Experience"
          title="Why HOC?"
          description="Crafted around comforting sips, honest flavours, and a welcoming spot to take pause in Nagpur."
          theme="light"
        />

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12"
        >
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF5EE] p-6 sm:p-7 rounded-2xl border border-[#35251D]/10 hover:border-[#A66A3F]/50 transition-all duration-400 hover:-translate-y-1.5 shadow-sm hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#A66A3F]/15 border border-[#A66A3F]/30 flex items-center justify-center text-[#A66A3F] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#35251D] mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#6A564A] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#35251D]/10 flex items-center justify-between text-xs text-[#A66A3F] font-semibold tracking-wider uppercase">
                  <span>0{idx + 1}</span>
                  <span className="w-8 h-px bg-[#A66A3F]/30 group-hover:w-14 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
