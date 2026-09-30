import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const assets = [
  // Hero Images
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85',
    dest: 'public/images/heroes/hero-mountain-epic.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85',
    dest: 'public/images/heroes/hero-alpine-valley.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85',
    dest: 'public/images/heroes/hero-starry-peaks.jpg'
  },
  // Category Images
  {
    url: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/categories/cat-fleece.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/categories/cat-rainwear.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/categories/cat-down.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/categories/cat-packs.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/categories/cat-surf.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/categories/cat-worn-wear.jpg'
  },
  // Product Images
  {
    url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/better-sweater-grey.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/better-sweater-navy.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/nano-puff-green.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/nano-puff-black.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/black-hole-duffel.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/black-hole-pack.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/torrentshell-jacket.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/synchilla-pullover.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/baggies-shorts.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    dest: 'public/images/products/fitz-roy-cap.jpg'
  },
  // Stories & Mission
  {
    url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/stories/story-fitz-roy-peak.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/stories/story-wild-river.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/stories/story-repair-center.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/stories/story-old-growth-forest.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`Failed to download ${url}: Status code ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const asset of assets) {
    try {
      await downloadFile(asset.url, asset.dest);
      console.log(`✓ Downloaded ${asset.dest}`);
    } catch (err) {
      console.error(`✗ Failed ${asset.dest}:`, err.message);
    }
  }
  console.log('All asset downloads finished.');
}

run();
