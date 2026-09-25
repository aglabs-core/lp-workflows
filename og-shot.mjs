import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = "http://localhost:3000";

// Card social padrão Open Graph / Twitter
const W = 1200;
const H = 630;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
  defaultViewport: { width: W, height: H, deviceScaleFactor: 1 },
});

const page = await browser.newPage();
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
// deixa as animações de entrada assentarem
await new Promise((r) => setTimeout(r, 1800));

await page.screenshot({
  // JPEG em 1x: acima de ~300 KB o WhatsApp não mostra a prévia do link.
  path: "public/og-cover.jpg",
  type: "jpeg",
  quality: 85,
  clip: { x: 0, y: 0, width: W, height: H },
});

await browser.close();
console.log("og-cover.jpg gerado (1200x630)");
