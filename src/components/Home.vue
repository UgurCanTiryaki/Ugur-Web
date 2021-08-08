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
        <div
          class="
            flex
            justify-center
            items-center
            w-3/12
            rounded-3xl
            bg-rose-600
            hover:bg-rose-800
          "
        >
          <router-link to="/about" class="">About</router-link>
        </div>
        <div
          class="
            flex
            justify-center
            items-center
            w-3/12
            rounded-3xl
            bg-rose-600
            hover:bg-rose-800
          "
        >
          <!--TODO: Actual link will be placed here -->
          <router-link to="/about" class="">Skills</router-link>
        </div>
        <div
          class="
            flex
            justify-center
            items-center
            w-3/12
            rounded-3xl
            bg-rose-600
            hover:bg-rose-800
          "
        >
          <router-link to="/contact" class="">Contact</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
