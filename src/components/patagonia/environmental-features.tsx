'use client';

import React from 'react';
import {
  ShieldCheckIcon,
  RecycleIcon,
  EarthIcon,
  CheckIcon,
  ArrowRightIcon
} from '@/components/icons';

const PILLARS = [
  {
    icon: ShieldCheckIcon,
    title: 'Ironclad Guarantee',
    subtitle: 'Repair, Replace, or Refund',
    description:
      'We stand behind every seam and zipper. If your Patagonia product fails to perform to your satisfaction, our Reno repair center will fix it or replace it.',
    linkText: 'Learn about our guarantee',
    badge: 'Lifetime Promise'
  },
  {
    icon: RecycleIcon,
    title: 'Worn Wear® Program',
    subtitle: 'Better than New',
    description:
      'The single best thing we can do for the planet is get more use out of stuff we already own. Trade in your quality Patagonia gear for store credit or buy certified pre-owned.',
    linkText: 'Explore Worn Wear®',
    badge: 'Circular Economy'
  },
  {
    icon: EarthIcon,
    title: '1% For The Planet®',
    subtitle: 'Self-Imposed Tax',
    description:
      'Since 1985, Patagonia has pledged 1% of total revenue to the preservation and restoration of natural environments, totaling more than $140 million in direct grants.',
    linkText: 'See where the money goes',
    badge: 'Active Since 1985'
  },
  {
    icon: CheckIcon,
    title: 'Fair Trade Certified™',
    subtitle: 'Worker Empowerment',
    description:
      'Over 85% of our line is Fair Trade Certified™ sewn. We pay a premium directly to factory workers who decide democratically how to invest in their local communities.',
    linkText: 'Meet the workers',
    badge: 'Empowering Labor'
  }
];

export function EnvironmentalFeatures() {
  return (
    <section id="pillars" className="py-16 md:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block">
            Responsibility & Ethics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Our Business Is Built to Protect Nature
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            We don’t just manufacture outerwear. We operate as an environmental company
            that happens to make high-performance gear.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-50/80 rounded-2xl p-6 sm:p-7 border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white rounded-xl shadow-xs text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-200/70 text-neutral-800 px-2.5 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/60">
                  <a
                    href="#mission"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 group-hover:text-amber-700 transition-colors"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
