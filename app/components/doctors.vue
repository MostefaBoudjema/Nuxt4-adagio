<template>
  <!-- Doctors Section -->
  <section id="doctors" class="doctors section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ t('doctors.title') }}</h2>
      <p>{{ t('doctors.subtitle') }}</p>
    </div>

    <div class="container">
      <div class="row gy-4">
        <div v-for="(doc, index) in doctors" :key="index" class="col-lg-6" :data-aos="'fade-up'"
          :data-aos-delay="100 * (index + 1)">
          <div class="team-member d-flex align-items-start">
            <div class="pic">
              <img :src="doc.image" class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>{{ t(doc.name) }}</h4>
              <span>{{ t(doc.role) }}</span>
              <p>{{ t(doc.bio) }}</p>
              <div class="social">
                <a v-for="(link, i) in doc.social" :key="i" :href="link.url" target="_blank">
                  <i :class="link.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t }=useI18n()

const doctors=[
  {
    name: 'doctors.list.walter.name',
    role: 'doctors.list.walter.role',
    bio: 'doctors.list.walter.bio',
    image: '/assets/img/doctors/doctors-1.jpg',
    social: [
      { icon: 'bi bi-twitter-x', url: '#' },
      { icon: 'bi bi-facebook', url: '#' },
      { icon: 'bi bi-instagram', url: '#' },
      { icon: 'bi bi-linkedin', url: '#' }
    ]
  },
  {
    name: 'doctors.list.sarah.name',
    role: 'doctors.list.sarah.role',
    bio: 'doctors.list.sarah.bio',
    image: '/assets/img/doctors/doctors-2.jpg',
    social: [
      { icon: 'bi bi-twitter-x', url: '#' },
      { icon: 'bi bi-facebook', url: '#' },
      { icon: 'bi bi-instagram', url: '#' },
      { icon: 'bi bi-linkedin', url: '#' }
    ]
  },
  {
    name: 'doctors.list.william.name',
    role: 'doctors.list.william.role',
    bio: 'doctors.list.william.bio',
    image: '/assets/img/doctors/doctors-3.jpg',
    social: [
      { icon: 'bi bi-twitter-x', url: '#' },
      { icon: 'bi bi-facebook', url: '#' },
      { icon: 'bi bi-instagram', url: '#' },
      { icon: 'bi bi-linkedin', url: '#' }
    ]
  },
  {
    name: 'doctors.list.amanda.name',
    role: 'doctors.list.amanda.role',
    bio: 'doctors.list.amanda.bio',
    image: '/assets/img/doctors/doctors-4.jpg',
    social: [
      { icon: 'bi bi-twitter-x', url: '#' },
      { icon: 'bi bi-facebook', url: '#' },
      { icon: 'bi bi-instagram', url: '#' },
      { icon: 'bi bi-linkedin', url: '#' }
    ]
  }
]
</script>


<style scoped>
/*--------------------------------------------------------------
# Doctors Section
--------------------------------------------------------------*/
.doctors .team-member {
  background-color: var(--surface-color);
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 5px;
  transition: 0.5s;
  padding: 30px;
  height: 100%;
}

@media (max-width: 468px) {
  .doctors .team-member {
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
  }
}

.doctors .team-member .pic {
  overflow: hidden;
  width: 150px;
  border-radius: 50%;
  flex-shrink: 0;
}

.doctors .team-member .pic img {
  transition: ease-in-out 0.3s;
}

.doctors .team-member:hover {
  transform: translateY(-10px);
}

.doctors .team-member .member-info {
  padding-left: 30px;
}

@media (max-width: 468px) {
  .doctors .team-member .member-info {
    padding: 30px 0 0 0;
    text-align: center;
  }
}

.doctors .team-member h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
}

.doctors .team-member span {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
}

.doctors .team-member span::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: color-mix(in srgb, var(--default-color), transparent 85%);
  bottom: 0;
  left: 0;
}

@media (max-width: 468px) {
  .doctors .team-member span::after {
    left: calc(50% - 25px);
  }
}

.doctors .team-member p {
  margin: 10px 0 0 0;
  font-size: 14px;
}

.doctors .team-member .social {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
}

@media (max-width: 468px) {
  .doctors .team-member .social {
    justify-content: center;
  }
}

.doctors .team-member .social a {
  background: color-mix(in srgb, var(--default-color), transparent 94%);
  transition: ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 36px;
  height: 36px;
}

.doctors .team-member .social a i {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  font-size: 16px;
  margin: 0 2px;
}

.doctors .team-member .social a:hover {
  background: var(--accent-color);
}

.doctors .team-member .social a:hover i {
  color: var(--contrast-color);
}

.doctors .team-member .social a+a {
  margin-left: 8px;
}
</style>