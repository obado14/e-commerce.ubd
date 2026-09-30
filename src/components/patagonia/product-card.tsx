'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product, ColorSwatch } from '@/types/patagonia';
import { StarIcon, BagIcon, CheckIcon } from '@/components/icons';
import { useCart } from '@/lib/cart-context';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, openQuickView } = useCart();
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedColor, selectedSize, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div
      onClick={() => openQuickView(product)}
      className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-neutral-200/80 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative w-full aspect-square bg-neutral-100 overflow-hidden">
        <Image
          src={selectedColor.image}
          alt={`${product.name} - ${selectedColor.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span className="inline-block px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase text-neutral-800 rounded shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="px-4 py-2 bg-white text-neutral-900 text-xs font-bold rounded-full shadow-lg hover:bg-neutral-100 transition-transform transform translate-y-2 group-hover:translate-y-0"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Color Swatch Circles */}
          <div className="flex items-center gap-1.5 mb-2.5">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                className={`w-4 h-4 rounded-full border transition-all ${
                  selectedColor.code === color.code
                    ? 'ring-2 ring-neutral-900 ring-offset-1 scale-110'
                    : 'border-neutral-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color.code }}
                title={color.name}
              />
            ))}
            <span className="text-[11px] text-neutral-500 ml-1.5">
              {product.colors.length} {product.colors.length === 1 ? 'color' : 'colors'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold text-neutral-900 leading-snug group-hover:text-amber-700 transition-colors">
            {product.name}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Rating and Price */}
        <div className="pt-2 border-t border-neutral-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-base font-extrabold text-neutral-950">
              ${product.price}
            </span>

            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              <StarIcon className="w-3.5 h-3.5" />
              <span className="text-xs font-bold text-neutral-800">
                {product.rating}
              </span>
              <span className="text-[11px] text-neutral-400">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Quick Size Select & Add to Bag */}
          <div className="flex items-center gap-2">
            <div
              className="flex-1 flex items-center gap-1 overflow-x-auto py-0.5"
              onClick={(e) => e.stopPropagation()}
            >
              {product.sizes.slice(0, 4).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`text-[10px] font-bold px-2 py-1 rounded border transition-colors ${
                    selectedSize === size
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleQuickAdd}
              disabled={isAdded}
              className={`p-2 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-neutral-900 text-white hover:bg-neutral-800'
              }`}
              title="Add to Bag"
            >
              {isAdded ? (
                <CheckIcon className="w-4 h-4" />
              ) : (
                <BagIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
