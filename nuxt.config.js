export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wahab Online Pharmacy',
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
      { rel:'icon' ,
       type: 'image/x-icon', 
       href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config : {
          apiKey: "AIzaSyBxyWRjjC_mtn2X-OLvfDY5XGPXm8l7BHg",
          authDomain: "wahab-pharmacy.firebaseapp.com",
          projectId: "wahab-pharmacy",
          storageBucket: "wahab-pharmacy.appspot.com",
          messagingSenderId: "808000046928",
          appId: "1:808000046928:web:056fc17bcdf2c0386a0e55",
          measurementId: "G-ZRBWMR2FZG"
        },
        services: {
          auth: true,
          firestore: true,
          storage: true,
          database: true,
          messaging: true,
        },
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}
