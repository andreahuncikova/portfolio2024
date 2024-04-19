<template>
    <div class="rowLine">
    <div class="line w-11/12 lg:w-5/12 mx-auto mt-5">
      <hr>
    </div>
  </div>

  <footer class="mb-2">
    <div class="w-full mx-auto p-4 flex items-center justify-center">
      <ul class="flex flex-wrap items-center sm:mt-0 space-x-4 sm:space-x-12">
        <li>
          <a href="https://www.instagram.com/andreahuncikova?ig_shid=YOUR_INSTAGRAM_ID">
            <img src="@/assets/instagram.svg" alt="Instagram" class="icons">
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andreahuncikova/">
            <img src="@/assets/linkedin.svg" alt="Linkedin" class="icons">
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/andrejka.huncikova/">
            <img src="@/assets/facebook.svg" alt="Facebook" class="icons">
          </a>
        </li>
        <li>
          <a href="https://github.com/andreahuncikova">
            <img src="@/assets/github.svg" alt="Github" class="icons">
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.icons:hover {
  box-shadow: 0 0 10px #a37cf0;
  border-radius: 18px;
  transform: scale(1.02);
}
</style>
