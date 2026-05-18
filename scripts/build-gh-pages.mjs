#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');

console.log('[1/2] Building project...');
execSync('npx vite build', { cwd: ROOT, stdio: 'inherit' });

console.log('[2/2] Copying production files to root...');

const entries = readdirSync(resolve(DIST, 'assets'));
const jsFile = entries.find(f => f.endsWith('.js'));
const cssFile = entries.find(f => f.endsWith('.css'));

const rootFiles = ['assets', 'images', 'data'];

for (const dir of rootFiles) {
  const src = resolve(DIST, dir);
  if (existsSync(src)) {
    const dest = resolve(ROOT, dir);
    mkdirSync(dest, { recursive: true });
    for (const f of readdirSync(src)) {
      copyFileSync(resolve(src, f), resolve(dest, f));
    }
  }
}

// Produire index.html de production à la racine
const html = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Remons - Car Rental</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" crossorigin href="/rentcar/assets/${cssFile}">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="/rentcar/assets/${jsFile}"></script>
  </body>
</html>`;

writeFileSync(resolve(ROOT, 'index.html'), html, 'utf-8');

console.log('Done. index.html now points to /rentcar/assets/' + jsFile);
console.log('Commit and push to deploy.');
