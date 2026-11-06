import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the root of https://haadfida.github.io, so assets resolve from '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
