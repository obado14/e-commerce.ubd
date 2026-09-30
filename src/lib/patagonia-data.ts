import { Product, CategoryItem, StoryItem, MegaMenuData } from '@/types/patagonia';

export const ANNOUNCEMENT_MESSAGES = [
  'Free standard shipping on orders over $99* and free returns',
  'Worn Wear®: Trade in your quality Patagonia gear for store credit',
  '1% for the Planet: Saving our home planet since 1985',
  'Ironclad Guarantee: We guarantee everything we make'
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'fleece',
    title: 'Fleece & Warmth',
    subtitle: 'Classic Synchilla® & Better Sweater®',
    tagline: 'Timeless comfort woven from 100% recycled polyester fleece.',
    image: '/images/categories/cat-fleece.jpg',
    badge: '100% Recycled',
    href: '#products'
  },
  {
    id: 'rainwear',
    title: 'Rainwear & Shells',
    subtitle: 'H2No® Performance Standard',
    tagline: 'Torrentshell 3L waterproof/breathable protection built without forever chemicals.',
    image: '/images/categories/cat-rainwear.jpg',
    badge: 'PFC-Free DWR',
    href: '#products'
  },
  {
    id: 'down',
    title: 'Insulation & Down',
    subtitle: 'Nano Puff® & Down Sweater',
    tagline: 'Warm, windproof and water-resistant. Ready for alpine summits or brisk morning commutes.',
    image: '/images/categories/cat-down.jpg',
    badge: 'Fair Trade Certified™',
    href: '#products'
  },
  {
    id: 'packs',
    title: 'Packs & Duffels',
    subtitle: 'Black Hole® Collection',
    tagline: 'Burly, weather-resistant gear bags crafted with 100% recycled body fabric and lining.',
    image: '/images/categories/cat-packs.jpg',
    badge: 'Recycled TPU',
    href: '#products'
  },
  {
    id: 'surf',
    title: 'Surf & Ocean Gear',
    subtitle: 'Yulex® Natural Rubber',
    tagline: 'Neoprene-free wetsuits with Forest Stewardship Council® certification.',
    image: '/images/categories/cat-surf.jpg',
    badge: 'FSC® Certified',
    href: '#products'
  },
  {
    id: 'worn-wear',
    title: 'Worn Wear®',
    subtitle: 'Better than New',
    tagline: 'Keeping your gear in action longer reduces its carbon, waste and water footprint.',
    image: '/images/categories/cat-worn-wear.jpg',
    badge: 'Circular Economy',
    href: '#mission'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'better-sweater',
    name: "Men's Better Sweater® 1/4-Zip Fleece",
    subtitle: 'Warm knit fleece sweater with soft brushed interior',
    category: 'men',
    price: 139,
    rating: 4.8,
    reviewCount: 852,
    badge: '100% Recycled Polyester',
    badgeType: 'recycled',
    colors: [
      { name: 'Stonewash Heather', code: '#7f8c8d', image: '/images/products/better-sweater-grey.jpg' },
      { name: 'Classic Navy', code: '#1a365d', image: '/images/products/better-sweater-navy.jpg' },
      { name: 'Barn Red', code: '#8b263e', image: '/images/products/better-sweater-grey.jpg' },
      { name: 'Pitch Black', code: '#1a1a1a', image: '/images/products/better-sweater-navy.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'A warm, low-bulk quarter-zip pullover made with soft, knitted 100% recycled polyester fleece. Dyed with a low-impact process that significantly reduces the use of dyestuffs, energy and water compared to conventional dyeing methods. Fair Trade Certified™ sewn.',
    features: [
      '100% recycled polyester knitted fleece with fleece interior and heathered yarns',
      'Quarter-zip with zip-through stand-up collar',
      'Raglan sleeves for mobility and pack-wearing comfort',
      'Left-chest security pocket with zipper',
      'Skin-friendly shape-holding micropolyester jersey trim at cuffs and hem'
    ],
    specs: {
      material: '10-oz 100% recycled polyester knit fleece',
      weight: '505 g (17.8 oz)',
      origin: 'Made in Sri Lanka & Thailand',
      guarantee: 'Patagonia Ironclad Guarantee'
    }
  },
  {
    id: 'nano-puff',
    name: "Women's Nano Puff® Jacket",
    subtitle: 'Ultralight, packable synthetic insulation for cool-weather adventures',
    category: 'women',
    price: 239,
    rating: 4.9,
    reviewCount: 1240,
    badge: 'Fair Trade Certified™',
    badgeType: 'fair-trade',
    colors: [
      { name: 'Basin Green', code: '#3b5a45', image: '/images/products/nano-puff-green.jpg' },
      { name: 'Pitch Black', code: '#111111', image: '/images/products/nano-puff-black.jpg' },
      { name: 'Golden Caramel', code: '#d9822b', image: '/images/products/nano-puff-green.jpg' },
      { name: 'Smolder Blue', code: '#243342', image: '/images/products/nano-puff-black.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Warm, windproof, water-resistant—the Nano Puff® Jacket uses incredibly lightweight and highly compressible 60-g PrimaLoft® Gold Insulation Eco with 100% postconsumer recycled polyester with P.U.R.E.™ (Produced Using Reduced Emissions) technology, wrapped in a 100% recycled polyester shell and lining.',
    features: [
      '100% Recycled Shell Fabric with PFC-free DWR finish',
      '60-g PrimaLoft® Gold Insulation Eco 100% postconsumer recycled polyester',
      'Brick quilting pattern with horizontal quilt lines on side panels stabilizes insulation',
      'Center-front zipper has wicking interior storm flap and zipper garage',
      'Internal zippered chest pocket doubles as a stuffsack with reinforced carabiner clip-in loop'
    ],
    specs: {
      material: '1.4-oz 20-denier 100% recycled polyester ripstop',
      weight: '284 g (10 oz)',
      origin: 'Made in Vietnam',
      guarantee: 'Patagonia Ironclad Guarantee'
    }
  },
  {
    id: 'black-hole-duffel',
    name: 'Black Hole® Duffel 55L',
    subtitle: 'Heavy-duty weather-resistant gear duffel with backpack straps',
    category: 'gear',
    price: 169,
    rating: 4.9,
    reviewCount: 618,
    badge: '100% Recycled Body & TPU',
    badgeType: 'recycled',
    colors: [
      { name: 'Gloss Black', code: '#111111', image: '/images/products/black-hole-duffel.jpg' },
      { name: 'Buckhorn Green', code: '#3a5336', image: '/images/products/black-hole-pack.jpg' },
      { name: 'Joy Current Blue', code: '#1d4ed8', image: '/images/products/black-hole-duffel.jpg' },
      { name: 'Plume Grey', code: '#9ca3af', image: '/images/products/black-hole-pack.jpg' }
    ],
    sizes: ['40L', '55L', '70L', '100L'],
    description: 'Our go-to duffel bag organizes your gear and has enough space for a fun-hog weekend or a well-organized extended trip. Made with 100% recycled body fabric, lining and webbing, and an innovative recycled TPU-film laminate with a matte finish. Fair Trade Certified™ sewn.',
    features: [
      'Burly 100% recycled polyester ripstop with a matte, weather-resistant recycled TPU-film laminate',
      'Removable, ergonomic shoulder straps let you carry the Black Hole® Duffel like a backpack',
      'Zippered side pocket accessible from exterior or interior; interior mesh lid pocket',
      'Padded base protects contents from rough terrain and baggage handlers',
      'Reinforced exterior daisy chains provide myriad lashing options'
    ],
    specs: {
      material: '14.1-oz 900-denier 100% postconsumer recycled polyester ripstop',
      weight: '1,180 g (2 lbs 9.6 oz)',
      origin: 'Made in Vietnam',
      guarantee: 'Patagonia Ironclad Guarantee'
    }
  },
  {
    id: 'torrentshell-3l',
    name: "Men's Torrentshell 3L Rain Jacket",
    subtitle: 'Simple and unpretentious 3-layer waterproof and breathable protection',
    category: 'men',
    price: 189,
    rating: 4.7,
    reviewCount: 940,
    badge: 'H2No® Performance Standard',
    badgeType: 'recycled',
    colors: [
      { name: 'Subtidal Blue', code: '#2c3e50', image: '/images/products/torrentshell-jacket.jpg' },
      { name: 'Basin Green', code: '#2f4f4f', image: '/images/products/torrentshell-jacket.jpg' },
      { name: 'Wax Red', code: '#a72626', image: '/images/products/torrentshell-jacket.jpg' },
      { name: 'Pitch Black', code: '#111111', image: '/images/products/torrentshell-jacket.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Simple and unpretentious, our trusted Torrentshell 3L Jacket uses 3-layer H2No® Performance Standard technology and a PFC-free DWR finish (durable water repellent coating without perfluorinated chemicals) for exceptional waterproof/breathable performance, all-day comfort and long-lasting waterproof durability.',
    features: [
      '3-layer waterproof/breathable H2No® Performance Standard shell',
      'Adjustable hood with laminated visor rolls down and stows with simplified cord-and-hook design',
      'Microfleece-lined neck provides comfort and protects with a waterproof/breathable barrier',
      'Snag-free center-front zipper with external and internal storm flaps and zipper-garage chin guard',
      'Two handwarmer pockets and venting pit zips with welted exterior storm flaps'
    ],
    specs: {
      material: '3.5-oz 50-denier ECONYL® 100% recycled nylon ripstop',
      weight: '400 g (14.1 oz)',
      origin: 'Made in Vietnam',
      guarantee: 'Patagonia Ironclad Guarantee'
    }
  },
  {
    id: 'synchilla-pullover',
    name: 'Synchilla® Snap-T® Fleece Pullover',
    subtitle: 'The timeless original fleece that started an outdoor revolution',
    category: 'men',
    price: 149,
    rating: 4.8,
    reviewCount: 1520,
    badge: 'Fair Trade Certified™',
    badgeType: 'fair-trade',
    colors: [
      { name: 'Nickel w/ Navy', code: '#50555c', image: '/images/products/synchilla-pullover.jpg' },
      { name: 'Oatmeal Heather', code: '#c8c2b7', image: '/images/products/synchilla-pullover.jpg' },
      { name: 'Forest Pine', code: '#1e3f20', image: '/images/products/synchilla-pullover.jpg' },
      { name: 'Wild Desert Gold', code: '#c97a3e', image: '/images/products/synchilla-pullover.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Made with warm, durable 100% recycled polyester double-sided fleece, this iconic pullover is the definition of casual comfort. Featuring the signature four-snap nylon front placket, stand-up collar and chest pocket flap.',
    features: [
      'Warm and durable 100% recycled polyester double-sided fleece with anti-pilling finish',
      'Classic Snap-T styling with four-snap nylon placket and stand-up collar',
      'Left-chest pocket with nylon flap and snap closure',
      'Y-Joint sleeves for increased mobility through the shoulders and arms',
      'Spandex trim on cuffs and hem seals in warmth and rests comfortably on skin'
    ],
    specs: {
      material: '8-oz 100% recycled polyester double-faced fleece',
      weight: '530 g (18.7 oz)',
      origin: 'Made in Nicaragua & El Salvador',
      guarantee: 'Patagonia Ironclad Guarantee'
    }
  },
  {
    id: 'black-hole-pack',
    name: 'Black Hole® Pack 32L',
    subtitle: 'Midsize workhorse pack built for daily commute and mountain trail',
    category: 'gear',
    price: 169,
    rating: 4.8,
    reviewCount: 432,
    badge: '100% Recycled Body',
    badgeType: 'recycled',
    colors: [
      { name: 'Matte Black', code: '#111111', image: '/images/products/black-hole-pack.jpg' },
      { name: 'Basin Green', code: '#2d4a3e', image: '/images/products/black-hole-duffel.jpg' },
      { name: 'Current Blue', code: '#0284c7', image: '/images/products/black-hole-pack.jpg' }
    ],
    sizes: ['One Size (32L)'],
    description: 'Our midsize 32-liter workhorse in the Black Hole® collection is perfect for organizing your daily commute and rugged enough to haul around the world. Offers water-resistant durability with a dedicated padded 15" laptop sleeve and breathable back panel.',
    features: [
      'Extremely durable, weather-resistant 100% postconsumer recycled polyester ripstop',
      'Zippered top pocket and large front stash pocket',
      'Padded laptop compartment fits most 15" laptops with separate zippered access',
      'Airmesh back panel for comfort and increased ventilation',
      'Stretch-woven side pockets for a wide range of water-bottle shapes and sizes'
    ],
    specs: {
      material: '8.7-oz 300-denier 100% postconsumer recycled polyester ripstop',
      weight: '760 g (1 lb 10.8 oz)',
      origin: 'Made in Vietnam',
      guarantee: 'Patagonia Ironclad Guarantee'
    }
  },
  {
    id: 'baggies-shorts',
    name: 'Baggies™ Shorts 5"',
    subtitle: 'Rugged, multifunctional shorts designed for in and out of the water',
    category: 'men',
    price: 65,
    rating: 4.8,
    reviewCount: 3120,
    badge: 'NetPlus® Recycled Fishing Nets',
    badgeType: 'recycled',
    colors: [
      { name: 'Current Blue', code: '#2563eb', image: '/images/products/baggies-shorts.jpg' },
      { name: 'Joy Peach', code: '#f97316', image: '/images/products/baggies-shorts.jpg' },
      { name: 'Salvia Green', code: '#4d7c0f', image: '/images/products/baggies-shorts.jpg' },
      { name: 'Pitch Black', code: '#18181b', image: '/images/products/baggies-shorts.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Rugged, multifunctional shorts made from quick-drying 100% postconsumer recycled nylon faille made from recycled fishing nets to help reduce ocean plastic pollution. With a PFC-free DWR finish and comfortable elastic waistband with internal drawstring.',
    features: [
      'Made of NetPlus® 100% postconsumer recycled nylon faille made from recycled fishing nets',
      'Elasticized waistband with internal drawstring; quick-drying black mesh liner',
      'Vertical side pockets reduce drag in water; pocket bags have drain-and-dry mesh corners',
      'Right rear pocket has a flap that closes with a low-profile snap for security',
      '5" inseam for classic relaxed fit'
    ],
    specs: {
      material: '4-ply, 4.9-oz NetPlus® 100% postconsumer recycled nylon faille',
      weight: '204 g (7.2 oz)',
      origin: 'Made in Vietnam',
      guarantee: 'Patagonia Ironclad Guarantee'
    }
  },
  {
    id: 'fitz-roy-cap',
    name: 'Fitz Roy Icon Trad Cap',
    subtitle: 'Low-crown, unstructured six-panel cap made with organic cotton',
    category: 'gear',
    price: 45,
    rating: 4.9,
    reviewCount: 890,
    badge: '100% Organic Cotton',
    badgeType: 'recycled',
    colors: [
      { name: 'Coriander Brown', code: '#8d734a', image: '/images/products/fitz-roy-cap.jpg' },
      { name: 'Northern Green', code: '#1f3d2b', image: '/images/products/fitz-roy-cap.jpg' },
      { name: 'Pitch Black', code: '#111111', image: '/images/products/fitz-roy-cap.jpg' }
    ],
    sizes: ['One Size (Adjustable)'],
    description: 'Featuring a brim made with Bureo’s fully traceable NetPlus® 100% recycled fishing nets, our classic low-crown, unstructured, six-panel ball cap is made of organic cotton canvas and has a self-fabric adjustable strap. Fair Trade Certified™ sewn.',
    features: [
      'Unstructured, low-crown, six-panel ball cap with traditional embroidery',
      'Crown and bill made of 100% organic cotton canvas',
      'Brim made of NetPlus® 100% recycled fishing nets',
      'Adjustable fabric strap closure for custom fit',
      'Fair Trade Certified™ sewn'
    ],
    specs: {
      material: '7.5-oz 100% organic cotton canvas',
      weight: '85 g (3 oz)',
      origin: 'Made in Vietnam',
      guarantee: 'Patagonia Ironclad Guarantee'
    }
  }
];

export const STORIES: StoryItem[] = [
  {
    id: 'art-of-simply',
    title: 'The Art of Living Simply: 50 Years Along the Fitz Roy Skyline',
    category: 'Alpine Culture',
    readTime: '6 min read',
    date: 'September 2026',
    author: 'Yvon Chouinard',
    excerpt: 'Fifty years ago, we began making climbing gear with a simple mission: never sacrifice quality for volume. How sticking to our original philosophy saved the company and continues to inspire our craft.',
    image: '/images/stories/story-fitz-roy-peak.jpg'
  },
  {
    id: 'salmon-people',
    title: 'Defending Wild Rivers: Alaska to British Columbia',
    category: 'Environmental Defense',
    readTime: 'Film (14 min)',
    date: 'August 2026',
    author: 'Patagonia Films',
    excerpt: 'Native tribes and conservationists unite to safeguard the last untamed wild salmon spawning watersheds in North America from open-pit mining threats.',
    image: '/images/stories/story-wild-river.jpg'
  },
  {
    id: 'repair-reno',
    title: 'Inside Reno: North America’s Largest Apparel Repair Facility',
    category: 'Worn Wear®',
    readTime: '8 min read',
    date: 'July 2026',
    author: 'Worn Wear Team',
    excerpt: 'Meet the 45 master repair technicians in Nevada who stitch, patch and restore over 100,000 beloved Patagonia garments every single year.',
    image: '/images/stories/story-repair-center.jpg'
  },
  {
    id: 'forest-protectors',
    title: 'Protecting the Canopy: Chilean Temperate Rain Forests',
    category: 'Biodiversity',
    readTime: '5 min read',
    date: 'June 2026',
    author: 'Patagonia Works',
    excerpt: 'A look into the newly expanded national parks created through public-private partnerships, protecting over 15 million acres of pristine Chilean wilderness.',
    image: '/images/stories/story-old-growth-forest.jpg'
  }
];

export const MEGA_MENU_MEN: MegaMenuData = {
  featured: {
    title: "Men's New Seasonal Arrivals",
    subtitle: 'Built for the long haul. Discover jackets, fleeces and rugged trousers for alpine and everyday trails.',
    image: '/images/categories/cat-fleece.jpg',
    href: '#products'
  },
  columns: [
    {
      title: 'Jackets & Outerwear',
      items: [
        { label: 'All Jackets & Vests', href: '#products' },
        { label: 'Rainwear & Shells', href: '#products', badge: 'Popular' },
        { label: 'Down & Synthetic Insulation', href: '#products' },
        { label: 'Windbreakers', href: '#products' },
        { label: 'Snow & Ski Jackets', href: '#products' }
      ]
    },
    {
      title: 'Fleece & Sweaters',
      items: [
        { label: 'Better Sweater® Collection', href: '#products', badge: 'Classic' },
        { label: 'Synchilla® Fleeces', href: '#products' },
        { label: 'R1® & R2® Technical Fleeces', href: '#products' },
        { label: 'Wool & Recycled Sweaters', href: '#products' }
      ]
    },
    {
      title: 'Tops & Baselayers',
      items: [
        { label: 'Capilene® Baselayers', href: '#products' },
        { label: 'T-Shirts & Graphic Tees', href: '#products' },
        { label: 'Flannels & Button-Downs', href: '#products' },
        { label: 'Sun Protection & Hoodies', href: '#products' }
      ]
    },
    {
      title: 'Pants & Shorts',
      items: [
        { label: 'Baggies™ Shorts', href: '#products', badge: 'Best Seller' },
        { label: 'Alpine & Climbing Pants', href: '#products' },
        { label: 'Trail Running Shorts', href: '#products' },
        { label: 'Everyday Chinos & Jeans', href: '#products' }
      ]
    }
  ]
};

export const MEGA_MENU_WOMEN: MegaMenuData = {
  featured: {
    title: "Women's Weatherproof Gear",
    subtitle: 'Tested in the wildest elements. Explore packable warmth and waterproof jackets.',
    image: '/images/categories/cat-rainwear.jpg',
    href: '#products'
  },
  columns: [
    {
      title: 'Jackets & Vests',
      items: [
        { label: 'All Jackets & Vests', href: '#products' },
        { label: 'Nano Puff® & Micro Puff®', href: '#products', badge: 'Iconic' },
        { label: 'Torrentshell 3L Rainwear', href: '#products' },
        { label: 'Down Sweaters & Parkas', href: '#products' },
        { label: 'Fleece Vests', href: '#products' }
      ]
    },
    {
      title: 'Fleeces & Hoodies',
      items: [
        { label: 'Better Sweater® Jackets', href: '#products' },
        { label: 'Synchilla® Anoraks & Pullovers', href: '#products' },
        { label: 'Los Gatos® High-Pile Fleece', href: '#products', badge: 'Cozy' },
        { label: 'R1® Air Active Fleeces', href: '#products' }
      ]
    },
    {
      title: 'Tops & Layers',
      items: [
        { label: 'Capilene® Thermal Tops', href: '#products' },
        { label: 'Organic Cotton Tees', href: '#products' },
        { label: 'Sweatshirts & Cardigans', href: '#products' },
        { label: 'Dresses & Rompers', href: '#products' }
      ]
    },
    {
      title: 'Bottoms & Tights',
      items: [
        { label: 'Baggies™ Shorts & Skorts', href: '#products' },
        { label: 'Trail & Hiking Tights', href: '#products' },
        { label: 'Waterproof Rain Pants', href: '#products' },
        { label: 'Climbing & Utility Pants', href: '#products' }
      ]
    }
  ]
};

export const MEGA_MENU_GEAR: MegaMenuData = {
  featured: {
    title: 'Black Hole® Travel & Expedition',
    subtitle: 'Virtually indestructible bags ready for dirt roads, luggage racks and torrential downpours.',
    image: '/images/categories/cat-packs.jpg',
    href: '#products'
  },
  columns: [
    {
      title: 'Bags & Luggage',
      items: [
        { label: 'Black Hole® Duffel Bags (40L - 100L)', href: '#products', badge: 'Essential' },
        { label: 'Wheeled Rolling Duffels', href: '#products' },
        { label: 'Travel Cubes & Toiletry Kits', href: '#products' },
        { label: 'Tote Bags & Slings', href: '#products' }
      ]
    },
    {
      title: 'Backpacks & Technical',
      items: [
        { label: 'Daypacks & Commuter Packs', href: '#products' },
        { label: 'Hiking & Alpine Packs', href: '#products' },
        { label: 'Ultralight Black Hole Slings', href: '#products' },
        { label: 'Hydration & Trail Running Vests', href: '#products' }
      ]
    },
    {
      title: 'Outdoor Equipment',
      items: [
        { label: 'Sleeping Bags & Bivies', href: '#products' },
        { label: 'Fly Fishing Gear & Waders', href: '#products' },
        { label: 'Yulex® Natural Rubber Wetsuits', href: '#products' },
        { label: 'Water Bottles & Provisions', href: '#products' }
      ]
    },
    {
      title: 'Accessories & Hats',
      items: [
        { label: 'Fitz Roy Hats & Beanies', href: '#products', badge: 'Classic' },
        { label: 'Belts & Heavy-Duty Webbing', href: '#products' },
        { label: 'Gloves & Mittens', href: '#products' },
        { label: 'Socks & Gaiters', href: '#products' }
      ]
    }
  ]
};
