import fs from 'fs';
import { SEO_ROUTES } from '../src/seoRoutes.js';

const base = 'https://lahi.io';
const urls = SEO_ROUTES.map(r => `  <url>
    <loc>${base}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
fs.writeFileSync('public/sitemap.xml', xml);
console.log('✅ sitemap.xml generated at public/sitemap.xml');