import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    vue()
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.APP_ENV': JSON.stringify('prod'),
  },
  build: {
    outDir: 'production_dist/static/js/remote',
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, './src/components/helloWorld.vue'),
      name: 'helloWorld',
      formats: ['iife'],
      fileName: () => `[name].[format].css.js`
    },
    cssMinify: true,
    minify: false,
    terserOptions: {
      compress: false
    }
  }
})
