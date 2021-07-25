<template>
  <div class="flex flex-col justify-center items-center font-mono">
    <div class="flex flex-col justify-center items-center mb-10">
      <span class="text-9xl">404</span>
      <span class="text-3xl">Page Not</span>
      <span class="text-3xl">Found</span>
    </div>
    <router-link :to="{ name: 'home' }" class="text-xl italic">
      Click Here to Go to Home
    </router-link>
  </div>
</template>

<script>
</script>

<style>
</style>
