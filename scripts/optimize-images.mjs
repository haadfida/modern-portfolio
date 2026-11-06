// Converts screenshots to WebP at or under 150 KB each.
//   node scripts/optimize-images.mjs <input.png> [more.png ...]
// Writes src/assets/<name>.webp (width capped at 1400px; quality steps down until the file fits)
// and src/assets/<name>-700.webp, a half-width copy for srcset on small screens.
import sharp from "sharp";
import { basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const LIMIT = 150 * 1024;
const outDir = fileURLToPath(new URL("../src/assets/", import.meta.url));

for (const input of process.argv.slice(2)) {
  const name = basename(input, extname(input));
  const out = `${outDir}${name}.webp`;
  let width = 1400;
  let done = false;
  while (!done) {
    for (let quality = 82; quality >= 50; quality -= 4) {
      const buf = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality, effort: 6 }).toBuffer();
      if (buf.length <= LIMIT) {
        await sharp(buf).toFile(out);
        const meta = await sharp(buf).metadata();
        console.log(`${name}.webp ${meta.width}x${meta.height} q${quality} ${(buf.length / 1024).toFixed(1)} KB`);
        const small = await sharp(input).resize({ width: 700, withoutEnlargement: true }).webp({ quality: 78, effort: 6 }).toFile(`${outDir}${name}-700.webp`);
        console.log(`${name}-700.webp ${small.width}x${small.height} ${(small.size / 1024).toFixed(1)} KB`);
        done = true;
        break;
      }
    }
    width -= 200;
  }
}
