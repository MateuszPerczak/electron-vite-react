import { rmSync } from 'node:fs'
import path from 'node:path'

import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import electron from 'vite-electron-plugin'
import { loadViteEnv } from 'vite-electron-plugin/plugin'
import renderer from 'vite-plugin-electron-renderer'
// https://vitejs.dev/config/
export default defineConfig(() => {
  rmSync('dist-electron', { recursive: true, force: true })

  return {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      },
    },
    plugins: [
      react(),
      electron({
        include: [
          'electron'
        ],
        transformOptions: {
          sourcemap: true,
        },
        plugins: [
          loadViteEnv(),
        ],
      }),
      renderer({
        nodeIntegration: false,
      }),
      eslintPlugin(),
    ],
    clearScreen: false,
  }
})
