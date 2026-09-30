# Patagonia E-Commerce Behavior Specification

Target URL: `https://www.patagonia.com/`
Site Key: `patagonia-com`
Page Key: `root`

## 1. Global Interactions & Layout Sweep

### Sticky / Interactive Navigation
- **Announcement Bar:**
  - Auto-cycles every 5 seconds through brand messages (Free Shipping, Worn Wear, 1% for the Planet, Ironclad Guarantee).
  - Contains country/region selector, store locator, and customer service links.
- **Main Header:**
  - Sticky at `top-0` with `z-50`.
  - Transparent blur / subtle shadow on scroll (`backdrop-blur-md bg-white/95 border-b border-neutral-200`).
  - Patagonia authentic mountain logo (left-aligned / center-aligned on mobile).
  - Primary navigation with hover triggers opening multi-column mega-menus with subtle ease-in fade.
  - Quick action icons: Search trigger, Store Locator, Account, Bag (with animated live item counter badge).

### Search Overlay / Modal
- Clicking the search icon or pressing `Cmd/Ctrl + K` triggers a full-width search drawer/modal.
- Live reactive filter across products and brand stories.
- Suggested trending searches (Better Sweater, Nano Puff, Black Hole Duffel, Torrentshell 3L, Synchilla).
- Quick product card preview directly inside the modal with instant click-to-view.

### Cart Drawer (Slide-Over)
- Triggered by clicking the Bag icon or when adding a product to bag.
- Free shipping progress bar (`$99` threshold): visual fill bar with animated progress.
- Item list with quantity selector (+/-), remove action, size & color details.
- Order summary with subtotal, tax calculation, and "Continue to Checkout" primary CTA button.

### Product Cards & Swatches
- **Interactive Color Swatches:** Hovering or clicking color pills instantly updates the product image and active badge.
- **Badges:** "100% Recycled", "Fair Trade Certified™", "PFC-Free DWR".
- **Quick Action Overlay:** "Add to Bag" button with quick size selection pills (S, M, L, XL), plus "Quick View" modal trigger.

### Quick View Modal
- Rich product detail preview without leaving the homepage.
- Multi-photo gallery thumbnails.
- Technical specs (Weight, Materials, Fair Trade, Origin, Ironclad Guarantee).
- Full interactive size selector and Add to Bag with quantity.

### Newsletter Subscription
- Input validation with real-time feedback.
- Interactive submission animation that transitions into a confirmed green badge: "Thank you for joining our community. Check your inbox for confirmation."

### Responsive Breakpoints
- **Mobile (< 768px):** Hamburger menu opens full-height navigation sheet with accordion expandable categories, single-column product grids, horizontally scrollable category carousels.
- **Tablet (768px - 1024px):** 2-column product grids, compact announcement bar.
- **Desktop (1024px+):** Full multi-column mega menu, 4-column product grids, immersive split banners.
