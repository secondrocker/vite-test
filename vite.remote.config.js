import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.APP_ENV': JSON.stringify('prod'),
  },
  build: {
    outDir: '/Users/oudong/Desktop/files/static/js/remote',
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, './src/components/helloWorld.vue'),
      name: 'helloWorld',
      formats: ['iife', 'umd', 'amd', 'es'],
      fileName: () => `[name].[format].js`
    },
    cssMinify: true,
    minify: false,
    terserOptions: {
      compress: false
    }
  }
})
