<template>
    <!-- Services Section -->
    <section id="services" class="services section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>{{ t('services.title') }}</h2>
            <p>{{ t('services.subtitle') }}</p>
        </div>

        <div class="container">
            <div class="row gy-4">
                <div v-for="(service, index) in services" :key="index" class="col-lg-4 col-md-6" data-aos="fade-up"
                    :data-aos-delay="100 * (index + 1)">
                    <div class="service-item position-relative">
                        <div class="icon">
                            <i :class="service.icon"></i>
                        </div>
                        <a :href="service.link" class="stretched-link">
                            <h3>{{ t(service.title) }}</h3>
                        </a>
                        <p>{{ t(service.description) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t }=useI18n();

const services=[
    {
        icon: 'fas fa-heartbeat',
        title: 'services.items.cardiology.title',
        description: 'services.items.cardiology.description',
        link: '#',
    },
    {
        icon: 'fas fa-pills',
        title: 'services.items.pharmacy.title',
        description: 'services.items.pharmacy.description',
        link: '#',
    },
    {
        icon: 'fas fa-hospital-user',
        title: 'services.items.patientCare.title',
        description: 'services.items.patientCare.description',
        link: '#',
    },
    {
        icon: 'fas fa-dna',
        title: 'services.items.labTests.title',
        description: 'services.items.labTests.description',
        link: '#',
    },
    {
        icon: 'fas fa-wheelchair',
        title: 'services.items.rehab.title',
        description: 'services.items.rehab.description',
        link: '#',
    },
    {
        icon: 'fas fa-notes-medical',
        title: 'services.items.consultation.title',
        description: 'services.items.consultation.description',
        link: '#',
    },
];
</script>


<style scoped>
/*--------------------------------------------------------------
# Services Section
--------------------------------------------------------------*/
.services .service-item {
    background-color: var(--surface-color);
    text-align: center;
    border: 1px solid color-mix(in srgb, var(--default-color), transparent 85%);
    padding: 80px 20px;
    transition: all ease-in-out 0.3s;
    height: 100%;
}

.services .service-item .icon {
    margin: 0 auto;
    width: 64px;
    height: 64px;
    background: var(--accent-color);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: 0.3s;
    transform-style: preserve-3d;
}

.services .service-item .icon i {
    color: var(--contrast-color);
    font-size: 28px;
    transition: ease-in-out 0.3s;
}

.services .service-item .icon::before {
    position: absolute;
    content: "";
    left: -8px;
    top: -8px;
    height: 100%;
    width: 100%;
    background: color-mix(in srgb, var(--accent-color), transparent 80%);
    border-radius: 5px;
    transition: all 0.3s ease-out 0s;
    transform: translateZ(-1px);
}

.services .service-item h3 {
    font-weight: 700;
    margin: 10px 0 15px 0;
    font-size: 22px;
}

.services .service-item p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
}

.services .service-item:hover {
    background: var(--accent-color);
    border-color: var(--accent-color);
}

.services .service-item:hover .icon {
    background: var(--surface-color);
}

.services .service-item:hover .icon i {
    color: var(--accent-color);
}

.services .service-item:hover .icon::before {
    background: color-mix(in srgb, var(--background-color), transparent 70%);
}

.services .service-item:hover h3,
.services .service-item:hover p {
    color: var(--contrast-color);
}
</style>