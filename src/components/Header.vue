<template>
  <div class="h-32 bg-gray-900 opacity-90 flex justify-between items-center px-16 text-white">
    <span class="ml-40 text-5xl">🆄🅲🆃</span>
    <div class="flex flex-row justify-around text-xl">
      <router-link :to="{ name: 'home' }" class="ml-4">Home</router-link>
      <!--TODO: Below router links' "to" values will be named routes. These are placeholder fow now. -->
      <router-link to="/about" class="ml-4">About</router-link>
      <router-link to="/contact" class="ml-4">Contact</router-link>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
