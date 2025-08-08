<template>
  <header id="header" class="header sticky-top">
    <!-- Top Bar -->
    <div class="topbar d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">{{ $t('header.contact_email') }}</a>
          </i>
          <i class="bi bi-phone d-flex align-items-center ms-4">
            <span>{{ $t('header.phone') }}</span>
          </i>
        </div>
        <div class="social-links d-none d-md-flex align-items-center">
          <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>

    <!-- Branding + Nav -->
    <div class="branding d-flex align-items-center">
      <div class="container position-relative d-flex align-items-center justify-content-between">
        <!-- <NuxtLink to="/" class="logo d-flex align-items-center" :class="locale === 'ar' ? 'ms-auto' : 'me-auto'">
          <h1 class="sitename">{{ $t('header.sitename') }}</h1>
        </NuxtLink> -->
        <NuxtLink to="/" class="logo d-flex align-items-center" :class="locale === 'ar' ? 'ms-auto' : 'me-auto'">
          <img class="mx-2" :src="$i18n.locale === 'ar' ? '/assets/img/logo.svg' : '/assets/img/logo.svg'" alt="Logo">{{
              $t('header.sitename') }}
        </NuxtLink>
        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="#hero" class="active">{{ $t('header.nav.home') }}</a></li>
            <li><a href="#about">{{ $t('header.nav.about') }}</a></li>
            <li><a href="#services">{{ $t('header.nav.services') }}</a></li>
            <li><a href="#departments">{{ $t('header.nav.departments') }}</a></li>
            <li><a href="#doctors">{{ $t('header.nav.doctors') }}</a></li>
            <!-- <li class="dropdown">
              <a href="#"><span>{{ $t('header.nav.dropdown.main') }}</span> <i
                  class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">{{ $t('header.nav.dropdown.item1') }}</a></li>
                <li class="dropdown">
                  <a href="#"><span>{{ $t('header.nav.dropdown.deep.main') }}</span> <i
                      class="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">{{ $t('header.nav.dropdown.deep.item1') }}</a></li>
                    <li><a href="#">{{ $t('header.nav.dropdown.deep.item2') }}</a></li>
                    <li><a href="#">{{ $t('header.nav.dropdown.deep.item3') }}</a></li>
                    <li><a href="#">{{ $t('header.nav.dropdown.deep.item4') }}</a></li>
                    <li><a href="#">{{ $t('header.nav.dropdown.deep.item5') }}</a></li>
                  </ul>
                </li>
                <li><a href="#">{{ $t('header.nav.dropdown.item2') }}</a></li>
                <li><a href="#">{{ $t('header.nav.dropdown.item3') }}</a></li>
                <li><a href="#">{{ $t('header.nav.dropdown.item4') }}</a></li>
              </ul>
            </li> -->
            <li><a href="#contact">{{ $t('header.nav.contact') }}</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a class="cta-btn d-none d-sm-block" href="#appointment">{{ $t('header.cta') }}</a>
      </div>
    </div>
  </header>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { locale }=useI18n()
</script>

<style scoped>
/*--------------------------------------------------------------
# Global Header
--------------------------------------------------------------*/
.header {
  color: var(--default-color);
  transition: all 0.5s;
  z-index: 997;
  background-color: var(--background-color);
}

.header .topbar {
  background-color: var(--accent-color);
  height: 40px;
  padding: 0;
  font-size: 14px;
  transition: all 0.5s;
}

.header .topbar .contact-info i {
  font-style: normal;
  color: var(--contrast-color);
}

.header .topbar .contact-info i a,
.header .topbar .contact-info i span {
  padding-left: 5px;
  color: var(--contrast-color);
}

@media (max-width: 575px) {

  .header .topbar .contact-info i a,
  .header .topbar .contact-info i span {
    font-size: 13px;
  }
}

.header .topbar .contact-info i a {
  line-height: 0;
  transition: 0.3s;
}

.header .topbar .contact-info i a:hover {
  color: var(--contrast-color);
  text-decoration: underline;
}

.header .topbar .social-links a {
  color: color-mix(in srgb, var(--contrast-color), transparent 40%);
  line-height: 0;
  transition: 0.3s;
  margin-left: 20px;
}

.header .topbar .social-links a:hover {
  color: var(--contrast-color);
}

.header .branding {
  min-height: 60px;
  padding: 10px 0;
}

.header .logo {
  line-height: 1;
}

.header .logo img {
  max-height: 36px;
  margin-right: 8px;
}

.header .logo h1 {
  font-size: 30px;
  margin: 0;
  font-weight: 700;
  color: var(--heading-color);
}

.header .cta-btn,
.header .cta-btn:focus {
  color: var(--contrast-color);
  background: var(--accent-color);
  font-size: 14px;
  padding: 8px 25px;
  margin: 0 0 0 30px;
  border-radius: 50px;
  transition: 0.3s;
}

.header .cta-btn:hover,
.header .cta-btn:focus:hover {
  color: var(--contrast-color);
  background: color-mix(in srgb, var(--accent-color), transparent 15%);
}

@media (max-width: 1200px) {
  .header .logo {
    order: 1;
  }

  .header .cta-btn {
    order: 2;
    margin: 0 15px 0 0;
    padding: 6px 15px;
  }

  .header .navmenu {
    order: 3;
  }
}

.scrolled .header {
  box-shadow: 0px 0 18px rgba(0, 0, 0, 0.1);
}

.scrolled .header .topbar {
  height: 0;
  visibility: hidden;
  overflow: hidden;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
@media (min-width: 1200px) {
  .navmenu {
    padding: 0;
  }

  .navmenu ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navmenu li {
    position: relative;
  }

  .navmenu>ul>li {
    white-space: nowrap;
    padding: 15px 14px;
  }

  .navmenu>ul>li:last-child {
    padding-right: 0;
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-color);
    font-size: 15px;
    padding: 0 2px;
    font-family: var(--nav-font);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    transition: 0.3s;
  }

  .navmenu>ul>li>a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color: var(--nav-hover-color);
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }

  .navmenu a:hover:before,
  .navmenu li:hover>a:before,
  .navmenu .active:before {
    visibility: visible;
    width: 100%;
  }

  .navmenu li:hover>a,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-hover-color);
  }

  .navmenu .dropdown ul {
    margin: 0;
    padding: 10px 0;
    background: var(--nav-dropdown-background-color);
    display: block;
    position: absolute;
    visibility: hidden;
    left: 14px;
    top: 130%;
    opacity: 0;
    transition: 0.3s;
    border-radius: 4px;
    z-index: 99;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .navmenu .dropdown ul li {
    min-width: 200px;
  }

  .navmenu .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    color: var(--nav-dropdown-color);
  }

  .navmenu .dropdown ul a i {
    font-size: 12px;
  }

  .navmenu .dropdown ul a:hover,
  .navmenu .dropdown ul .active:hover,
  .navmenu .dropdown ul li:hover>a {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navmenu .dropdown .dropdown ul {
    top: 0;
    left: -90%;
    visibility: hidden;
  }

  .navmenu .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: -100%;
    visibility: visible;
  }
}

/* Mobile Navigation */
@media (max-width: 1199px) {
  .mobile-nav-toggle {
    color: var(--nav-color);
    font-size: 28px;
    line-height: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .navmenu {
    padding: 0;
    z-index: 9997;
  }

  .navmenu ul {
    display: none;
    list-style: none;
    position: absolute;
    inset: 60px 20px 20px 20px;
    padding: 10px 0;
    margin: 0;
    border-radius: 6px;
    background-color: var(--nav-mobile-background-color);
    border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
    box-shadow: none;
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-dropdown-color);
    padding: 10px 20px;
    font-family: var(--nav-font);
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s;
    background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
  }

  .navmenu a i:hover,
  .navmenu a:focus i:hover {
    background-color: var(--accent-color);
    color: var(--contrast-color);
  }

  .navmenu a:hover,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .active i,
  .navmenu .active:focus i {
    background-color: var(--accent-color);
    color: var(--contrast-color);
    transform: rotate(180deg);
  }

  .navmenu .dropdown ul {
    position: static;
    display: none;
    z-index: 99;
    padding: 10px 0;
    margin: 10px 20px;
    background-color: var(--nav-dropdown-background-color);
    transition: all 0.5s ease-in-out;
  }

  .navmenu .dropdown ul ul {
    background-color: rgba(33, 37, 41, 0.1);
  }

  .navmenu .dropdown>.dropdown-active {
    display: block;
    background-color: rgba(33, 37, 41, 0.03);
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav-toggle {
    color: #fff;
    position: absolute;
    font-size: 32px;
    top: 15px;
    right: 15px;
    margin-right: 0;
    z-index: 9999;
  }

  .mobile-nav-active .navmenu {
    position: fixed;
    overflow: hidden;
    inset: 0;
    background: rgba(33, 37, 41, 0.8);
    transition: 0.3s;
  }

  .mobile-nav-active .navmenu>ul {
    display: block;
  }
}
</style>