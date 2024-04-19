<template>
  <main>
    <div class="container-portfolio">
  <div class="row pt-16">
  <button @click="goBack" class="ml-5 lg:ml-20 mt-10 font-bold px-4 py-2 flex flex-row items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024">
      <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"/>
      <path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"/>
    </svg>
    <p class="ml-2">BACK TO PROJECTS</p>
  </button>
</div>
    <div class="row w-11/12 lg:w-10/12 mx-auto mt-10">
      <h5>{{ specificPortfolioItem.category }}</h5>
      <h4 class="text-5xl lg:text-6xl font-bold mt-1">{{ specificPortfolioItem.title }}</h4>
    <div class="row flex flex-col lg:flex-row mx-auto justify-between p-2 md:p-16">
      <div class="col lg:w-5/12 flex flex-col justify-between">
        <div class="flex flex-col flex-grow">
          <p class="text-xl font-semibold">{{ specificPortfolioItem.type }}</p>
          <p class="mt-3 mb-4 font-medium">{{ specificPortfolioItem.description }}</p>
          <a v-if="specificPortfolioItem.link" :href="specificPortfolioItem.link" class="button font-semibold w-fit">VISIT WEBSITE</a>
        </div>
        <div class="flex">
          <p class="text-xl font-semibold">{{ specificPortfolioItem.tools }}</p>
        </div>
      </div>
      <div class="col lg:w-6/12 mt-6 lg:mt-0 pictureHero flex items-center">
        <div v-if="specificPortfolioItem.category === 'VIDEO PRODUCTION'" class="w-full">
          <!-- Display video iframe -->
          <iframe class="w-full h-56 md:h-96" :src="specificPortfolioItem.video" frameborder="0" allowfullscreen></iframe>
        </div>
        <div v-else class="w-full">
          <!-- Display image -->
          <img :src="specificPortfolioItem.picture" alt="Portfolio Image" class="" />
        </div>
      </div>
      </div>
    </div>
  </div>
</main>
</template>

  
  <script setup>
  import { computed, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import getPortfolio from '@/modules/getPortfolio'
  
  const { portfolioItems } = getPortfolio()
  const route = useRoute()
  const id = ref(route.params.id)
  
  const specificPortfolioItem = computed(() => {
    return portfolioItems.value.find(item => item.id == id.value)
  }) 
  
  const router = useRouter()
  
  const goBack = () => {
    router.go(-1) // This will navigate back one step in the history stack
  }

  </script>
  
  <style lang="scss" scoped>
  .container-portfolio {
    min-height: 100vh;
  }
  
  .button {
    border: #a37cf0 solid 3px;
    outline: none; 
    cursor: pointer;
    border-radius: 6px;
    padding: 5px;
    background: white;
    transition: 0.2s;
  }
  
  .button:hover {
    box-shadow: 0 0 10px #a37cf0;
    border: #a37cf0 solid 3px;
    scale: 1.02;
  }
  </style>
  