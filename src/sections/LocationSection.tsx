import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SITE_CONFIG } from '../data/site';
import { MapPin, Navigation, Copy, Check, Clock, Phone, AlertCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mapFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (cardRef.current && mapFrameRef.current) {
        gsap.fromTo(
          [cardRef.current, mapFrameRef.current],
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="location"
      aria-label="Location and Directions"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1A100B] text-[#FFFDF9] border-t border-[#C5A16B]/20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Visit Our Café"
          title="Find Us in Nagpur"
          description="Conveniently located on Mankapur Ring Road near Axis Bank, Gayatri Nagar."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          {/* Address & Visiting Details Card */}
          <div
            ref={cardRef}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#241710] p-6 sm:p-8 rounded-3xl border border-[#C5A16B]/25 shadow-xl"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#35251D] border border-[#C5A16B]/40 flex items-center justify-center text-[#C5A16B] shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#C5A16B]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A16B]">
                    Full Physical Address
                  </span>
                  <address className="not-italic text-sm sm:text-base text-[#FFFDF9] font-medium mt-1 leading-relaxed">
                    {SITE_CONFIG.address.line1}<br />
                    <span className="text-[#D9C3B0] text-sm">
                      {SITE_CONFIG.address.landmark}, {SITE_CONFIG.address.area}<br />
                      {SITE_CONFIG.address.subLocality}<br />
                      {SITE_CONFIG.address.locality}, {SITE_CONFIG.address.city}<br />
                      {SITE_CONFIG.address.state}, {SITE_CONFIG.address.country}
                    </span>
                  </address>
                </div>
              </div>

              {/* Copy Address Button */}
              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#35251D] hover:bg-[#A66A3F]/30 text-xs font-medium text-[#D9C3B0] hover:text-[#FFFDF9] border border-[#C5A16B]/30 transition-all focus-visible:ring-2 focus-visible:ring-[#C5A16B] cursor-pointer"
                aria-label="Copy address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 font-medium">Address Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#C5A16B]" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>

              {/* Get Directions Action Button */}
              <a
                href={SITE_CONFIG.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#A66A3F] hover:bg-[#8F572F] text-[#FFFDF9] font-medium text-sm border border-[#C5A16B]/50 shadow-md transition-all hover:scale-[1.02] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#C5A16B]"
              >
                <Navigation className="w-4 h-4 text-[#FFFDF9]" />
                <span>Get Directions via Google Maps</span>
              </a>

              {/* Verified Information Disclosure Box */}
              <div className="pt-4 border-t border-[#C5A16B]/15 space-y-3 text-xs text-[#D9C3B0]/75">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#C5A16B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#FFFDF9]">Opening Hours:</span>
                    <p className="mt-0.5 text-[#D9C3B0]/70">
                      Hours are confirmed directly on-site with management. Please visit in person on Mankapur Ring Road.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A16B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#FFFDF9]">Direct Phone Line:</span>
                    <p className="mt-0.5 text-[#D9C3B0]/70">
                      Official telephone connection is being updated for online inquiries. In-person counter assistance is available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#C5A16B] bg-[#35251D]/60 p-3 rounded-xl border border-[#C5A16B]/20">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Free from fabricated hours or telephone numbers.</span>
            </div>
          </div>

          {/* Interactive Google Map Embed Frame with Subtle Shadow and Border */}
          <div
            ref={mapFrameRef}
            className="lg:col-span-7 h-[380px] sm:h-[460px] lg:h-auto rounded-3xl overflow-hidden border border-[#C5A16B]/25 bg-[#241710] shadow-xl relative"
          >
            <iframe
              title="HOC Café Location on Mankapur Ring Road, Nagpur"
              src={SITE_CONFIG.mapEmbedUrl}
              className="w-full h-full border-0 filter contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map showing HOC location in Nagpur"
            />
            {/* Overlay button in corner for direct map app open */}
            <div className="absolute bottom-4 right-4 z-10">
              <a
                href={SITE_CONFIG.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#241710]/95 hover:bg-[#241710] text-[#FFFDF9] text-xs font-medium border border-[#C5A16B]/40 shadow-lg backdrop-blur-md flex items-center gap-1.5 transition-transform hover:scale-105"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5A16B]" />
                <span>Open in Map App</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
