import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { Display, VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: 'autoUpdate' as 'autoUpdate' | 'prompt' | undefined,
  globPatterns: ['src/assets/**/*.{png,jpg,jpeg,svg}'],
  manifest: {
    name: 'ToDo',
    short_name: 'ToDo',
    description: 'ToDo App',
    theme_color: '#000000',
    background_color: '#fafafa',
    display: 'standalone' as Display | undefined,
    orientation: 'portrait' as
      | 'portrait'
      | 'portrait-primary'
      | 'portrait-secondary'
      | 'natural'
      | 'landscape'
      | 'landscape-primary'
      | 'landscape-secondary',
    scope: '/rs-react-todo/',
    id: '/rs-react-todo/',
    start_url: '/rs-react-todo/',
    screenshots: [
      {
        src: '/rs-react-todo/src/assets/screenshots/screenshot-1900x920.png',
        sizes: '1900x920',
        type: 'image/png',
        form_factor: 'wide' as 'wide' | 'narrow' | undefined,
        platform: 'web',
      },
      {
        src: '/rs-react-todo/src/assets/screenshots/screenshot-375x667.png',
        sizes: '375x667',
        type: 'image/png',
        form_factor: 'narrow' as 'wide' | 'narrow' | undefined,
        platform: 'web',
      },
    ],
    icons: [
      {
        src: '/rs-react-todo/src/assets/icons/icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/rs-react-todo/src/assets/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/rs-react-todo/src/assets/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/rs-react-todo/src/assets/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/rs-react-todo/src/assets/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/rs-react-todo/src/assets/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: '/rs-react-todo/src/assets/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/rs-react-todo/src/assets/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        form_factor: 'narrow' as 'wide' | 'narrow' | undefined,
      },
      {
        src: '/rs-react-todo/src/assets/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        form_factor: 'wide' as 'wide' | 'narrow' | undefined,
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rs-react-todo/',
  plugins: [react(), VitePWA(manifestForPlugin)],
})
