<template>
    <!-- Stats Section -->
    <section id="stats" class="stats section light-background">

        <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row gy-4">

                <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                    <i class="fa-solid fa-user-doctor"></i>
                    <div class="stats-item">
                        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1"
                            class="purecounter"></span>
                        <p>Doctors</p>
                    </div>
                </div><!-- End Stats Item -->

                <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                    <i class="fa-regular fa-hospital"></i>
                    <div class="stats-item">
                        <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1"
                            class="purecounter"></span>
                        <p>Departments</p>
                    </div>
                </div><!-- End Stats Item -->

                <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                    <i class="fas fa-flask"></i>
                    <div class="stats-item">
                        <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1"
                            class="purecounter"></span>
                        <p>Research Labs</p>
                    </div>
                </div><!-- End Stats Item -->

                <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                    <i class="fas fa-award"></i>
                    <div class="stats-item">
                        <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1"
                            class="purecounter"></span>
                        <p>Awards</p>
                    </div>
                </div><!-- End Stats Item -->

            </div>

        </div>

    </section><!-- /Stats Section -->
</template>

<style scoped>

/*--------------------------------------------------------------
# Stats Section
--------------------------------------------------------------*/
.stats i {
  color: var(--contrast-color);
  background-color: var(--accent-color);
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  width: 54px;
  height: 54px;
  font-size: 24px;
  border-radius: 50px;
  border: 2px solid var(--background-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.stats .stats-item {
  background-color: var(--surface-color);
  margin-top: -27px;
  padding: 30px 30px 25px 30px;
  width: 100%;
  position: relative;
  text-align: center;
  box-shadow: 0px 2px 35px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 0;
}

.stats .stats-item span {
  font-size: 32px;
  display: block;
  margin: 10px 0;
  font-weight: 700;
  color: var(--heading-color);
}

.stats .stats-item p {
  padding: 0;
  margin: 0;
  font-family: var(--heading-font);
  font-size: 16px;
}

</style>