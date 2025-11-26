import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', { 'vue-router/auto': ['useRoute', 'useRouter'] }],
      dts: '.auto-imports/imports.d.ts',
      eslintrc: { enabled: true },
      vueTemplate: true,
    }),
    Components({ dts: '.auto-imports/components.d.ts' }),
    Vue({ template: { transformAssetUrls } }),
    Vuetify({ autoImport: true }),
    Fonts({ google: { families: [{ name: 'Roboto', styles: 'wght@100;300;400;500;700;900' }] } }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
