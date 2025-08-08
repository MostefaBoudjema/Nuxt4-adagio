<template>
    <!-- Faq Section -->
    <section id="faq" class="faq section light-background">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>{{ t('faq.title') }}</h2>
            <p>{{ t('faq.subtitle') }}</p>
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10" data-aos="fade-up" data-aos-delay="100">
                    <div class="faq-container">
                        <div v-for="(item, index) in faqItems" :key="index" class="faq-item"
                            :class="{ 'faq-active': activeIndex === index }">
                            <h3 @click="toggle(index)">{{ t(item.question) }}</h3>
                            <div class="faq-content" v-if="activeIndex === index">
                                <p>{{ t(item.answer) }}</p>
                            </div>
                            <i class="faq-toggle bi bi-chevron-right" @click="toggle(index)"></i>
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

const { t }=useI18n()

const faqItems=ref([
    { question: 'faq.q1.question', answer: 'faq.q1.answer' },
    { question: 'faq.q2.question', answer: 'faq.q2.answer' },
    { question: 'faq.q3.question', answer: 'faq.q3.answer' },
    { question: 'faq.q4.question', answer: 'faq.q4.answer' },
    { question: 'faq.q5.question', answer: 'faq.q5.answer' },
    { question: 'faq.q6.question', answer: 'faq.q6.answer' }
])

const activeIndex=ref(null)

const toggle=(index) => {
    activeIndex.value=activeIndex.value===index? null:index
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Faq Section
--------------------------------------------------------------*/
.faq .faq-container .faq-item {
    background-color: var(--surface-color);
    position: relative;
    padding: 20px;
    margin-bottom: 15px;
    border: 1px solid color-mix(in srgb, var(--accent-color), transparent 75%);
    border-radius: 5px;
    overflow: hidden;
}

.faq .faq-container .faq-item:last-child {
    margin-bottom: 0;
}

.faq .faq-container .faq-item h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin: 0 30px 0 0;
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.faq .faq-container .faq-item h3 .num {
    color: var(--accent-color);
    padding-right: 5px;
}

.faq .faq-container .faq-item h3:hover {
    color: var(--accent-color);
}

.faq .faq-container .faq-item .faq-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: 0.3s ease-in-out;
    visibility: hidden;
    opacity: 0;
}

.faq .faq-container .faq-item .faq-content p {
    margin-bottom: 0;
    overflow: hidden;
}

.faq .faq-container .faq-item .faq-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 16px;
    line-height: 0;
    transition: 0.3s;
    cursor: pointer;
}

.faq .faq-container .faq-item .faq-toggle:hover {
    color: var(--accent-color);
}

.faq .faq-container .faq-active {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
    color: var(--contrast-color);
}

.faq .faq-container .faq-active h3,
.faq .faq-container .faq-active h3:hover {
    color: var(--contrast-color);
}

.faq .faq-container .faq-active .faq-content {
    grid-template-rows: 1fr;
    visibility: visible;
    opacity: 1;
    padding-top: 10px;
}

.faq .faq-container .faq-active .faq-toggle {
    transform: rotate(90deg);
    color: var(--accent-color);
}
</style>