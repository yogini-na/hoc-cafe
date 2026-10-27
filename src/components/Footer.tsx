import React from 'react';
import { SITE_CONFIG } from '../data/site';
import { Coffee, ArrowUp, MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';


const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A100B] text-[#D9C3B0] border-t border-[#C5A16B]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#C5A16B]/15">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#35251D] border border-[#C5A16B]/40 flex items-center justify-center text-[#C5A16B]">
                <Coffee className="w-5 h-5 text-[#C5A16B]" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#FFFDF9]">
                HOC
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#C5A16B] font-semibold">
              High on Caffeine • Nagpur
            </p>
            <p className="text-sm leading-relaxed text-[#D9C3B0]/80">
              A peaceful neighbourhood café in Nagpur dedicated to comforting Indian chai, aromatic coffee, satisfying snacks, and unhurried conversations.
            </p>

            {/* Official Instagram Link */}
            <div className="pt-1">
              <a
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#241710] hover:bg-[#35251D] text-xs font-medium text-[#C5A16B] hover:text-[#FFFDF9] border border-[#C5A16B]/30 transition-all hover:scale-105"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#C5A16B]" />
                <span>{SITE_CONFIG.instagram.handle}</span>
                <ExternalLink className="w-3 h-3 text-[#D9C3B0]/60" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#FFFDF9] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="hover:text-[#FFFDF9] transition-colors focus-visible:outline-none focus-visible:text-[#C5A16B] flex items-center gap-1.5 group"
                  >
                    <span className="text-[#C5A16B] text-xs transition-transform group-hover:translate-x-1">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Directions */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#FFFDF9] mb-4">
              Visit Us
            </h4>
            <div className="space-y-3 text-sm leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A16B] mt-1 shrink-0" />
                <address className="not-italic text-[#D9C3B0]/90">
                  {SITE_CONFIG.address.full}
                </address>
              </div>
              <a
                href={SITE_CONFIG.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A16B] hover:text-[#FFFDF9] transition-colors pt-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Verified Business Information Notice */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#FFFDF9] mb-4">
              Community & Rating
            </h4>
            <div className="p-4 rounded-xl bg-[#241710] border border-[#C5A16B]/25 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold text-base">★ {SITE_CONFIG.ratingInfo.score}</span>
                <span className="text-[#D9C3B0]/70">({SITE_CONFIG.ratingInfo.totalReviews} customer reviews)</span>
              </div>
              <p className="text-[11px] text-[#D9C3B0]/70 leading-relaxed">
                {SITE_CONFIG.ratingInfo.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Interactive Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9C3B0]/60">
          <p>
            © {CURRENT_YEAR} {SITE_CONFIG.name}. All rights reserved. Nagpur, Maharashtra.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#35251D] hover:bg-[#A66A3F] text-[#D9C3B0] hover:text-[#FFFDF9] border border-[#C5A16B]/30 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#C5A16B] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
