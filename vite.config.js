// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
  test: {
    globals: true, 
    environment: 'jsdom',
    
    // 🚨 AÑADIR NUESTRO MOCK DE LOCALSTORAGE AQUÍ
    setupFiles: ['./src/tests/localStorage.mock.js'], 
    
    include: ['src/tests/**/*.spec.{js,jsx}'],
  },
});