<template>
    <!-- Appointment Section -->
    <section id="appointment" class="appointment section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>{{ $t('appointment.title') }}</h2>
            <p>{{ $t('appointment.subtitle') }}</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">

            <form action="forms/appointment.php" method="post" role="form" class="php-email-form">
                <div class="row">
                    <div class="col-md-4 form-group">
                        <input type="text" name="name" class="form-control" id="name" :placeholder="$t('appointment.form.name')" required>
                    </div>
                    <div class="col-md-4 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" :placeholder="$t('appointment.form.email')" required>
                    </div>
                    <div class="col-md-4 form-group mt-3 mt-md-0">
                        <input type="tel" class="form-control" name="phone" id="phone" :placeholder="$t('appointment.form.phone')" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 form-group mt-3">
                        <input type="datetime-local" name="date" class="form-control datepicker" id="date" :placeholder="$t('appointment.form.date')" required>
                    </div>
                    <div class="col-md-4 form-group mt-3">
                        <select name="department" id="department" class="form-select" required>
                            <option value="">{{ $t('appointment.form.department') }}</option>
                            <option value="general">{{ $t('appointment.departments.general') }}</option>
                            <option value="pediatrics">{{ $t('appointment.departments.pediatrics') }}</option>
                            <option value="cardiology">{{ $t('appointment.departments.cardiology') }}</option>
                        </select>
                    </div>
                    <div class="col-md-4 form-group mt-3">
                        <select name="doctor" id="doctor" class="form-select" required>
                            <option value="">{{ $t('appointment.form.doctor') }}</option>
                            <option value="dr_smith">{{ $t('appointment.doctors.smith') }}</option>
                            <option value="dr_ahmed">{{ $t('appointment.doctors.ahmed') }}</option>
                            <option value="dr_lee">{{ $t('appointment.doctors.lee') }}</option>
                        </select>
                    </div>
                </div>

                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" :placeholder="$t('appointment.form.message')"></textarea>
                </div>
                <div class="mt-3">
                    <div class="loading">{{ $t('appointment.status.loading') }}</div>
                    <div class="error-message"></div>
                    <div class="sent-message">{{ $t('appointment.status.success') }}</div>
                    <div class="text-center"><button type="submit">{{ $t('appointment.form.submit') }}</button></div>
                </div>
            </form>

        </div>

    </section><!-- /Appointment Section -->
</template>


<style scoped>
/*--------------------------------------------------------------
# Appointment Section
--------------------------------------------------------------*/
.appointment .php-email-form {
    width: 100%;
}

.appointment .php-email-form .form-group {
    padding-bottom: 8px;
}

.appointment .php-email-form input,
.appointment .php-email-form textarea,
.appointment .php-email-form select {
    color: var(--default-color);
    background-color: transparent;
    border-color: color-mix(in srgb, var(--default-color), transparent 80%);
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 10px !important;
}

.appointment .php-email-form input:focus,
.appointment .php-email-form textarea:focus,
.appointment .php-email-form select:focus {
    border-color: var(--accent-color);
}

.appointment .php-email-form input::placeholder,
.appointment .php-email-form textarea::placeholder,
.appointment .php-email-form select::placeholder {
    color: color-mix(in srgb, var(--default-color), transparent 70%);
}

.appointment .php-email-form input,
.appointment .php-email-form select {
    height: 44px;
}

.appointment .php-email-form textarea {
    padding: 10px 12px;
}

.appointment .php-email-form button[type=submit] {
    background: var(--accent-color);
    border: 0;
    padding: 10px 35px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
}

.appointment .php-email-form button[type=submit]:hover {
    background: color-mix(in srgb, var(--accent-color) 90%, white 15%);
}
</style>