import { STORYBLOK_TOKEN } from './helpers/config'

require('dotenv').config()

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-svg-loader',
    [
      'storyblok-nuxt',
      {
        accessToken: STORYBLOK_TOKEN,
        cacheProvider: 'memory',
        customParent: 'YOUR_URL_WHERE_RUN_STORYBLOK_APP', // optional https://www.storyblok.com/docs/Guides/storyblok-latest-js#storyblokinitconfig
      },
    ],
    '@nuxtjs/apollo',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  apollo: {
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'network-only',
      },
    },
    clientConfigs: {
      default: '@/plugins/apollo-config/storyblokClient.js',
      defaultClient: '@/plugins/apollo-config/storyblokClient.js',
    },
  },

  env: {
    STORYBLOK_TOKEN,
  },

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isDev, isClient }) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },
}
