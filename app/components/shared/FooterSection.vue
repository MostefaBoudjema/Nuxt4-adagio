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
        — Customized by <a href="https://mostefa-boudjema.vercel.app" target="_blank" rel="noopener">Mostefa
          Boudjema</a>
      </div>
    </div>
  </footer>
</template>
<style scoped>
/*--------------------------------------------------------------
# Global Footer
--------------------------------------------------------------*/
.footer {
  color: var(--default-color);
  background-color: var(--background-color);
  border-top: 1px solid color-mix(in srgb, var(--accent-color), transparent 75%);
  font-size: 14px;
  position: relative;
}

.footer .footer-top {
  padding-top: 50px;
}

.footer .footer-about .logo {
  line-height: 1;
  margin-bottom: 25px;
}

.footer .footer-about .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.footer .footer-about .logo span {
  color: var(--heading-color);
  font-family: var(--heading-font);
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
}

.footer .footer-about p {
  font-size: 14px;
  font-family: var(--heading-font);
}

.footer .social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 16px;
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  margin-right: 10px;
  transition: 0.3s;
}

.footer .social-links a:hover {
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.footer h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

.footer .footer-links {
  margin-bottom: 30px;
}

.footer .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-links ul i {
  padding-right: 2px;
  font-size: 12px;
  line-height: 0;
}

.footer .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.footer .footer-links ul li:first-child {
  padding-top: 0;
}

.footer .footer-links ul a {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  display: inline-block;
  line-height: 1;
}

.footer .footer-links ul a:hover {
  color: var(--accent-color);
}

.footer .footer-contact p {
  margin-bottom: 5px;
}

.footer .copyright {
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
}

.footer .copyright p {
  margin-bottom: 0;
}

.footer .credits {
  margin-top: 8px;
  font-size: 13px;
}
</style>