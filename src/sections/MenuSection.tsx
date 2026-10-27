import React, { useState, useMemo, useEffect, useRef } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { MenuFilters } from '../components/MenuFilters';
import { MenuCard } from '../components/MenuCard';
import { MENU_ITEMS } from '../data/menu';
import type { MenuCategory } from '../data/menu';
import { Info } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Compute category counts dynamically
  const categoryCounts = useMemo(() => {
    const counts: Record<MenuCategory, number> = {
      All: MENU_ITEMS.length,
      Tea: 0,
      Coffee: 0,
      Refreshments: 0,
      "Quick Bites": 0,
    };

    MENU_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });

    return counts;
  }, []);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Stagger reveal on category switch or scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !gridRef.current) return;

    const cards = gridRef.current.children;
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 22, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="menu"
      aria-label="HOC Menu Highlights"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#241710] text-[#FFFDF9]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Crafted With Care"
          title="Menu Highlights"
          description="Explore our beloved daily offerings, spanning aromatic teas and coffees to fresh lassis and warm café snacks."
          theme="dark"
        />

        {/* Category Filters */}
        <MenuFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        {/* Menu Cards Grid with Wintech-Style Staggered Transition */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10"
        >
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Configurable Menu & Pricing Notice */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#35251D]/60 border border-[#C5A16B]/25 max-w-3xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-[#D9C3B0]">
          <Info className="w-5 h-5 text-[#C5A16B] shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-[#FFFDF9]">Note on Pricing & Availability:</strong> Menu items highlight customer-favoured staples in Nagpur. Specific preparation customizations and daily pricing are available directly at our Mankapur Ring Road counter.
          </p>
        </div>
      </div>
    </section>
  );
};
