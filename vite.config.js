import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // listen on 0.0.0.0 — required for Docker (otherwise only 127.0.0.1 inside container)
    port: 5173,
  },
})
