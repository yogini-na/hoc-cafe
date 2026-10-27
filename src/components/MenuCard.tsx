import React, { useState } from 'react';
import type { MenuItem } from '../data/menu';
import { Info } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="group bg-[#35251D]/80 hover:bg-[#35251D] border border-[#C5A16B]/20 hover:border-[#C5A16B]/60 rounded-2xl overflow-hidden transition-all duration-400 flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-1.5 will-change-transform">
      <div>
        {/* Image Container with Consistent Ratio & Veg Indicator */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241710]">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-[#241710] animate-pulse flex items-center justify-center">
              <span className="text-xs text-[#D9C3B0]/40 font-mono">Loading image...</span>
            </div>
          )}
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Dark gradient overlay for bottom badge legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/95 via-transparent to-black/20 pointer-events-none" />

          {/* Top badges bar */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            {/* Vegetarian Indicator (Indian Standard FSSAI green dot in square) */}
            {item.isVegetarian && (
              <div
                className="w-5 h-5 rounded-sm bg-[#FFFDF9]/95 border border-green-700 flex items-center justify-center shadow-md backdrop-blur-sm"
                title="100% Vegetarian"
                aria-label="Vegetarian item"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-700" />
              </div>
            )}

            {/* Category or Highlight Badge */}
            {item.highlightBadge && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#241710]/90 text-[#C5A16B] border border-[#C5A16B]/40 backdrop-blur-md shadow-md transition-transform group-hover:scale-105">
                {item.highlightBadge}
              </span>
            )}
          </div>

          {/* Category tag */}
          <div className="absolute bottom-2.5 left-3 pointer-events-none">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#D9C3B0]/90 bg-[#241710]/60 px-2 py-0.5 rounded backdrop-blur-sm">
              {item.category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFDF9] group-hover:text-[#F5EBDD] transition-colors duration-300 leading-snug">
            {item.name}
          </h3>
          <p className="mt-2.5 text-sm text-[#D9C3B0] leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Transparent Pricing Notice */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#C5A16B]/15 mt-2 flex items-center justify-between text-xs text-[#D9C3B0]/80">
        <div className="flex items-center gap-1.5 pt-3">
          <Info className="w-3.5 h-3.5 text-[#C5A16B]" />
          <span>
            {item.priceDisplay ? item.priceDisplay : 'Available at Counter'}
          </span>
        </div>
        <span className="pt-3 text-[11px] text-[#C5A16B] italic font-serif">
          Freshly Prepared
        </span>
      </div>
    </article>
  );
};
