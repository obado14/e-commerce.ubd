'use client';

import React from 'react';
import Image from 'next/image';
import { FitzRoySkyline, ArrowRightIcon, EarthIcon } from '@/components/icons';

export function BrandMission() {
  return (
    <section id="mission" className="py-20 md:py-28 bg-[#181816] text-white overflow-hidden relative">
      {/* Background Subtle Mountain Overlay */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 pointer-events-none">
        <Image
          src="/images/stories/story-fitz-roy-peak.jpg"
          alt="Fitz Roy Peak"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181816] via-[#181816]/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: The Statement & Letter */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
              <EarthIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>A Letter From Our Founder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]">
              &ldquo;Earth is now our only shareholder.&rdquo;
            </h2>

            <blockquote className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed border-l-2 border-amber-500 pl-4 py-1 italic">
              &ldquo;Instead of extracting value from nature and transforming it into
              wealth for investors, we use the wealth Patagonia creates to protect the
              source of all wealth. If we have any hope of a thriving planet fifty years
              from now, it demands all of us doing what we can with the resources we have.&rdquo;
            </blockquote>

            <p className="text-sm font-semibold text-neutral-400">
              — Yvon Chouinard, Founder of Patagonia
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#stories"
                className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Read the Full Statement</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="#stories"
                className="px-5 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-200 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
              >
                Patagonia Action Works
              </a>
            </div>
          </div>

          {/* Right Column: Three Big Impact Metrics */}
          <div className="lg:col-span-5 space-y-5">
            {/* Metric 1 */}
            <div className="p-6 bg-neutral-900/90 border border-neutral-800 rounded-2xl backdrop-blur-xs space-y-2 hover:border-neutral-700 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                $140M+
              </span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                1% For The Planet
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Direct cash grants awarded to grassroots environmental organizations on the
                front lines of biodiversity protection and climate justice since 1985.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-6 bg-neutral-900/90 border border-neutral-800 rounded-2xl backdrop-blur-xs space-y-2 hover:border-neutral-700 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                100%
              </span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Holdfast Collective
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every dollar of non-voting stock is held by the Holdfast Collective to
                protect wild nature, fight the environmental crisis, and defend communities.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-6 bg-neutral-900/90 border border-neutral-800 rounded-2xl backdrop-blur-xs space-y-2 hover:border-neutral-700 transition-colors">
              <span className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
                87%
              </span>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Recycled Materials
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Of our entire global fabric line is made using recycled materials, keeping
                millions of plastic bottles and discarded fishing nets out of oceans.
              </p>
            </div>

            {/* Fitz Roy Skyline Badge */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <FitzRoySkyline className="h-8 w-auto opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
