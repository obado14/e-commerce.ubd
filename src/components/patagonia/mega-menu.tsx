'use client';

import React from 'react';
import Image from 'next/image';
import { MegaMenuData } from '@/types/patagonia';
import { ArrowRightIcon } from '@/components/icons';

interface MegaMenuProps {
  data: MegaMenuData;
  onClose?: () => void;
}

export function MegaMenu({ data, onClose }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 w-full bg-white text-neutral-900 border-b border-neutral-200 shadow-2xl py-8 px-4 sm:px-6 lg:px-8 z-40 transition-all duration-200">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Featured Editorial Card (Left Col) */}
        <div className="col-span-4 bg-neutral-50 rounded-xl p-5 border border-neutral-100 flex flex-col justify-between">
          <div>
            <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 shadow-sm">
              <Image
                src={data.featured.image}
                alt={data.featured.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Featured Collection
            </span>
            <h4 className="text-base font-bold text-neutral-900 mb-2">
              {data.featured.title}
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {data.featured.subtitle}
            </p>
          </div>

          <a
            href={data.featured.href}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-amber-700 transition-colors mt-4 pt-3 border-t border-neutral-200"
          >
            <span>Explore Collection</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Categories Columns (Right Col) */}
        <div className="col-span-8 grid grid-cols-4 gap-6">
          {data.columns.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-900 pb-1 border-b border-neutral-200">
                {col.title}
              </h5>
              <ul className="space-y-2">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between text-xs text-neutral-600 hover:text-neutral-950 font-medium transition-colors py-0.5"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-semibold bg-neutral-100 group-hover:bg-amber-100 group-hover:text-amber-900 text-neutral-600 px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
