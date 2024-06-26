import contentful from './plugins/contentful';

const config = require('./config/config');

export default {

  // // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stage-website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: config.css,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/contentful",
    "~/plugins/vue-in-viewport",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg',
    '@vueuse/core/nuxt',
    '@nuxtjs/style-resources',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_HOST: process.env.CTF_HOST,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_CPA_ACCESS_TOKEN: process.env.CTF_CPA_ACCESS_TOKEN,
  },

  styleResources: {
    scss: [
      './assets/scss/functions/*.scss',
      './assets/scss/mixins/*.scss',
      './assets/scss/_config.scss',
      './assets/scss/placeholders/*.scss',
      './assets/scss/bootstrap/_variables.scss',
    ],
  },
}
