<script setup>
const galleryItems=[
    { src: '/assets/img/gallery/gallery-1.jpg' },
    { src: '/assets/img/gallery/gallery-2.jpg' },
    { src: '/assets/img/gallery/gallery-3.jpg' },
    { src: '/assets/img/gallery/gallery-4.jpg' },
    { src: '/assets/img/gallery/gallery-5.jpg' },
    { src: '/assets/img/gallery/gallery-6.jpg' },
    { src: '/assets/img/gallery/gallery-7.jpg' },
    { src: '/assets/img/gallery/gallery-8.jpg' }
]
</script>

<template>
    <!-- Gallery Section -->
    <section id="gallery" class="gallery section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>{{ $t('gallery.title') }}</h2>
            <p>{{ $t('gallery.subtitle') }}</p>
        </div>

        <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
            <div class="row g-0">
                <div v-for="(item, index) in galleryItems" :key="index" class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                        <a :href="item.src" class="glightbox" data-gallery="images-gallery">
                            <img :src="item.src" alt="" class="img-fluid" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/*--------------------------------------------------------------
# Gallery Section
--------------------------------------------------------------*/
.gallery .gallery-item {
    overflow: hidden;
    border-right: 3px solid var(--background-color);
    border-bottom: 3px solid var(--background-color);
}

.gallery .gallery-item img {
    transition: all ease-in-out 0.4s;
}

.gallery .gallery-item:hover img {
    transform: scale(1.1);
}
</style>