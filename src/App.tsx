import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { MenuSection } from './sections/MenuSection';
import { SignatureSection } from './sections/SignatureSection';
import { CommunitySection } from './sections/CommunitySection';
import { ReviewSection } from './sections/ReviewSection';
import { AboutSection } from './sections/AboutSection';
import { LocationSection } from './sections/LocationSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#241710] text-[#FFFDF9] flex flex-col selection:bg-[#A66A3F] selection:text-[#FFFDF9]">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 rounded-lg bg-[#A66A3F] text-[#FFFDF9] font-medium border border-[#C5A16B] shadow-xl"
      >
        Skip to main content
      </a>

      {/* Global Navigation with Active Section Tracking */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* Section A & B: Hero with Split Headline Reveal & Parallax */}
        <HeroSection />

        {/* Section C: Why HOC? (Cream background contrast with Staggered Entrance) */}
        <FeaturesSection />

        {/* Section D: Menu Highlights (Reactive Category Filters & Card Hover) */}
        <MenuSection />

        {/* Section E: Signature Experience (Editorial layout with Parallax & Curtain Reveal) */}
        <SignatureSection />

        {/* Community & Instagram Gallery: Authentic Moments & @high__on__caffeine */}
        <CommunitySection />

        {/* Section F: Customer Feedback & Reviews (Cream background contrast) */}
        <ReviewSection />

        {/* Section G: About HOC (Dark background with Ambience Curtain Reveal) */}
        <AboutSection />

        {/* Section H: Location & Contact */}
        <LocationSection />
      </main>

      {/* Section I: Footer with Instagram Link & Interactive Back-to-Top */}
      <Footer />
    </div>
  );
};

export default App;
