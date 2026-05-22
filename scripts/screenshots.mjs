/**
 * Full-Page-Screenshots der MH3-Live-Seiten (Playwright + Chromium).
 * Konfiguration: Konstanten unten. Aufruf: pnpm screenshots
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');

/** Pfade (URL) und Slug für Dateinamen `<slug>-<viewport>.png` */
const PAGES = [
  { path: '/', slug: 'start' },
  { path: '/fuehrung', slug: 'fuehrung' },
  { path: '/karriere', slug: 'karriere' },
  { path: '/vertrieb', slug: 'vertrieb' },
  { path: '/styleguide', slug: 'styleguide' },
  { path: '/simulation', slug: 'simulation' },
  { path: '/ueber-mich', slug: 'ueber-mich' },
  { path: '/kein-coaching', slug: 'kein-coaching' },
  { path: '/empfehlungen', slug: 'empfehlungen' },
];

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 375, height: 667 },
};

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(REPO_ROOT, 'docs', 'screenshots');
const SERVER_READY_TIMEOUT_MS = 60_000;
const POLL_INTERVAL_MS = 500;
/** Zusatz nach networkidle (z. B. lazyOnload / Shopvote) */
const POST_NAV_MS = 2000;

const totalTargets = PAGES.length * 2;

function spawnDevServer() {
  return spawn('pnpm', ['dev'], {
    shell: true,
    cwd: REPO_ROOT,
    stdio: ['ignore', 'ignore', 'ignore'],
  });
}

async function waitForServerReady() {
  const deadline = Date.now() + SERVER_READY_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      await fetch(BASE_URL);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
    }
  }
  throw new Error('Dev-Server antwortete nicht innerhalb von 60s');
}

async function stopDevServer(child) {
  if (!child || child.killed) return;
  try {
    child.kill('SIGTERM');
  } catch {
    /* ignore */
  }
  await new Promise((r) => setTimeout(r, 2000));
  if (child.exitCode === null && !child.killed) {
    try {
      child.kill('SIGKILL');
    } catch {
      /* ignore */
    }
  }
}

/**
 * @param {import('playwright').Browser} browser
 * @param {string} url
 * @param {string} slug
 * @param {'desktop'|'mobile'} viewportName
 * @param {{ errors: { key: string; message: string }[] }} state
 * @returns {Promise<boolean>}
 */
async function captureOne(browser, url, slug, viewportName, state) {
  const vp = VIEWPORTS[viewportName];
  const outPath = path.join(OUTPUT_DIR, `${slug}-${viewportName}.png`);
  let context;
  try {
    context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(POST_NAV_MS);
    await page.screenshot({ path: outPath, fullPage: true });
    await context.close();
    return true;
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    state.errors.push({ key: `${slug}-${viewportName}`, message });
    try {
      if (context) await context.close();
    } catch {
      /* ignore */
    }
    return false;
  }
}

async function main() {
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  const state = { errors: [] };
  let successCount = 0;
  let devChild = null;
  let browser = null;

  try {
    devChild = spawnDevServer();
    await waitForServerReady();
    browser = await chromium.launch({ headless: true });

    for (const { path: p, slug } of PAGES) {
      const url = `${BASE_URL}${p}`;
      if (await captureOne(browser, url, slug, 'desktop', state)) successCount++;
      if (await captureOne(browser, url, slug, 'mobile', state)) successCount++;
    }
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    state.errors.push({ key: 'setup', message });
  } finally {
    if (browser) {
      try {
        await browser.close();
      } catch {
        /* ignore */
      }
    }
    await stopDevServer(devChild);
  }

  console.log('========================================');
  console.log('SCREENSHOT-LAUF ABGESCHLOSSEN');
  console.log('========================================');
  console.log(`Erfolgreich: ${successCount} von ${totalTargets}`);
  console.log('========================================');

  if (state.errors.length > 0) {
    console.log('');
    console.log('FEHLER bei folgenden Seiten:');
    for (const err of state.errors) {
      console.log(`- ${err.key}: ${err.message}`);
    }
    console.log('========================================');
    process.exitCode = 1;
    return;
  }

  process.exitCode = 0;
}

await main();
