import fs from 'fs';
import path from 'path';

const targetImages = [
  {
    name: 'brand-strategy-naming.jpg',
    query: 'brand strategy moodboard workshop planning',
  },
  {
    name: 'brand-logo-design.jpg',
    query: 'logo design sketches typography branding',
  },
  {
    name: 'brand-packaging-collateral.jpg',
    query: 'luxury product packaging box mockup labels',
  },
  {
    name: 'experience-service-blueprint.jpg',
    query: 'service design blueprint user journey map whiteboard',
  },
  {
    name: 'experience-ux-research.jpg',
    query: 'ux research user interview usability testing',
  },
  {
    name: 'growth-cro-funnel.jpg',
    query: 'sales funnel conversion optimization web analytics',
  },
  {
    name: 'growth-paid-ads.jpg',
    query: 'digital marketing advertising campaigns meta ads',
  },
  {
    name: 'solutions-wearables-iot.jpg',
    query: 'smartwatch wearable interface modern smart watch',
  },
  {
    name: 'solutions-phygital.jpg',
    query: 'interactive retail digital installation exhibition neon',
  },
  {
    name: 'content-meta-instagram.jpg',
    query: 'instagram aesthetic photography social media feed curation',
  },
  {
    name: 'content-youtube-google.jpg',
    query: 'youtube filming studio cinema camera video production',
  }
];

const outDir = path.resolve(process.cwd(), 'public/services/cards');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function fetchImageForQuery(query, filename) {
  try {
    const searchUrl = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`;
    const searchRes = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    if (!searchRes.ok) {
      console.error(`Failed search for ${query}: ${searchRes.statusText}`);
      return false;
    }
    const data = await searchRes.json();
    const photos = data.results || [];
    if (photos.length === 0) {
      console.warn(`No photos found for ${query}`);
      return false;
    }

    // Pick top high-quality photo
    const photo = photos[0];
    const rawUrl = photo.urls.raw || photo.urls.regular;
    // Format to 1200x800 high-quality crop
    const imgUrl = `${rawUrl}&w=1200&h=750&fit=crop&q=85&auto=format`;

    console.log(`Downloading ${filename} from ${imgUrl}...`);
    const imgRes = await fetch(imgUrl);
    if (!imgRes.ok) {
      console.error(`Failed download ${filename}: ${imgRes.statusText}`);
      return false;
    }

    const buffer = Buffer.from(await imgRes.arrayBuffer());
    const destPath = path.join(outDir, filename);
    fs.writeFileSync(destPath, buffer);
    console.log(`Saved ${filename} (${buffer.length} bytes)`);
    return true;
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
    return false;
  }
}

async function run() {
  console.log('🚀 Downloading unique, customized editorial photos for every capability...');
  for (const item of targetImages) {
    await fetchImageForQuery(item.query, item.name);
  }
  console.log('✅ Finished downloading unique card images.');
}

run();
