'use client';

import React from 'react';
import { PatagoniaLogo, EarthIcon } from '@/components/icons';

export function Footer() {
  return (
    <footer id="footer" className="bg-[#111111] text-neutral-300 text-xs">
      {/* Upper Navigation Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-b border-neutral-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Customer Service */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Customer Service
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Order Status & Tracking
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">
                  Ironclad Guarantee
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Repairs & Care Guide
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Shipping Rates & Times
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Size Charts & Fit Guide
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Contact Customer Care
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Programs */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Programs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">
                  Worn Wear® Used Gear
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-white transition-colors">
                  Patagonia Action Works
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">
                  1% for the Planet®
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Pro Sales Program
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Group & Corporate Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company & Mission
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#mission" className="hover:text-white transition-colors">
                  Earth is Our Only Shareholder
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  50-Year History
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">
                  Environmental & Social Initiatives
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  The Footprint Chronicles®
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Careers at Patagonia
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Press & Media Center
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Stores & Culture */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Stores & Community
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Find a Local Store
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  Events & Film Screenings
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  Patagonia Books & Films
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">
                  Patagonia Provisions® Organic Food
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-white transition-colors">
                  Grassroots Environmental Grants
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Brand Mission Banner */}
      <div className="bg-[#0c0c0b] py-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <PatagoniaLogo className="h-6 w-auto text-white" />
            <span className="text-xs text-neutral-400 border-l border-neutral-700 pl-4 hidden sm:inline">
              We&apos;re in business to save our home planet.
            </span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400 text-xs">
            <div className="flex items-center gap-2">
              <EarthIcon className="w-4 h-4 text-amber-500" />
              <span>Certified B Corporation</span>
            </div>
            <span>•</span>
            <span>1% for the Planet Member</span>
          </div>
        </div>
      </div>

      {/* Lower Legal & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <span>© 2026 Patagonia, Inc. All rights reserved.</span>
          <a href="#footer" className="hover:text-neutral-300 transition-colors">
            Privacy Notice
          </a>
          <span>|</span>
          <a href="#footer" className="hover:text-neutral-300 transition-colors">
            Terms of Sale
          </a>
          <span>|</span>
          <a href="#footer" className="hover:text-neutral-300 transition-colors">
            Terms of Use
          </a>
          <span>|</span>
          <a href="#footer" className="hover:text-neutral-300 transition-colors">
            Do Not Sell or Share My Information
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span>United States / English</span>
          <span className="text-neutral-600">($ USD)</span>
        </div>
      </div>
    </footer>
  );
}
