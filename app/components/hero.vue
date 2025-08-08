<template>
  <!-- Hero Section -->
  <section id="hero" class="hero section light-background">

    <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in">

    <div class="container position-relative">

      <div class="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
        <h2>{{ $t('hero.title') }}</h2>
        <p>{{ $t('hero.subtitle') }}</p>
      </div><!-- End Welcome -->

      <div class="content row gy-4">
        <div class="col-lg-4 d-flex align-items-stretch">
          <div class="why-box" data-aos="zoom-out" data-aos-delay="200">
            <h3>{{ $t('hero.whyTitle') }}</h3>
            <p>{{ $t('hero.whyDescription') }}</p>
            <div class="text-center">
              <a href="#about" class="more-btn">
                <span>{{ $t('hero.learnMore') }}</span>
                <i class="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
        </div><!-- End Why Box -->

        <div class="col-lg-8 d-flex align-items-stretch">
          <div class="d-flex flex-column justify-content-center">
            <div class="row gy-4">

              <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box" data-aos="zoom-out" data-aos-delay="300">
                  <i class="bi bi-clipboard-data"></i>
                  <h4>{{ $t('hero.box1.title') }}</h4>
                  <p>{{ $t('hero.box1.desc') }}</p>
                </div>
              </div><!-- End Icon Box -->

              <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box" data-aos="zoom-out" data-aos-delay="400">
                  <i class="bi bi-gem"></i>
                  <h4>{{ $t('hero.box2.title') }}</h4>
                  <p>{{ $t('hero.box2.desc') }}</p>
                </div>
              </div><!-- End Icon Box -->

              <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box" data-aos="zoom-out" data-aos-delay="500">
                  <i class="bi bi-inboxes"></i>
                  <h4>{{ $t('hero.box3.title') }}</h4>
                  <p>{{ $t('hero.box3.desc') }}</p>
                </div>
              </div><!-- End Icon Box -->

            </div>
          </div>
        </div>
      </div><!-- End  Content-->

    </div>

  </section><!-- /Hero Section -->
</template>


<script setup>

import { useI18n } from 'vue-i18n';
// import { useLocalePath } from '#i18n';

// const localePath = useLocalePath();

const { t }=useI18n({
  inheritLocale: true,
  useScope: "global",
});


</script>

<style scoped>
/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  width: 100%;
  min-height: calc(100vh - 112px);
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero .container {
  z-index: 3;
}

.hero .welcome h2 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
}

.hero .welcome p {
  font-size: 24px;
  margin: 0;
}

.hero .content {
  margin-top: 40px;
}

.hero .content .why-box {
  color: var(--contrast-color);
  background: var(--accent-color);
  padding: 30px;
  border-radius: 4px;
}

.hero .content .why-box h3 {
  color: var(--contrast-color);
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 30px;
}

.hero .content .why-box p {
  margin-bottom: 30px;
}

.hero .content .why-box .more-btn {
  color: var(--contrast-color);
  background: color-mix(in srgb, var(--contrast-color), transparent 80%);
  display: inline-block;
  padding: 6px 30px 8px 30px;
  border-radius: 50px;
  transition: all ease-in-out 0.4s;
}

.hero .content .why-box .more-btn i {
  font-size: 14px;
}

.hero .content .why-box .more-btn:hover {
  background: var(--surface-color);
  color: var(--accent-color);
}

.hero .content .icon-box {
  text-align: center;
  border-radius: 10px;
  background: color-mix(in srgb, var(--surface-color), transparent 20%);
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  width: 100%;
}

.hero .content .icon-box i {
  font-size: 40px;
  color: var(--accent-color);
}

.hero .content .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0 20px 0;
}

.hero .content .icon-box p {
  font-size: 15px;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
}


h2,
h3,
h4,
p {
  text-align: start;
}

@media (max-width: 768px) {
  .section-title h2 {
    font-size: 1.5rem;
  }

  .icon-box h4 {
    font-size: 1rem;
  }

  .icon-box p {
    font-size: 0.9rem;
  }
}

.rtl {
  direction: rtl;
  text-align: right;
}
</style>
