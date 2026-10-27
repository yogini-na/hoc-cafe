import React from 'react';
import type { MenuCategory } from '../data/menu';
import { MENU_CATEGORIES } from '../data/menu';


interface MenuFiltersProps {
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
  categoryCounts: Record<MenuCategory, number>;
}

export const MenuFilters: React.FC<MenuFiltersProps> = ({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Menu categories"
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8"
    >
      {MENU_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        const count = categoryCounts[category] || 0;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#C5A16B] ${
              isActive
                ? 'bg-[#A66A3F] text-[#FFFDF9] shadow-md shadow-[#A66A3F]/20 border border-[#C5A16B]'
                : 'bg-[#35251D]/60 hover:bg-[#35251D] text-[#D9C3B0] hover:text-[#FFFDF9] border border-[#C5A16B]/20'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive
                  ? 'bg-[#241710]/40 text-[#FFFDF9]'
                  : 'bg-[#241710]/60 text-[#D9C3B0]/70'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
