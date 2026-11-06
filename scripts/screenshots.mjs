// Captures README screenshots and the Open Graph image from a running build.
//   npm run build && npx vite preview --port 4173 &
//   npm run screenshots            # SITE_URL=http://localhost:4173 by default
// Writes docs/{desktop,desktop-dark,mobile,mobile-dark}.webp and public/og.png.
// Fails on console errors or failed requests.
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { chromiumPath } from "./chromium.mjs";

const SITE_URL = process.env.SITE_URL ?? "http://localhost:4173/";
const docs = fileURLToPath(new URL("../docs/", import.meta.url));
const pub = fileURLToPath(new URL("../public/", import.meta.url));
mkdirSync(docs, { recursive: true });

const browser = await chromium.launch({ executablePath: chromiumPath() });
const problems = [];

async function open(options) {
  const context = await browser.newContext({ reducedMotion: "reduce", ...options });
  const page = await context.newPage();
  page.on("console", (m) => m.type() === "error" && problems.push(`console: ${m.text()}`));
  page.on("requestfailed", (r) => problems.push(`request failed: ${r.url()}`));
  await page.goto(SITE_URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  return { context, page };
}

async function shoot(name, options, fullPage = true) {
  const { context, page } = await open(options);
  // Lazy images below the fold: scroll through once so the full-page capture has them.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState("networkidle");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (overflow > 0) problems.push(`${name}: page scrolls sideways by ${overflow}px`);
  const path = `${docs}${name}.webp`;
  const buf = await page.screenshot({ fullPage });
  // Keep repo screenshots at or under 150 KB.
  for (let quality = 80; quality >= 30; quality -= 5) {
    const out = await sharp(buf).webp({ quality, effort: 6 }).toBuffer();
    if (out.length <= 150 * 1024 || quality === 30) {
      await sharp(out).toFile(path);
      console.log("wrote", path, `${(out.length / 1024).toFixed(0)} KB q${quality}`);
      break;
    }
  }
  await context.close();
}

await shoot("desktop", { viewport: { width: 1440, height: 900 }, colorScheme: "light" });
await shoot("desktop-dark", { viewport: { width: 1440, height: 900 }, colorScheme: "dark" });
await shoot("mobile", { viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, colorScheme: "light" });
await shoot("mobile-dark", { viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, colorScheme: "dark" });

// Open Graph image: the hero at 1200x630, header hidden so the name and tag fill the frame.
{
  const { context, page } = await open({ viewport: { width: 1200, height: 630 }, colorScheme: "light" });
  await page.addStyleTag({
    content:
      "header,main>section:not(#top),#contact{display:none!important}" +
      "#top{height:630px;display:flex;align-items:center;padding-block:0!important}#top>div{width:100%}",
  });
  await page.waitForTimeout(200);
  const buf = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await sharp(buf).png({ compressionLevel: 9 }).toFile(`${pub}og.png`);
  console.log("wrote", `${pub}og.png`);
  await context.close();
}

await browser.close();
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
