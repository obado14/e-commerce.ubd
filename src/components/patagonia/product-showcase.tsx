'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/lib/patagonia-data';
import { ProductCard } from '@/components/patagonia/product-card';
import { ArrowRightIcon } from '@/components/icons';

type CategoryFilter = 'all' | 'men' | 'women' | 'gear';

export function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === 'all') return true;
    return product.category === activeFilter;
  });

  return (
    <section id="products" className="py-16 md:py-24 bg-neutral-50/70 border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Field-Tested Staples
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900">
              Patagonia Best Sellers
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Iconic designs crafted for alpine cold, driving rain, and everyday wear.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-200/70 rounded-xl overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              All Best Sellers
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('men')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'men'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              Men&apos;s
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('women')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'women'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              Women&apos;s
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('gear')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'gear'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              Packs & Gear
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-neutral-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">
              Looking for something specific or past-season gear?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Browse our certified pre-owned gear on Worn Wear® or view our full seasonal catalog.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#pillars"
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore Worn Wear®</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
