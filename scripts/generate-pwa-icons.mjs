import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const iconsDir = path.resolve("public/icons");
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const standardSvg = fs.readFileSync(path.join(iconsDir, "icon.svg"));
const maskableSvg = fs.readFileSync(path.join(iconsDir, "icon-maskable.svg"));

const standardSizes = [
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192x192.png", size: 192 },
  { name: "icon-384x384.png", size: 384 },
  { name: "icon-512x512.png", size: 512 },
];

const maskableSizes = [
  { name: "icon-maskable-192x192.png", size: 192 },
  { name: "icon-maskable-512x512.png", size: 512 },
];

async function generate() {
  for (const { name, size } of standardSizes) {
    const dest = path.join(iconsDir, name);
    await sharp(standardSvg).resize(size, size).png().toFile(dest);
    console.log(`Generated: ${name} (${size}x${size})`);
  }

  for (const { name, size } of maskableSizes) {
    const dest = path.join(iconsDir, name);
    await sharp(maskableSvg).resize(size, size).png().toFile(dest);
    console.log(`Generated Maskable: ${name} (${size}x${size})`);
  }

  // Also copy apple-touch-icon to public root for maximum compatibility
  await sharp(standardSvg).resize(180, 180).png().toFile(path.resolve("public/apple-touch-icon.png"));
  console.log("Generated: public/apple-touch-icon.png");

  console.log("All PWA icons generated successfully!");
}

generate().catch((err) => {
  console.error("Failed to generate icons:", err);
  process.exit(1);
});
