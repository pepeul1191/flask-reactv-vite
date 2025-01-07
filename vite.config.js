import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        demo: fileURLToPath(new URL('./src/main.jsx', import.meta.url)),
      },
      output: {
        manualChunks: null,
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return '[name].css';
          }
          return '[name][extname]';
        },
      }
    }
  },
  plugins: [
    react(),
    reactRefresh(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}));
