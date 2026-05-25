#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

console.log('Building project for GitHub Pages...');
execSync('npx vite build', { cwd: ROOT, stdio: 'inherit' });

console.log('Done. The GitHub Pages workflow publishes the dist/ folder to gh-pages.');
