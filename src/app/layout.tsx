import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.patagonia.com'),
  title: "Patagonia Outdoor Clothing & Gear | Saving Our Home Planet",
  description:
    "Patagonia is a designer of outdoor clothing and gear for the silent sports: climbing, surfing, skiing, trail running, and fly fishing. Earth is now our only shareholder.",
  keywords: [
    'Patagonia',
    'Outdoor Gear',
    'Better Sweater',
    'Nano Puff',
    'Torrentshell',
    'Black Hole Duffel',
    'Synchilla',
    'Worn Wear',
    '1% For The Planet',
    'Fair Trade Certified'
  ],
  openGraph: {
    title: "Patagonia Outdoor Clothing & Gear",
    description: "Built for the wild. Crafted to last forever. Earth is now our only shareholder.",
    url: 'https://www.patagonia.com/',
    siteName: 'Patagonia',
    images: [
      {
        url: '/images/heroes/hero-mountain-epic.jpg',
        width: 1200,
        height: 630,
        alt: 'Patagonia Alpine Peaks'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/patagonia-logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900 selection:bg-amber-100 selection:text-neutral-900">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
