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
    host: "0.0.0.0",
    strictPort: false,
    allowedHosts: ["hunt-wallet-production.up.railway.app", "localhost", ".railway.app"],
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
