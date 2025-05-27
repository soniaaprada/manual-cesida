// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/_reset.scss" as *;
          @use "~/assets/scss/_variables.scss" as *;
          @use "~/assets/scss/_fonts.scss" as *;
        `
        }
      }
    }
  }
})
