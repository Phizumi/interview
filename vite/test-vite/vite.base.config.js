import { defineConfig } from 'vite'
export default defineConfig({
  optimizeDeps: {
    exclude: []
  },
  envPrefix: 'AWELL_'
})
