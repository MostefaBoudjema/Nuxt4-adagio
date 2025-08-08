<template>
  <footer id="footer" class="footer light-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <!-- About Section -->
        <div class="col-lg-4 col-md-6 footer-about">
          <NuxtLink to="/" class="logo d-flex align-items-center">
            <span class="sitename">Medilab</span>
          </NuxtLink>
          <div class="footer-contact pt-3">
            <p>123 Health Street</p>
            <p>Annaba, Algeria 23000</p>
            <p class="mt-3"><strong>Phone:</strong> <span>+213 770 123 456</span></p>
            <p><strong>Email:</strong> <span>info@medilab.dz</span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <!-- Useful Links -->
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#departments">Departments</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <!-- Medical Services -->
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Medical Services</h4>
          <ul>
            <li><a href="#">General Consultation</a></li>
            <li><a href="#">Cardiology</a></li>
            <li><a href="#">Dental Care</a></li>
            <li><a href="#">Pediatrics</a></li>
            <li><a href="#">Radiology</a></li>
          </ul>
        </div>

        <!-- Patient Resources -->
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Patient Resources</h4>
          <ul>
            <li><a href="#">Book Appointment</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Patient Portal</a></li>
            <li><a href="#">Health Tips</a></li>
            <li><a href="#">Insurance Info</a></li>
          </ul>
        </div>

        <!-- Legal & Support -->
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Legal & Support</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="container copyright text-center mt-4">
      <p>
        © <span>{{ new Date().getFullYear() }}</span>
        <strong class="px-1 sitename">Medilab</strong>
        <span>All Rights Reserved</span>
      </p>
      <div class="credits">
        Designed by
        <a href="https://bootstrapmade.com/" target="_blank" rel="noopener">BootstrapMade</a>
        — Customized by <a href="https://mostefa-boudjema.vercel.app" target="_blank" rel="noopener">Mostefa Boudjema</a>
      </div>
    </div>
  </footer>
</template>
