import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
  build: () => {
    console.log('build')
    return { ...viteBaseConfig, ...viteProdConfig }
  },
  serve: () => {
    console.log('serve')
    return Object.assign({}, viteBaseConfig, viteDevConfig)
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log('env', env.APP_KEY)
  return envResolver[command]()
})

// /** @type {import('vite').UserConfig} */
// export default {
//   optimizeDeps: {
//     exclude: ['lodash-es']  // 不进行依赖预构建
//   }
// }
