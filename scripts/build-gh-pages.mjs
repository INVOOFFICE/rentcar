#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');

console.log('[1/2] Building project...');
execSync('npx vite build', { cwd: ROOT, stdio: 'inherit' });

console.log('[2/2] Copying production files to root...');

// Copy assets (JS, CSS) to root/assets/
const assetsDest = resolve(ROOT, 'assets');
mkdirSync(assetsDest, { recursive: true });
for (const f of readdirSync(resolve(DIST, 'assets'))) {
  copyFileSync(resolve(DIST, 'assets', f), resolve(assetsDest, f));
}

// Copy images to root/images/
const imagesSrc = resolve(DIST, 'images');
if (existsSync(imagesSrc)) {
  const imagesDest = resolve(ROOT, 'images');
  mkdirSync(imagesDest, { recursive: true });
  for (const f of readdirSync(imagesSrc)) {
    copyFileSync(resolve(imagesSrc, f), resolve(imagesDest, f));
  }
}

// Copy data to root/data/
const dataSrc = resolve(DIST, 'data');
if (existsSync(dataSrc)) {
  const dataDest = resolve(ROOT, 'data');
  mkdirSync(dataDest, { recursive: true });
  for (const f of readdirSync(dataSrc)) {
    copyFileSync(resolve(dataSrc, f), resolve(dataDest, f));
  }
}

// Copy PWA/root static files emitted by Vite.
for (const f of ['icon.svg', 'manifest.webmanifest', 'registerSW.js', 'sw.js', 'workbox-dcde9eb3.js']) {
  const src = resolve(DIST, f);
  if (existsSync(src)) {
    copyFileSync(src, resolve(ROOT, f));
  }
}

// Copy the production index.html from dist/ to root
copyFileSync(resolve(DIST, 'index.html'), resolve(ROOT, 'index.html'));

console.log('Done. Production files copied to root.');
console.log('Commit and push to deploy.');
