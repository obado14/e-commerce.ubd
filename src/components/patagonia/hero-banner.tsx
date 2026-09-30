'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon, EarthIcon } from '@/components/icons';

export function HeroBanner() {
  return (
    <section className="relative w-full min-h-[82vh] md:min-h-[88vh] flex items-center justify-start overflow-hidden bg-neutral-950">
      {/* Background Hero Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroes/hero-mountain-epic.jpg"
          alt="Patagonia alpine mountain peaks"
          fill
          priority
          className="object-cover object-center brightness-[0.78] contrast-[1.05] scale-[1.02] transform transition-transform duration-1000"
          sizes="100vw"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-white w-full">
        <div className="max-w-2xl space-y-6">
          {/* Environmental Mission Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-amber-300 shadow-sm">
            <EarthIcon className="w-3.5 h-3.5 text-amber-300" />
            <span>Earth is now our only shareholder</span>
          </div>

          {/* Bold Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md">
            Built for the wild.
            <br />
            <span className="text-neutral-100">Crafted to last forever.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-200 font-normal leading-relaxed max-w-xl drop-shadow-sm">
            For more than half a century, we&apos;ve crafted durable climbing, trail,
            and surf equipment designed to be repaired, not replaced. Discover timeless
            fleeces, waterproof shells, and indestructible gear made with recycled fibers.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold tracking-tight rounded-md bg-white text-neutral-950 hover:bg-neutral-100 transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              <span>Shop Men&apos;s Gear</span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>

            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold tracking-tight rounded-md bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Shop Women&apos;s Gear</span>
            </a>

            <a
              href="#stories"
              className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold tracking-tight text-neutral-200 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              <span>Watch the 50 Year Film</span>
            </a>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="pt-6 sm:pt-8 border-t border-white/20 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-neutral-300 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>100% Recycled Lines</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Fair Trade Certified™ Sewn</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Ironclad Lifetime Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
