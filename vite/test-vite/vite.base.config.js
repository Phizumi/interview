import { defineConfig } from 'vite'
export default defineConfig({
  optimizeDeps: {
    exclude: []
  },
  envPrefix: 'AWELL_',
  css: {
    devSourcemap: true,
    modules: {},
    preprocessorOptions: {},
    postcss: {}
  },
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // input: {
      //   main: '/index.html',
      // },
      output: {
        assetFileNames: "[hash].[name].[ext]"
      },
    },
    assetsInlineLimit: 40 * 1024, // 40kb
    assetsDir: 'static',
  },
})
