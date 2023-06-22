import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  ssr: false,
  plugins: ['~/plugins/auth-supplement'],
  build: {
    transpile: ['ofetch']
  }
})
