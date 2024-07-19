import { defineConfig } from 'vite'
import checker from "vite-plugin-checker";
import path from 'path'

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        product: path.resolve(__dirname, 'product.html')
      },
      output: {
        manualChunks: (id: string) => {
          // console.log('id', id)
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  plugins: [
    checker({ typescript: true })
  ]
})