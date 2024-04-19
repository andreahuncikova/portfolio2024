<template>
  <nav class="navbar w-full flex text-lg bg-white p-3 fixed top-0 transition-all duration-300" :class="{ 'shadow-md': navbarSticky }">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
      <!-- Toggle button for small devices -->
      <button @click="toggleMenu" class="inline-flex items-center p-2 px-10 w-full h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <!-- Menu for small devices -->
      <div class="w-full md:hidden" v-show="menuOpen">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-2 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
          <li>
            <router-link to="/" class="nav-link" :class="{ active: selectedLink === '#home'}" @click="handleLinkClick('#home')">HOME</router-link>
          </li>
          <li>
            <router-link to="/#about" class="nav-link" :class="{ active: selectedLink === '#about'}" @click="handleLinkClick('#about')">ABOUT ME</router-link>
          </li>
          <li>
            <router-link to="/#projects" class="nav-link" :class="{ active: selectedLink === '#projects' }" @click="handleLinkClick('#projects')">PROJECTS</router-link>
          </li>
          <li>
            <router-link to="/#contact" class="nav-link" :class="{ active: selectedLink === '#contact' }" @click="handleLinkClick('#contact')">CONTACT</router-link>
          </li>
        </ul>
      </div>

      <!-- Menu for larger devices -->
      <div class="hidden w-full md:flex md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-2 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
          <li>
            <router-link to="/" class="nav-link" :class="{ active: selectedLink === '#home'}" @click="handleLinkClick('#home')">HOME</router-link>
          </li>
          <li>
            <router-link to="/#about" class="nav-link" :class="{ active: selectedLink === '#about'}" @click="handleLinkClick('#about')">ABOUT ME</router-link>
          </li>
          <li>
            <router-link to="/#projects" class="nav-link" :class="{ active: selectedLink === '#projects' }" @click="handleLinkClick('#projects')">PROJECTS</router-link>
          </li>
          <li>
            <router-link to="/#contact" class="nav-link" :class="{ active: selectedLink === '#contact' }" @click="handleLinkClick('#contact')">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Navbar',
  setup() {
    const route = useRoute();
    const selectedLink = ref(route.hash || '#home');
    const navbarSticky = ref(false);
    const menuOpen = ref(false);

    const handleLinkClick = (link) => {
      selectedLink.value = link;
      scrollToSection(link);
    };

    const scrollToSection = (sectionId) => {
      const section = document.querySelector(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 300;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          selectedLink.value = `#${section.id}`;
        }
      });

      navbarSticky.value = scrollPosition > 0;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      selectedLink,
      navbarSticky,
      handleLinkClick,
      toggleMenu,
      menuOpen
    };
  }
}
</script>

<style scoped>
.navbar {
  z-index: 1000;
}

.nav-link {
  text-decoration: none;
  color: inherit;
  padding: 5px 10px;
  transition: color 0.3s ease;
  font-weight: bold; 
}

.nav-link:hover,
.nav-link.active {
  transition: 0.2s;
  color: #a37cf0; 
  scale: 1.02;
}
</style>
