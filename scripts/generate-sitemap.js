import fs from "fs";
import path from "path";

const routes = [
  { url: "/", priority: 1.0, changefreq: "weekly" },
  { url: "/features", priority: 0.9, changefreq: "weekly" },
  { url: "/analytics", priority: 0.8, changefreq: "monthly" },
  { url: "/about", priority: 0.8, changefreq: "monthly" },
  { url: "/pricing", priority: 0.8, changefreq: "monthly" },
  { url: "/faq", priority: 0.7, changefreq: "monthly" },
  { url: "/security", priority: 0.8, changefreq: "monthly" },
  { url: "/docs", priority: 0.8, changefreq: "monthly" },
  { url: "/contact", priority: 0.7, changefreq: "yearly" }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://klavora.store${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  const publicDir = path.resolve(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
  console.log("sitemap.xml generated successfully!");
};

generateSitemap();
