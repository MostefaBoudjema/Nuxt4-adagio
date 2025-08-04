<template>
    <header class="header sticky-top bg-white shadow-sm">
      <!-- Topbar -->
      <div class="topbar py-2 bg-primary border-bottom d-none d-md-block">
        <div class="container d-flex justify-content-between align-items-center">
          <div><i class="bi bi-clock me-2"></i> Mon - Sat: 8AM to 10PM</div>
          <div><i class="bi bi-phone me-2"></i> +1 5589 55488 55</div>
        </div>
      </div>
  
      <!-- Branding & Navbar -->
      <div class="navbar py-3">
        <div class="container d-flex align-items-center justify-content-between">
          <!-- Logo -->
          <NuxtLink to="/" class="d-flex align-items-center">
            <img src="/img/Adagio_logo.svg" alt="Hotel Logo" height="40">
          </NuxtLink>
  
          <!-- Nav Menu -->
          <nav class="d-none d-xl-flex gap-4">
            <a href="#hero" class="nav-link">Home</a>
            <a href="#features" class="nav-link">Features</a>
            <a href="#rooms" class="nav-link">Rooms</a>
            <a href="#booking" class="nav-link">Booking</a>
            <a href="#gallery" class="nav-link">Gallery</a>
            <a href="#blog" class="nav-link">Blog</a>
            <a href="#contact" class="nav-link">Contact</a>
          </nav>
  
          <!-- CTA Button -->
          <a href="#booking" class="btn btn-primary d-none d-md-inline">Book Now</a>
  
          <!-- Mobile Toggle -->
          <button class="btn d-xl-none" @click="toggleMobileMenu">
            <i class="bi bi-list fs-3"></i>
          </button>
        </div>
      </div>
  
      <!-- Mobile Nav (optional if you need it) -->
      <div v-if="mobileMenuOpen" class="mobile-nav bg-white border-top d-xl-none">
        <nav class="container d-flex flex-column py-3">
          <a href="#hero" class="nav-link py-2">Home</a>
          <a href="#features" class="nav-link py-2">Features</a>
          <a href="#rooms" class="nav-link py-2">Rooms</a>
          <a href="#booking" class="nav-link py-2">Booking</a>
          <a href="#gallery" class="nav-link py-2">Gallery</a>
          <a href="#blog" class="nav-link py-2">Blog</a>
          <a href="#contact" class="nav-link py-2">Contact</a>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const mobileMenuOpen = ref(false);
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };
  </script>
  
  <style scoped>
  .nav-link {
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
  }
  .nav-link:hover,
  .nav-link.active {
    color: var(--bs-primary);
  }
  </style>
  