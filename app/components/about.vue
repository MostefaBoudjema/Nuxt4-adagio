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
                    <h3>About Us</h3>
                    <p>
                        Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti.
                        Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius
                        incidunt reiciendis veritatis asperiores placeat.
                    </p>
                    <ul>
                        <li>
                            <i class="fa-solid fa-vial-circle-check"></i>
                            <div>
                                <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                            </div>
                        </li>
                        <li>
                            <i class="fa-solid fa-pump-medical"></i>
                            <div>
                                <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                                <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata
                                    redi</p>
                            </div>
                        </li>
                        <li>
                            <i class="fa-solid fa-heart-circle-xmark"></i>
                            <div>
                                <h5>Voluptatem et qui exercitationem</h5>
                                <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime
                                    veniam</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </div>

    </section><!-- /About Section -->

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
