
export default {
  ssr: false,

  // page headers
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.0.6/dist/locomotive-scroll.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // loader
  loading: false,

  // global styles
  css: [
    '~/static/style/reset.scss',
    '~/static/style/type.scss',
    '~/static/style/util.scss',
  ],

  // nuxt modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],

  // build config
  build: {
    extend (config, ctx) {  }
  }
}
