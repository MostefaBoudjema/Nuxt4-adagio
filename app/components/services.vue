<template>
    <!-- Services Section -->
    <section id="services" class="services section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div><!-- End Section Title -->

        <div class="container">

            <div class="row gy-4">

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="service-item  position-relative">
                        <div class="icon">
                            <i class="fas fa-heartbeat"></i>
                        </div>
                        <a href="#" class="stretched-link">
                            <h3>Nesciunt Mete</h3>
                        </a>
                        <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure
                            perferendis tempore et consequatur.</p>
                    </div>
                </div><!-- End Service Item -->

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="service-item position-relative">
                        <div class="icon">
                            <i class="fas fa-pills"></i>
                        </div>
                        <a href="#" class="stretched-link">
                            <h3>Eosle Commodi</h3>
                        </a>
                        <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic
                            non ut nesciunt dolorem.</p>
                    </div>
                </div><!-- End Service Item -->

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="service-item position-relative">
                        <div class="icon">
                            <i class="fas fa-hospital-user"></i>
                        </div>
                        <a href="#" class="stretched-link">
                            <h3>Ledo Markt</h3>
                        </a>
                        <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas
                            adipisci eos earum corrupti.</p>
                    </div>
                </div><!-- End Service Item -->

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="service-item position-relative">
                        <div class="icon">
                            <i class="fas fa-dna"></i>
                        </div>
                        <a href="#" class="stretched-link">
                            <h3>Asperiores Commodit</h3>
                        </a>
                        <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit
                            provident adipisci neque.</p>
                        <a href="#" class="stretched-link"></a>
                    </div>
                </div><!-- End Service Item -->

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div class="service-item position-relative">
                        <div class="icon">
                            <i class="fas fa-wheelchair"></i>
                        </div>
                        <a href="#" class="stretched-link">
                            <h3>Velit Doloremque</h3>
                        </a>
                        <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi
                            at autem alias eius labore.</p>
                        <a href="#" class="stretched-link"></a>
                    </div>
                </div><!-- End Service Item -->

                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                    <div class="service-item position-relative">
                        <div class="icon">
                            <i class="fas fa-notes-medical"></i>
                        </div>
                        <a href="#" class="stretched-link">
                            <h3>Dolori Architecto</h3>
                        </a>
                        <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure.
                            Corrupti recusandae ducimus enim.</p>
                        <a href="#" class="stretched-link"></a>
                    </div>
                </div><!-- End Service Item -->

            </div>

        </div>

    </section><!-- /Services Section -->
</template>

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