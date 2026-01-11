import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Use BASE_PATH environment variable, default to '/mandeljs/' for GitHub Pages project site
  // Set to '/' for custom domain deployment
  base: process.env.BASE_PATH || '/mandeljs/',
})
