'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { PRODUCTS, STORIES } from '@/lib/patagonia-data';
import { SearchIcon, CloseIcon, ArrowRightIcon } from '@/components/icons';

const SUGGESTED_QUERIES = [
  'Better Sweater',
  'Nano Puff',
  'Torrentshell 3L',
  'Black Hole Duffel',
  'Baggies',
  'Worn Wear',
  'Recycled'
];

export function SearchModal() {
  const { isSearchOpen, closeSearch, openQuickView } = useCart();
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return { products: [], stories: [] };
    const q = query.toLowerCase();

    const matchingProducts = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.badge?.toLowerCase().includes(q)
    );

    const matchingStories = STORIES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.excerpt.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );

    return { products: matchingProducts, stories: matchingStories };
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={closeSearch}
      />

      {/* Modal Dialog */}
      <div className="relative min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-8 pt-16 sm:pt-24">
        <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Search Input Bar */}
          <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center gap-3">
            <SearchIcon className="w-5 h-5 text-neutral-400 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search gear, materials, repair, and stories..."
              className="w-full text-base sm:text-lg text-neutral-900 placeholder-neutral-400 focus:outline-none bg-transparent"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-xs text-neutral-400 hover:text-neutral-700 font-semibold px-2 py-1"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={closeSearch}
              className="p-1.5 text-neutral-500 hover:text-neutral-950 rounded-lg hover:bg-neutral-100"
              aria-label="Close Search"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions when empty */}
          {!query && (
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Trending Searches
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUERIES.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuery(q)}
                      className="px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-full transition-colors cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Categories */}
              <div className="pt-4 border-t border-neutral-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Browse by Department
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-neutral-800">
                  <a
                    href="#products"
                    onClick={closeSearch}
                    className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg border border-neutral-200/80 transition-colors"
                  >
                    Men&apos;s Jackets & Fleeces
                  </a>
                  <a
                    href="#products"
                    onClick={closeSearch}
                    className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg border border-neutral-200/80 transition-colors"
                  >
                    Women&apos;s Weatherproof Gear
                  </a>
                  <a
                    href="#products"
                    onClick={closeSearch}
                    className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg border border-neutral-200/80 transition-colors"
                  >
                    Black Hole® Bags & Packs
                  </a>
                  <a
                    href="#mission"
                    onClick={closeSearch}
                    className="p-3 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg border border-amber-200/80 transition-colors"
                  >
                    Worn Wear® Certified Used
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Results List */}
          {query && (
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
              {/* Product Results */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center justify-between">
                  <span>Products ({searchResults.products.length})</span>
                </h4>

                {searchResults.products.length === 0 ? (
                  <p className="text-xs text-neutral-500 italic">No products matching &quot;{query}&quot;</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {searchResults.products.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          closeSearch();
                          openQuickView(p);
                        }}
                        className="flex items-center gap-3 p-2.5 rounded-lg border border-neutral-200/80 hover:border-neutral-400 hover:bg-neutral-50 transition-all cursor-pointer"
                      >
                        <div className="relative w-14 h-14 bg-neutral-100 rounded-md overflow-hidden shrink-0">
                          <Image
                            src={p.colors[0].image}
                            alt={p.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-neutral-900 truncate">
                            {p.name}
                          </h5>
                          <p className="text-[11px] text-neutral-500 truncate">
                            {p.subtitle}
                          </p>
                          <span className="text-xs font-extrabold text-neutral-900">
                            ${p.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Story Results */}
              {searchResults.stories.length > 0 && (
                <div className="pt-4 border-t border-neutral-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                    Stories & Films ({searchResults.stories.length})
                  </h4>
                  <div className="space-y-2">
                    {searchResults.stories.map((s) => (
                      <a
                        key={s.id}
                        href="#stories"
                        onClick={closeSearch}
                        className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 text-xs font-semibold text-neutral-900 transition-colors"
                      >
                        <span>{s.title}</span>
                        <ArrowRightIcon className="w-3.5 h-3.5 text-neutral-400 shrink-0 ml-2" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer Bar */}
          <div className="p-3 bg-neutral-50 border-t border-neutral-200 text-center text-[11px] text-neutral-500">
            Press <kbd className="font-mono bg-white px-1.5 py-0.5 border rounded">Esc</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
}
