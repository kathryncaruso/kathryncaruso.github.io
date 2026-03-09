import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../assets/diagrams/carbon-source-growth-assay',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/main.jsx',
    },
  },
});