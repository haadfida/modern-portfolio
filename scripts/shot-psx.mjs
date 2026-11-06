// One-off: screenshot the live PSX Monitor site for the project card.
import { chromium } from "playwright-core";
import { chromiumPath } from "./chromium.mjs";

const out = process.argv[2] ?? "psx-monitor.png";
const browser = await chromium.launch({ executablePath: chromiumPath() });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, colorScheme: "dark" });
await page.goto("https://psx-monitor-six.vercel.app", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);
await page.screenshot({ path: out });
console.log("title:", await page.title());
await browser.close();
