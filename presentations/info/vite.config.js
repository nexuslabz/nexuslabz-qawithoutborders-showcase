import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/info/',
  resolve: {
    alias: {
      '@theme': resolve(__dirname, '../../packages/theme-qawb'),
      '@assets': resolve(__dirname, '../../shared/assets'),
    },
  },
});
