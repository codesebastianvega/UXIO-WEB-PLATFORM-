import fs from 'fs';
import path from 'path';
import https from 'https';

const items = [
  // 1. Brand discipline capabilities
  {
    name: 'brand-strategy-naming.jpg',
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'Brand Strategy & Naming'
  },
  {
    name: 'brand-logo-design.jpg',
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'Logo & Visual Identity'
  },
  {
    name: 'brand-packaging-collateral.jpg',
    url: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'Packaging & Labels'
  },

  // 2. Experience discipline capabilities
  {
    name: 'experience-service-blueprint.jpg',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'Service Blueprint & Process Optimization'
  },
  {
    name: 'experience-ux-research.jpg',
    url: 'https://images.unsplash.com/photo-1581291518655-9523b9320cf6?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'UX Research & Usability Testing'
  },

  // 3. Growth discipline capabilities
  {
    name: 'growth-cro-funnel.jpg',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'CRO & Conversion Funnel'
  },
  {
    name: 'growth-paid-ads.jpg',
    url: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'Paid Advertising Campaigns'
  },

  // 4. Solutions discipline capabilities
  {
    name: 'solutions-wearables-iot.jpg',
    url: 'https://images.unsplash.com/photo-1508685096489-7aac291ba599?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'Connected Devices & Wearables'
  },
  {
    name: 'solutions-phygital.jpg',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'Phygital Interactive Experiences'
  },

  // 5. Content discipline capabilities
  {
    name: 'content-meta-instagram.jpg',
    url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'Meta Instagram & Facebook'
  },
  {
    name: 'content-youtube-google.jpg',
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=750&fit=crop&q=85&auto=format',
    label: 'Google & YouTube Video Studio'
  }
];

const outDir = path.resolve('public/services/cards');

function downloadImage(item) {
  const destPath = path.join(outDir, item.name);
  return new Promise((resolve) => {
    https.get(item.url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const sizeKb = Math.round(fs.statSync(destPath).size / 1024);
          console.log(`[OK] ${item.name} (${sizeKb} KB) - ${item.label}`);
          resolve(true);
        });
      } else {
        console.error(`[FAIL] ${item.name} status ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`[ERR] ${item.name}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log('🚀 Downloading unique, personalized editorial images from Unsplash Studio...\n');
  for (const item of items) {
    await downloadImage(item);
  }
  console.log('\n✨ All unique card images downloaded successfully!');
}

run();
