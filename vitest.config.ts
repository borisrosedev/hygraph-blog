/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['default', 'html'],
    environment: "jsdom",
    includeSource: ['src/**/*.{ts}'], 
  },
  optimizeDeps: {
    include: ['@vitest/vite'],
  },
})