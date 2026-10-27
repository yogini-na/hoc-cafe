import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/site';
import { Coffee, Navigation, Menu as MenuIcon, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const sections = SITE_CONFIG.navigation.map((n) => n.href);
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#241710]/95 backdrop-blur-md py-3 shadow-lg shadow-black/40 border-b border-[#C5A16B]/20'
            : 'bg-gradient-to-b from-[#241710]/85 via-[#241710]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#C5A16B] rounded-lg p-1 transition-transform"
              aria-label="HOC – High on Caffeine Home"
            >
              <div className="w-10 h-10 rounded-full bg-[#35251D] border border-[#C5A16B]/40 flex items-center justify-center text-[#C5A16B] group-hover:border-[#C5A16B] transition-colors shadow-inner">
                <Coffee className="w-5 h-5 text-[#C5A16B] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#FFFDF9] flex items-center gap-1.5">
                  HOC
                  <span className="text-[10px] font-sans font-semibold px-1.5 py-0.5 rounded bg-[#A66A3F]/30 text-[#C5A16B] border border-[#C5A16B]/30 tracking-widest">
                    NAGPUR
                  </span>
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#D9C3B0]/80 font-sans -mt-0.5">
                  High on Caffeine
                </span>
              </div>
            </a>

            {/* Desktop Navigation with Active Section Indicator */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
              {SITE_CONFIG.navigation.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:text-[#C5A16B] ${
                      isActive ? 'text-[#FFFDF9] font-semibold' : 'text-[#D9C3B0] hover:text-[#FFFDF9]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {/* Active Line Indicator */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A16B] rounded-full transition-all duration-300 ${
                        isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#A66A3F] hover:bg-[#8F572F] text-[#FFFDF9] border border-[#C5A16B]/40 shadow-sm transition-all hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#C5A16B]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#FFFDF9]" />
                <span>Get Directions</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                className="lg:hidden p-2 rounded-lg bg-[#35251D] text-[#D9C3B0] hover:text-[#FFFDF9] border border-[#C5A16B]/30 focus-visible:ring-2 focus-visible:ring-[#C5A16B] cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer with Staggered Link Animation */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[82%] max-w-sm z-50 bg-[#241710] border-l border-[#C5A16B]/25 p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-400 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#C5A16B]/20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#35251D] border border-[#C5A16B]/40 flex items-center justify-center text-[#C5A16B]">
                <Coffee className="w-4 h-4 text-[#C5A16B]" />
              </div>
              <span className="font-serif text-lg font-bold text-[#FFFDF9]">
                HOC NAGPUR
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-1.5 rounded-md text-[#D9C3B0] hover:text-[#FFFDF9] bg-[#35251D]/60 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links list with staggered entry */}
          <nav className="mt-8 flex flex-col gap-3">
            {SITE_CONFIG.navigation.map((item, idx) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${idx * 40}ms` : '0ms',
                  }}
                  className={`text-base font-medium px-3.5 py-2.5 rounded-lg transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#35251D] text-[#FFFDF9] border border-[#C5A16B]/40 font-semibold'
                      : 'text-[#D9C3B0] hover:text-[#FFFDF9] hover:bg-[#35251D]/60'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-[#C5A16B]">
                    {isActive ? '•' : '›'}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Footer with Quick Directions */}
        <div className="pt-6 border-t border-[#C5A16B]/20 space-y-3">
          <a
            href={SITE_CONFIG.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-[#A66A3F] hover:bg-[#8F572F] text-[#FFFDF9] border border-[#C5A16B]/40 shadow-sm transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions on Google Maps</span>
          </a>
          <p className="text-center text-xs text-[#D9C3B0]/60">
            Mankapur Ring Road, Nagpur
          </p>
        </div>
      </div>
    </>
  );
};
