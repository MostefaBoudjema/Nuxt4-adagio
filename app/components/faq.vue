<template>
    <!-- Faq Section -->
    <section id="faq" class="faq section light-background">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div><!-- End Section Title -->

        <div class="container">

            <div class="row justify-content-center">

                <div class="col-lg-10" data-aos="fade-up" data-aos-delay="100">

                    <div class="faq-container">

                        <div class="faq-item faq-active">
                            <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                            <div class="faq-content">
                                <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet
                                    non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor
                                    purus non.</p>
                            </div>
                            <i class="faq-toggle bi bi-chevron-right"></i>
                        </div><!-- End Faq item-->

                        <div class="faq-item">
                            <h3>Feugiat scelerisque varius morbi enim nunc faucibus?</h3>
                            <div class="faq-content">
                                <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum
                                    velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend
                                    donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
                                    cursus turpis massa tincidunt dui.</p>
                            </div>
                            <i class="faq-toggle bi bi-chevron-right"></i>
                        </div><!-- End Faq item-->

                        <div class="faq-item">
                            <h3>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                            <div class="faq-content">
                                <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus
                                    pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit.
                                    Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis
                                    tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                            </div>
                            <i class="faq-toggle bi bi-chevron-right"></i>
                        </div><!-- End Faq item-->

                        <div class="faq-item">
                            <h3>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h3>
                            <div class="faq-content">
                                <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum
                                    velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend
                                    donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
                                    cursus turpis massa tincidunt dui.</p>
                            </div>
                            <i class="faq-toggle bi bi-chevron-right"></i>
                        </div><!-- End Faq item-->

                        <div class="faq-item">
                            <h3>Tempus quam pellentesque nec nam aliquam sem et tortor?</h3>
                            <div class="faq-content">
                                <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in
                                    est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl
                                    suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                            </div>
                            <i class="faq-toggle bi bi-chevron-right"></i>
                        </div><!-- End Faq item-->

                        <div class="faq-item">
                            <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                            <div class="faq-content">
                                <p>Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in
                                    suscipit sequi. Distinctio ipsam dolore et.</p>
                            </div>
                            <i class="faq-toggle bi bi-chevron-right"></i>
                        </div><!-- End Faq item-->

                    </div>

                </div><!-- End Faq Column-->

            </div>

        </div>

    </section><!-- /Faq Section -->
</template>

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