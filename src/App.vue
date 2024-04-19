<script setup>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router';

</script>

<template>
    <Navbar />
<transition name="fade">
  <RouterView />
</transition>
  <Footer />
</template>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
