<template>
  <div
    class="
      flex
      justify-center
      items-center
      h-screen
      font-josefinSlab font-extrabold
      bg-gradient-to-r
      from-lime-400
      to-cyan-400
    "
  >
    <div class="flex flex-col justify-evenly items-center h-64 text-white">
      <span class="text-5xl">Hello, I am Ugur Can</span>
      <span class="text-4xl"
        >Backend Developer, experienced with ExpressJS and Golang</span
      >
      <div class="flex justify-evenly w-1/2 h-10 text-xl">
        <HomeButton buttonLink="/about" buttonText="About" />
        <HomeButton buttonLink="/about/skills" buttonText="Skills" />
        <HomeButton buttonLink="/contact" buttonText="Contact" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeButton from "./HomeButton.vue";

export default {
  components: {
    HomeButton,
  },
};
</script>

<style>
</style>
