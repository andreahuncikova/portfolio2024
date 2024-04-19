import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortfolioDetailView from '../views/PortfolioDetailView.vue';
import Navbar from '../components/Navbar.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        navbar: Navbar 
      }
    },
    {
      path: '/portfoliodetail/:id',
      name: 'portfoliodetail',
      components: {
        default: PortfolioDetailView,
        navbar: Navbar 
      },
      meta: {
        dynamicTitle: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name === 'portfoliodetail') {
    // Scroll to the top of the page on each navigation
    window.scrollTo(0, 0); }

  if (to.meta.dynamicTitle) {
    // Your dynamic title logic remains the same
  } else {
    document.title = to.meta.title ? `Portfolio | ${to.meta.title}` : "PORTFOLIO";
  }
  next();
});

export default router;
