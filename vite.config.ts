import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

function cleanPublicFiles() {
  return {
    name: 'clean-public-files',
    buildStart() {
      const publicDir = path.resolve(__dirname, 'public');
      const files = fs.readdirSync(publicDir);
      for (const file of files) {
        if (file.includes(' ')) {
          fs.unlinkSync(path.join(publicDir, file));
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [cleanPublicFiles(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/@gsap')) {
            return 'gsap';
          }
          if (id.includes('node_modules/motion')) {
            return 'motion';
          }
        },
      },
    },
  },
})
