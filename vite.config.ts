import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
