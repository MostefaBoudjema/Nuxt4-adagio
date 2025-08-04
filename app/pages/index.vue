<template>
  <div>
    <HeaderSection />
    <main class="main">
      <!-- Hero Section -->
      <section class="hero bg-light py-5" data-aos="fade-up">
        <div class="container text-center">
          <h1 class="display-4 fw-bold">Welcome to DreamStay Hotel</h1>
          <p class="lead">Experience luxury, comfort, and elegance in the heart of the city</p>
          <a href="#booking" class="btn btn-primary btn-lg mt-3">Book Now</a>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features py-5" data-aos="fade-up">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-4 mb-4">
              <i class="fas fa-concierge-bell fa-3x text-primary mb-3"></i>
              <h5>24/7 Service</h5>
              <p>Round-the-clock support to ensure your stay is perfect.</p>
            </div>
            <div class="col-md-4 mb-4">
              <i class="fas fa-spa fa-3x text-primary mb-3"></i>
              <h5>Spa & Wellness</h5>
              <p>Relax in our luxurious spa with world-class treatments.</p>
            </div>
            <div class="col-md-4 mb-4">
              <i class="fas fa-utensils fa-3x text-primary mb-3"></i>
              <h5>Fine Dining</h5>
              <p>Enjoy gourmet meals prepared by top chefs in our restaurant.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Rooms Section -->
      <section class="rooms bg-light py-5" data-aos="fade-up">
        <div class="container">
          <div class="section-title text-center mb-5">
            <h2>Our Rooms</h2>
            <p>Choose from our variety of rooms and suites</p>
          </div>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card h-100 shadow-sm">
                <img src="/img/room1.jpg" class="card-img-top" alt="Room 1">
                <div class="card-body">
                  <h5 class="card-title">Deluxe Room</h5>
                  <p class="card-text">Elegant room with city view, free Wi-Fi, and more.</p>
                  <a href="#booking" class="btn btn-outline-primary">Book Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100 shadow-sm">
                <img src="/img/room2.jpg" class="card-img-top" alt="Room 2">
                <div class="card-body">
                  <h5 class="card-title">Executive Suite</h5>
                  <p class="card-text">Spacious suite with luxury amenities and lounge access.</p>
                  <a href="#booking" class="btn btn-outline-primary">Book Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100 shadow-sm">
                <img src="/img/room3.jpg" class="card-img-top" alt="Room 3">
                <div class="card-body">
                  <h5 class="card-title">Family Room</h5>
                  <p class="card-text">Comfortable room ideal for families with kids.</p>
                  <a href="#booking" class="btn btn-outline-primary">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact / Booking Section -->
      <section id="booking" class="booking py-5" data-aos="fade-up">
        <div class="container">
          <div class="section-title text-center mb-5">
            <h2>Book Your Stay</h2>
            <p>We are ready to serve you</p>
          </div>
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-6">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" required>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" required>
            </div>
            <div class="col-md-6">
              <label for="checkin" class="form-label">Check-in Date</label>
              <input type="date" class="form-control" id="checkin" required>
            </div>
            <div class="col-md-6">
              <label for="checkout" class="form-label">Check-out Date</label>
              <input type="date" class="form-control" id="checkout" required>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Reserve Now</button>
            </div>
          </form>
        </div>
      </section>
      <!-- Testimonials Section -->
      <section class="testimonials py-5" data-aos="fade-up">
        <div class="container">
          <div class="section-title text-center mb-5">
            <h2>What Our Guests Say</h2>
          </div>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="bg-white p-4 shadow-sm h-100">
                <i class="fas fa-quote-left fa-2x text-primary mb-3"></i>
                <p>"An unforgettable experience! Amazing staff and beautiful rooms."</p>
                <h6 class="fw-bold mt-3">– Sarah M.</h6>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="bg-white p-4 shadow-sm h-100">
                <i class="fas fa-quote-left fa-2x text-primary mb-3"></i>
                <p>"Perfect location, top-notch amenities. Highly recommend!"</p>
                <h6 class="fw-bold mt-3">– Daniel R.</h6>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="bg-white p-4 shadow-sm h-100">
                <i class="fas fa-quote-left fa-2x text-primary mb-3"></i>
                <p>"Felt like royalty during our stay. Loved the spa and restaurant."</p>
                <h6 class="fw-bold mt-3">– Amina K.</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section class="gallery py-5 bg-light" data-aos="fade-up">
        <div class="container">
          <div class="section-title text-center mb-5">
            <h2>Gallery</h2>
            <p>Take a peek into our hotel</p>
          </div>
          <div class="row g-3">
            <div class="col-md-4">
              <img src="/img/gallery1.jpg" alt="Gallery 1" class="img-fluid rounded shadow-sm w-100">
            </div>
            <div class="col-md-4">
              <img src="/img/gallery2.jpg" alt="Gallery 2" class="img-fluid rounded shadow-sm w-100">
            </div>
            <div class="col-md-4">
              <img src="/img/gallery3.jpg" alt="Gallery 3" class="img-fluid rounded shadow-sm w-100">
            </div>
          </div>
        </div>
      </section>

      <!-- Location Section -->
      <section class="location py-5" data-aos="fade-up">
        <div class="container">
          <div class="section-title text-center mb-4">
            <h2>Our Location</h2>
            <p>Find us easily on the map</p>
          </div>
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12776.104150027276!2d7.7534365!3d36.8995336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x127f757ad2b6a8ab%3A0x2c9e65cf4f4ad18a!2sAnnaba!5e0!3m2!1sen!2sdz!4v1691061460601!5m2!1sen!2sdz"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      <!-- Counters Section -->
      <section class="counters bg-light py-5" data-aos="fade-up">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-3 mb-4">
              <div>
                <i class="fas fa-bed fa-2x text-primary mb-2"></i>
                <h2 class="purecounter" data-purecounter-start="0" data-purecounter-end="120"
                  data-purecounter-duration="2">0</h2>
                <p>Rooms</p>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div>
                <i class="fas fa-user-friends fa-2x text-primary mb-2"></i>
                <h2 class="purecounter" data-purecounter-start="0" data-purecounter-end="5000"
                  data-purecounter-duration="2">0</h2>
                <p>Guests Served</p>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div>
                <i class="fas fa-star fa-2x text-primary mb-2"></i>
                <h2 class="purecounter" data-purecounter-start="0" data-purecounter-end="4.8"
                  data-purecounter-duration="2">0</h2>
                <p>Rating</p>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div>
                <i class="fas fa-smile-beam fa-2x text-primary mb-2"></i>
                <h2 class="purecounter" data-purecounter-start="0" data-purecounter-end="100"
                  data-purecounter-duration="2">0</h2>
                <p>% Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Plans Section -->
      <section class="pricing py-5" data-aos="fade-up">
        <div class="container">
          <div class="section-title text-center mb-5">
            <h2>Pricing Plans</h2>
            <p>Affordable luxury for everyone</p>
          </div>
          <div class="row text-center">
            <div class="col-md-4 mb-4">
              <div class="card h-100 border-primary">
                <div class="card-header bg-primary text-white">
                  <h4 class="my-0">Standard</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$99 <small class="text-muted">/ night</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>1 Queen Bed</li>
                    <li>Free Wi-Fi</li>
                    <li>Breakfast Included</li>
                  </ul>
                  <button type="button" class="btn btn-outline-primary">Choose</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100 border-success">
                <div class="card-header bg-success text-white">
                  <h4 class="my-0">Deluxe</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$149 <small class="text-muted">/ night</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>King Size Bed</li>
                    <li>Room Service</li>
                    <li>Balcony View</li>
                  </ul>
                  <button type="button" class="btn btn-outline-success">Choose</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100 border-warning">
                <div class="card-header bg-warning text-white">
                  <h4 class="my-0">Suite</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">$199 <small class="text-muted">/ night</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>2 Rooms + Living Area</li>
                    <li>Private Jacuzzi</li>
                    <li>VIP Lounge Access</li>
                  </ul>
                  <button type="button" class="btn btn-outline-warning">Choose</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog / News Section -->
      <section class="blog py-5 bg-light" data-aos="fade-up">
        <div class="container">
          <div class="section-title text-center mb-5">
            <h2>Latest News</h2>
            <p>Discover updates and travel tips</p>
          </div>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="/img/blog1.jpg" class="card-img-top" alt="Blog 1">
                <div class="card-body">
                  <h5 class="card-title">Top 10 Things to Do Near DreamStay</h5>
                  <p class="card-text">Explore our handpicked attractions around the hotel for every traveler.</p>
                  <a href="#" class="btn btn-link">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="/img/blog2.jpg" class="card-img-top" alt="Blog 2">
                <div class="card-body">
                  <h5 class="card-title">A Look Into Our Newly Renovated Suites</h5>
                  <p class="card-text">Get a glimpse of our upgraded rooms and what's new for your comfort.</p>
                  <a href="#" class="btn btn-link">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="/img/blog3.jpg" class="card-img-top" alt="Blog 3">
                <div class="card-body">
                  <h5 class="card-title">Guest Review: Our Anniversary at DreamStay</h5>
                  <p class="card-text">See why guests celebrate their milestones with us.</p>
                  <a href="#" class="btn btn-link">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="newsletter py-5" data-aos="fade-up">
        <div class="container text-center">
          <div class="section-title mb-4">
            <h2>Stay Updated</h2>
            <p>Subscribe to receive our latest offers and news</p>
          </div>
          <form class="row justify-content-center">
            <div class="col-md-6">
              <div class="input-group">
                <input type="email" class="form-control" placeholder="Enter your email" required>
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </section>

    </main>

    <FooterSection />
    <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>

  </div>
</template>

<script setup>
import FooterSection from '~/components/shared/FooterSection.vue';
import HeaderSection from '~/components/shared/HeaderSection.vue';
useHead({
  title: 'Home - Hotel Bootstrap Template',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' }
  ],
  link: [
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
    { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/vendor/bootstrap-icons/bootstrap-icons.css' },
    { rel: 'stylesheet', href: '/vendor/aos/aos.css' },
    { rel: 'stylesheet', href: '/vendor/fontawesome-free/css/all.min.css' },
    { rel: 'stylesheet', href: '/vendor/glightbox/css/glightbox.min.css' },
    { rel: 'stylesheet', href: '/vendor/swiper/swiper-bundle.min.css' },
    { rel: 'stylesheet', href: '/css/main.css' }
  ],
  script: [
    { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
    { src: '/vendor/php-email-form/validate.js', body: true },
    { src: '/vendor/aos/aos.js', body: true },
    { src: '/vendor/glightbox/js/glightbox.min.js', body: true },
    { src: '/vendor/purecounter/purecounter_vanilla.js', body: true },
    // { src: '/vendor/swiper/swiper-bundle.min.js', body: true },
    { src: '/js/main.js', body: true }
  ]
})
</script>