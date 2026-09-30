'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { CloseIcon, ShieldCheckIcon, ArrowRightIcon } from '@/components/icons';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    itemCount,
    freeShippingThreshold
  } = useCart();

  if (!isCartOpen) return null;

  const amountRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-neutral-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold text-neutral-900 tracking-tight">
                  Your Shopping Bag
                </h2>
                <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                  {itemCount}
                </span>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="p-1.5 text-neutral-500 hover:text-neutral-950 rounded-md transition-colors"
                aria-label="Close Shopping Bag"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="mt-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200/80">
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                {amountRemaining === 0 ? (
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    ✓ You unlocked FREE standard shipping!
                  </span>
                ) : (
                  <span className="text-neutral-700">
                    Add <strong className="text-neutral-950">${amountRemaining}</strong> more for Free Shipping
                  </span>
                )}
                <span className="text-[11px] text-neutral-500 font-mono">
                  {freeShippingProgress}%
                </span>
              </div>
              <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-600 transition-all duration-500"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-neutral-100 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <p className="text-neutral-500 text-sm">Your shopping bag is currently empty.</p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="px-5 py-2.5 bg-neutral-900 text-white text-xs font-bold uppercase rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div key={`${item.product.id}-${item.selectedColor.code}-${item.selectedSize}-${idx}`} className="pt-4 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden shrink-0 border border-neutral-200">
                    <Image
                      src={item.selectedColor.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-neutral-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <span className="text-xs font-extrabold text-neutral-950">
                          ${item.product.price * item.quantity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-0.5">
                        <span>Color: {item.selectedColor.name}</span>
                        <span>•</span>
                        <span>Size: {item.selectedSize}</span>
                      </div>
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-neutral-300 rounded-md">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.selectedColor.code, item.selectedSize, -1)}
                          className="px-2 py-0.5 text-xs text-neutral-600 hover:text-neutral-950"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-bold text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.selectedColor.code, item.selectedSize, 1)}
                          className="px-2 py-0.5 text-xs text-neutral-600 hover:text-neutral-950"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id, item.selectedColor.code, item.selectedSize)}
                        className="text-[11px] text-neutral-400 hover:text-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Footer */}
          {items.length > 0 && (
            <div className="p-5 bg-neutral-50 border-t border-neutral-200 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-neutral-900">${subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Estimated Shipping</span>
                  <span className="font-bold text-neutral-900">
                    {amountRemaining === 0 ? 'FREE' : '$9.00'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm font-extrabold text-neutral-950 pt-2 border-t border-neutral-200">
                  <span>Estimated Total</span>
                  <span>${subtotal + (amountRemaining === 0 ? 0 : 9)}</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Continue to Checkout</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 text-center">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Protected by Patagonia&apos;s Ironclad Lifetime Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
