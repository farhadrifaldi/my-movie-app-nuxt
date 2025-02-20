// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true,
    strict: false
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/device',
    'vue3-carousel-nuxt',
    '@pinia/nuxt',
    'dayjs-nuxt',
  ],
})