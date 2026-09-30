'use client';

import React from 'react';
import Image from 'next/image';
import { CATEGORIES } from '@/lib/patagonia-data';
import { ArrowRightIcon } from '@/components/icons';

export function CategoryGrid() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Engineered For The Elements
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900">
              Explore Our Core Collections
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 text-sm text-neutral-600 max-w-md">
            Every garment and pack is engineered for longevity, repairability,
            and reduced environmental footprint.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden bg-neutral-100 flex flex-col justify-end min-h-[380px] sm:min-h-[420px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/80"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              </div>

              {/* Card Badges */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-xs text-neutral-900 text-xs font-bold rounded-full shadow-xs">
                  {cat.badge}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 text-white space-y-2">
                <span className="text-xs font-medium uppercase tracking-wider text-amber-300 block">
                  {cat.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 line-clamp-2 leading-relaxed">
                  {cat.tagline}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                  <span>Shop Collection</span>
                  <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
