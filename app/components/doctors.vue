<template>
    <!-- Doctors Section -->
    <section id="doctors" class="doctors section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Doctors</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div><!-- End Section Title -->

        <div class="container">

            <div class="row gy-4">

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="team-member d-flex align-items-start">
                        <div class="pic"><img src="/assets/img/doctors/doctors-1.jpg" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Walter White</h4>
                            <span>Chief Medical Officer</span>
                            <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                            <div class="social">
                                <a href=""><i class="bi bi-twitter-x"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""> <i class="bi bi-linkedin"></i> </a>
                            </div>
                        </div>
                    </div>
                </div><!-- End Team Member -->

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="team-member d-flex align-items-start">
                        <div class="pic"><img src="/assets/img/doctors/doctors-2.jpg" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Sarah Jhonson</h4>
                            <span>Anesthesiologist</span>
                            <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                            <div class="social">
                                <a href=""><i class="bi bi-twitter-x"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""> <i class="bi bi-linkedin"></i> </a>
                            </div>
                        </div>
                    </div>
                </div><!-- End Team Member -->

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="team-member d-flex align-items-start">
                        <div class="pic"><img src="/assets/img/doctors/doctors-3.jpg" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>William Anderson</h4>
                            <span>Cardiology</span>
                            <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                            <div class="social">
                                <a href=""><i class="bi bi-twitter-x"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""> <i class="bi bi-linkedin"></i> </a>
                            </div>
                        </div>
                    </div>
                </div><!-- End Team Member -->

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="team-member d-flex align-items-start">
                        <div class="pic"><img src="/assets/img/doctors/doctors-4.jpg" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Amanda Jepson</h4>
                            <span>Neurosurgeon</span>
                            <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                            <div class="social">
                                <a href=""><i class="bi bi-twitter-x"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""> <i class="bi bi-linkedin"></i> </a>
                            </div>
                        </div>
                    </div>
                </div><!-- End Team Member -->

            </div>

        </div>

    </section><!-- /Doctors Section -->
</template>

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