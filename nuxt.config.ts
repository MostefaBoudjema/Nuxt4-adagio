// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    // plugins: ['~/plugins/bootstrap.client.ts', '~/plugins/aos.client.js', '~/plugins/init.client.ts'],
    app: {
        head: {
            title: 'MEDILAB',
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/assets/img/logo.png',
                },
            ],
            // script: [
            //     {
            //         src: '/assets/vendor/aos/aos.js',
            //         type: 'text/javascript',
            //         defer: true,
            //     },
            // ],
        },
    },
    css: [
        // 'aos/dist/aos.css',
        // 'swiper/swiper-bundle.min.css',
        // 'glightbox/dist/css/glightbox.min.css'
    ],
    modules: [
        [
            '@nuxtjs/i18n',
            {
                locales: [
                    {
                        code: 'ar',
                        iso: 'ar-DZ',
                        file: 'ar.json',
                        name: 'Arabic',
                    },
                    {
                        code: 'en',
                        iso: 'en-US',
                        file: 'en.json',
                        name: 'English',
                    },
                ],
                defaultLocale: 'ar',
                strategy: 'prefix_except_default',
                lazy: true,
                langDir: 'locales/',
                vueI18n: './locales/vue-i18n.options.js',
                detectBrowserLanguage: false, // disables i18n_redirected cookie and redirect
            },
        ],
    ],
});
