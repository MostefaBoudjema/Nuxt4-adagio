<template>
  <!-- Departments Section -->
  <section id="departments" class="departments section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{{ t('departments.title') }}</h2>
      <p>{{ t('departments.subtitle') }}</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row">
        <!-- Tabs -->
        <div class="col-lg-3">
          <ul class="nav nav-tabs flex-column">
            <li
              v-for="(dept, index) in departments"
              :key="index"
              class="nav-item"
            >
              <a
                class="nav-link"
                :class="{ active: activeTab === index }"
                data-bs-toggle="tab"
                :href="'#departments-tab-' + index"
                @click="activeTab = index"
              >
                {{ t(dept.title) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Tab Content -->
        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="tab-content">
            <div
              v-for="(dept, index) in departments"
              :key="index"
              class="tab-pane"
              :class="{ 'active show': activeTab === index }"
              :id="'departments-tab-' + index"
            >
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>{{ t(dept.title) }}</h3>
                  <p class="fst-italic">{{ t(dept.intro) }}</p>
                  <p>{{ t(dept.description) }}</p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img :src="dept.image" alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeTab = ref(0)

const departments = [
  {
    title: 'departments.items.cardiology.title',
    intro: 'departments.items.cardiology.intro',
    description: 'departments.items.cardiology.description',
    image: '/assets/img/departments-1.jpg'
  },
  {
    title: 'departments.items.neurology.title',
    intro: 'departments.items.neurology.intro',
    description: 'departments.items.neurology.description',
    image: '/assets/img/departments-2.jpg'
  },
  {
    title: 'departments.items.hepatology.title',
    intro: 'departments.items.hepatology.intro',
    description: 'departments.items.hepatology.description',
    image: '/assets/img/departments-3.jpg'
  },
  {
    title: 'departments.items.pediatrics.title',
    intro: 'departments.items.pediatrics.intro',
    description: 'departments.items.pediatrics.description',
    image: '/assets/img/departments-4.jpg'
  },
  {
    title: 'departments.items.eyeCare.title',
    intro: 'departments.items.eyeCare.intro',
    description: 'departments.items.eyeCare.description',
    image: '/assets/img/departments-5.jpg'
  }
]
</script>

<style scoped>
/*--------------------------------------------------------------
# Departments Section
--------------------------------------------------------------*/
.departments {
    overflow: hidden;
}

.departments .nav-tabs {
    border: 0;
}

.departments .nav-link {
    border: 0;
    padding: 12px 15px 12px 0;
    transition: 0.3s;
    color: var(--default-color);
    border-radius: 0;
    border-right: 2px solid color-mix(in srgb, var(--default-color), transparent 90%);
    font-weight: 600;
    font-size: 15px;
}

.departments .nav-link:hover {
    color: var(--accent-color);
}

.departments .nav-link.active {
    color: var(--accent-color);
    border-color: var(--accent-color);
    background-color: var(--background-color);
}

.departments .tab-pane.active {
    animation: fadeIn 0.5s ease-out;
}

.departments .details h3 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;
}

.departments .details p {
    color: color-mix(in srgb, var(--default-color), transparent 20%);
}

.departments .details p:last-child {
    margin-bottom: 0;
}

@media (max-width: 992px) {
    .departments .nav-link {
        border: 0;
        padding: 15px;
    }

    .departments .nav-link.active {
        color: var(--accent-color);
    }
}
</style>