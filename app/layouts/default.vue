<template>
  <div>
    <HeaderSection />
    <main class="main-content">
      <slot />
    </main>
    <FooterSection />

    <WhatsApp />
    <ScrollTop />
  </div>
</template>
<script setup>
import FooterSection from '~/components/shared/FooterSection.vue';
import HeaderSection from '~/components/shared/HeaderSection.vue';
import WhatsApp from '~/components/shared/WhatsApp.vue';
import ScrollTop from '~/components/shared/ScrollTop.vue';
useHead({
  title: 'Home - MediLab',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' }
  ],
  link: [
    // Google Fonts
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
    },

    // Vendor CSS
    { rel: 'stylesheet', href: '/assets/vendor/bootstrap/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/assets/vendor/bootstrap-icons/bootstrap-icons.css' },
    { rel: 'stylesheet', href: '/assets/vendor/aos/aos.css' },
    { rel: 'stylesheet', href: '/assets/vendor/fontawesome-free/css/all.min.css' },
    { rel: 'stylesheet', href: '/assets/vendor/glightbox/css/glightbox.min.css' },
    { rel: 'stylesheet', href: '/assets/vendor/swiper/swiper-bundle.min.css' },

    // Main CSS
    // { rel: 'stylesheet', href: '/css/rtl.css' },
    { rel: 'stylesheet', href: '/assets/css/main.css' },
  ],
  script: [
    { src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
    { src: '/assets/vendor/aos/aos.js', body: true },
    { src: '/assets/vendor/glightbox/js/glightbox.min.js', body: true },
    { src: '/assets/vendor/purecounter/purecounter_vanilla.js', body: true },
    { src: '/assets/vendor/swiper/swiper-bundle.min.js', body: true },

    // Main JS File
    // { src: '/assets/js/main.js', body: true }
  ]
})


</script>