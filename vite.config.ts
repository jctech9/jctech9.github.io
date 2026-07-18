import { existsSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

const hasPublicResume = existsSync(
  fileURLToPath(new URL('./public/curriculo-jones-cabral.pdf', import.meta.url)),
)

export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    __HAS_PUBLIC_RESUME__: JSON.stringify(hasPublicResume),
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['./tests/unit/**/*.spec.ts'],
    setupFiles: ['./tests/unit/setup.ts'],
    css: true,
  },
})
