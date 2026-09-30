'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { Product, ColorSwatch } from '@/types/patagonia';
import {
  CloseIcon,
  StarIcon,
  CheckIcon,
  ShieldCheckIcon,
  BagIcon
} from '@/components/icons';

interface QuickViewContentProps {
  product: Product;
  onClose: () => void;
}

function QuickViewContent({ product, onClose }: QuickViewContentProps) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-neutral-500 hover:text-neutral-950 bg-white/80 backdrop-blur-xs rounded-full shadow-xs transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Image */}
            <div className="relative aspect-square md:aspect-auto bg-neutral-100 p-8 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full min-h-[340px]">
                <Image
                  src={selectedColor.image}
                  alt={`${product.name} - ${selectedColor.name}`}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/95 text-neutral-900 text-xs font-bold rounded shadow-xs uppercase tracking-wider">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Details & Order Form */}
            <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4"
                          filled={i < Math.floor(product.rating)}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-neutral-800 ml-1">
                      {product.rating}
                    </span>
                    <span className="text-xs text-neutral-500">
                      ({product.reviewCount} customer reviews)
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-sm text-neutral-600 mt-1">
                    {product.subtitle}
                  </p>
                  <p className="text-2xl font-extrabold text-neutral-950 mt-2">
                    ${product.price}
                  </p>
                </div>

                {/* Color Swatches */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-800">
                      Color: <span className="font-normal text-neutral-600">{selectedColor.name}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          selectedColor.code === c.code
                            ? 'ring-2 ring-neutral-950 ring-offset-2 scale-110'
                            : 'border-neutral-300 hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.code }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-800">
                      Select Size: <span className="font-normal text-neutral-600">{selectedSize}</span>
                    </span>
                    <a href="#footer" className="text-neutral-500 underline hover:text-neutral-900">
                      Size & Fit Guide
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`px-3.5 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          selectedSize === s
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                            : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="pt-2 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100">
                  <p>{product.description}</p>
                </div>

                {/* Specs Box */}
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 text-[11px] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-medium">Material:</span>
                    <span className="font-semibold text-neutral-900 text-right">{product.specs.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-medium">Weight:</span>
                    <span className="font-semibold text-neutral-900">{product.specs.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-medium">Origin:</span>
                    <span className="font-semibold text-neutral-900">{product.specs.origin}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-neutral-300 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-2.5 text-neutral-600 hover:text-neutral-950 font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 py-2.5 text-xs font-bold text-neutral-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-2.5 text-neutral-600 hover:text-neutral-950 font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Bag Button */}
                  <button
                    type="button"
                    onClick={handleAdd}
                    disabled={isAdded}
                    className={`flex-1 py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-neutral-950 hover:bg-neutral-800 text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <CheckIcon className="w-4 h-4" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <BagIcon className="w-4 h-4" />
                        <span>Add to Bag — ${product.price * quantity}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 text-center">
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Backed by our Ironclad Guarantee: Repair, Replace, or Refund</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickViewModal() {
  const { quickViewProduct, closeQuickView } = useCart();
  if (!quickViewProduct) return null;

  return (
    <QuickViewContent
      key={quickViewProduct.id}
      product={quickViewProduct}
      onClose={closeQuickView}
    />
  );
}
