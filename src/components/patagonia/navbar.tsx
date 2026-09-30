'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PatagoniaLogo,
  SearchIcon,
  BagIcon,
  UserIcon,
  PinIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon
} from '@/components/icons';
import { MegaMenu } from '@/components/patagonia/mega-menu';
import {
  MEGA_MENU_MEN,
  MEGA_MENU_WOMEN,
  MEGA_MENU_GEAR
} from '@/lib/patagonia-data';
import { useCart } from '@/lib/cart-context';

export function Navbar() {
  const { openCart, itemCount, openSearch } = useCart();

  const [activeMenu, setActiveMenu] = useState<'men' | 'women' | 'gear' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200'
          : 'bg-white border-b border-neutral-200'
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Left: Mobile Hamburger & Logo */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-neutral-800 hover:text-neutral-950 focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none"
              title="Patagonia"
            >
              <div className="text-neutral-900 group-hover:text-amber-700 transition-colors">
                <PatagoniaLogo className="h-7 md:h-8 w-auto fill-current" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 h-full">
            {/* Shop Men's */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveMenu('men')}
            >
              <button
                type="button"
                className={`px-3 py-2 text-sm font-bold tracking-tight rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                  activeMenu === 'men'
                    ? 'text-neutral-950 bg-neutral-100'
                    : 'text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                <span>Men&apos;s</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === 'men' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Shop Women's */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveMenu('women')}
            >
              <button
                type="button"
                className={`px-3 py-2 text-sm font-bold tracking-tight rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                  activeMenu === 'women'
                    ? 'text-neutral-950 bg-neutral-100'
                    : 'text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                <span>Women&apos;s</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === 'women' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Packs & Gear */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveMenu('gear')}
            >
              <button
                type="button"
                className={`px-3 py-2 text-sm font-bold tracking-tight rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                  activeMenu === 'gear'
                    ? 'text-neutral-950 bg-neutral-100'
                    : 'text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                <span>Packs & Gear</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === 'gear' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Activism */}
            <a
              href="#mission"
              className="px-3 py-2 text-sm font-bold tracking-tight text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50 rounded-md transition-colors"
            >
              Activism
            </a>

            {/* Stories */}
            <a
              href="#stories"
              className="px-3 py-2 text-sm font-bold tracking-tight text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50 rounded-md transition-colors"
            >
              Stories & Films
            </a>

            {/* Worn Wear */}
            <a
              href="#pillars"
              className="px-3 py-2 text-sm font-bold tracking-tight text-amber-700 hover:text-amber-800 hover:bg-amber-50 rounded-md transition-colors flex items-center gap-1"
            >
              <span>Worn Wear®</span>
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={openSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 rounded-full transition-all cursor-pointer border border-transparent hover:border-neutral-300"
              title="Search products, gear, stories (Cmd + K)"
            >
              <SearchIcon className="w-4 h-4 text-neutral-500" />
              <span className="hidden sm:inline">Search gear & stories</span>
              <kbd className="hidden lg:inline text-[10px] bg-white border border-neutral-300 text-neutral-500 px-1.5 py-0.5 rounded shadow-2xs font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Store Finder */}
            <a
              href="#footer"
              className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-full transition-colors hidden sm:flex"
              title="Find a Store"
            >
              <PinIcon className="w-5 h-5" />
            </a>

            {/* User Account */}
            <a
              href="#footer"
              className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-full transition-colors hidden sm:flex"
              title="Sign In / Account"
            >
              <UserIcon className="w-5 h-5" />
            </a>

            {/* Shopping Bag Button with Counter */}
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 text-neutral-900 hover:text-neutral-950 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
              title="Shopping Bag"
              aria-label="View Shopping Bag"
            >
              <BagIcon className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-50">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menus */}
      {activeMenu === 'men' && (
        <MegaMenu data={MEGA_MENU_MEN} onClose={() => setActiveMenu(null)} />
      )}
      {activeMenu === 'women' && (
        <MegaMenu data={MEGA_MENU_WOMEN} onClose={() => setActiveMenu(null)} />
      )}
      {activeMenu === 'gear' && (
        <MegaMenu data={MEGA_MENU_GEAR} onClose={() => setActiveMenu(null)} />
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="relative w-5/6 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="p-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <PatagoniaLogo className="h-6 w-auto text-neutral-900" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-500 hover:text-neutral-950 rounded-md"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search Button */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openSearch();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 bg-neutral-100 text-neutral-600 rounded-lg text-sm font-medium text-left"
                >
                  <SearchIcon className="w-4 h-4 text-neutral-500" />
                  <span>Search all gear & stories...</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 space-y-4">
                <div className="space-y-1">
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-bold text-neutral-900 hover:text-amber-700"
                  >
                    <span>Shop Men&apos;s</span>
                  </a>
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-bold text-neutral-900 hover:text-amber-700"
                  >
                    <span>Shop Women&apos;s</span>
                  </a>
                  <a
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-bold text-neutral-900 hover:text-amber-700"
                  >
                    <span>Packs & Gear</span>
                  </a>
                  <a
                    href="#categories"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-bold text-neutral-900 hover:text-amber-700"
                  >
                    <span>Explore Collections</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-neutral-200 space-y-3">
                  <a
                    href="#mission"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-neutral-800 hover:text-amber-700"
                  >
                    Earth is Our Only Shareholder
                  </a>
                  <a
                    href="#pillars"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-neutral-800 hover:text-amber-700"
                  >
                    Worn Wear® & Repair
                  </a>
                  <a
                    href="#stories"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-semibold text-neutral-800 hover:text-amber-700"
                  >
                    Stories & Environmental Films
                  </a>
                </div>
              </div>
            </div>

            {/* Footer inside mobile menu */}
            <div className="p-5 bg-neutral-50 border-t border-neutral-200 space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <span>Country / Language</span>
                <span className="font-bold text-neutral-900">US ($ USD)</span>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs text-neutral-500">
                <a href="#footer" onClick={() => setMobileMenuOpen(false)}>
                  Find a Store
                </a>
                <a href="#footer" onClick={() => setMobileMenuOpen(false)}>
                  Customer Support
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
