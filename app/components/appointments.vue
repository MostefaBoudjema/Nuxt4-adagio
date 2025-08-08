<template>
    <!-- Appointment Section -->
    <section id="appointment" class="appointment section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Appointment</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">

            <form action="forms/appointment.php" method="post" role="form" class="php-email-form">
                <div class="row">
                    <div class="col-md-4 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                            required="">
                    </div>
                    <div class="col-md-4 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                            required="">
                    </div>
                    <div class="col-md-4 form-group mt-3 mt-md-0">
                        <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone"
                            required="">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 form-group mt-3">
                        <input type="datetime-local" name="date" class="form-control datepicker" id="date"
                            placeholder="Appointment Date" required="">
                    </div>
                    <div class="col-md-4 form-group mt-3">
                        <select name="department" id="department" class="form-select" required="">
                            <option value="">Select Department</option>
                            <option value="Department 1">Department 1</option>
                            <option value="Department 2">Department 2</option>
                            <option value="Department 3">Department 3</option>
                        </select>
                    </div>
                    <div class="col-md-4 form-group mt-3">
                        <select name="doctor" id="doctor" class="form-select" required="">
                            <option value="">Select Doctor</option>
                            <option value="Doctor 1">Doctor 1</option>
                            <option value="Doctor 2">Doctor 2</option>
                            <option value="Doctor 3">Doctor 3</option>
                        </select>
                    </div>
                </div>

                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                </div>
                <div class="mt-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    <div class="text-center"><button type="submit">Make an Appointment</button></div>
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