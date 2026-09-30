'use client';

import React, { useState, useEffect } from 'react';
import { ANNOUNCEMENT_MESSAGES } from '@/lib/patagonia-data';
import { PinIcon, EarthIcon, ChevronDownIcon } from '@/components/icons';

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1d1d1b] text-neutral-200 border-b border-neutral-800 text-[11px] font-medium tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#footer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <PinIcon className="w-3.5 h-3.5 text-neutral-400" />
            <span>Find a Store</span>
          </a>
          <span className="text-neutral-600">|</span>
          <a
            href="#footer"
            className="hover:text-white transition-colors"
          >
            Customer Service
          </a>
          <span className="text-neutral-600">|</span>
          <a
            href="#mission"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <span>Earth is our shareholder</span>
          </a>
        </div>

        {/* Center Rotating Announcements */}
        <div className="flex-1 md:flex-initial flex items-center justify-center overflow-hidden">
          <div className="transition-all duration-500 transform text-center">
            <span className="font-semibold text-white">
              {ANNOUNCEMENT_MESSAGES[currentIndex]}
            </span>
          </div>
        </div>

        {/* Right Links & Region Picker */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#mission"
            className="hover:text-white transition-colors"
          >
            Worn Wear®
          </a>
          <span className="text-neutral-600">|</span>
          <button
            type="button"
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
            title="Country / Region Selector"
          >
            <EarthIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
            <span className="uppercase font-semibold">US / USD ($)</span>
            <ChevronDownIcon className="w-3 h-3 text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
