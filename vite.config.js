import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative paths so the site works at any base URL
  // Works for both username.github.io/mandeljs/ and custom domains
  base: './',
})
