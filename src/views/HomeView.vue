<template>

  <main>
    <section class="mx-auto w-11/12 lg:w-8/12 flex justify-center mx-auto" id="home">
      <div class="heroImage">
      <img src="@/assets/hero.svg" alt="">
    </div>
  </section>

  <div class="rowLine">
    <div class="line w-11/12 mx-auto my-10">
      <hr>
    </div>
  </div>

  <section class="mx-auto w-11/12 lg:w-10/12" id="about">
    <div class="container newSection">
      <h1 class="my-3 md:my-14">| ABOUT ME</h1>
      <div class="flex flex-col lg:flex-row aboutme-row p-3">
        <div class="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img src="@/assets/aboutMeHero.jpg" alt="Your Image" class="aboutmePicture h-full pictureHero rounded-md">
        </div>
        <div class="w-full lg:w-1/2 lg:pl-4 lg:ml-10 py-2 lg:py-10 px-3 lg:px-5 flex flex-col justify-between colNextToPicture">
          <div>
            <p class="text:lg md:text-xl font-medium">I grew up in Slovakia but moved to Denmark to study Multimedia Design. During my time here, I've gained experience in various Adobe programs for photography, video production, and graphic design. Additionally, I've learned web development languages like HTML, CSS, and JavaScript. I enjoy exploring the intersection of creativity and technology, using my skills to bring ideas to life in digital media and web design. My time in Denmark has been instrumental in shaping my passion for multimedia design and digital innovation. Now, I'm eager to apply my knowledge and skills in the field.</p>
          </div>
          <div class="mt-2">
            <p class="text-2xl font-semibold my-4">MORE INFO</p>
            <div class="flex flex-row space-x-2">
              <a href="https://drive.google.com/uc?exportdownload&id=1VafNZKf1RVyV3OpyAGSU_tOtN7D_yX4w" download class="button flex justify-center font-bold w-1/2">DOWNLOAD CV</a> 
              <a href="https://www.youtube.com/embed/yjxYYtKsKLs" class="button flex justify-center w-1/2 items-center px-4 bg-white rounded-md font-bold text-black">VIDEO CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="rowLine">
    <div class="line w-11/12 mx-auto lg:mt-32 my-10">
      <hr>
    </div>
  </div>

  <section class="mx-auto px-4 md:px-0 w-full md:w-10/12" id="projects">
    <div class="container projects">
      <h1 class="my-3 md:my-14">| PROJECTS</h1>

      <div class="hidden lg:flex justify-center items-center space-x-4 font-bold my-12">
        <button class="px-4 py-2" :class="{ 'active': selectedCategory === '' }" @click="selectedCategory = ''">ALL</button>
        <button class="px-4 py-2" :class="{ 'active': selectedCategory === 'DESIGN & DEVELOPMENT' }" @click="selectedCategory = 'DESIGN & DEVELOPMENT'">DESIGN & DEVELOPMENT</button>
        <button class="px-4 py-2" :class="{ 'active': selectedCategory === 'CONTENT CREATION' }" @click="selectedCategory = 'CONTENT CREATION'">CONTENT CREATION</button>
        <button class="px-4 py-2" :class="{ 'active': selectedCategory === 'VIDEO PRODUCTION' }" @click="selectedCategory = 'VIDEO PRODUCTION'">VIDEO PRODUCTION</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 font-semibold">
        <router-link v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem.id" :to="`/portfoliodetail/${portfolioItem.id}`" class="card">
          <img :src="portfolioItem.image" alt="" class="cardImage">
          <h2>{{ portfolioItem.title }}</h2>
          <h5 :class="portfolioItem.category" class="leading-4">{{ portfolioItem.category }}</h5>
        </router-link>
      </div>
    </div>
  </section>

  <div class="rowLine ">
    <div class="line w-11/12 mx-auto lg:mt-32 my-10">
      <hr>
    </div>
  </div>

  <section class="mx-auto w-11/12 lg:w-10/12" id="contact">
      <div class="container p-2 newSection lg:mb-20">
        <h1 class="my-3 md:my-14">| CONTACT</h1>
        <div class="row flex justify-center items-center mt-20">
          <form action="https://api.web3forms.com/submit" method="POST" class="contactForm bg-white w-full md:w-6/12 lg:w-4/12 p-6 lg:p-12">
            <div class="col">
              <h2 class="text-xl lg:text-2xl font-bold">GET IN TOUCH!</h2>
            </div>
            <div class="col contactFormText flex flex-col my-2">
              <input type="hidden" name="access_key" value="7572eef3-203d-491c-b4e6-5f88e3557288">
              <input type="text" name="name" placeholder="Name" class="p-2 my-1.5 md:my-3.5 md:p-4 font-semibold rounded-md" required>
              <input type="email" name="email" placeholder="Email" class="p-2 my-1.5 md:my-3.5 md:p-4 font-semibold rounded-md" required>
              <input type="text" name="phone" placeholder="Phone number" class="p-2 my-1.5 md:my-3.5 md:p-4 font-semibold rounded-md" required>
              <textarea name="message" rows="4" placeholder="Write me a message" class="p-2 my-1.5 md:my-3.5 md:p-4 font-semibold rounded-md"></textarea>
            </div>
            <div class="col flex justify-center items-center">
              <button type="submit" class="sendButton font-bold text-lg px-3 py-1 md:px-4 md:py-2">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import getPortfolio from '@/modules/getPortfolio';

const { portfolioItems } = getPortfolio()

let selectedCategory = ref('')

const filteredPortfolioItems = computed(() => {
  if (selectedCategory.value == '') {
    return portfolioItems.value
  }
  else {
    return portfolioItems.value.filter(item => item.category == selectedCategory.value)
  }
});

</script>

<style lang="scss">

.newSection {
  min-height: 100vh;
  overflow: auto;
}

.container {
  overflow: auto;
}

.aboutmePicture {
  width: 100vw;
  border: white 20px solid;
}

.colNextToPicture {
  border: white 20px solid;
  box-shadow: 0 0 15px #a37cf0;
  border-radius: 6px;
}

button {
  border: #a37cf0 solid 3px;
  outline: none; 
  cursor: pointer;
  border-radius: 6px;
  padding: 5px;
  background: white;
  transition: 0.2s;
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
/* On hover, change background color and text color */
button:hover {
  box-shadow: 0 0 15px #a37cf0;
  border: #a37cf0 solid 3px;
  scale: 1.02;
  transition: 0.2s;
}

.button:hover {
  box-shadow: 0 0 13px #a37cf0;
  border: #a37cf0 solid 3px;
  scale: 1.02;
  transition: 0.2s;
}

.heroImage {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}

.card {
  color:#a37cf0;
  background-color: white;
  padding: 1rem;
  margin: 1.3rem;
  border-radius: 6px;
  box-shadow: 0 0 15px #a37cf0;
  flex-direction: column;
  transition: 0.2s;
}

.card:hover {
  scale: 1.03;
  transition: 0.5s;
}
.active {
  color: #a37cf0; 
}

.contactForm {
  width: 100%;
  max-width: 700px;
  border: #a37cf0 solid 3px;
  outline: none; 
  border-radius: 6px;
  box-shadow: 0 0 15px #a37cf0;
}

.contactFormText input, .contactFormText textarea {
  background-color: #EFEFEF;
}

</style>