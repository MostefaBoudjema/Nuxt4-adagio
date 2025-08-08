<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section">
    <div class="container">
      <div class="row align-items-center">
        <!-- Info -->
        <div class="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
          <h3>Testimonials</h3>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>

        <!-- Slider -->
        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            :modules="[Autoplay, Pagination]"
            :loop="true"
            :speed="600"
            :autoplay="{ delay: 5000 }"
            slides-per-view="auto"
            :pagination="{ clickable: true }"
            class="my-swiper"
          >
            <SwiperSlide v-for="(t, i) in testimonials" :key="i">
              <div class="testimonial-item">
                <div class="d-flex">
                  <img :src="t.image" class="testimonial-img flex-shrink-0" alt="" />
                  <div>
                    <h3>{{ t.name }}</h3>
                    <h4>{{ t.title }}</h4>
                    <div class="stars">
                      <i
                        v-for="n in 5"
                        :key="n"
                        class="bi bi-star-fill"
                      ></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>{{ t.quote }}</span>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Saul Goodman',
    title: 'Ceo & Founder',
    image: '/assets/img/testimonials/testimonials-1.jpg',
    quote:
      'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...'
  },
  {
    name: 'Sara Wilsson',
    title: 'Designer',
    image: '/assets/img/testimonials/testimonials-2.jpg',
    quote:
      'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid...'
  },
  {
    name: 'Jena Karlis',
    title: 'Store Owner',
    image: '/assets/img/testimonials/testimonials-3.jpg',
    quote:
      'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla...'
  },
  {
    name: 'Matt Brandon',
    title: 'Freelancer',
    image: '/assets/img/testimonials/testimonials-4.jpg',
    quote:
      'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim...'
  },
  {
    name: 'John Larson',
    title: 'Entrepreneur',
    image: '/assets/img/testimonials/testimonials-5.jpg',
    quote:
      'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor...'
  }
]
</script>
