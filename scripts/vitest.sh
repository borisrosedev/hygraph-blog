#!/bin/bash
npm install -D vitest
npm i -D @vitest/ui
npx vite preview --outDir ./html
npm install --save-dev @vitest/cli @vitest/preset-vue @vitest/vite
npm i -D happy-dom
npm i -D jsdom