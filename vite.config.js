import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to https://<username>.github.io/<repo>/ (project page,
// like the site this was inspired by), set base to '/<repo>/'.
// If you deploy to https://<username>.github.io/ (user page), leave it as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
