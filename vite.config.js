import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { useblock } from './src/composeables/usebock'
import Sitemap from 'vite-plugin-sitemap'

const blocks = useblock()
const blockRoutes = blocks.map((block) => `/blocks/${block.id}`)
const dynamicRoutes = [...blockRoutes, '/about-us']

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({ hostname: 'https://example.com', dynamicRoutes, readable: true }),
  ],
})
