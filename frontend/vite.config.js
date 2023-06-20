/* eslint-disable */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.join(__dirname, "..", "public"),
    emptyOutDir: true,
  },
  plugins: [react()],
  server: {
    proxy: {
<<<<<<< HEAD
      '/api': {
        target: 'http://127.0.0.1:8080/',
=======
      "/api": {
        target: "http://0.0.0.0:3000",
>>>>>>> main
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
