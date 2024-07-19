import path from 'path'
import { defineConfig } from 'vite'
import checker from "vite-plugin-checker";
import viteCompression from 'vite-plugin-compression';
import cdn from 'vite-plugin-cdn-import'

export default defineConfig({
  build: {
    // minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        product: path.resolve(__dirname, 'product.html')
      },
      output: {
        manualChunks: (id: string) => {
          // console.log('id', id)
          // if (id.includes('node_modules')) {
          //   return 'vendor'
          // }
        }
      }
    }
  },
  plugins: [
    checker({ typescript: true }),
    viteCompression(),
    cdn({
      modules: [
        {
          name: 'lodash',
          var: '_',
          path: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
        }
      ]
    })
  ]
})