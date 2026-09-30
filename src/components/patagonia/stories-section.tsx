'use client';

import React from 'react';
import Image from 'next/image';
import { STORIES } from '@/lib/patagonia-data';
import { ArrowRightIcon } from '@/components/icons';

export function StoriesSection() {
  return (
    <section id="stories" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Field Reports & Documentary Films
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900">
              Stories From the Wild
            </h2>
          </div>
          <a
            href="#newsletter"
            className="mt-2 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-900 hover:text-amber-700 transition-colors"
          >
            <span>View All Editorial Stories</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STORIES.map((story) => (
            <article
              key={story.id}
              className="group flex flex-col bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200/80 hover:shadow-lg transition-all duration-300"
            >
              {/* Story Thumbnail */}
              <div className="relative w-full aspect-16/10 bg-neutral-200 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    {story.readTime}
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-neutral-500">
                    <span className="font-semibold text-amber-700 uppercase tracking-wider">
                      {story.category}
                    </span>
                    <span>{story.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-amber-700 transition-colors leading-snug line-clamp-2">
                    {story.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200/70 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-neutral-500">
                    By {story.author}
                  </span>
                  <span className="text-xs font-bold text-neutral-900 group-hover:text-amber-700 flex items-center gap-1 transition-colors">
                    Read
                    <ArrowRightIcon className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
