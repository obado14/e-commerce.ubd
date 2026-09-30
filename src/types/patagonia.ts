export interface ColorSwatch {
  name: string;
  code: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'men' | 'women' | 'gear' | 'kids';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  badgeType?: 'recycled' | 'fair-trade' | 'sale' | 'new';
  colors: ColorSwatch[];
  sizes: string[];
  description: string;
  features: string[];
  specs: {
    material: string;
    weight: string;
    origin: string;
    guarantee: string;
  };
}

export interface CartItem {
  product: Product;
  selectedColor: ColorSwatch;
  selectedSize: string;
  quantity: number;
}

export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  badge: string;
  href: string;
}

export interface StoryItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
}

export interface MegaMenuColumn {
  title: string;
  items: { label: string; href: string; badge?: string }[];
}

export interface MegaMenuData {
  featured: {
    title: string;
    subtitle: string;
    image: string;
    href: string;
  };
  columns: MegaMenuColumn[];
}
