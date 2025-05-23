import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from 'vite-plugin-commonjs'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['requirejs'],
    },
  },
  plugins: [
    commonjs(),
    vue()
  ],
})
