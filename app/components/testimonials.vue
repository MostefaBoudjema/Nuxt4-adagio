<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section">
    <div class="container">
      <div class="row align-items-center">
        <!-- Info -->
        <div class="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
          <h3>{{ t('testimonials.title') }}</h3>
          <p>{{ t('testimonials.subtitle') }}</p>
        </div>

        <!-- Slider -->
        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">
          <Swiper :modules="[Autoplay, Pagination]" :loop="true" :speed="600" :autoplay="{ delay: 5000 }"
            slides-per-view="auto" :pagination="{ clickable: true }" class="my-swiper">
            <SwiperSlide v-for="(tst, i) in testimonials" :key="i">
              <div class="testimonial-item">
                <div class="d-flex">
                  <img :src="tst.image" class="testimonial-img flex-shrink-0" alt="" />
                  <div>
                    <h3>{{ t(tst.name) }}</h3>
                    <h4>{{ t(tst.title) }}</h4>
                    <div class="stars">
                      <i v-for="n in 5" :key="n" class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>{{ t(tst.quote) }}</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <div class="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { useI18n } from 'vue-i18n';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const { t }=useI18n();

const testimonials=[
  {
    name: 'testimonials.items.saul.name',
    title: 'testimonials.items.saul.title',
    image: '/assets/img/testimonials/testimonials-1.jpg',
    quote: 'testimonials.items.saul.quote'
  },
  {
    name: 'testimonials.items.sara.name',
    title: 'testimonials.items.sara.title',
    image: '/assets/img/testimonials/testimonials-2.jpg',
    quote: 'testimonials.items.sara.quote'
  },
  {
    name: 'testimonials.items.jena.name',
    title: 'testimonials.items.jena.title',
    image: '/assets/img/testimonials/testimonials-3.jpg',
    quote: 'testimonials.items.jena.quote'
  },
  {
    name: 'testimonials.items.matt.name',
    title: 'testimonials.items.matt.title',
    image: '/assets/img/testimonials/testimonials-4.jpg',
    quote: 'testimonials.items.matt.quote'
  },
  {
    name: 'testimonials.items.john.name',
    title: 'testimonials.items.john.title',
    image: '/assets/img/testimonials/testimonials-5.jpg',
    quote: 'testimonials.items.john.quote'
  }
];
</script>

<style scoped>
/*--------------------------------------------------------------
# Testimonials Section
--------------------------------------------------------------*/
.testimonials .info h3 {
  font-weight: 700;
  font-size: 32px;
}

.testimonials .swiper {
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--surface-color);
}

.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}

.testimonials .testimonial-item {
  box-sizing: content-box;
  min-height: 200px;
  position: relative;
  margin: 30px;
}

.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
  border: 6px solid var(--background-color);
  margin-right: 10px;
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
}

.testimonials .testimonial-item h4 {
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 14px;
  margin: 0;
}

.testimonials .testimonial-item .stars {
  margin: 10px 0;
}

.testimonials .testimonial-item .stars i {
  color: #ffc107;
  margin: 0 1px;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: color-mix(in srgb, var(--accent-color), transparent 60%);
  font-size: 26px;
  line-height: 0;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
  transform: scale(-1, -1);
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 15px auto 15px auto;
}

.testimonials .swiper-wrapper {
  height: auto;
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: color-mix(in srgb, var(--default-color), transparent 85%);
  opacity: 1;
  border: none;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}

@media (max-width: 767px) {

  .testimonials .testimonials-carousel,
  .testimonials .testimonials-slider {
    overflow: hidden;
  }

  .testimonials .testimonial-item {
    margin: 15px;
  }
}
</style>