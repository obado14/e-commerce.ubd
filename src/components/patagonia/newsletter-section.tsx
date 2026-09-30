'use client';

import React, { useState } from 'react';
import { CheckIcon, EarthIcon } from '@/components/icons';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section id="newsletter" className="py-16 md:py-20 bg-neutral-100 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-xs mb-2">
          <EarthIcon className="w-6 h-6 text-neutral-800" />
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Stay in Touch with the Wild
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Sign up for stories of grassroots climate activism, new technical gear releases,
            documentary films, and alerts on critical environmental battles.
          </p>
        </div>

        {status === 'success' ? (
          <div className="max-w-md mx-auto p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 flex items-center justify-center gap-3 animate-in fade-in-50">
            <CheckIcon className="w-5 h-5 text-emerald-600" />
            <div className="text-left text-xs">
              <p className="font-bold">Thank you for joining our community.</p>
              <p className="text-emerald-700">Check your inbox for a confirmation welcome email.</p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all shadow-xs"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              {status === 'loading' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-[11px] text-neutral-500 max-w-md mx-auto">
          We respect your privacy. You may unsubscribe anytime. Read our{' '}
          <a href="#footer" className="underline hover:text-neutral-800">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
