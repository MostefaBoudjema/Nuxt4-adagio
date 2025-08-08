<template>

    <!-- About Section -->
    <section id="about" class="about section">

        <div class="container">

            <div class="row gy-4 gx-5">

                <div class="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="200">
                    <img src="/assets/img/about.jpg" class="img-fluid" alt="">
                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn"></a>
                </div>

                <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                    <h3>{{ $t('about.title') }}</h3>
                    <p>{{ $t('about.description') }}</p>
                    <ul>
                        <li v-for="(item, index) in items" :key="index" class="row g-2 align-items-start mb-2">
                            <div class="col">
                                <i :class="item.icon"></i>
                            </div>
                            <div class="col-10">
                                <h5 class="mb-1">{{ item.title }}</h5>
                                <p class="mb-0">{{ item.text }}</p>
                            </div>
                        </li>


                    </ul>
                </div>

            </div>

        </div>

    </section><!-- /About Section -->

</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t }=useI18n()

const items=[
    {
        icon: 'fa-solid fa-vial-circle-check',
        title: t('about.items[0].title'),
        text: t('about.items[0].text')
    },
    {
        icon: 'fa-solid fa-pump-medical',
        title: t('about.items[1].title'),
        text: t('about.items[1].text')
    },
    {
        icon: 'fa-solid fa-heart-circle-xmark',
        title: t('about.items[2].title'),
        text: t('about.items[2].text')
    }
]
</script>

<style scoped>
h2,
h3,
h4,
p {
    text-align: start;
}

/*--------------------------------------------------------------
# About Section
--------------------------------------------------------------*/
.about .content h3 {
    font-size: 2rem;
    font-weight: 700;
}

.about .content ul {
    list-style: none;
    padding: 0;
}

.about .content ul li {
    display: flex;
    align-items: flex-start;
    margin-top: 40px;
}

.about .content ul i {
    flex-shrink: 0;
    font-size: 48px;
    color: var(--accent-color);
    margin-right: 20px;
}

.about .content ul h5 {
    font-size: 18px;
    font-weight: 700;
}

.about .content ul p {
    font-size: 15px;
}

.about .content p:last-child {
    margin-bottom: 0;
}

.about .pulsating-play-btn {
    position: absolute;
    left: calc(50% - 47px);
    top: calc(50% - 47px);
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
