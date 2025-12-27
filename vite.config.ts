import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This ensures assets are loaded correctly on GitHub Pages
  // If your repo name is 'my-privacy-policy', change this to '/my-privacy-policy/'
  // If you are using a custom domain (e.g. privacy.com), keep it as '/'
  base: './', 
})