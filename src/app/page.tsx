import React from 'react';
import { AnnouncementBar } from '@/components/patagonia/announcement-bar';
import { Navbar } from '@/components/patagonia/navbar';
import { HeroBanner } from '@/components/patagonia/hero-banner';
import { CategoryGrid } from '@/components/patagonia/category-grid';
import { ProductShowcase } from '@/components/patagonia/product-showcase';
import { BrandMission } from '@/components/patagonia/brand-mission';
import { EnvironmentalFeatures } from '@/components/patagonia/environmental-features';
import { StoriesSection } from '@/components/patagonia/stories-section';
import { NewsletterSection } from '@/components/patagonia/newsletter-section';
import { Footer } from '@/components/patagonia/footer';
import { CartDrawer } from '@/components/patagonia/cart-drawer';
import { SearchModal } from '@/components/patagonia/search-modal';
import { QuickViewModal } from '@/components/patagonia/quick-view-modal';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Banner & Sticky Navigation */}
      <AnnouncementBar />
      <Navbar />

      {/* Main Flow Content */}
      <main className="flex-1">
        <HeroBanner />
        <CategoryGrid />
        <ProductShowcase />
        <BrandMission />
        <EnvironmentalFeatures />
        <StoriesSection />
        <NewsletterSection />
      </main>

      {/* Comprehensive Patagonia Footer */}
      <Footer />

      {/* Interactive Global Portals & Drawers */}
      <CartDrawer />
      <SearchModal />
      <QuickViewModal />
    </div>
  );
}
