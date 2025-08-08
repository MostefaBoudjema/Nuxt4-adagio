<!-- components/ScrollToTop.vue -->
<template>
    <button v-show="visible" class="scroll-top" @click="scrollToTop" aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V4.707l3.147 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 4.707V11.5A.5.5 0 0 0 8 12z" />
        </svg>
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible=ref(false);

const handleScroll=() => {
    visible.value=window.scrollY>300; // Show after scrolling 300px
};

const scrollToTop=() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial check in case page is already scrolled
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-top {
    position: fixed;
    right: 15px;
    bottom: 15px;
    z-index: 1000;
    background: var(--accent-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-top:hover {
    background: color-mix(in srgb, var(--accent-color), transparent 20%);
    transform: translateY(-2px);
}

.scroll-top:active {
    transform: translateY(0);
}

/*--------------------------------------------------------------
# Scroll Top Button
--------------------------------------------------------------*/
/* .scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background-color: var(--accent-color);
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.scroll-top i {
  font-size: 24px;
  color: var(--contrast-color);
  line-height: 0;
}

.scroll-top:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
  color: var(--contrast-color);
}

.scroll-top.active {
  visibility: visible;
  opacity: 1;
} */
</style>