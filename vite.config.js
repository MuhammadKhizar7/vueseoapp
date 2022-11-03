import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'
import { useblock } from './src/composeables/usebock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      onRoutesGenerated: async (routes) => {
        const blocks = useblock()
        const dynamicRoutes = blocks.map((block) => `/blocks/${block.id}`)
        generateSitemap({ routes: [...routes, ...dynamicRoutes] })
      },
    }),
  ],
})
