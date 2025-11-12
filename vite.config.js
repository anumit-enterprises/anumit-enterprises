import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: repo name exactly as shown below
  base: '/anumit-enterprises/',
})
